var ZebraUI = {
    arrUI: [],
    arrCallback: [],
    arrData: [],
    arrFocus: {level:[-1,-1,-1,-1], old:[-1, -1], current:[-1,-1], lastLevel:-1, obj:null},
    arrTC: {tc:[], tcboard:[]},
    dataTree: null,
    queue: {list:[], start:[]},
    init: function(config){
        var config_data = config;

        this._initData(config_data);
        this._initUI();

        document.addEventListener("keydown", this._onKeyDown, false);
    },
    _initUI: function()
    {
        var btn_start = this._createDiv("button", null, "START");
        var btn_stop = this._createDiv("button", null, "STOP");
        var btn_clear = this._createDiv("button", null, "CLEAR");
        var logo = this._createDiv("logo", null, null);

        this.arrUI["zone"] = [
            document.getElementById("zone1"),
            document.getElementById("zone2"),
            document.getElementById("zone3"),
            document.getElementById("zone4")];
        this.arrUI["funcbtn"] = [btn_start, btn_stop, btn_clear];
        this.arrUI["logo"] = [logo];
    },
    _initData: function(data){
        var root_board = this._createDiv("board", 0, null);
        this.dataTree = this._addData("root", null, null, null, null, null, null, null, root_board);
        for(var i = 0; i<data.length; i++)
        {
            var l1text = data[i][0];
            var l2text = data[i][1];
            var type = data[i][2];
            var path = data[i][3];
            var root = this._getData(l1text);
            if(!root)
            {
                var btn = this._createDiv("button", 1, l1text);
                var board = this._createDiv("board", 1, null);
                root = this._addData(l1text, type, path, 1, false, l1text, null, btn, board);
                this._addDataChild(this.dataTree, root);
            }

            var btn = this._createDiv("button", 2, l2text);
            var board = this._createDiv("board", 2, null);
            var tree_data = this._addData(l1text + "_" + l2text, type, path, 1, false, l2text, null, btn, board);
            this._addDataChild(root, tree_data);
        }
    },
    addCallback: function(type, callback) {
        this.arrCallback[type] = callback;
    },
    draw: function() {
        var arr_zone = this.arrUI["zone"];
        if(arr_zone && arr_zone.length)
        {
            arr_zone[1].appendChild(this.dataTree.board);
            arr_zone[0].appendChild(this.arrUI["logo"][0]);
            var btn_arr = this.arrUI["funcbtn"];
            for(var i = 0; i<btn_arr.length; i++)
            {
                arr_zone[0].appendChild(btn_arr[i]);
            }
        }
    },
    update: function(id, description, type, result, level){
        //console.log("update");
        //var tc = ZebraUI.arrTC["tc"];
        /*
        var tc = ZebraUI.tcList[id];
        var path = ZebraUI._findPath(id);

        if(tc)
        {
            if(id) tc.id = id;
            if(description) tc.description = description;
            if(type) tc.type = type;
            if(result || (result == "")) tc.result = result;
            if(level) tc.level = level;
        }
        else
        {
            tc = {
                id: id,
                path: path,
                description: description,
                type: type,
                result: result,
                level: level
            };
            ZebraUI.tcList[id] = tc;
        }
        ZebraUI._drawTC(tc, path);
        */
    },
    sendEvent: function(event, path)
    {
        switch(event)
        {
            case "TC_END": ZebraUI._updateQueue(null, path, null, "end_list"); break;
            default: break;
        }
    },
    /*
    _drawTC: function(tc, path){
        var div = ZebraUI.tcDiv[tc.id];
        var space = "";
        for(var i = 0; i<tc.level; i++)
        {
            space = space + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }

        var description = space + tc.description;

        console.log(tc.description + "    " + tc.result);

        if(!div)
        {
            var board = ZebraUI.divBoard[tc.path];
            div =  ZebraUI._createDiv(tc.id, description, ZebraUI._onClick);
            ZebraUI._addClass(div, "zone4_btn", null);
            ZebraUI._addClass(div, "zone4_c_width", null);
            board.appendChild(div);
            ZebraUI.tcDiv[tc.id] = div;
            var obj = ZebraUI.divByName[path];
            if(obj) ZebraUI._addDivLevel(obj.children, tc.id, 3, div, null, path, obj.type);
        }

        if(tc.result)
        {
            if(tc.result == "passed") ZebraUI._addClass(div, "result_pass", null);
            else ZebraUI._addClass(div, "result_fail", null);
        }

        div.innerHTML= description;
    },*/
    _updateQueue: function(type, path, board, state)
    {
        switch(state)
        {
            case "start":
                {
                    ZebraUI.queue["start"][0].
                }
                break;
            case "end_start":
                {
                }
                break;
            case "list":
                {
                    var obj_arr = ZebraUI.queue["list"];
                    var obj = {path:path, type:type, board:board};
                    if(obj_arr.length == 0)
                        if(ZebraUI._updateQueueList(type, path, board)) obj_arr[obj_arr.length] = obj;
                    else if(obj_arr.length == 1) obj_arr[obj_arr.length] = obj;
                    else if(obj_arr.length == 2) LOG("===> BLOCK GET LIST : " + path);
                }
                break;
            case "end_list":
                {
                    var obj_arr = ZebraUI.queue["list"];
                    if(obj_arr.length == 1)
                    {
                        var obj = {path:path, type:type, board:board};
                        ZebraUI.queue["list"] = obj;
                        obj_arr.shift();
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
    _addData: function(id, type, path, level, checked, description, result, btn, board) {
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
                btn: btn,
                board: board,
                children: []
            };
            this.arrData[id] = data;
        }
        return data;
    },
    _addDataChild: function(tree, child)
    {
        if(tree && child)
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
    _changeData: function(id, type, path, level, checked, description, result, btn, board, children) {
    },
    _createDiv: function(type, level, text)
    {
        var style = type+level;
        var div = document.createElement('div');
        div.tabIndex = -1;
        if(text)
            div.innerHTML= text;

        switch(style)
        {
            case "button1": this._addClass(div, "zone2_btn"); this._addClass(div, "zone2_c_width"); break;
            case "button2": this._addClass(div, "zone3_btn"); this._addClass(div, "zone3_c_width"); break;
            case "button3": this._addClass(div, "zone4_btn"); this._addClass(div, "zone4_c_width"); break;
            case "board0": this._addClass(div, "zone2_board"); this._addClass(div, "zone2_p_width"); break;
            case "board1": this._addClass(div, "zone3_board"); this._addClass(div, "zone3_c_width"); break;
            case "board2": this._addClass(div, "zone4_board"); this._addClass(div, "zone4_c_width"); break;
            case "board3": this._addClass(div, "zone4_board"); this._addClass(div, "zone4_c_width"); break;
            case "logonull" : this._addClass(div, "logo"); break;
            case "buttonnull": this._addClass(div, "zone1_btn"); break;
            default: break;
        }

        return div;
    },
    _isValid: function(level, add)
    {
        var obj = null;
        switch(level)
        {
            case 0: obj = ZebraUI.arrUI["funcbtn"][ZebraUI.arrFocus["current"][1]+add]; break;
            case 1: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["current"][1]+add]; break;
            case 2: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]+add]; break;
            case 3: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]].children[ZebraUI.arrFocus["level"][3]+add]; break;
            default: break;
        }
        if(obj) return true;
        else return false;
    },
    _setFocus: function(level, add)
    {
        if(!ZebraUI._isValid(level, add)) return;
        if(add==null)
        {
            ZebraUI.arrFocus["level"][level] = -1;
            return;
        }
        if(level !=  ZebraUI.arrFocus["lastLevel"]) ZebraUI.arrFocus["lastLevel"] = level;

        ZebraUI.arrFocus["old"][0] = ZebraUI.arrFocus["current"][0];
        ZebraUI.arrFocus["old"][1] = ZebraUI.arrFocus["current"][1];
        ZebraUI.arrFocus["level"][level] += add;
        ZebraUI.arrFocus["current"][0] = level;
        ZebraUI.arrFocus["current"][1] = ZebraUI.arrFocus["level"][level];
        if(ZebraUI.arrFocus["current"][1] < -1)
        {
            ZebraUI.arrFocus["current"][1] = -1;
            ZebraUI.arrFocus["level"][level] = -1;
        }
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
        ZebraUI._updateCallback("moveButton");
    },
    _updateCallback: function(call)
    {
        switch(call)
        {
            case "moveButton":
                {
                    if(ZebraUI._getCurrentFocus()[0]==2)
                    {
                        var arr = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]];
                        if(arr && (!arr.children.length))
                        {
                            ZebraUI._updateQueue(arr.type, arr.path, arr.board, "list");
                        }
                    }
                }
                break;
            case "startTC":
                {
                }
                break;
        }
    },
    _updateDiv: function() {
        switch(ZebraUI.arrFocus["current"][0])
        {
            case 0: break;
            case 1:
                {
                    var zone = ZebraUI.arrUI["zone"][2];
                    var board = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].board;
                    if(zone.lastChild) zone.removeChild(zone.lastChild);
                    if(board) zone.appendChild(board);
                }
                break;
            case 2: break;
            case 3: break;
            default: break;
        }
    },
    _updateDivStyle: function(){
        if(ZebraUI.arrFocus["old"][0] !=  ZebraUI.arrFocus["current"][0])
        {
            switch(ZebraUI.arrFocus["current"][0])
            {
                case 0: break;
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
            case 0: obj = ZebraUI.arrUI["funcbtn"][ZebraUI.arrFocus["current"][1]]; break;
            case 1: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["current"][1]].btn; break;
            case 2: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]].btn; break;
            case 3: obj = ZebraUI.dataTree.children[ZebraUI.arrFocus["level"][1]].children[ZebraUI.arrFocus["level"][2]].children[ZebraUI.arrFocus["level"][3]].btn; break;
            default: break;
        }

        if(obj) ZebraUI._addClass(obj, "focused");
        ZebraUI.arrFocus["obj"] = obj;
    },
    _onKeyDown: function(e){
        var keyCode = e.keyCode;
        switch(keyCode)
        {
            case 38://up
                {
                    if(ZebraUI._getCurrentFocus()[0] == -1) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 0) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 1) ZebraUI._setFocus(1,-1);
                    else if(ZebraUI._getCurrentFocus()[0] == 2) ZebraUI._setFocus(2,-1);
                    else if(ZebraUI._getCurrentFocus()[0] == 3) ZebraUI._setFocus(3,-1);
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
                        ZebraUI._setFocus(3,null);
                        ZebraUI._setFocus(2,0);
                    }
                }
                break;
            case 39://right
                {
                    if(ZebraUI._getCurrentFocus()[0] == -1) return;
                    else if(ZebraUI._getCurrentFocus()[0] == 0) ZebraUI._setFocus(0,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 1) ZebraUI._setFocus(2,1);
                    else if(ZebraUI._getCurrentFocus()[0] == 2) ZebraUI._setFocus(3,1);
                }
                break;
            /*
            case 13:
            {
                ZebraUI._checkTCList();

                if(ZebraUI.focused_index[0] > -1) {
                    var obj = ZebraUI.divFunctionBtn[ZebraUI.focused_index[0]];
                    if(obj)
                    {
                        switch(obj.obj_btn.id)
                        {
                            case "BTN_START":
                            {
                                if(!ZebraUI.checked_list.length)
                                {
                                    if((ZebraUI.focused_index[1]>-1)&&(ZebraUI.focused_index[2]>-1))
                                    {
                                        var obj = ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]];
                                        ZebraUI._onStart(obj.type, obj.tc_path);
                                        return;
                                    }
                                }
                                ZebraUI._sendTCList();
                            }
                                break;
                            case "BTN_STOP":
                                break;
                            case "BTN_CLEAR":
                            {
                                ZebraUI._clearTC();
                            }
                        }
                    }
                }
            }

                break;
                */
            default: break;
        }

        ZebraUI._updateUI();

    },
    /*
    _moveBtn: function(focus_level, move_step, level_arr){
        ZebraUI.focused_index[focus_level] += move_step;
        if((level_arr.length <= ZebraUI.focused_index[focus_level])||(ZebraUI.focused_index[focus_level] <= -1))
        {
            ZebraUI.focused_index[focus_level] -= move_step;
            return false;
        }

        var obj = level_arr[ZebraUI.focused_index[focus_level]];
        if(obj)
        {
            //tmp
            ZebraUI.tmp_btn_id = obj.obj_btn.id;

            ZebraUI._changeBoard(obj);
            obj.obj_btn.focus();
            return true;
        }
        return false;
    },
    */


/*
    _createDiv: function(id, text, click_callback)
    {
        var div = document.createElement('div');
        div.id = id;
        div.tabIndex = -1;
        if(text)
            div.innerHTML= text;
        if(click_callback) div.addEventListener("click", ZebraUI._onClick);
        return div;
    },
    update: function(id, description, type, result, level){
        var tc = ZebraUI.tcList[id];
        var path = ZebraUI._findPath(id);

        if(tc)
        {
            if(id) tc.id = id;
            if(description) tc.description = description;
            if(type) tc.type = type;
            if(result || (result == "")) tc.result = result;
            if(level) tc.level = level;
        }
        else
        {
            tc = {
                id: id,
                path: path,
                description: description,
                type: type,
                result: result,
                level: level
            };
            ZebraUI.tcList[id] = tc;
        }
        ZebraUI._drawTC(tc, path);
    },
    addData: function(title, subtitle, type, path)
    {
        var div_title = ZebraUI.divByName[title];
        if(div_title)
        {
            var div_id = path;
            var div_subtitle = ZebraUI.divByName[div_id];
            if(div_subtitle)
            {
            }
            else
            {
                var div_btn = ZebraUI._createDiv(div_id, subtitle, ZebraUI._onClick);
                ZebraUI._addClass(div_btn, "zone3_btn", null);
                ZebraUI._addClass(div_btn, "zone3_c_width", null);
                var div_board = ZebraUI._createDiv(div_id + "_board", null, null);
                ZebraUI._addClass(div_board, "zone4_board", null);
                ZebraUI._addClass(div_board, "zone4_c_width", null);
                ZebraUI.divBoard[path] = div_board;
                ZebraUI._addDivLevel(div_title.children, div_id, 2, div_btn, div_board, path, type);
                div_title.obj_board.appendChild(div_btn);
            }
        }
        else
        {
            var div_btn = ZebraUI._createDiv(title, title, ZebraUI._onClick);
            ZebraUI._addClass(div_btn, "zone2_btn", null);
            ZebraUI._addClass(div_btn, "zone2_c_width", null);
            var div_board = ZebraUI._createDiv(title + "_board", null, null);
            ZebraUI._addClass(div_board, "zone3_board", null);
            ZebraUI._addClass(div_board, "zone3_c_width", null);
            ZebraUI._addDivLevel(ZebraUI.divTree, title, 1, div_btn, div_board, null, type);

            var div_title = ZebraUI.divByName[title];
            var div_id = path;
            var div_child_btn = ZebraUI._createDiv(div_id, subtitle, ZebraUI._onClick);
            ZebraUI._addClass(div_child_btn, "zone3_btn", null);
            ZebraUI._addClass(div_child_btn, "zone3_c_width", null);
            var div_child_board = ZebraUI._createDiv(div_id + "_board", null, null);
            ZebraUI._addClass(div_child_board, "zone4_board", null);
            ZebraUI._addClass(div_child_board, "zone4_c_width", null);
            ZebraUI.divBoard[path] = div_child_board;
            ZebraUI._addDivLevel(div_title.children, div_id, 2, div_child_btn, div_child_board, path, type);
            div_board.appendChild(div_child_btn);
        }
    },
    _createDiv: function(id, text, click_callback)
    {
        var div = document.createElement('div');
        div.id = id;
        div.tabIndex = -1;
        if(text)
            div.innerHTML= text;
        //div.innerText = text;
        if(click_callback) div.addEventListener("click", ZebraUI._onClick);
        return div;
    },
    _createLevel: function(tree, level, btn, board, tcpath, type) {
        tree[tree.length] = {
            type:type,
            level:level,
            obj_btn: btn,
            obj_board: board,
            tc_path: tcpath,
            checked: false,
            children: []
        };
    },
    _addDivLevel: function(tree, name, level, btn, board, tcpath, type)
    {
        ZebraUI._createLevel(tree, level, btn, board, tcpath, type);
        ZebraUI.divByName[name] = tree[tree.length-1];
    },
*/

};


/*
var ZebraUI = {
    _onGetList: null,
    _onStart: null,
    _onStop: null,
    divZone: [],
    divByName: [],
    divTree: [],
    divBoard: [],
    divFunctionBtn: [],
    tcList: [],
    tcDiv: [],
    statusDiv: [],
    focused_zone: -1,
    focused_index: [-1, -1, -1, -1],
    focused_obj: null,
    checked_list: [],
    checked_index: -1,
    tmp_btn_id: null,
    init:function(jasmineRequire) {
        for (var i = 0; i < 4; i++) {
            var index = i + 1;
            var div = document.getElementById("zone" + index);
            ZebraUI._addClass(div, "zone" + index + "_board");
            ZebraUI._addClass(div, "zone" + index + "_p_width");
            ZebraUI.divZone[ZebraUI.divZone.length] = div;
        }
        ZebraUI._createStatusBar();
        document.addEventListener("keydown", ZebraUI._onKeyDown, false);
    },
    _addClass: function(div, addName, removeName) {
        if(removeName) div.classList.remove(removeName);
        if(addName) div.classList.add(addName);
    },
    _createStatusBar: function() {
        var logoDiv = document.createElement('div');
        logoDiv.id = "logo";
        ZebraUI._addClass(logoDiv, "logo", null);
        ZebraUI.divZone[0].appendChild(logoDiv);
        ZebraUI.statusDiv["logo"] = logoDiv;

        var startBtn = ZebraUI._createDiv("BTN_START", "START", ZebraUI._onClick );
        ZebraUI._addClass(startBtn, "zone1_btn", null);
        ZebraUI._createLevel(ZebraUI.divFunctionBtn, 0, startBtn, null, null, null);
        ZebraUI.divZone[0].appendChild(startBtn);

        var stopBtn = ZebraUI._createDiv("BTN_STOP", "STOP", ZebraUI._onClick );
        ZebraUI._addClass(stopBtn, "zone1_btn", null);
        ZebraUI._createLevel(ZebraUI.divFunctionBtn, 0, stopBtn, null, null, null);
        ZebraUI.divZone[0].appendChild(stopBtn);

        var clearBtn = ZebraUI._createDiv("BTN_CLEAR", "CLEAR", ZebraUI._onClick );
        ZebraUI._addClass(clearBtn, "zone1_btn", null);
        ZebraUI._createLevel(ZebraUI.divFunctionBtn, 0, clearBtn, null, null, null);
        ZebraUI.divZone[0].appendChild(clearBtn);

        var statusDiv = document.createElement('div');
        statusDiv.id = "status";
        ZebraUI._addClass(statusDiv, "status", null);
        ZebraUI.divZone[0].appendChild(statusDiv);
        ZebraUI.statusDiv["status"] = statusDiv;
    },
    addCallbackClickTCButton: function(callback)
    {
        ZebraUI._onGetList = callback;
    },
    addCallbackStart: function(callback)
    {
        ZebraUI._onStart = callback;
    },
    addCallbackStop: function(callback)
    {
        ZebraUI._onStop = callback;
    },
    draw:function(){
        for(var i=0; i<ZebraUI.divTree.length; i++)
        {
            ZebraUI.divZone[1].appendChild(ZebraUI.divTree[i].obj_btn);
        }
    },
    updateTC: function(id, description, type, result, level){
        var tc = ZebraUI.tcList[id];
        var path = ZebraUI._findPath(id);

        if(tc)
        {
            if(id) tc.id = id;
            if(description) tc.description = description;
            if(type) tc.type = type;
            if(result || (result == "")) tc.result = result;
            if(level) tc.level = level;
        }
        else
        {
            tc = {
                id: id,
                path: path,
                description: description,
                type: type,
                result: result,
                level: level
            };
            ZebraUI.tcList[id] = tc;
        }
        ZebraUI._drawTC(tc, path);
    },
    addData: function(title, subtitle, type, path)
    {
        var div_title = ZebraUI.divByName[title];
        if(div_title)
        {
            var div_id = path;
            var div_subtitle = ZebraUI.divByName[div_id];
            if(div_subtitle)
            {
            }
            else
            {
                var div_btn = ZebraUI._createDiv(div_id, subtitle, ZebraUI._onClick);
                ZebraUI._addClass(div_btn, "zone3_btn", null);
                ZebraUI._addClass(div_btn, "zone3_c_width", null);
                var div_board = ZebraUI._createDiv(div_id + "_board", null, null);
                ZebraUI._addClass(div_board, "zone4_board", null);
                ZebraUI._addClass(div_board, "zone4_c_width", null);
                ZebraUI.divBoard[path] = div_board;
                ZebraUI._addDivLevel(div_title.children, div_id, 2, div_btn, div_board, path, type);
                div_title.obj_board.appendChild(div_btn);
            }
        }
        else
        {
            var div_btn = ZebraUI._createDiv(title, title, ZebraUI._onClick);
            ZebraUI._addClass(div_btn, "zone2_btn", null);
            ZebraUI._addClass(div_btn, "zone2_c_width", null);
            var div_board = ZebraUI._createDiv(title + "_board", null, null);
            ZebraUI._addClass(div_board, "zone3_board", null);
            ZebraUI._addClass(div_board, "zone3_c_width", null);
            ZebraUI._addDivLevel(ZebraUI.divTree, title, 1, div_btn, div_board, null, type);

            var div_title = ZebraUI.divByName[title];
            var div_id = path;
            var div_child_btn = ZebraUI._createDiv(div_id, subtitle, ZebraUI._onClick);
            ZebraUI._addClass(div_child_btn, "zone3_btn", null);
            ZebraUI._addClass(div_child_btn, "zone3_c_width", null);
            var div_child_board = ZebraUI._createDiv(div_id + "_board", null, null);
            ZebraUI._addClass(div_child_board, "zone4_board", null);
            ZebraUI._addClass(div_child_board, "zone4_c_width", null);
            ZebraUI.divBoard[path] = div_child_board;
            ZebraUI._addDivLevel(div_title.children, div_id, 2, div_child_btn, div_child_board, path, type);
            div_board.appendChild(div_child_btn);
        }
    },
    sendEvent: function(event, obj)
    {
        switch(event)
        {
            case "TC_END":
                {
                    ZebraUI._sendTCList();
                }
                break;
            default: break;
        }
    },
    _drawTC: function(tc, path){
        var div = ZebraUI.tcDiv[tc.id];
        var space = "";
        for(var i = 0; i<tc.level; i++)
        {
            space = space + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }

        var description = space + tc.description;

        console.log(tc.description + "    " + tc.result);

        if(!div)
        {
            var board = ZebraUI.divBoard[tc.path];
            div =  ZebraUI._createDiv(tc.id, description, ZebraUI._onClick);
            ZebraUI._addClass(div, "zone4_btn", null);
            ZebraUI._addClass(div, "zone4_c_width", null);
            board.appendChild(div);
            ZebraUI.tcDiv[tc.id] = div;
            var obj = ZebraUI.divByName[path];
            if(obj) ZebraUI._addDivLevel(obj.children, tc.id, 3, div, null, path, obj.type);
        }

        if(tc.result)
        {
            if(tc.result == "passed") ZebraUI._addClass(div, "result_pass", null);
            else ZebraUI._addClass(div, "result_fail", null);
        }

        div.innerHTML= description;
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
    _attachBoard: function(zone, board)
    {
        if(zone.lastChild) zone.removeChild(zone.lastChild);
        if(board) zone.appendChild(board);
    },
    _createLevel: function(tree, level, btn, board, tcpath, type) {
        tree[tree.length] = {
            type:type,
            level:level,
            obj_btn: btn,
            obj_board: board,
            tc_path: tcpath,
            checked: false,
            children: []
        };
    },
    _addDivLevel: function(tree, name, level, btn, board, tcpath, type)
    {
        ZebraUI._createLevel(tree, level, btn, board, tcpath, type);
        ZebraUI.divByName[name] = tree[tree.length-1];
    },
    _createDiv: function(id, text, click_callback)
    {
        var div = document.createElement('div');
        div.id = id;
        div.tabIndex = -1;
        if(text)
            div.innerHTML= text;
        //div.innerText = text;
        if(click_callback) div.addEventListener("click", ZebraUI._onClick);
        return div;
    },
    _onClick: function(){
        var obj = ZebraUI.divByName[ZebraUI.id];
        if(obj)
        {
            switch (obj.level) {
                case 0:
                    break;
                case 1:
                {
                    ZebraUI._attachBoard(ZebraUI.divZone[3], null);
                    ZebraUI._attachBoard(ZebraUI.divZone[2], obj.obj_board);
                }
                    break;
                case 2:
                {
                    if(!obj.children.length) {
                        ZebraUI._onGetList(obj.type, obj.tc_path);
                    }
                    ZebraUI._attachBoard(ZebraUI.divZone[3], obj.obj_board);
                }
                    break;
                default:
                    break;
            }
        }
        else
        {
            obj = ZebraUI.tcDiv[ZebraUI.id];
            if(!obj) return;
            LOG(obj.id);
        }
    },
    _moveBtn: function(focus_level, move_step, level_arr){
        ZebraUI.focused_index[focus_level] += move_step;
        if((level_arr.length <= ZebraUI.focused_index[focus_level])||(ZebraUI.focused_index[focus_level] <= -1))
        {
            ZebraUI.focused_index[focus_level] -= move_step;
            return false;
        }

        var obj = level_arr[ZebraUI.focused_index[focus_level]];
        if(obj)
        {
            //tmp
            ZebraUI.tmp_btn_id = obj.obj_btn.id;

            ZebraUI._changeBoard(obj);
            obj.obj_btn.focus();
            return true;
        }
        return false;
    },
    _checkTCList: function()
    {
        switch(ZebraUI.focused_zone)
        {
            case 1: break;
            case 2:
                {
                    var p_obj = ZebraUI.divTree[ZebraUI.focused_index[1]];
                    var c_obj = p_obj.children;
                    p_obj.checked = !p_obj.checked;
                    ZebraUI._checkDIV(p_obj.obj_btn, p_obj.checked);
                    for(var i=0; i<c_obj.length; i++)
                    {
                        ZebraUI._changeTCtoList(p_obj.checked, c_obj[i].type, c_obj[i].tc_path, ZebraUI.focused_index[1], i);
                        c_obj[i].checked = p_obj.checked;
                        ZebraUI._checkDIV(c_obj[i].obj_btn, p_obj.checked);
                    }
                }
                break;
            case 3:
                {
                    var obj = ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]];
                    obj.checked = !obj.checked;
                    ZebraUI._changeTCtoList(obj.checked, obj.type, obj.tc_path, ZebraUI.focused_index[1], ZebraUI.focused_index[2]);
                    ZebraUI._checkDIV(ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].obj_btn, obj.checked);
                }
                break;
            case 4:
                {
                }
                break;
            default: break;
        }
    },
    _clearTC: function()
    {
        for(var i=0; i<ZebraUI.checked_list.length; i=0)
        {
            ZebraUI.checked_list.shift();
        }

        for(var i=0; i<ZebraUI.divTree.length; i++)
        {
            var obj = ZebraUI.divTree[i];
            obj.checked = false;
            ZebraUI._addClass(obj.obj_btn, null, "checked");
            for(var j=0; j<obj.children.length; j++)
            {
                obj.children[j].checked = false;
                ZebraUI._addClass(obj.children[j].obj_btn, null, "checked");
                for(var k=0; k<obj.children[j].children.length; k++)
                {
                    var tcobj = obj.children[j].children[k];
                    tcobj.checked = false;
                    ZebraUI._addClass(tcobj.obj_btn, null, "result_pass");
                    ZebraUI._addClass(tcobj.obj_btn, null, "result_fail");
                }
            }
        }

        for(var i=0; i<ZebraUI.tcList.length; i++)
        {
            ZebraUI.tcList[i].result = false;
        }

        ZebraUI.checked_index = -1;
    },
    _checkDIV: function(div, checked)
    {
        if(checked) ZebraUI._addClass(div, "checked", null);
        else ZebraUI._addClass(div, null, "checked");
    },
    _sendTCList: function()
    {
        ZebraUI.checked_index += 1;

        var obj = ZebraUI.checked_list[ZebraUI.checked_index];
        if(obj)
        {
            if(ZebraUI.checked_index == 0)
            {
                LOG("### checked length : " + ZebraUI.checked_list.length);
                for(var i=0; i<ZebraUI.checked_list.length; i++)
                    LOG("### send path List : " + ZebraUI.checked_list[i].path);
            }
            ZebraUI._onStart(obj.type, obj.path);
        }
        else
        {
            ZebraUI.checked_index = -1;
        }
    },
    _changeTCtoList: function(checked, type, path, p_index, c_index)
    {
        for(var i=0; i<ZebraUI.checked_list.length; i++)
        {
            if( (ZebraUI.checked_list[i].path == path) && (!checked) )
            {
                ZebraUI.checked_list.splice(i, 1);
                return;
            }
        }

        if(checked)
        {
            ZebraUI.checked_list[ZebraUI.checked_list.length] = {
                type: type,
                path: path,
                pIndex: p_index,
                cIndex: c_index
            };
        }
    },
    _changeBoard: function(obj)
    {
        switch(obj.level)
        {
            case 0:
                break;
            case 1:
            {
                ZebraUI._attachBoard(ZebraUI.divZone[3], null);
                ZebraUI._attachBoard(ZebraUI.divZone[2], obj.obj_board);
            }
                break;
            case 2:
            {
                if(!obj.children.length)
                {
                    ZebraUI._onGetList(obj.type, obj.tc_path);
                }
                ZebraUI._attachBoard(ZebraUI.divZone[3], obj.obj_board);
            }
                break;
            default:
                break;
        }
    },
    _focusDiv: function(){

        var focusZone = ZebraUI._focused_zone();

        if(ZebraUI.focused_obj) ZebraUI._addClass(ZebraUI.focused_obj, null, "focused");

        try {
            switch (focusZone) {
                case 1:
                    ZebraUI.focused_obj = ZebraUI.divFunctionBtn[ZebraUI.focused_index[0]].obj_btn;
                    break;
                case 2:
                    ZebraUI.focused_obj = ZebraUI.divTree[ZebraUI.focused_index[1]].obj_btn;
                    break;
                case 3:
                    ZebraUI.focused_obj = ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].obj_btn;
                    break;
                case 4:
                    ZebraUI.focused_obj = ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].children[ZebraUI.focused_index[3]].obj_btn;
                    break;
                default:
                    break;
            }
        }
        catch(exception)
        {
            LOG("focus error : " + exception);
        }

        if(ZebraUI.focused_obj) ZebraUI._addClass(ZebraUI.focused_obj, "focused", null);
    },
    _focused_zone: function(){
        var focusZone = 0;
        if(ZebraUI.focused_index[0] > -1) focusZone = 1;
        else if((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) && (ZebraUI.focused_index[3] > -1)) focusZone = 4;
        else if((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1)) focusZone = 3;
        else if(ZebraUI.focused_index[1] > -1) focusZone = 2;
        return focusZone;
    },
    _updateUI: function(){
        var focusZone = ZebraUI._focused_zone();

        if(ZebraUI.focused_zone != focusZone)
        {
            ZebraUI.focused_zone = focusZone;
            switch(ZebraUI.focused_zone)
            {
                case 1: break;
                case 2:
                    {
                        var zone2 = ZebraUI.divZone[1];
                        ZebraUI._addClass(zone2, "width400", "width40");

                        var zone3 = ZebraUI.divZone[2];
                        ZebraUI._addClass(zone3, "width840", "width400");

                        var zone4 = ZebraUI.divZone[3];
                        ZebraUI._addClass(zone4, "width40", "width840");
                    }
                    break;
                case 3:
                    {
                        var zone2 = ZebraUI.divZone[1];
                        ZebraUI._addClass(zone2, "width40", "width400");

                        var zone3 = ZebraUI.divZone[2];
                        ZebraUI._addClass(zone3, "width400", "width840");

                        var zone4 = ZebraUI.divZone[3];
                        ZebraUI._addClass(zone4, "width840", "width40");

                        var zone3 = ZebraUI.divZone[2];
                        ZebraUI._addClass(zone3, null, "width40");

                        var zone4 = ZebraUI.divZone[3];
                        ZebraUI._addClass(zone4, "width840", "width1200");
                    }
                    break;
                case 4:
                    {
                        var zone3 = ZebraUI.divZone[2];
                        ZebraUI._addClass(zone3, "width40", "width400");

                        var zone4 = ZebraUI.divZone[3];
                        ZebraUI._addClass(zone4, "width1200", "width840");
                    }
                    break;
                default: break;
            }
        }
        ZebraUI._updateStatus();
    },
    _updateStatus: function()
    {
        var obj = ZebraUI.statusDiv["status"];
        if(obj)
        {
            if(ZebraUI.focused_index[1]>-1)
            {
                var title_obj = ZebraUI.divTree[ZebraUI.focused_index[1]];
                if(title_obj)
                {
                    var subtitle_obj = ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]];
                    if(subtitle_obj)
                    {
                        obj.innerHTML = title_obj.obj_btn.innerHTML + "/" + subtitle_obj.obj_btn.innerHTML;
                    }
                    else
                    {
                        obj.innerHTML = title_obj.obj_btn.innerHTML;
                    }
                }
                else
                {
                    obj.innerHTML = "";
                }
            }
        }
    },
    _onKeyDown: function(e){
        var keyCode = e.keyCode;
        switch(keyCode)
        {
            case 38://up
                {
                    var result = false;
                    if(ZebraUI.focused_index[0] > -1) return;
                    if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2]> -1) && (ZebraUI.focused_index[3] > -1))
                        result = ZebraUI._moveBtn(3, -1, ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].children);
                    else if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) )
                        result = ZebraUI._moveBtn(2, -1, ZebraUI.divTree[ZebraUI.focused_index[1]].children);
                    else if ((ZebraUI.focused_index[1] > -1))
                        result = ZebraUI._moveBtn(1, -1, ZebraUI.divTree);
                    if(!result) ZebraUI._moveBtn(0, 1, ZebraUI.divFunctionBtn);

                    ZebraUI._updateUI();
                    ZebraUI._focusDiv();
                }
                break;
            case 40://down
                {
                    if(ZebraUI.focused_index[0] > -1)
                    {
                        ZebraUI.focused_index[0] = -1;
                        if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) && (ZebraUI.focused_index[3] > -1))
                            ZebraUI._moveBtn(3, 0, ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].children);
                        else if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) )
                            ZebraUI._moveBtn(2, 0, ZebraUI.divTree[ZebraUI.focused_index[1]].children);
                        else if ((ZebraUI.focused_index[1] >= -1))
                            ZebraUI._moveBtn(1, 0, ZebraUI.divTree);

                        ZebraUI._focusDiv();
                        return;
                    }
                    if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) && (ZebraUI.focused_index[3] > -1))
                        ZebraUI._moveBtn(3, 1, ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].children);
                    else if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) )
                        ZebraUI._moveBtn(2, 1, ZebraUI.divTree[ZebraUI.focused_index[1]].children);
                    else if ((ZebraUI.focused_index[1] >= -1))
                        ZebraUI._moveBtn(1, 1, ZebraUI.divTree);

                    ZebraUI._updateUI();
                    ZebraUI._focusDiv();
                }
                break;
            case 37://left
                {
                    if(ZebraUI.focused_index[0] > -1)
                    {
                        ZebraUI._moveBtn(0, -1, ZebraUI.divFunctionBtn);
                        ZebraUI._focusDiv();
                        return;
                    }
                    if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1) && (ZebraUI.focused_index[3] > -1))
                    {
                        ZebraUI.focused_index[3] = -1;
                        ZebraUI._moveBtn(2, 0, ZebraUI.divTree[ZebraUI.focused_index[1]].children);
                    }
                    else if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1))
                    {
                        ZebraUI.focused_index[2] = -1;
                        ZebraUI._moveBtn(1, 0, ZebraUI.divTree);
                    }

                    ZebraUI._updateUI();
                    ZebraUI._focusDiv();
                }
                break;
            case 39://right
                {
                    if(ZebraUI.focused_index[0] > -1)
                    {
                        ZebraUI._moveBtn(0, 1, ZebraUI.divFunctionBtn);
                        ZebraUI._focusDiv();
                        return;
                    }
                    if ((ZebraUI.focused_index[1] > -1) && (ZebraUI.focused_index[2] > -1))
                        ZebraUI._moveBtn(3, 1, ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]].children);
                    else if (ZebraUI.focused_index[1] > -1)
                        ZebraUI._moveBtn(2, 1, ZebraUI.divTree[ZebraUI.focused_index[1]].children);

                    ZebraUI._updateUI();
                    ZebraUI._focusDiv();
                }
                break;
            case 13://enter
                {
                    ZebraUI._checkTCList();

                    if(ZebraUI.focused_index[0] > -1) {
                        var obj = ZebraUI.divFunctionBtn[ZebraUI.focused_index[0]];
                        if(obj)
                        {
                            switch(obj.obj_btn.id)
                            {
                                case "BTN_START":
                                    {
                                        if(!ZebraUI.checked_list.length)
                                        {
                                            if((ZebraUI.focused_index[1]>-1)&&(ZebraUI.focused_index[2]>-1))
                                            {
                                                var obj = ZebraUI.divTree[ZebraUI.focused_index[1]].children[ZebraUI.focused_index[2]];
                                                ZebraUI._onStart(obj.type, obj.tc_path);
                                                return;
                                            }
                                        }
                                        ZebraUI._sendTCList();
                                    }
                                    break;
                                case "BTN_STOP":
                                    break;
                                case "BTN_CLEAR":
                                {
                                    ZebraUI._clearTC();
                                }
                            }
                        }
                    }
                }
                break;
            default: break;
        }
    }
};

*/
