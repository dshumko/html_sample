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

var ID_DVB_T = 12;
var ID_DVB_T2 = 16;
var ID_DVB_C = 10;
var ID_DVB_C2 = 14;
var ID_DVB_S = 11;
var ID_DVB_S2 = 15;
var ID_ATSC_T = 30;

if( oipfobjectFactory !== undefined )
{
    try {
    	videoBroadcast = oipfobjectFactory.createVideoBroadcastObject();
    } catch (e)
    {
        console.log(e);
    }
}
if( oipfobjectFactory !== undefined )
{
    try {
    	channelConfig = oipfobjectFactory.createChannelConfig();
    } catch (e)
    {
        console.log(e);
    }
}

module("video/broadcast");
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
test("setChannel()", function() {
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
});}

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


module("recording and time-shift");
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


module("access to EIT p/f");
test("programmes", function() {
    try {
        ok(videoBroadcast.programmes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onProgrammesChanged()", function() {
    try {
        ok(videoBroadcast.onProgrammesChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("parental ratings errors");
test("onParentalRatingChange()", function() {
    try {
        ok(videoBroadcast.onParentalRatingChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onParentalRatingError()", function() {
    try {
        ok(videoBroadcast.onParentalRatingError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("DRM rights errors");
test("onDRMRightsError()", function() {
    try {
        ok(videoBroadcast.onDRMRightsError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("current channel information");
test("currentChannel", function() {
    try {
        ok(videoBroadcast.currentChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
module("synchronization");
test("addStreamEventListener()", function() {
    try {
        ok(videoBroadcast.addStreamEventListener !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("removeStreamEventListener()", function() {
    try {
        ok(videoBroadcast.removeStreamEventListener !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("eventName", function() {
    try {
        ok(StreamEvent.eventName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("data", function() {
    try {
        ok(StreamEvent.data !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("text", function() {
    try {
        ok(StreamEvent.text !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("status", function() {
    try {
        ok(StreamEvent.status !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}


module("ChannelConfig");
test("channelList", function() {
    try {
        ok((channelList = channelConfig.channelList) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("favouriteLists", function() {
    try {
        ok((favouriteListCollection = channelConfig.favouriteLists) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("currentFavouriteList", function() {
    try {
        ok(channelConfig.currentFavouriteList !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onChannelScan()", function() {
    try {
        ok(channelConfig.onChannelScan !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onChannelListUpdate()", function() {
    try {
        ok(channelConfig.onChannelListUpdate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("currentChannel", function() {
    try {
        ok(channelConfig.currentChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createFilteredList()", function() {
    try {
        ok(channelConfig.createFilteredList !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("startScan()", function() {
    try {
        ok(channelConfig.startScan !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stopScan()", function() {
    try {
        ok(channelConfig.stopScan !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createChannelList()", function() {
    try {
        ok(channelConfig.createChannelList !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createChannelObject()", function() {
    try {
        ok(channelConfig.createChannelObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createChannelScanParametersObject()", function() {
    try {
        ok(channelConfig.createChannelScanParametersObject !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createChannelScanOptionsObject()", function() {
    try {
        ok(channelConfig.createChannelScanOptionsObject !== undefined, "is exists");
        channelScanOptions = channelConfig.createChannelScanOptionsObject();
    } catch (e) {
        ok (false, "not exists");
    }
});
}



