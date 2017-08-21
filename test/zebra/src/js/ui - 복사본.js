
var ZebraUI = {
    _onClickLevel3: null,
    _onStart: null,
    _onStop: null,
    divZone: [],
    divByName: [],
    divTree: [],
    divBoard: [],
    divFunctionBtn: [],
    tcList: [],
    tcDiv: [],
    focused: [-1, -1, -1, -1],
    focused_zone: -1,
    // tmp
    tmp_path: null,
    tmp_type: null,
    tmp_btn_id: null,
    init:function(jasmineRequire) {
        for (var i = 0; i < 4; i++) {
            var index = i + 1;
            var div = document.getElementById("zone" + index);
            this._addClass(div, "zone" + index + "_board");
            this._addClass(div, "zone" + index + "_p_width");
            this.divZone[this.divZone.length] = div;
        }
        this._createStatusBar();
        document.addEventListener("keydown", this._onKeyDown, false);
    },
    _addClass: function(div, addName, removeName) {
        if(removeName) div.classList.remove(removeName);
        if(addName) div.classList.add(addName);
    },
    _createStatusBar: function() {
        var startBtn = this._createDiv("BTN_START", "START", this._onClick );
        this._addClass(startBtn, "zone1_btn", null);
        this._createLevel(this.divFunctionBtn, 0, startBtn, null, null, null);
        this.divZone[0].appendChild(startBtn);

        var stopBtn = this._createDiv("BTN_START", "STOP", this._onClick );
        this._addClass(stopBtn, "zone1_btn", null);
        this._createLevel(this.divFunctionBtn, 0, stopBtn, null, null, null);
        this.divZone[0].appendChild(stopBtn);
    },
    addCallbackClickTCButton: function(callback)
    {
        this._onClickLevel3 = callback;
    },
    addCallbackStart: function(callback)
    {
        this._onStart = callback;
    },
    addCallbackStop: function(callback)
    {
        this._onStop = callback;
    },
    draw:function(){
        for(var i=0; i<this.divTree.length; i++)
        {
            this.divZone[1].appendChild(this.divTree[i].obj_btn);
        }
    },
    updateTC: function(id, description, type, result, level){
        var tc = this.tcList[id];
        var path = this._findPath(id);

        if(tc)
        {
            if(id) tc.id = id;
            if(description) tc.description = description;
            if(type) tc.type = type;
            if(result) tc.result = result;
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
            this.tcList[id] = tc;
        }
        this._drawTC(tc, path);
    },
    addData: function(title, subtitle, type, path)
    {
        var div_title = this.divByName[title];
        if(div_title)
        {
            var div_id = path;
            var div_subtitle = this.divByName[div_id];
            if(div_subtitle)
            {
            }
            else
            {
                var div_btn = this._createDiv(div_id, subtitle, this._onClick);
                this._addClass(div_btn, "zone3_btn", null);
                this._addClass(div_btn, "zone3_c_width", null);
                var div_board = this._createDiv(div_id + "_board", null, null);
                this._addClass(div_board, "zone4_board", null);
                this._addClass(div_board, "zone4_c_width", null);
                this.divBoard[path] = div_board;
                this._addDivLevel(div_title.children, div_id, 2, div_btn, div_board, path, type);
                div_title.obj_board.appendChild(div_btn);
            }
        }
        else
        {
            var div_btn = this._createDiv(title, title, this._onClick);
            this._addClass(div_btn, "zone2_btn", null);
            this._addClass(div_btn, "zone2_c_width", null);
            var div_board = this._createDiv(title + "_board", null, null);
            this._addClass(div_board, "zone3_board", null);
            this._addClass(div_board, "zone3_c_width", null);
            this._addDivLevel(this.divTree, title, 1, div_btn, div_board, null, type);

            var div_title = this.divByName[title];
            var div_id = path;
            var div_child_btn = this._createDiv(div_id, subtitle, this._onClick);
            this._addClass(div_child_btn, "zone3_btn", null);
            this._addClass(div_child_btn, "zone3_c_width", null);
            var div_child_board = this._createDiv(div_id + "_board", null, null);
            this._addClass(div_child_board, "zone4_board", null);
            this._addClass(div_child_board, "zone4_c_width", null);
            this.divBoard[path] = div_child_board;
            this._addDivLevel(div_title.children, div_id, 2, div_child_btn, div_child_board, path, type);
            div_board.appendChild(div_child_btn);
        }
    },
    _drawTC: function(tc, path){
        var div = this.tcDiv[tc.id];
        var space = "";
        for(var i = 0; i<tc.level; i++)
        {
            space = space +"-";
        }
        var description = space + tc.description + " : " + tc.result;

        if(div)
        {
            div.innerText = description;
        }
        else
        {
            var board = this.divBoard[tc.path];
            if(!board) return;
            var tc_div =  this._createDiv(tc.id, description, this._onClick);
            this._addClass(tc_div, "zone4_btn", null);
            this._addClass(tc_div, "zone4_c_width", null);
            board.appendChild(tc_div);
            this.tcDiv[tc.id] = tc_div;
            var obj = this.divByName[path];
            if(obj) this._addDivLevel(obj.children, tc.id, 3, tc_div, null, path, obj.type);
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
            children: []
        };
    },
    _addDivLevel: function(tree, name, level, btn, board, tcpath, type)
    {
        this._createLevel(tree, level, btn, board, tcpath, type);
        this.divByName[name] = tree[tree.length-1];
    },
    _createDiv: function(id, text, click_callback)
    {
        var div = document.createElement('div');
        div.id = id;
        div.tabIndex = -1;
        if(text) div.innerText = text;
        if(click_callback) div.addEventListener("click", this._onClick);
        return div;
    },
    _onClick: function(){
        var obj = ZebraUI.divByName[this.id];
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
                    ZebraUI._onClickLevel3(obj.type, obj.tc_path);
                    ZebraUI._attachBoard(ZebraUI.divZone[3], obj.obj_board);
                }
                    break;
                default:
                    break;
            }
        }
        else
        {
            obj = ZebraUI.tcDiv[this.id];
            if(!obj) return;
            LOG(obj.id);
        }
    },
    _moveBtn: function(focus_level, move_step, level_arr){
        ZebraUI.focused[focus_level] += move_step;
        if((level_arr.length <= ZebraUI.focused[focus_level])||(ZebraUI.focused[focus_level] <= -1))
        {
            ZebraUI.focused[focus_level] -= move_step;
            return false;
        }

        var obj = level_arr[ZebraUI.focused[focus_level]];
        if(obj)
        {
            //tmp
            ZebraUI.tmp_btn_id = obj.obj_btn.id;

            obj.obj_btn.focus();
            ZebraUI._changeUIfromLevel(obj);
            return true;
        }
        return false;
    },
    _changeUIfromLevel: function(obj)
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
                //tmp
                if(obj.type) ZebraUI.tmp_type = obj.type;
                if(obj.tc_path) ZebraUI.tmp_path = obj.tc_path;

                ZebraUI._onClickLevel3(obj.type, obj.tc_path);
                ZebraUI._attachBoard(ZebraUI.divZone[3], obj.obj_board);
            }
                break;
            default:
                break;
        }
    },
    _updateUI: function(){
        var focusZone = 0;
        if(ZebraUI.focused[0] > -1) focusZone = 1;
        else if((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) && (ZebraUI.focused[3] > -1)) focusZone = 4;
        else if((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1)) focusZone = 3;
        else if(ZebraUI.focused[1] > -1) focusZone = 2;

        if(this.focused_zone != focusZone)
        {
            this.focused_zone = focusZone;
            switch(this.focused_zone)
            {
                case 1:
                    {
                        console.log("zone1");
                    }
                    break;
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
    },
    _onKeyDown: function(e){
        var keyCode = e.keyCode;
        switch(keyCode)
        {
            case 38://up
                {
                    var result = false;
                    if(ZebraUI.focused[0] > -1) return;
                    if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2]> -1) && (ZebraUI.focused[3] > -1))
                        result = ZebraUI._moveBtn(3, -1, ZebraUI.divTree[ZebraUI.focused[1]].children[ZebraUI.focused[2]].children);
                    else if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) )
                        result = ZebraUI._moveBtn(2, -1, ZebraUI.divTree[ZebraUI.focused[1]].children);
                    else if ((ZebraUI.focused[1] > -1))
                        result = ZebraUI._moveBtn(1, -1, ZebraUI.divTree);
                    if(!result) ZebraUI._moveBtn(0, 1, ZebraUI.divFunctionBtn);

                    ZebraUI._updateUI();
                }
                break;
            case 40://down
                {
                    if(ZebraUI.focused[0] > -1)
                    {
                        ZebraUI.focused[0] = -1;
                        if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) && (ZebraUI.focused[3] > -1))
                            ZebraUI._moveBtn(3, 0, ZebraUI.divTree[ZebraUI.focused[1]].children[ZebraUI.focused[2]].children);
                        else if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) )
                            ZebraUI._moveBtn(2, 0, ZebraUI.divTree[ZebraUI.focused[1]].children);
                        else if ((ZebraUI.focused[1] >= -1))
                            ZebraUI._moveBtn(1, 0, ZebraUI.divTree);
                        return;
                    }
                    if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) && (ZebraUI.focused[3] > -1))
                        ZebraUI._moveBtn(3, 1, ZebraUI.divTree[ZebraUI.focused[1]].children[ZebraUI.focused[2]].children);
                    else if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) )
                        ZebraUI._moveBtn(2, 1, ZebraUI.divTree[ZebraUI.focused[1]].children);
                    else if ((ZebraUI.focused[1] >= -1))
                        ZebraUI._moveBtn(1, 1, ZebraUI.divTree);

                    ZebraUI._updateUI();
                }
                break;
            case 37://left
                {
                    if(ZebraUI.focused[0] > -1)
                    {
                        ZebraUI._moveBtn(0, -1, ZebraUI.divFunctionBtn);
                        return;
                    }
                    if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1) && (ZebraUI.focused[3] > -1))
                    {
                        ZebraUI.focused[3] = -1;
                        ZebraUI._moveBtn(2, 0, ZebraUI.divTree[ZebraUI.focused[1]].children);
                    }
                    else if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1))
                    {
                        ZebraUI.focused[2] = -1;
                        ZebraUI._moveBtn(1, 0, ZebraUI.divTree);
                    }

                    ZebraUI._updateUI();
                }
                break;
            case 39://right
                {
                    if(ZebraUI.focused[0] > -1)
                    {
                        ZebraUI._moveBtn(0, 1, ZebraUI.divFunctionBtn);
                        return;
                    }
                    if ((ZebraUI.focused[1] > -1) && (ZebraUI.focused[2] > -1))
                        ZebraUI._moveBtn(3, 1, ZebraUI.divTree[ZebraUI.focused[1]].children[ZebraUI.focused[2]].children);
                    else if (ZebraUI.focused[1] > -1)
                        ZebraUI._moveBtn(2, 1, ZebraUI.divTree[ZebraUI.focused[1]].children);

                    ZebraUI._updateUI();
                }
                break;
            case 13://enter
                {
                    // tmp for test
                    ZebraUI._onStart(ZebraUI.tmp_type, ZebraUI.tmp_path);
                    /*
                    if(ZebraUI.tmp_btn_id == "BTN_START")
                    {
                        ZebraUI._onStart(ZebraUI.tmp_type, ZebraUI.tmp_path);
                    }
                    else if(ZebraUI.tmp_btn_id == "BTN_STOP")
                    {
                        ZebraUI._onStop(ZebraUI.tmp_type, ZebraUI.tmp_path);
                    }
                    */
                }
                break;
            default: break;
        }
        return;
    }
};
