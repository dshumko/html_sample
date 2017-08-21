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
test("onChannelChangeError", function() {
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

test("onPlayStateChange", function() {
    try {
        ok(videoBroadcast.onPlayStateChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

test("onChannelChangeSucceeded", function() {
    try {
        ok(videoBroadcast.onChannelChangeSucceeded !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onFullScreenChange", function() {
    try {
        ok(videoBroadcast.onFullScreenChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onfocus", function() {
    try {
        ok(videoBroadcast.onfocus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onblur", function() {
    try {
        ok(videoBroadcast.onblur !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
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
test("onPlaySpeedChanged", function() {
    try {
        ok(videoBroadcast.onPlaySpeedChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onPlayPositionChanged", function() {
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
test("onRecordingEvent", function() {
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
test("onplaySpeedsArrayChanged", function() {
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
test("onProgrammesChanged", function() {
    try {
        ok(videoBroadcast.onProgrammesChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("parental ratings errors");
test("onParentalRatingChange", function() {
    try {
        ok(videoBroadcast.onParentalRatingChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onParentalRatingError", function() {
    try {
        ok(videoBroadcast.onParentalRatingError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("DRM rights errors");
test("onDRMRightsError", function() {
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
});


module("ChannelConfig");
test("channelList", function() {
    try {
        ok((channelList = channelConfig.channelList) !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
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
test("onChannelScan", function() {
    try {
        ok(channelConfig.onChannelScan !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onChannelListUpdate", function() {
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


module("ChannelList");
test("getChannel()", function() {
    try {
        ok(channelList.getChannel !== undefined, "is exists");
        channel = channelList[0];
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannelByTriplet()", function() {
    try {
        ok(channelList.getChannelByTriplet !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannelBySourceID()", function() {
    try {
        ok(channelList.getChannelBySourceID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Channel");
test("channelType", function() {
    try {
        ok(channel.channelType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("idType", function() {
    try {
        ok(channel.idType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("ccid", function() {
    try {
        ok(channel.ccid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("tunerID", function() {
    try {
        ok(channel.tunerID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onid", function() {
    try {
        ok(channel.onid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("nid", function() {
    try {
        ok(channel.nid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("tsid", function() {
    try {
        ok(channel.tsid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sid", function() {
    try {
        ok(channel.sid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("sourceID", function() {
    try {
        ok(channel.sourceID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("freq", function() {
    try {
        ok(channel.freq !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("cni", function() {
    try {
        ok(channel.cni !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("name", function() {
    try {
        ok(channel.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("majorChannel", function() {
    try {
        ok(channel.majorChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("minorChannel", function() {
    try {
        ok(channel.minorChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("dsd", function() {
    try {
        ok(channel.dsd !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("favourite", function() {
    try {
        ok(channel.favourite !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("favIDs", function() {
    try {
        ok(channel.favIDs !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("locked", function() {
    try {
        ok(channel.locked !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("manualBlock", function() {
    try {
        ok(channel.manualBlock !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("ipBroadcastID", function() {
    try {
        ok(channel.ipBroadcastID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("channelMaxBitRate", function() {
    try {
        ok(channel.channelMaxBitRate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("channelTTR", function() {
    try {
        ok(channel.channelTTR !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("recordable", function() {
    try {
        ok(channel.recordable !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Metadata extensions to Channel");
test("longName", function() {
    try {
        ok(channel.longName !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("description", function() {
    try {
        ok(channel.description !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("authorised", function() {
    try {
        ok(channel.authorised !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("genre", function() {
    try {
        ok(channel.genre !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("hidden", function() {
    try {
        ok(channel.hidden !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("is3D", function() {
    try {
        ok(channel.is3D !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("isHD", function() {
    try {
        ok(channel.isHD !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("logoURL", function() {
    try {
        ok(channel.logoURL !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getField()", function() {
    try {
        ok(channel.getField !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getLogo()", function() {
    try {
        ok(channel.getLogo !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("FavouriteListCollection");
test("getFavouriteList()", function() {
    try {
        ok(favouriteListCollection.getFavouriteList !== undefined, "is exists");
        favouriteList = favouriteListCollection[0];
    } catch (e) {
        ok (false, "not exists");
    }
});
test("createFavouriteList()", function() {
    try {
        ok(favouriteListCollection.createFavouriteList !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("remove()", function() {
    try {
        ok(favouriteListCollection.remove !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("commit()", function() {
    try {
        ok(favouriteListCollection.commit !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("activateFavouriteList()", function() {
    try {
        ok(favouriteListCollection.activateFavouriteList !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("FavouriteList");
test("favID", function() {
    try {
        ok(favouriteList.favID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("name", function() {
    try {
        ok(favouriteList.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannel()", function() {
    try {
        ok(favouriteList.getChannel !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannelByTriplet()", function() {
    try {
        ok(favouriteList.getChannelByTriplet !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("getChannelBySourceID()", function() {
    try {
        ok(favouriteList.getChannelBySourceID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("Extensions to FavouriteList");
test("insertBefore()", function() {
    try {
        ok(favouriteList.insertBefore !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("remove()", function() {
    try {
        ok(favouriteList.remove !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("commit()", function() {
    try {
        ok(favouriteList.commit !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("ChannelScanOptions");
test("channelType", function() {
    try {
        ok(channelScanOptions.channelType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("replaceExisting", function() {
    try {
        ok(channelScanOptions.replaceExisting !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	DVBTChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_T);
} catch (e) {
	
}

module("DVBTChannelScanParameters");
test("startFrequency", function() {
    try {
        ok(DVBTChannelScanParameters.startFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("endFrequency", function() {
    try {
        ok(DVBTChannelScanParameters.endFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("raster", function() {
    try {
        ok(DVBTChannelScanParameters.raster !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("ofdm", function() {
    try {
        ok(DVBTChannelScanParameters.ofdm !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("modulationModes", function() {
    try {
        ok(DVBTChannelScanParameters.modulationModes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("bandwidth", function() {
    try {
        ok(DVBTChannelScanParameters.bandwidth !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	DVBSChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_S);
} catch (e) {
	
}
module("DVBSChannelScanParameters");
test("startFrequency", function() {
    try {
        ok(DVBSChannelScanParameters.startFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("endFrequency", function() {
    try {
        ok(DVBSChannelScanParameters.endFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("modulationModes", function() {
    try {
        ok(DVBSChannelScanParameters.modulationModes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("symbolRate", function() {
    try {
        ok(DVBSChannelScanParameters.symbolRate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("polarisation", function() {
    try {
        ok(DVBSChannelScanParameters.polarisation !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("codeRate", function() {
    try {
        ok(DVBSChannelScanParameters.codeRate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("orbitalPosition", function() {
    try {
        ok(DVBSChannelScanParameters.orbitalPosition !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("networkId", function() {
    try {
        ok(DVBSChannelScanParameters.networkId !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	DVBCChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_C);
} catch (e) {
	
}
module("DVBCChannelScanParameters");
test("startFrequency", function() {
    try {
        ok(DVBCChannelScanParameters.startFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("endFrequency", function() {
    try {
        ok(DVBCChannelScanParameters.endFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("raster", function() {
    try {
        ok(DVBCChannelScanParameters.raster !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("startNetworkScanOnNIT", function() {
    try {
        ok(DVBCChannelScanParameters.startNetworkScanOnNIT !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("modulationModes", function() {
    try {
        ok(DVBCChannelScanParameters.modulationModes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("symbolRate", function() {
    try {
        ok(DVBCChannelScanParameters.symbolRate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("symbolRate", function() {
    try {
        ok(DVBCChannelScanParameters.symbolRate !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


try {
	ATSCTChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_ATSC_T);
} catch (e) {
	
}
module("ATSCTChannelScanParameters");
test("startFrequency", function() {
    try {
        ok(ATSCTChannelScanParameters.startFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("endFrequency", function() {
    try {
        ok(ATSCTChannelScanParameters.endFrequency !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("raster", function() {
    try {
        ok(ATSCTChannelScanParameters.raster !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("modulationModes", function() {
    try {
        ok(ATSCTChannelScanParameters.modulationModes !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

