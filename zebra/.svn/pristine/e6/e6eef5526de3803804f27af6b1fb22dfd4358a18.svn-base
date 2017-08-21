module("7.6 CONTENT_SERVICE PROTECTION API");

var LOG = function(text) {
	window.debug("##### DRMAgentLOG : " + text);
};
var oipfobjectFactory = window.oipfObjectFactory;
var drmAgent = undefined;
var avControl = undefined;

var returnMsgID = -1;
var result = -1;
var error_state = -1;
var SPEED_NORMAL = 1;

var VIDEO_CONTENT = "http://10.0.12.35/media/wmdrm10.wmv";
var PLAYREADY_CONTENT = "http://10.0.12.35/media/playready.wmv";
var AUDIO_CONTENT = "http://10.0.12.33/media/audio_sample.mp3";
var DUMMY_CONTENT = "http://10.0.12.33/media/dummy.mp4";

var _body = document.getElementById('qrunner');
var vplayer  = document.createElement('object');
vplayer.id = 'video';
vplayer.type = 'video/mp4';
_body.appendChild(vplayer);

if( oipfobjectFactory !== undefined )
{
    try {
        drmAgent = oipfobjectFactory.createDrmAgentObject();
    } catch (e)
    {
        console.log(e);
    }
}


if( oipfobjectFactory !== undefined )
{
    try {
    	avControl = oipfobjectFactory.createVideoMpegObject();
    } catch (e)
    {
        console.log(e);
    }
}

var sendDRMMessageXML = function (msgType, xmlPath, DRMSystemID) {
    try {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", xmlPath, true);
		rawFile.onreadystatechange = function ()
		{
		    if(rawFile.readyState === 4)
		    {
		        var allText = rawFile.responseText;
		        LOG("sendDRMMessage( " + msgType + ", " + allText + ", " + DRMSystemID);
		        returnMsgID = drmAgent.sendDRMMessage(msgType, allText, DRMSystemID);
		        LOG("sendDRMMessage : returnMsgID = " + returnMsgID);
		    }
		};
		rawFile.send();
    } catch (e)
    {
    	console.log(e);
    }
};

var mediaPlay = function (mediaPlayer, contents) {
	mediaPlayer = document.getElementById('video');
	mediaPlayer.data = contents;
	mediaPlayer.width = 200;
	mediaPlayer.height = 150;
	mediaPlayer.play(SPEED_NORMAL);
	LOG("play - " + contents);
};


module("application/oipfDrmAgent");
asyncTest("sendDRMMessage()", function () {
	try {
	    var timer = setTimeout(function () { 
	    	LOG("TIMEOUT - sendDRMMessage()"); 
	    	QUnit.start();
	    	if( result > -1 )
	    		ok(true, "sendDRMMessage() success !");
	    	else
	    		ok(false, "sendDRMMessage() fail !");
	    }, 5000);
	
	    result = -1;
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			QUnit.start();
			result = resultCode;
			if( result > -1 )
			{
				ok(true, "sendDRMMessage() success !");
			}
			else
			{
				ok(false, "sendDRMMessage() fail !");
			}
			clearTimeout(timer);
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm.xml", "urn:dvb:casystemid:19219");
	} catch (e)
	{
		QUnit.start();
		ok(false, "not exists");
		clearTimeout(timer);
		
	}
});
asyncTest("senddrm->play->drmsuccess->play", function () {
    try {
	    var timer = setTimeout(function () {   
	    	LOG("TIMEOUT - onDRMMessageResult=success"); 
	    	QUnit.start();
	        if (vplayer.playState == 1) {
	            vplayer.stop();
	            ok (true, "onDRMMessageResult=success success");
	        }
	        else {
	            vplayer.stop();
	        	ok (false, "onDRMMessageResult=success fail");
	        }
	    }, 30000);
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			LOG("onDRMMessageResult=success : resultCode : " + resultCode);
			if( resultCode == 0 )
			{
				vplayer.play(SPEED_NORMAL);
				LOG("play - " + VIDEO_CONTENT);
			}
			else
			{
				QUnit.start();
				ok (false, "onDRMMessageResult=success fail");
				clearTimeout(timer);
			}
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm.xml", "urn:dvb:casystemid:19219");
		vplayer = document.getElementById('video');
		vplayer.data = VIDEO_CONTENT;
		vplayer.width = 200;
		vplayer.height = 150;
		vplayer.play(SPEED_NORMAL);
		LOG("play - " + VIDEO_CONTENT);
    } catch (e) {
    	QUnit.start();
    	clearTimeout(timer);
    	ok (false, "onDRMMessageResult=success fail");
    }
});
asyncTest("onDRMMessageResult=success", function () {
    try {
	    var timer = setTimeout(function () {   
	    	LOG("TIMEOUT - onDRMMessageResult=success"); 
	    	QUnit.start();
	        if (vplayer.playState == 1) {
	            vplayer.stop();
	            ok (true, "onDRMMessageResult=success success");
	        }
	        else {
	            vplayer.stop();
	        	ok (false, "onDRMMessageResult=success fail");
	        }
	    }, 30000);
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			LOG("onDRMMessageResult=success : resultCode : " + resultCode);
			if( resultCode == 0 )
			{
				vplayer = document.getElementById('video');
				vplayer.data = VIDEO_CONTENT;
				vplayer.width = 200;
				vplayer.height = 150;
				vplayer.play(SPEED_NORMAL);
				LOG("play - " + VIDEO_CONTENT);
			}
			else
			{
				QUnit.start();
				ok (false, "onDRMMessageResult=success fail");
				clearTimeout(timer);
			}
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm.xml", "urn:dvb:casystemid:19219");
    } catch (e) {
    	QUnit.start();
    	clearTimeout(timer);
    	ok (false, "onDRMMessageResult=success fail");
    }
});
asyncTest("onDRMMessageResult=unKnowMIMEtype", function () {
	try {
	    var timer = setTimeout(function () {  
	    	LOG("TIMEOUT - onDRMMessageResult=unKnowMIMEtype"); 
	    	QUnit.start();
	    	ok(false, "onDRMMessageResult=unKnowMIMEtype fail !");
	    }, 10000);
	    
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			LOG("onDRMMessageResult=unKnowMIMEtype : resultCode : " + resultCode);
			if( resultCode == 3 )
			{
				QUnit.start();
				ok(true, "onDRMMessageResult=unKnowMIMEtype success !");
				clearTimeout(timer);
			}
			else
			{
				QUnit.start();
				ok (false, "onDRMMessageResult=unKnowMIMEtype fail");
				clearTimeout(timer);
			}
		};
		sendDRMMessageXML("application/test", 
				"res/tc_res/drm.xml", "urn:dvb:casystemid:19219");
    } catch (e) {
    	QUnit.start();
    	clearTimeout(timer);
    	ok (false, "onDRMMessageResult=unKnowMIMEtype fail");
    }
});
asyncTest("onDRMMessageResult=UnknownDRMSystem", function () {
	try {
	    var timer = setTimeout(function () {  
	    	LOG("TIMEOUT - onDRMMessageResult=UnknownDRMSystem");
	    	QUnit.start();
	    	ok(false, "onDRMMessageResult=UnknownDRMSystem fail !");
	    }, 10000);
	    
	    var result = -1;
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			LOG("onDRMMessageResult=UnknownDRMSystem : resultCode : " + resultCode);
			if( resultCode == 5 )
			{
				QUnit.start();
				ok(true, "onDRMMessageResult=UnknownDRMSystem success !");
				clearTimeout(timer);
			}
			else
			{
				QUnit.start();
				ok (false, "onDRMMessageResult=UnknownDRMSystem fail");
				clearTimeout(timer);
			}
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm.xml", "urn:dvb:casystemid:00000");
    } catch (e) {
    	QUnit.start();
    	clearTimeout(timer);
    	ok (false, "onDRMMessageResult=UnknownDRMSystem fail");
    }
});
asyncTest("onDRMMessageResult=wrongFormat", function () {
	try {
	    var timer = setTimeout(function () { 
	    	LOG("TIMEOUT - onDRMMessageResult=wrongFormat");
	    	QUnit.start();
	    	ok(false, "onDRMMessageResult=wrongFormat fail !");
	    }, 10000);

		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			LOG("onDRMMessageResult=wrongFormat : resultCode : " + resultCode);
			if( resultCode == 6 )
			{
				QUnit.start();
				ok(true, "onDRMMessageResult=wrongFormat success !");
				clearTimeout(timer);
			}
			else
			{
				QUnit.start();
				ok (false, "onDRMMessageResult=wrongFormat fail");
				clearTimeout(timer);
			}
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm_wrong.xml", "urn:dvb:casystemid:19219");
    } catch (e) {
    	QUnit.start();
    	clearTimeout(timer);
    	ok (false, "onDRMMessageResult=wrongFormat fail");
    }
});
asyncTest("onDRMMessageResult->msgID", function () {
    try {
	    var timer = setTimeout(function () {  
	    	LOG("TIMEOUT - onDRMMessageResult->msgID");
	    	QUnit.start();
	    	ok (false, "onDRMMessageResult->msgID fail");
	    }, 10000);
	    
	    returnMsgID = -1;
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			LOG("onDRMMessageResult->msgID : return id = " + returnMsgID + " , msgID = " + msgID);
		    if( returnMsgID == msgID )
		    {
		    	QUnit.start();
		    	ok (ok, "onDRMMessageResult->msgID success");
		    	clearTimeout(timer);
		    }
		    else
		    {
		    	QUnit.start();
		    	ok (false, "onDRMMessageResult->msgID fail");
		    	clearTimeout(timer);
		    }
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm.xml", "urn:dvb:casystemid:19219");
    } catch (e) {
    	QUnit.start();
    	ok (false, "onDRMMessageResult->msgID fail");
    	clearTimeout(timer);
    }
});
asyncTest("onDRMRightsError", function () {
    try {
	    var timer = setTimeout(function () {  
	    	LOG("TIMEOUT - onDRMRightsError");
	    	QUnit.start();
	    	if( error_state > -1 )
	    	{
	    		vplayer.stop();
	    		ok (true, "onDRMRightsError success");
	    	}
	    	else
	    	{
	            vplayer.stop();
	        	ok (false, "onDRMRightsError fail");
	    	}
	    }, 10000);
	    
	    error_state = -1;
		drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode) {
			vplayer = document.getElementById('video');
			vplayer.data = VIDEO_CONTENT;
			vplayer.width = 200;
			vplayer.height = 150;
			vplayer.onDRMRightsError = function(errorState, contentID, DRMSystemID, rightsIssuerURL) {
	    		error_state = errorState;
	    		LOG("onDRMRightsError : errorState = " + errorState 
	    				+ " contentID = " + contentID + " DRMSystemID = " + DRMSystemID + " rightsIssuerURL = " + rightsIssuerURL);
	        };
			vplayer.play(SPEED_NORMAL);
			LOG("play - " + VIDEO_CONTENT);
		};
		sendDRMMessageXML("application/vnd.ms-playready.initiator+xml", 
				"res/tc_res/drm_error.xml", "urn:dvb:casystemid:19219");
    } catch (e) {
    	QUnit.start();
    	clearTimeout(timer);
    	ok (false, "onDRMRightsError fail");
    }
});


if( HBBTV_ON == 0 ) {
	test("onDRMSystemStatusChange", function() {
	    try {
	        ok(drmAgent.onDRMSystemStatusChange !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}
test("onDRMSystemMessage", function() {
    try {
        ok(drmAgent.onDRMSystemMessage !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
if( HBBTV_ON == 0 ) {
	test("DRMSystemStatus()", function() {
	    try {
	        ok(drmAgent.DRMSystemStatus !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}
test("canPlayContent()", function() {
    try {
        ok(drmAgent.canPlayContent !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("canRecordContent()", function() {
    try {
        ok(drmAgent.canRecordContent !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});