function parseQueryString() {
    var getVars = new Array();
    var qString = unescape(top.location.search.substring(1));
    var pairs = qString.split(/&/);
    for (var i in pairs) {
        var nameVal = pairs[i].split(/=/);
        getVars[nameVal[0]] = nameVal[1];
    }
    return getVars;
}


var VK_ENTER					=  13;
var VK_PAUSE					=  19;
var VK_PAGE_UP					=  33;
var VK_PAGE_DOWN				=  34;
var VK_LEFT						=  37;
var VK_UP						=  38;
var VK_RIGHT					=  39;
var VK_DOWN						=  40;
var VK_0						=  48;
var VK_1						=  49;
var VK_2						=  50;
var VK_3						=  51;
var VK_4						=  52;
var VK_5						=  53;
var VK_6						=  54;
var VK_7						=  55;
var VK_8						=  56;
var VK_9						=  57;
var VK_RED						= 403;
var VK_GREEN					= 404;
var VK_YELLOW					= 405;
var VK_BLUE					= 406;

var VK_REWIND					= 412;
var VK_FAST_FWD					= 417;

var VK_STOP					= 413;
var VK_STOP_ALT					= 57903;
var VK_PLAY					= 415;

var VK_FOWARD_SEEK				= 425;  //for HMS
var VK_BACKWARD_SEEK				= 424; 	//for HMS
var VK_CH_UP					= 427;
var VK_CH_DOWN					= 428;
//var VK_FAST_FWD_ALT				= 57907;
//var VK_REWIND_ALT				= 57902;
var VK_INFO					= 457;
var VK_BACK                     = 461;//57951;//461;

function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }	
  return request;
}
