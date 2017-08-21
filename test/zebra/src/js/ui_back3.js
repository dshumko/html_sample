/**
 * Created by kskim2 on 2016-02-16.
 */
var dataArr = [
    {
        "name":"HTML5",
        "level":1,
        "parentName":null,
        "children":[
            {
                "name":"Video/Audio",
                "level":2,
                "parentName":"HTML5",
                "children":[
                    {
                        "name":"tc/HTML5/test_tc3.js",
                        "level":3,
                        "parentName":"test_tc3",
                        "children":[]
                    }
                ]
            },
            {
                "name":"Communications",
                "level":2,
                "parentName":"HTML5",
                "children":[
                    {
                        "name":"tc/HTML5/test_tc3.js",
                        "level":3,
                        "parentName":"test_tc3",
                        "children":[]
                    }
                ]
            }
        ]
    },
    {
        "name":"CEHTML",
        "level":1,
        "parentName":null,
        "children":[
            {
                "name":"AV Control",
                "level":2,
                "parentName":"CEHTML",
                "children":[
                    {
                        "name":"tc/CEHTML/test_tc1.js",
                        "level":3,
                        "parentName":"test_tc1",
                        "children":[]
                    }
                ]
            },
            {
                "name":"KEY CODE",
                "level":2,
                "parentName":"CEHTML",
                "children":[
                    {
                        "name":"tc/CEHTML/test_tc1.js",
                        "level":3,
                        "parentName":"test_tc1",
                        "children":[]
                    }
                ]
            }
        ]
    },
    {
        "name":"TDC",
        "level":1,
        "parentName":null,
        "children":[
            {
                "name":"test_tc1",
                "level":2,
                "parentName":"TDC",
                "children":[
                    {
                        "name":"tc/TDC/test_tc1.js",
                        "level":3,
                        "parentName":"test_tc1",
                        "children":[]
                    }
                ]
            },
            {
                "name":"test_tc2",
                "level":2,
                "parentName":"TDC",
                "children":[
                    {
                        "name":"tc/TDC/test_tc2.js",
                        "level":3,
                        "parentName":"test_tc2",
                        "children":[]
                    }
                ]
            },
            {
                "name":"test_tc3",
                "level":2,
                "parentName":"TDC",
                "children":[
                    {
                        "name":"tc/TDC/test_tc3.js",
                        "level":3,
                        "parentName":"test_tc3",
                        "children":[]
                    }
                ]
            }
        ]
    }
];

/*
window.jasmine = jasmineRequire.core(jasmineRequire);
var env = jasmine.getEnv();
var jasmineInterface = jasmineRequire.interface(jasmine, env);
extend(window, jasmineInterface);
*/

var ZebraUI = {
    divByName:[],
    divTree:[],
    divZone:[],
    init:function(jasmineRequire) {
        for (var i = 0; i < 4; i++) {
            this.divZone[this.divZone.length] = document.getElementById("zone" + (i + 1));
        }
    },
    addTC: function(title, subtitle, path)
    {
        var div_title = this.divByName[title];
        if(div_title)
        {
            var div_id = title + "_" + subtitle;
            var div_subtitle = this.divByName[div_id];
            if(div_subtitle)
            {
            }
            else
            {
                var div_btn = this._createDiv(div_id, '#CCCC00', '400px', '40px', subtitle, this._onClick);
                var div_board = this._createDiv(div_id + "_board", '#FF8888', '680px', '680px', null, null);
                this._addDivLevel(div_title.children, div_id, 2, div_btn, div_board, path);
                div_title.obj_board.appendChild(div_btn);
            }
        }
        else
        {
            var div_btn = this._createDiv(title, '#CC00CC', '200px', '50px', title, this._onClick);
            var div_board = this._createDiv(title + "_board", null, '400px', '680px', null, null);
            this._addDivLevel(this.divTree, title, 1, div_btn, div_board, null);

            var div_title = this.divByName[title];
            var div_id = title + "_" + subtitle;
            var div_child_btn = this._createDiv(div_id, '#CCCC00', '400px', '40px', subtitle, this._onClick);
            var div_child_board = this._createDiv(div_id + "_board", '#FF8888', '680px', '680px', null, null);
            this._addDivLevel(div_title.children, div_id, 2, div_child_btn, div_child_board, path);
            div_board.appendChild(div_child_btn);
        }
    },
    draw:function(){
        for(var i=0; i<this.divTree.length; i++)
        {
            this.divZone[1].appendChild(this.divTree[i].obj_btn);
        }
    },
    _addDivLevel: function(tree, name, level, btn, board, tcpath)
    {
        tree[tree.length] = {
            level:level,
            obj_btn: btn,
            obj_board: board,
            tc_path: tcpath,
            children: []
        };

        this.divByName[name] = tree[tree.length-1];
    },
    _createDiv: function(id, color, width, height, text, click_callback)
    {
        var div = document.createElement('div');
        div.id = id;
        div.style.width = width;
        div.style.height = height;
        if(color) div.style.backgroundColor = color;
        if(text) div.innerText = text;
        if(click_callback)
        {
            div.style.float = 'left';
            div.tabIndex = -1;
            div.addEventListener("click", this._onClick);
        }
        return div;
    },
    _createDivTC: function(board)
    {

    },
    _loadJS: function(path)
    {
        if(path)
        {
            var js = document.createElement('script');
            js.setAttribute("type","text/javascript");
            js.setAttribute("src", path);
            document.getElementsByTagName("head")[0].appendChild(js);
        }
    },
    _attachBoard: function(zone, board)
    {
        if(zone.lastChild) zone.removeChild(zone.lastChild);
        if(board) zone.appendChild(board);
    },
    _onClick: function(){
        var obj = ZebraUI.divByName[this.id];
        if(obj)
        {
            switch(obj.level) {
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
                        ZebraUI._loadJS(obj.tc_path);
                        ZebraUI._createDivTC(obj.obj_board);
                        ZebraUI._attachBoard(ZebraUI.divZone[3], obj.obj_board);
                    }
                    break;
                case 3:
                    {
                    }
                    break;
                default:
                    {
                    }
                    break;
            }
        }
    }
};

window.onload = function() {
    ZebraUI.init();

    for(var i = 0; i<dataArr.length; i++)
    {
        for(var j = 0; j<dataArr[i].children.length; j++)
        {
            for(var k = 0; k<dataArr[i].children[j].children.length; k++)
            {
                ZebraUI.addTC(dataArr[i].name, dataArr[i].children[j].name, dataArr[i].children[j].children[k].name);
            }
        }
    }

    ZebraUI.draw();
};


/*
 var a = document.createElement('A');
 a.innerText = tc_data[i].children[j].name;
 div_btn.appendChild(a);
 */

/*
 var moveFocus = function(next){
 document.getElementById(next).focus();
 };

 var selectDIV = function(divID){
 $(divID).css("box-shadow", "0px 0px 5px 1px red inset");
 };

 var unselectDIV = function(divID){
 $(divID).css("box-shadow", "none");
 };

 $("#level2").focusin(function() {
 $("#level2").css("box-shadow", "0px 0px 5px 1px red inset");
 });
 $("#level2").focusout(function() {
 $("#level2").css("box-shadow", "none");
 });

 $("#CEHTML").focusin(function() {
 $("#CEHTML").css("box-shadow", "0px 0px 5px 1px red inset");
 });
 $("#CEHTML").focusout(function() {
 $("#CEHTML").css("box-shadow", "none");
 });
 */






