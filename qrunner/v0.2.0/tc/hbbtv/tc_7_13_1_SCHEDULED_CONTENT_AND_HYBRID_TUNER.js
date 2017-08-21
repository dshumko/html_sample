//start test
var oipfobjectFactory = window.oipfObjectFactory;
var videoBroadcast = undefined;
var channelConfig = undefined;
var channelList = undefined;
var channel = undefined;
var favouriteListCollection = undefined;
var favouriteList = undefined;
var channelScanOptions = undefined;
var DVBTChannelScanParameters = undefined;
var DVBSChannelScanParameters = undefined;
var DVBCChannelScanParameters = undefined;
var StreamEvent = undefined; // undefined
var ATSCTChannelScanParameters = undefined;
var current_channel = undefined;

var ID_DVB_T = 12;
var ID_DVB_T2 = 16;
var ID_DVB_C = 10;
var ID_DVB_C2 = 14;
var ID_DVB_S = 11;
var ID_DVB_S2 = 15;
var ID_ATSC_T = 30;


var POSITION_START = 0;
var POSITION_CURRENT = 1;
var POSITION_END = 2;

var _body = document.getElementById('qrunner');
var videoBroadcast = document.createElement('object');
videoBroadcast.id = 'video';
videoBroadcast.type = 'video/broadcast';
_body.appendChild(videoBroadcast);

/*
if( oipfobjectFactory !== undefined )
{
	try {
		videoBroadcast = oipfobjectFactory.createVideoBroadcastObject();
	}
   	catch (e){
        console.log(e);
    }
}
*/

var __log = function(msg){
    QRunner.view.console.log(msg);
}

var __clear = function(){
    QRunner.view.console.clear();
}

try{
	videoBroadcast.bindToCurrentChannel();
} catch(e){
    __log(e);
    console.log(e);
}


if( oipfobjectFactory !== undefined )
{
    try {
    	channelConfig = oipfobjectFactory.createChannelConfig();
		current_channel = videoBroadcast.currentChannel;
		__log("Current Channel Name :: " + current_channel.name);
    } catch (e)
    {
        console.log(e);
    }
}

module("7.13.1 video/broadcast");
test("width", function() {
    try {
        ok(videoBroadcast.width !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("height", function() {
    try {
        ok(videoBroadcast.height !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("fullScreen", function() {
    try {
        ok(videoBroadcast.fullScreen !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("data", function() {
    try {
        ok(videoBroadcast.data !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onChannelChangeError()", function() {
    try {
        ok(videoBroadcast.onChannelChangeError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playState", function() {
    try {
        ok(videoBroadcast.playState !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onPlayStateChange()", function() {
    try {
        ok(videoBroadcast.onPlayStateChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onChannelChangeSucceeded()", function() {
    try {
        ok(videoBroadcast.onChannelChangeSucceeded !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onFullScreenChange()", function() {
    try {
        ok(videoBroadcast.onFullScreenChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onfocus()", function() {
    try {
        ok(videoBroadcast.onfocus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onblur()", function() {
    try {
        ok(videoBroadcast.onblur !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
if(HBBTV_ON==0){
	test("playerCapabilities", function() {
		try {
			ok(videoBroadcast.playerCapabilities !== undefined, "is exists");
		} catch (e) {
			ok (false, "not exists");
		}
	});
	test("allocationMethod", function() {
	    try {
	        ok(videoBroadcast.allocationMethod !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}
test("getChannelConfig()", function() {
    try {
        ok(videoBroadcast.getChannelConfig !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("bindToCurrentChannel()", function() {
    try {
        ok(videoBroadcast.bindToCurrentChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createChannelObject()", function() {
    try {
        ok(videoBroadcast.createChannelObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setChannel() - optional", function() {
    try {
        ok(videoBroadcast.setChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("prevChannel()", function() {
    try {
        ok(videoBroadcast.prevChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("nextChannel()", function() {
    try {
        ok(videoBroadcast.nextChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setFullScreen()", function() {
    try {
        ok(videoBroadcast.setFullScreen !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
if(HBBTV_ON==0){
	test("setVolume()", function() {
	    try {
	        ok(videoBroadcast.setVolume !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getVolume()", function() {
	    try {
	        ok(videoBroadcast.getVolume !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}
test("release()", function() {
    try {
        ok(videoBroadcast.release !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stop()", function() {
    try {
        ok(videoBroadcast.stop !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("7.13.2 recording and time-shift");
test("onPlaySpeedChanged()", function() {
    try {
        ok(videoBroadcast.onPlaySpeedChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onPlayPositionChanged()", function() {
    try {
        ok(videoBroadcast.onPlayPositionChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playbackOffset", function() {
    try {
        ok(videoBroadcast.playbackOffset !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("maxOffset", function() {
    try {
        ok(videoBroadcast.maxOffset !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("recordingState", function() {
    try {
        ok(videoBroadcast.recordingState !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onRecordingEvent()", function() {
    try {
        ok(videoBroadcast.onRecordingEvent !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playPosition", function() {
    try {
        ok(videoBroadcast.playPosition !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playSpeed", function() {
    try {
        ok(videoBroadcast.playSpeed !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playSpeeds[]", function() {
    try {
        ok(videoBroadcast.playSpeeds !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onplaySpeedsArrayChanged()", function() {
    try {
        ok(videoBroadcast.onplaySpeedsArrayChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("timeShiftMode", function() {
    try {
        ok(videoBroadcast.timeShiftMode !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("currentTimeShiftMode", function() {
    try {
        ok(videoBroadcast.currentTimeShiftMode !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("recordNow()", function() {
    try {
        ok(videoBroadcast.recordNow !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stopRecording()", function() {
    try {
        ok(videoBroadcast.stopRecording !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("pause()", function() {
    try {
        ok(videoBroadcast.pause !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("resume()", function() {
    try {
        ok(videoBroadcast.resume !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setSpeed()", function() {
    try {
        ok(videoBroadcast.setSpeed !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("seek()", function() {
    try {
        ok(videoBroadcast.seek !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stopTimeshift()", function() {
    try {
        ok(videoBroadcast.stopTimeshift !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setChannel()", function() {
    try {
        ok(videoBroadcast.setChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module(" - TSR Playback ");

/* Boolean seek( Integer offset, Integer reference ) */
asyncTest("Seek() - " + videoBroadcast.maxOffset + "s", function() {
    try {
        __clear();
        __log("timeShiftMode ::" + videoBroadcast.timeShiftMode);
        __log("currentTimeShiftMode ::" + videoBroadcast.currentTimeShiftMode);
        __log("playbackOffset ::" + videoBroadcast.playbackOffset);
        __log("maxOffset ::" + videoBroadcast.maxOffset);

		var offset = videoBroadcast.maxOffset;
		if(offset > 30) offset = 30;

        var tc_timer = setTimeout(function(){
            QUnit.start();
			videoBroadcast.stopTimeshift();
            ok(true, "seek ok");
        }, 1000 * (offset -1));

        videoBroadcast.onPlayStateChange = function ( state, error ) {
            __log(" >> onPlayStateChange :: " +  state + "/" + error );
        }

        var ret = videoBroadcast.seek(offset,POSITION_END);
		if(ret == false)
        	ok (false, "seek() return value Error ");

    } catch (e) {
		__log(e);
        ok (false, "seek() Error");
    }
});

test("Playback 2x", function() {
    try {
        ok(videoBroadcast.width !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module(" - Recording ");

var curr_rec = null;
asyncTest("60s Recording", function() {
    try {
        var tc_timer = setTimeout(function(){
            videoBroadcast.stopRecording();
            QUnit.start();
            ok(true, "recordNow ok");
        }, 1000 * 60 + 1000);

        videoBroadcast.onRecordingEvent = function ( state, error, recordingId ){
            curr_rec = recordingId;
            __log(" >> onRecordingEvent  :: " +  state + "/" + error + "/" + recordingId );
        };

        var id  = videoBroadcast.recordNow(60);
        __log("recordNow() - " + id);
    } catch (e) {
		__log(e);
        ok (false, "recoredNow() Error");
    }
});

module(" - Channel Change ");

asyncTest("Next Channel", function() {
    try {
        var tc_timer = setTimeout(function(){
            QUnit.start();
            ok(false, "nextChannel timeout");
        }, 3000);

        videoBroadcast.onChannelChangeSucceeded = function(){
			__clear();
            __log("onChannelChangeSucceeded !!");
            clearTimeout(tc_timer);
            QUnit.start();
            ok(true, "nextChannel ok");
        };

        videoBroadcast.nextChannel();
    } catch (e) {
        ok (false, "nextChannel() Error");
    }
});

asyncTest("Previous Channel", function() {
    try {
        var tc_timer = setTimeout(function(){
            QUnit.start();
            ok(false, "prevChannel timeout");
        }, 3000);

        videoBroadcast.onChannelChangeSucceeded = function(){
			__clear();
            __log("onChannelChangeSucceeded !!");
            clearTimeout(tc_timer);
            QUnit.start();
            ok(true, "prevChannel ok");
        };

        videoBroadcast.prevChannel();
    } catch (e) {
        ok (false, "prevChannel() Error");
    }
});

asyncTest("Set Current Channel", function() {
    try {
        var tc_timer = setTimeout(function(){
            QUnit.start();
            ok(false, "setChannel timeout");
        }, 3000);

        videoBroadcast.onChannelChangeSucceeded = function(){
			__clear();
            __log("onChannelChangeSucceeded !!");
            clearTimeout(tc_timer);
            QUnit.start();
            ok(true, "setChannel ok");
        };

        videoBroadcast.setChannel(current_channel);
    } catch (e) {
		__log(e);	
        ok (false, "setChannel() Error");
    }
});

asyncTest("FullScreen", function() {
    var pass = false;
    try {
        var tc_timer = setTimeout(function(){
            QUnit.start();
            if(videoBroadcast.fullScreen)
                pass = true;
            videoBroadcast.setFullScreen(false);
            ok(pass, "fullScreen true.");
        }, 1000);

        videoBroadcast.setFullScreen(true);
    } catch (e) {
        ok (false, "not exists");
    }
});

