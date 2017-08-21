var ZebraUI = {
    arrUI: [],
    arrCallback: [],
    arrData: [],
    arrFocus: {level:[-1,-1,-1,-1, -1], old:[-1, -1], current:[-1,-1], lastLevel:-1, obj:null},
    arrTC: {tc:[], tcboard:[]},
    dataTree: null,
    queue: {list:[], start:[], last:null},
    arr_step: [],
    TC_COUNT: 31,
    arrState: {currentPath:null, currentState:null},
    init: function(config){
        var config_data = config;

        this._initData(config_data);
        this._initUI();

        document.addEventListener("keydown", this._onKeyDown, false);
    },
    addCallback: function(type, callback) {
        this.arrCallback[type] = callback;
    },
    draw: function() {
        var arr_zone = this.arrUI["zone"];
        if(arr_zone && arr_zone.length)
        {
            arr_zone[1].appendChild(this.dataTree.board);
        }
    },
    update: function(id, description, type, result, level, log){
        var step = level;
        var tc = ZebraUI._getData(id);
        var path = ZebraUI._findPath(id);
        var root_board = ZebraUI.arrTC["tcboard"][path];

        if(tc)
        {
            if(id) tc.id = id;
            if(description) tc.description = description;
            if(type) tc.type = type;
            if(result || (result == "")) tc.result = result;
            if(log || (log == "")) tc.log = log;
            //if(level) tc.level = step;
        }
        else
        {
            var btn = ZebraUI._createDiv(id, "button", 3, description, step, result);
            var board = ZebraUI._createDiv(id, "board", 3, description, null, result);
            tc = ZebraUI._addData(id, type, path, 3, 0, description, result, btn, board, log);
            var tree = ZebraUI._getData(path);
            if(tree) ZebraUI._addDataChild(tree, tc);
        }

        if(tc.result == "passed")
        {
            tc.btn.childNodes[1].innerHTML = "P";
            ZebraUI._removeClass(tc.btn.childNodes[1], "result_fail");
            ZebraUI._addClass(tc.btn.childNodes[1], "result_pass");
        }
        else if(tc.result == "failed")
        {
            tc.btn.childNodes[1].innerHTML = "F";
            ZebraUI._removeClass(tc.btn.childNodes[1], "result_pass");
            ZebraUI._addClass(tc.btn.childNodes[1], "result_fail");
        }
    },
    sendEvent: function(event, path)
    {
        switch(event)
        {
            case "END_LIST": ZebraUI._updateQueue(null, path, null, "end_list"); break;
            case "END_START": ZebraUI._updateQueue(null, path, null, "end_start"); break;
            default: break;
        }
    },
    _initUI: function()
    {
        this.arrUI["zone"] = [
            document.getElementById("zone1"),
            document.getElementById("zone2"),
            document.getElementById("zone3"),
            document.getElementById("zone4"),
            document.getElementById("zone5")];
        this.arrUI["popup"] = document.getElementById("poptext");
        ZebraUI._initTitle(this.arrUI["zone"][0]);
        ZebraUI._initHelp(this.arrUI["zone"][4]);
    },
    _initHelp: function(div)
    {
        var help = ZebraUI._initArrUI(div, "help");
        ZebraUI._initArrUI(div, "blank");
        ZebraUI._initArrUI(div, "path");
        ZebraUI._initArrUI(div, "page");
        help.innerHTML = " 0:HELP";
    },
    _initTitle: function(div)
    {
        this._initArrUI(div, "logo");
        this._initArrUI(div, "title");
        var state_bar = this._initArrUI(div, "state_bar");
        this._initState(state_bar);
    },
    _initState: function(div)
    {
        var state = ZebraUI._initArrUI(div, "state");
        ZebraUI.arrState["currentState"] = "wait";
        state.innerText = "status : " + ZebraUI.arrState["currentState"];
        return state;
    },
    _initArrUI: function(parent, name)
    {
        var div = this._createDiv(null, name, null, null, null, null);
        this.arrUI[name] = div;
        parent.appendChild(div);

        return div;
    },
    _initData: function(data){
        var root_board = this._createDiv(null, "board", 0, null, null, null);
        this.dataTree = this._addData("root", null, null, null, null, null, null, null, root_board, null);
        for(var i = 0; i<data.length; i++)
        {
            var l1text = data[i][0];
            var l2text = data[i][1];
            var type = data[i][2];
            var path = data[i][3];
            var root = this._getData(l1text);
            if(!root)
            {
                var btn = this._createDiv(null, "button", 1, l1text, null, null);
                var board = this._createDiv(null, "board", 1, null, null, null);
                root = this._addData(l1text, type, path, 1, false, l1text, null, btn, board, null);
                this._addDataChild(this.dataTree, root);
            }

            var btn = this._createDiv(null, "button", 2, l2text, null, null);
            var board = this._createDiv(null, "board", 2, null, null, null);
            var tree_data = this._addData(path, type, path, 2, false, l2text, null, btn, board, null);
            this._addDataChild(root, tree_data);
        }
    },
    _findPath: function(id){
        var path = null;
        var index = id.indexOf(".js");
        if(index != -1)
        {
            path = id.substring(0, index + 3);
        }
        return path;
    },
    _updateQueue: function(type, path, board, state)
    {
        switch(state)
        {
            case "start":
                {
                    var arr = ZebraUI.queue["start"];
                    var callback = ZebraUI.arrCallback["start"];
                    if(arr.length) callback(arr[0].type, arr[0].path);
                }
                break;
            case "end_start":
                {
                    var arr = ZebraUI.queue["start"];
                    if(arr.length) arr.shift();
                    ZebraUI._updateQueue(null, null, null, "start");
                }
                break;
            case "list":
                {
                    var obj_arr = ZebraUI.queue["list"];
                    ZebraUI.queue["last"] = {path:path, type:type, board:board};
                    if(obj_arr.length == 0)
                        if(ZebraUI._updateQueueList(type, path, board)) obj_arr[obj_arr.length] = ZebraUI.queue["last"];
                    else if(obj_arr.length == 1) obj_arr[obj_arr.length] = ZebraUI.queue["last"];
                    else if(obj_arr.length == 2) LOG("===> BLOCK GET LIST : " + path);
                }
                break;
            case "end_list":
                {
                    var obj_arr = ZebraUI.queue["list"];
                    if(obj_arr.length == 1)
                    {
                        var obj = ZebraUI.queue["last"];
                        if(obj.path != obj_arr[0].path)
                        {
                            if(ZebraUI._updateQueueList(obj.type, obj.path, obj.board))
                            {
                                obj_arr.shift();
                                obj_arr[obj_arr.length] = obj;
                            }
                        }
                        else obj_arr.shift();
                    }
                    else if(obj_arr.length == 2)
                    {
                        obj_arr.shift();
                        ZebraUI._updateQueueList(obj_arr[0].type, obj_arr[0].path, obj_arr[0].board);
                    }
                }
                break;
            default: break;
        }
    },
    _updateQueueList: function(type, path, board){
        var ret = false;
        var callback = ZebraUI.arrCallback["list"];
        if(callback)
        {
            var div = ZebraUI.arrTC["tcboard"][path];
            if(!div)
            {
                ZebraUI.arrTC["tcboard"][path] = board;
                callback(type, path);
                ret = true;
            }
        }
        return ret;
    },
    _addData: function(id, type, path, level, checked, description, result, btn, board, log) {
        var data = this.arrData[id];
        if(!data) {
            data = {
                id: id,
                type: type,
                path: path,
                level: level,
                checked: checked,
                description: description,
                result: result,
                log: log,
                btn: btn,
                board: board,
                board_arr: [],
                children: []
            };
            this.arrData[id] = data;
        }
        return data;
    },
    _addDataChild: function(tree, child)
    {
        if(tree.level == 2)
        {
            if(tree.children.length == (tree.board_arr.length * ZebraUI.TC_COUNT))
            {
                var board = ZebraUI._createDiv(null, "board", 4, null, null, null);
                tree.board_arr[tree.board_arr.length] = board;
                board.appendChild(child.btn);
            }
            else
            {
                var board = tree.board_arr[tree.board_arr.length-1];
                if(board) board.appendChild(child.btn);
            }
            if(tree.board.childNodes.length < tree.board_arr.length)
            {
                if(tree.board_arr.length <= 2) tree.board.appendChild(tree.board_arr[tree.board_arr.length-1]);
            }
            tree.children[tree.children.length] = child;
        }
        else if(tree && child)
        {
            tree.children[tree.children.length] = child;
            if(tree.board) tree.board.appendChild(child.btn);
        }
    },
    _getData: function(id) {
        return this.arrData[id];
    },
    _addClass: function(div, name) {
        if(name) div.classList.add(name);
    },
    _removeClass: function(div, name) {
        if(name) div.classList.remove(name);
    },
    _createDiv: function(id, type, level, text, depth, result)
    {
        var style = type;
        if(level!=null) style += level;

        var innerText = text;
        var div = document.createElement('div');
        div.tabIndex = -1;

        switch(style)
        {
            case "button1": this._addClass(div, "zone2_btn"); this._addClass(div, "zone2_c_width"); break;
            case "button2": this._addClass(div, "zone3_btn"); this._addClass(div, "zone3_c_width"); break;
            case "button3":
                {
                    this._addClass(div, "zone4_btn");
                    this._addClass(div, "width500");
                    this._createDivButton3(id, div, innerText, depth);
                    innerText = null;
                }
                break;
            case "board0": this._addClass(div, "zone2_board"); this._addClass(div, "zone2_p_width"); break;
            case "board1": this._addClass(div, "zone3_board"); this._addClass(div, "zone3_c_width"); break;
            case "board2": this._addClass(div, "zone4_board"); this._addClass(div, "zone4_c_width"); break;
            case "board3": this._addClass(div, "zone4_board"); this._addClass(div, "zone4_c_width"); break;
            case "board4": this._addClass(div, "tc_board"); break;
            case "logo" : this._addClass(div, "logo"); break;
            case "button": this._addClass(div, "zone1_btn"); break;
            case "help": this._addClass(div, "help"); break;
            case "blank": this._addClass(div, "blank"); break;
            case "page": this._addClass(div, "page"); break;
            case "state": this._addClass(div, "state"); break;
            case "path": this._addClass(div, "path"); break;
            case "state_bar": this._addClass(div, "state_bar"); break;
            case "title": this._addClass(div, "title"); break;
            default: break;
        }

        if(innerText)
            div.innerHTML= innerText;

        return div;
    },
    _createDivButton3: function(id, div, text, depth)
    {
        var div_result = document.createElement('div');
        var div_depth = document.createElement('div');
        var div_intext = document.createElement('div');
        ZebraUI._addClass(div_result, "btn3_result");
        ZebraUI._addClass(div_depth, "btn3_depth");

        if(id.indexOf("suite") != -1)
            ZebraUI._addClass(div_intext, "btn3_text_bold");
        else
            ZebraUI._addClass(div_intext, "btn3_text");

        div_intext.innerText = text;
        var width = ((depth-1) * 30) + "px";
        div_depth.style.width = width;
        div_depth.innerText = "";
        div.appendChild(div_depth);
        div.appendChild(div_result);
        div.appendChild(div_intext);
    },
    _isValid: function(level, add)
    {
        var obj = null;
        switch(level)
        {
            case 1: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]+add]; break;
            case 2: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]+add]; break;
            case 3: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]].children[ZebraUI.arrFocus["level"][3]+add]; break;
            default: break;
        }
        if(obj) return true;
        else return false;
    },
    _setFocus: function(level, add)
    {
        if(!ZebraUI._isValid(level, add)) return false;
        if(add==null)
        {
            ZebraUI.arrFocus["level"][level] = -1;
            if(level == 3) ZebraUI.arrFocus["level"][4] = -1;
            return true;
        }
        if(level !=  ZebraUI.arrFocus["lastLevel"]) ZebraUI.arrFocus["lastLevel"] = level;

        ZebraUI.arrFocus["old"][0] = ZebraUI.arrFocus["current"][0];
        ZebraUI.arrFocus["old"][1] = ZebraUI.arrFocus["current"][1];
        ZebraUI.arrFocus["old"][2] = ZebraUI.arrFocus["current"][2];
        ZebraUI.arrFocus["level"][level] += add;
        ZebraUI.arrFocus["current"][0] = level;
        ZebraUI.arrFocus["current"][1] = ZebraUI.arrFocus["level"][level];
        if(ZebraUI.arrFocus["current"][1] < -1)
        {
            ZebraUI.arrFocus["current"][1] = -1;
            ZebraUI.arrFocus["level"][level] = -1;
        }

        if(level == 3)
        {
            ZebraUI.arrFocus["level"][4] = parseInt(ZebraUI.arrFocus["level"][3] / ZebraUI.TC_COUNT);
        }
        ZebraUI.arrFocus["current"][2] = ZebraUI.arrFocus["level"][4];

        return true;
    },
    _setState: function(state)
    {

    },
    _getCurrentFocus: function()
    {
        return ZebraUI.arrFocus["current"];
    },
    _getOldFocus: function()
    {
        return ZebraUI.arrFocus["old"];
    },
    _getLastLevel: function()
    {
        return ZebraUI.arrFocus["lastLevel"];
    },
    _updateUI: function() {
        ZebraUI._changeFocus();
        ZebraUI._updateDivStyle();
        ZebraUI._updateDiv();
        ZebraUI._callback("list");
    },
    _callback: function(call)
    {
        switch(call)
        {
            case "list":
                {
                    if(ZebraUI._getCurrentFocus()[0]==2)
                    {
                        var arr = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]];
                        if(arr && (!arr.children.length))
                        {
                            ZebraUI._updateQueue(arr.type, arr.path, arr.board, call);
                        }
                    }
                }
                break;
            case "start":
                {
                    ZebraUI._updateQueue(null, null, null, call);
                }
                break;
        }
    },
    _updateDiv: function() {
        switch(ZebraUI.arrFocus["current"][0]) {
            case 1:
                {
                    var zone = ZebraUI.arrUI["zone"][2];
                    var data = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]];
                    if (zone.lastChild) zone.removeChild(zone.lastChild);
                    if (data.board) zone.appendChild(data.board);

                    var zone3 = ZebraUI.arrUI["zone"][3];
                    if (zone3.lastChild) zone3.removeChild(zone3.lastChild);
                    ZebraUI.arrState["currentPath"] = ZebraUI.arrUI["path"].innerText = data.id;
                }
                break;
            case 2:
                {
                    var zone = ZebraUI.arrUI["zone"][3];
                    var data = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]];
                    if (zone.lastChild) zone.removeChild(zone.lastChild);
                    if (data.board) zone.appendChild(data.board);

                    if(ZebraUI.arrFocus["level"][4]<0) ZebraUI.arrUI["page"].innerText = "";
                    ZebraUI.arrState["currentPath"] = ZebraUI.arrUI["path"].innerText = data.id;
                }
                break;
            case 3:
                {
                    var data = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]];
                    if(ZebraUI.arrFocus["level"][4] >= 0)
                    {
                        if((ZebraUI.arrFocus["current"][2] != ZebraUI.arrFocus["old"][2])
                            && ((data.board_arr.length)>ZebraUI.arrFocus["current"][2])
                            && (ZebraUI.arrFocus["current"][2]>=0)
                            && (ZebraUI.arrFocus["old"][2]>-1))
                        {
                            if(ZebraUI.arrFocus["current"][2]>ZebraUI.arrFocus["old"][2])
                            {
                                while(data.board.childNodes.length) data.board.removeChild(data.board.lastChild);
                                data.board.appendChild(data.board_arr[ZebraUI.arrFocus["current"][2]-1]);
                                data.board.appendChild(data.board_arr[ZebraUI.arrFocus["current"][2]]);
                            }
                            else
                            {
                                while(data.board.childNodes.length) data.board.removeChild(data.board.lastChild);
                                data.board.appendChild(data.board_arr[ZebraUI.arrFocus["current"][2]]);
                                data.board.appendChild(data.board_arr[ZebraUI.arrFocus["current"][2]+1]);
                            }
                        }

                        var current_page = ZebraUI.arrFocus["level"][4] + 1;
                        var page_all = data.board_arr.length;

                        ZebraUI.arrUI["page"].innerText = "page "+"("+current_page+"/"+page_all+")";
                        ZebraUI.arrUI["path"].innerText = data.id + " ("+(ZebraUI.arrFocus["current"][1]+1)+"/"+data.children.length+")";
                    }
                }
                break;
            default: break;
        }
    },
    _updateDivStyle: function(){
        if(ZebraUI.arrFocus["old"][0] !=  ZebraUI.arrFocus["current"][0])
        {
            switch(ZebraUI.arrFocus["current"][0])
            {
                case 1:
                    {
                        ZebraUI._removeClass(this.arrUI["zone"][1], "width40");
                        ZebraUI._addClass(this.arrUI["zone"][1], "width400");

                        ZebraUI._removeClass(this.arrUI["zone"][2], "width400");
                        ZebraUI._addClass(this.arrUI["zone"][2], "width840");

                        ZebraUI._removeClass(this.arrUI["zone"][3], "width840");
                        ZebraUI._addClass(this.arrUI["zone"][3], "width40");
                    }
                    break;
                case 2:
                    {
                        ZebraUI._removeClass(this.arrUI["zone"][1], "width400");
                        ZebraUI._addClass(this.arrUI["zone"][1], "width40");

                        ZebraUI._removeClass(this.arrUI["zone"][2], "width840");
                        ZebraUI._removeClass(this.arrUI["zone"][2], "width40");
                        ZebraUI._addClass(this.arrUI["zone"][2], "width400");

                        ZebraUI._removeClass(this.arrUI["zone"][3], "width40");
                        ZebraUI._removeClass(this.arrUI["zone"][3], "width1200");
                        ZebraUI._addClass(this.arrUI["zone"][3], "width840");
                    }
                    break;
                case 3:
                    {
                        ZebraUI._removeClass(this.arrUI["zone"][2], "width400");
                        ZebraUI._addClass(this.arrUI["zone"][2], "width40");

                        ZebraUI._removeClass(this.arrUI["zone"][3], "width840");
                        ZebraUI._addClass(this.arrUI["zone"][3], "width1200");
                    }
                    break;
                default: break;
            }
        }
    },
    _changeFocus: function(){
        var obj = ZebraUI.arrFocus["obj"];
        if(obj) ZebraUI._removeClass(obj, "focused");
        switch(ZebraUI.arrFocus["current"][0])
        {
            case 1: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["current"][1]].btn; break;
            case 2: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]].btn; break;
            case 3: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]].children[ZebraUI.arrFocus["level"][3]].btn; break;
            default: break;
        }

        if(obj) ZebraUI._addClass(obj, "focused");
        ZebraUI.arrFocus["obj"] = obj;
        obj.focus();
    },
    _checkTC: function(focus){
        var l1 = ZebraUI.arrFocus["level"][1];
        var l2 = ZebraUI.arrFocus["level"][2];
        var l3 = ZebraUI.arrFocus["level"][3];
        switch(focus)
        {
            case 1:
                {
                    var checked = ZebraUI.dataTree.children[l1].checked ? false : true;
                    ZebraUI._dataCheck(ZebraUI.dataTree.children[l1], checked);
                    for(var i = 0; i<ZebraUI.dataTree.children[l1].children.length; i++)
                    {
                        ZebraUI._dataCheck(ZebraUI.dataTree.children[l1].children[i], checked);
                    }
                }
                break;
            case 2:
                {
                    var checked = ZebraUI.dataTree.children[l1].children[l2].checked ? false : true;
                    ZebraUI.dataTree.children[l1].children[l2].checked = checked;
                    ZebraUI._dataCheck(ZebraUI.dataTree.children[l1].children[l2], checked);
                }
                break;
            case 3: break;
        }
    },
    _dataCheck: function(data, checked)
    {
        data.checked = checked;
        if(checked) ZebraUI._addClass(data.btn, "checked");
        else ZebraUI._removeClass(data.btn, "checked");
    },
    _startTC: function()
    {
        for(var i = 0; i<ZebraUI.dataTree.children.length; i++)
        {
            for(var j = 0; j<ZebraUI.dataTree.children[i].children.length; j++)
            {
                var data = ZebraUI.dataTree.children[i].children[j];
                if(ZebraUI.dataTree.children[i].children[j].checked)
                {
                    var obj = {path: data.path, type: data.type, board: data.board};
                    ZebraUI.queue["start"][ZebraUI.queue["start"].length] = obj;
                }
            }
        }
        if((!ZebraUI.queue["start"].length) && (ZebraUI._getCurrentFocus()[0] == 3))
        {
            var data = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]];
            ZebraUI.queue["start"][ZebraUI.queue["start"].length] = data;
        }
        ZebraUI._callback("start");
    },
    _stopTC: function()
    {
       while(ZebraUI.queue["start"].length)
       {
           ZebraUI.queue["start"].pop();
       }
    },
    _clearTC: function(){
        if(ZebraUI._getCurrentFocus()[0] == 3)
        {
            var data = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]];
            // todo
        }
    },
    _clearTCAll: function(){
        for(var i = 0; i<ZebraUI.dataTree.children.length; i++)
        {
            var obj = ZebraUI.dataTree.children[i];
            ZebraUI._dataCheck(obj, false);
            for(var j = 0; j<ZebraUI.dataTree.children[i].children.length; j++)
            {
                var data = ZebraUI.dataTree.children[i].children[j];
                ZebraUI._dataCheck(data, false);
                for(var k = 0; k<ZebraUI.dataTree.children[i].children[j].children.length; k++)
                {
                    var tc = ZebraUI.dataTree.children[i].children[j].children[k];
                    ZebraUI._dataCheck(tc, false);
                    ZebraUI._removeClass(tc.btn.childNodes[1], "result_pass");
                    ZebraUI._removeClass(tc.btn.childNodes[1], "result_fail");
                    tc.btn.childNodes[1].innerText = "";
                    tc.btn.childNodes[1].innerText = "";
                }
            }
        }
        var obj = ZebraUI.queue["start"];
        if(obj.length)
        {
            for(var i = 0; i<obj.length; i++)
            {
                obj[obj.length].shift();
            }
        }
    },
    _getCurrentData: function(){
        var level1 = ZebraUI.arrFocus["level"][1];
        var level2 = ZebraUI.arrFocus["level"][2];
        var level3 = ZebraUI.arrFocus["level"][3];
        if((level1>-1) && (level2>-1) && (level3>-1))
            return ZebraUI.dataTree.children[level1].children[level2].children[level3];
        else if((level1>-1) && (level2>-1))
            return ZebraUI.dataTree.children[level1].children[level2];
        else if((level1>-1))
            return ZebraUI.dataTree.children[level1];
        else
            return ZebraUI.dataTree;
    },
    _textLog: function(text)
    {
        return "<b>"+"LOG"+"</b>"+ "<br>" + "-----------------------------------------------------" + "<br>" + text;
    },
    _textResult: function()
    {
        return "<b>"+"RESULT"+"</b>"+ "<br>" + "-----------------------------------------------------" + "<br>";
    },
    _textHelp: function()
    {
        return "<b>"+"HELP"+ "<br>" + "-----------------------------------------------------" + "<br>"+ "OK : CHECK "
            +"<br>"+ "1: START " +"<br>"+ " 2: STOP " +"<br>"+" 3: CLEAR " +"<br>"+" 4: CLEAR ALL" +"<br>"+" 5: RESULT" +"<br>"+" 6: LOG";
    },
    _popup: function(name){
        switch(name)
        {
            case "log":
                {
                    var data = ZebraUI._getCurrentData();
                    if((data.level == 3)&&(data.log!=undefined))
                    {
                        ZebraUI.arrUI["popup"].innerHTML = ZebraUI._textLog(data.log);
                        layer_open('poplayer');
                    }
                }
                break;
            case "result": ZebraUI.arrUI["popup"].innerHTML = ZebraUI._textResult(); layer_open('poplayer'); break;
            case "help": ZebraUI.arrUI["popup"].innerHTML = ZebraUI._textHelp(); layer_open('poplayer'); break;
        }
    },
    _fadeOut: function(){
        $('.layer').fadeOut();
    },
    _onKeyDown: function(e){
        var keyCode = e.keyCode;
        ZebraUI._fadeOut();
        switch(keyCode)
        {
            case 38://up
                {
                    if(ZebraUI._getCurrentFocus()[0] == -1) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 0) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 1) ZebraUI._setFocus(1,-1);
                    else if(ZebraUI._getCurrentFocus()[0] == 2) ZebraUI._setFocus(2,-1);
                    else if(ZebraUI._getCurrentFocus()[0] == 3) ZebraUI._setFocus(3,-1);
                    ZebraUI._updateUI();
                }
                break;
            case 40://down
                {
                    if(ZebraUI._getCurrentFocus()[0] == -1) ZebraUI._setFocus(1, 1);
                    else if(ZebraUI._getCurrentFocus()[0] == 0)
                    {
                        ZebraUI._setFocus(0, -1);
                        ZebraUI._setFocus(ZebraUI._getLastLevel(), 1);
                    }
                    else if(ZebraUI._getCurrentFocus()[0] == 1) ZebraUI._setFocus(1,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 2) ZebraUI._setFocus(2,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 3) ZebraUI._setFocus(3,1);
                    else if(ZebraUI._getCurrentFocus()[0] == -1) ZebraUI._setFocus(1, 1);
                    ZebraUI._updateUI();
                }
                break;
            case 37://left
                {
                     if(ZebraUI._getCurrentFocus()[0] == -1) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 0) ZebraUI._setFocus(0,-1);
                    else if(ZebraUI._getCurrentFocus()[0] == 1) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 2)
                    {
                        ZebraUI._setFocus(2,null);
                        ZebraUI._setFocus(1,0);
                    }
                    else if(ZebraUI._getCurrentFocus()[0] == 3)
                    {
                        if(ZebraUI.arrFocus["level"][4] > 0)
                        {
                            ZebraUI._setFocus(3, -ZebraUI.TC_COUNT);
                        }
                        else
                        {
                            ZebraUI._setFocus(3,null);
                            ZebraUI._setFocus(2,0);
                        }
                    }
                    ZebraUI._updateUI();
                }
                break;
            case 39://right
                {
                    if(ZebraUI._getCurrentFocus()[0] == -1) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 0) ZebraUI._setFocus(0,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 1) ZebraUI._setFocus(2,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 2) ZebraUI._setFocus(3,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 3) ZebraUI._setFocus(3, ZebraUI.TC_COUNT);

                    ZebraUI._updateUI();
                }
                break;
            case 13: ZebraUI._checkTC(ZebraUI._getCurrentFocus()[0]); break; // ok -> check
            case 48: ZebraUI._popup("help"); break;
            case 49: ZebraUI._startTC(); break; // key 1 -> start
            case 50: ZebraUI._stopTC(); break; // key 2 -> stop
            case 51: ZebraUI._clearTC(); break; // key 3 -> clear
            case 52: ZebraUI._clearTCAll(); break; // key 4 -> clearAll
            case 53: ZebraUI._popup("result"); break; // key 5 -> result
            case 54: ZebraUI._popup("log"); break; // key 6 -> log
            default: break;
        }
    },
};

function layer_open(el){
    var temp = $('#' + el);
    var bg = temp.prev().hasClass('bg');
    if(bg){
        $('.layer').fadeIn();
    }else{
        temp.fadeIn();
    }
    if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
    else temp.css('top', '0px');
    if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
    else temp.css('left', '0px');
}
