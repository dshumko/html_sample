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



try {
	channelList = channelConfig.channelList;
} catch (e) {
	
}
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

if(HBBTV_ON==0){
test("getChannelBySourceID()", function() {
    try {
        ok(channelList.getChannelBySourceID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}


module("Channel");
test("channelType", function() {
    try {
        ok(channel.channelType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("idType", function() {
    try {
        ok(channel.idType !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("ccid", function() {
    try {
        ok(channel.ccid !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
test("tunerID", function() {
    try {
        ok(channel.tunerID !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});}

test("onid", function() {
    try {
        ok(channel.onid !== undefined, "is exists");
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

if(HBBTV_ON==0){
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
});}

test("name", function() {
    try {
        ok(channel.name !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
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
});}

test("dsd", function() {
    try {
        ok(channel.dsd !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
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
}


try {
	favouriteListCollection = channelConfig.favouriteLists;
} catch (e) {
	
}
if(HBBTV_ON==0){
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



try {
	channelScanOptions = channelConfig.createChannelScanOptionsObject();
} catch (e) {
	
}
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
}
