describe("7.13 Scheduled content and hybrid tuner APIs", function() {
    var oipfobjectFactory;
    var videoBroadcast;
    var channelConfig;
    var channelList;
    var channel;
    var favouriteListCollection;
    var favouriteList;
    var channelScanOptions;
    var dVBTChannelScanParameters;
    var dVBSChannelScanParameters;
    var dVBCChannelScanParameters;
    var streamEvent;
    var aTSCTChannelScanParameters;

    var ID_DVB_T = 12;
    var ID_DVB_T2 = 16;
    var ID_DVB_C = 10;
    var ID_DVB_C2 = 14;
    var ID_DVB_S = 11;
    var ID_DVB_S2 = 15;
    var ID_ATSC_T = 30;

    try{
        oipfobjectFactory = window.oipfObjectFactory;
        videoBroadcast = oipfobjectFactory.createVideoBroadcastObject();
    }catch(e){
        videoBroadcast = undefined;
    }

    describe("7.13.1 The video/broadcast embedded object", function() {
        describe("7.13.1.1 State diagram for video/broadcast objects", function() {
        });
        describe("7.13.1.2 Properties", function() {
            it("width", function() { expect(videoBroadcast.width).toBeDefined(); });
            it("height", function() { expect(videoBroadcast.height).toBeDefined(); });
            it("fullScreen", function() { expect(videoBroadcast.fullScreen).toBeDefined(); });
            it("data", function() { expect(videoBroadcast.data).toBeDefined(); });
            it("onChannelChangeError", function() { expect(videoBroadcast.onChannelChangeError).toBeDefined(); });
            it("playState", function() { expect(videoBroadcast.playState).toBeDefined(); });
            it("onPlayStateChange", function() { expect(videoBroadcast.onPlayStateChange).toBeDefined(); });
            it("onChannelChangeSucceeded", function() { expect(videoBroadcast.onChannelChangeSucceeded).toBeDefined(); });
            it("onFullScreenChange", function() { expect(videoBroadcast.onFullScreenChange).toBeDefined(); });
            it("onfocus", function() { expect(videoBroadcast.onfocus).toBeDefined(); });
            it("onblur", function() { expect(videoBroadcast.onblur).toBeDefined(); });
            it("playerCapabilities", function() { expect(videoBroadcast.playerCapabilities).toBeDefined(); });
            it("allocationMethod", function() { expect(videoBroadcast.allocationMethod).toBeDefined(); });
        });
        describe("7.13.1.3 Methods", function() {
            it("getChannelConfig", function() { expect(videoBroadcast.getChannelConfig).toBeDefined(); });
            it("bindToCurrentChannel", function() { expect(videoBroadcast.bindToCurrentChannel).toBeDefined(); });
            it("createChannelObject", function() { expect(videoBroadcast.createChannelObject).toBeDefined(); });
            it("createChannelObject", function() { expect(videoBroadcast.createChannelObject).toBeDefined(); });
            it("setChannel", function() { expect(videoBroadcast.setChannel).toBeDefined(); });
            it("prevChannel", function() { expect(videoBroadcast.prevChannel).toBeDefined(); });
            it("nextChannel", function() { expect(videoBroadcast.nextChannel).toBeDefined(); });
            it("setFullScreen", function() { expect(videoBroadcast.setFullScreen).toBeDefined(); });
            it("setVolume", function() { expect(videoBroadcast.setVolume).toBeDefined(); });
            it("getVolume", function() { expect(videoBroadcast.getVolume).toBeDefined(); });
            it("release", function() { expect(videoBroadcast.release).toBeDefined(); });
            it("stop", function() { expect(videoBroadcast.stop).toBeDefined(); });
        });
    });
    describe("7.13.2 Extensions to video/broadcast for recording and time-shift", function() {
        describe("7.13.2.1 Constants", function() {
            it("POSITION_START", function() { expect(videoBroadcast.POSITION_START).toBeDefined(); });
            it("POSITION_CURRENT", function() { expect(videoBroadcast.POSITION_CURRENT).toBeDefined(); });
            it("POSITION_END", function() { expect(videoBroadcast.POSITION_END).toBeDefined(); });
        });
        describe("7.13.2.2 Properties", function() {
            it("onPlaySpeedChanged", function() { expect(videoBroadcast.onPlaySpeedChanged).toBeDefined(); });
            it("onPlayPositionChanged", function() { expect(videoBroadcast.onPlayPositionChanged).toBeDefined(); });
            it("playbackOffset", function() { expect(videoBroadcast.playbackOffset).toBeDefined(); });
            it("maxOffset", function() { expect(videoBroadcast.maxOffset).toBeDefined(); });
            it("recordingState", function() { expect(videoBroadcast.recordingState).toBeDefined(); });
            it("onRecordingEvent", function() { expect(videoBroadcast.onRecordingEvent).toBeDefined(); });
            it("playPosition", function() { expect(videoBroadcast.playPosition).toBeDefined(); });
            it("playSpeed", function() { expect(videoBroadcast.playSpeed).toBeDefined(); });
            it("playSpeeds", function() { expect(videoBroadcast.playSpeeds).toBeDefined(); });
            it("onplaySpeedsArrayChanged", function() { expect(videoBroadcast.onplaySpeedsArrayChanged).toBeDefined(); });
            it("timeShiftMode", function() { expect(videoBroadcast.timeShiftMode).toBeDefined(); });
            it("currentTimeShiftMode", function() { expect(videoBroadcast.currentTimeShiftMode).toBeDefined(); });
        });
        describe("7.13.2.3 Methods", function() {
            it("recordNow", function() { expect(videoBroadcast.recordNow).toBeDefined(); });
            it("stopRecording", function() { expect(videoBroadcast.stopRecording).toBeDefined(); });
            it("pause", function() { expect(videoBroadcast.pause).toBeDefined(); });
            it("resume", function() { expect(videoBroadcast.resume).toBeDefined(); });
            it("setSpeed", function() { expect(videoBroadcast.setSpeed).toBeDefined(); });
            it("seek", function() { expect(videoBroadcast.seek).toBeDefined(); });
            it("stopTimeshift", function() { expect(videoBroadcast.stopTimeshift).toBeDefined(); });
            it("setChannel", function() { expect(videoBroadcast.setChannel).toBeDefined(); });
        });
    });
    describe("7.13.3 Extensions to video/broadcast for access to EIT p/f", function() {
        it("programmes", function() { expect(videoBroadcast.programmes).toBeDefined(); });
        it("onProgrammesChanged", function() { expect(videoBroadcast.onProgrammesChanged).toBeDefined(); });
    });
    describe("Extensions to video/broadcast for playback of selected components", function() {
    });
    describe("7.13.5 Extensions to video/broadcast for parental ratings errors", function() {
        it("onParentalRatingChange", function() { expect(videoBroadcast.onParentalRatingChange).toBeDefined(); });
        it("onParentalRatingError", function() { expect(videoBroadcast.onParentalRatingError).toBeDefined(); });
    });
    describe("7.13.6 Extensions to video/broadcast for DRM rights errors", function() {
        it("onDRMRightsError", function() { expect(videoBroadcast.onDRMRightsError).toBeDefined(); });
    });
    describe("7.13.7 Extensions to video/broadcast for current channel information", function() {
        describe("7.13.7.1 Properties", function() {
            it("currentChannel", function() { expect(videoBroadcast.currentChannel).toBeDefined(); });
        });
    });
    describe("7.13.8 Extensions to video/broadcast for creating channel lists from SD&S fragments", function() {
    });
    describe("7.13.9 The ChannelConfig class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
        });
        describe("7.13.9.1 Properties", function() {
            it("channelList", function() { expect(channelConfig.channelList).toBeDefined(); });
            it("favouriteLists", function() { expect(channelConfig.favouriteLists).toBeDefined(); });
            it("currentFavouriteList", function() { expect(channelConfig.currentFavouriteList).toBeDefined(); });
            it("onChannelScan", function() { expect(channelConfig.onChannelScan).toBeDefined(); });
            it("onChannelListUpdate", function() { expect(channelConfig.onChannelListUpdate).toBeDefined(); });
            it("currentChannel", function() { expect(channelConfig.currentChannel).toBeDefined(); });
        });
        describe("7.13.9.2 Methods", function() {
            it("createFilteredList", function() { expect(channelConfig.createFilteredList).toBeDefined(); });
            it("startScan", function() { expect(channelConfig.startScan).toBeDefined(); });
            it("stopScan", function() { expect(channelConfig.stopScan).toBeDefined(); });
            it("createChannelList", function() { expect(channelConfig.createChannelList).toBeDefined(); });
            it("createChannelObject", function() { expect(channelConfig.createChannelObject).toBeDefined(); });
            it("createChannelScanParametersObject", function() { expect(channelConfig.createChannelScanParametersObject).toBeDefined(); });
            it("createChannelScanOptionsObject", function() { expect(channelConfig.createChannelScanOptionsObject).toBeDefined(); });
        });
    });
    describe("7.13.10 The ChannelList class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            channelList = channelConfig.channelList;
        });
        describe("7.13.10.1 Methods", function() {
            it("getChannel", function() { expect(channelList.getChannel).toBeDefined(); });
            it("getChannelByTriplet", function() { expect(channelList.getChannelByTriplet).toBeDefined(); });
            it("getChannelBySourceID", function() { expect(channelList.getChannelBySourceID).toBeDefined(); });
        });
    });
    describe("7.13.11 The Channel class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            channelList = channelConfig.channelList;
            channel = channelList[0];
        });
        describe("7.13.11.1 Constants", function() {
            it("TYPE_TV", function() { expect(channel.TYPE_TV).toBeDefined(); });
            it("TYPE_RADIO", function() { expect(channel.TYPE_RADIO).toBeDefined(); });
            it("TYPE_OTHER", function() { expect(channel.TYPE_OTHER).toBeDefined(); });
            it("TYPE_ALL", function() { expect(channel.TYPE_ALL).toBeDefined(); });
            it("TYPE_HBBTV_DATA", function() { expect(channel.TYPE_HBBTV_DATA).toBeDefined(); });
            it("ID_ANALOG", function() { expect(channel.ID_ANALOG).toBeDefined(); });
            it("ID_DVB_C", function() { expect(channel.ID_DVB_C).toBeDefined(); });
            it("ID_DVB_S", function() { expect(channel.ID_DVB_S).toBeDefined(); });
            it("ID_DVB_T", function() { expect(channel.ID_DVB_T).toBeDefined(); });
            it("ID_DVB_SI_DIRECT", function() { expect(channel.ID_DVB_SI_DIRECT).toBeDefined(); });
            it("ID_DVB_C2", function() { expect(channel.ID_DVB_C2).toBeDefined(); });
            it("ID_DVB_S2", function() { expect(channel.ID_DVB_S2).toBeDefined(); });
            it("ID_DVB_T2", function() { expect(channel.ID_DVB_T2).toBeDefined(); });
            it("ID_ISDB_C", function() { expect(channel.ID_ISDB_C).toBeDefined(); });
            it("ID_ISDB_S", function() { expect(channel.ID_ISDB_S).toBeDefined(); });
            it("ID_ISDB_T", function() { expect(channel.ID_ISDB_T).toBeDefined(); });
            it("ID_ATSC_T", function() { expect(channel.ID_ATSC_T).toBeDefined(); });
            it("ID_IPTV_SDS", function() { expect(channel.ID_IPTV_SDS).toBeDefined(); });
            it("ID_IPTV_URI", function() { expect(channel.ID_IPTV_URI).toBeDefined(); });
        });
        describe("7.13.11.2 Properties", function() {
            it("channelType", function() { expect(channel.channelType).toBeDefined(); });
            it("idType", function() { expect(channel.idType).toBeDefined(); });
            it("ccid", function() { expect(channel.ccid).toBeDefined(); });
            it("tunerID", function() { expect(channel.tunerID).toBeDefined(); });
            it("onid", function() { expect(channel.onid).toBeDefined(); });
            it("nid", function() { expect(channel.nid).toBeDefined(); });
            it("tsid", function() { expect(channel.tsid).toBeDefined(); });
            it("sid", function() { expect(channel.sid).toBeDefined(); });
            it("sourceID", function() { expect(channel.sourceID).toBeDefined(); });
            it("freq", function() { expect(channel.freq).toBeDefined(); });
            it("cni", function() { expect(channel.cni).toBeDefined(); });
            it("name", function() { expect(channel.name).toBeDefined(); });
            it("majorChannel", function() { expect(channel.majorChannel).toBeDefined(); });
            it("minorChannel", function() { expect(channel.minorChannel).toBeDefined(); });
            it("dsd", function() { expect(channel.dsd).toBeDefined(); });
            it("favourite", function() { expect(channel.favourite).toBeDefined(); });
            it("favIDs", function() { expect(channel.favIDs).toBeDefined(); });
            it("locked", function() { expect(channel.locked).toBeDefined(); });
            it("manualBlock", function() { expect(channel.manualBlock).toBeDefined(); });
            it("ipBroadcastID", function() { expect(channel.ipBroadcastID).toBeDefined(); });
            it("channelMaxBitRate", function() { expect(channel.channelMaxBitRate).toBeDefined(); });
            it("channelTTR", function() { expect(channel.channelTTR).toBeDefined(); });
            it("recordable", function() { expect(channel.recordable).toBeDefined(); });
        });
        describe("7.13.11.3 Metadata extensions to Channel", function() {
            describe("7.13.11.3.1 Properties", function() {
                it("longName", function() { expect(channel.longName).toBeDefined(); });
                it("description", function() { expect(channel.description).toBeDefined(); });
                it("authorised", function() { expect(channel.authorised).toBeDefined(); });
                it("genre", function() { expect(channel.genre).toBeDefined(); });
                it("hidden", function() { expect(channel.hidden).toBeDefined(); });
                it("is3D", function() { expect(channel.is3D).toBeDefined(); });
                it("isHD", function() { expect(channel.isHD).toBeDefined(); });
                it("logoURL", function() { expect(channel.logoURL).toBeDefined(); });
            });
            describe("7.13.11.3.2 Methods", function() {
                it("getField", function() { expect(channel.getField).toBeDefined(); });
                it("getLogo", function() { expect(channel.getLogo).toBeDefined(); });
            });
        });
    });
    describe("7.13.12 The FavouriteListCollection class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            favouriteListCollection = channelConfig.favouriteLists;
        });
        describe("7.13.12.1 Methods", function() {
            it("getFavouriteList", function() { expect(favouriteListCollection.getFavouriteList).toBeDefined(); });
        });
        describe("7.13.12.2 Extensions to FavouriteListCollection", function() {
            it("createFavouriteList", function() { expect(favouriteListCollection.createFavouriteList).toBeDefined(); });
            it("remove", function() { expect(favouriteListCollection.remove).toBeDefined(); });
            it("commit", function() { expect(favouriteListCollection.commit).toBeDefined(); });
            it("activateFavouriteList", function() { expect(favouriteListCollection.activateFavouriteList).toBeDefined(); });
        });
    });
    describe("7.13.13 The FavouriteList class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            favouriteListCollection = channelConfig.favouriteLists;
            favouriteList = favouriteListCollection[0];
        });
        describe("7.13.13.1 Properties", function() {
            it("favID", function() { expect(favouriteList.favID).toBeDefined(); });
            it("name", function() { expect(favouriteList.name).toBeDefined(); });
        });
        describe("7.13.13.2 Methods", function() {
            it("getChannel", function() { expect(favouriteList.getChannel).toBeDefined(); });
            it("getChannelByTriplet", function() { expect(favouriteList.getChannelByTriplet).toBeDefined(); });
            it("getChannelBySourceID", function() { expect(favouriteList.getChannelBySourceID).toBeDefined(); });
        });
        describe("7.13.13.3 Extensions to FavouriteList", function() {
            it("insertBefore", function() { expect(favouriteList.insertBefore).toBeDefined(); });
            it("remove", function() { expect(favouriteList.remove).toBeDefined(); });
            it("commit", function() { expect(favouriteList.commit).toBeDefined(); });
        });
    });
    describe("7.13.14 Extensions to video/broadcast for channel scan", function() {
    });
    describe("7.13.15 The ChannelScanEvent class", function() {
    });
    describe("7.13.16 The ChannelScanOptions class", function() {
        describe("7.13.16.1 Properties", function() {
            beforeEach(function() {
                channelConfig = videoBroadcast.getChannelConfig();
                channelScanOptions = channelConfig.createChannelScanOptionsObject();
            });
            describe("7.13.13.1 Properties", function() {
                it("channelType", function() { expect(channelScanOptions.channelType).toBeDefined(); });
                it("replaceExisting", function() { expect(channelScanOptions.replaceExisting).toBeDefined(); });
            });
        });
    });
    describe("7.13.17 The ChannelScanParameters class", function() {
    });
    describe("7.13.18 The DVBTChannelScanParameters class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            dVBTChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_T);;
        });
        it("startFrequency", function() { expect(dVBTChannelScanParameters.startFrequency).toBeDefined(); });
        it("endFrequency", function() { expect(dVBTChannelScanParameters.endFrequency).toBeDefined(); });
        it("raster", function() { expect(dVBTChannelScanParameters.raster).toBeDefined(); });
        it("ofdm", function() { expect(dVBTChannelScanParameters.ofdm).toBeDefined(); });
        it("modulationModes", function() { expect(dVBTChannelScanParameters.modulationModes).toBeDefined(); });
        it("bandwidth", function() { expect(dVBTChannelScanParameters.bandwidth).toBeDefined(); });
    });
    describe("7.13.19 The DVBSChannelScanParameters class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            dVBSChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_S);
        });
        describe("7.13.19.1 Properties", function() {
            it("startFrequency", function() { expect(dVBSChannelScanParameters.startFrequency).toBeDefined(); });
            it("endFrequency", function() { expect(dVBSChannelScanParameters.endFrequency).toBeDefined(); });
            it("modulationModes", function() { expect(dVBSChannelScanParameters.modulationModes).toBeDefined(); });
            it("symbolRate", function() { expect(dVBSChannelScanParameters.symbolRate).toBeDefined(); });
            it("polarisation", function() { expect(dVBSChannelScanParameters.polarisation).toBeDefined(); });
            it("codeRate", function() { expect(dVBSChannelScanParameters.codeRate).toBeDefined(); });
            it("orbitalPosition", function() { expect(dVBSChannelScanParameters.orbitalPosition).toBeDefined(); });
            it("networkId", function() { expect(dVBSChannelScanParameters.networkId).toBeDefined(); });
        });
    });
    describe("7.13.20 The DVBCChannelScanParameters class", function() {
        beforeEach(function() {
            channelConfig = videoBroadcast.getChannelConfig();
            dVBCChannelScanParameters = channelConfig.createChannelScanParametersObject(ID_DVB_C);
        });
        describe("7.13.20.1 Properties", function() {
            it("startFrequency", function() { expect(dVBCChannelScanParameters.startFrequency).toBeDefined(); });
            it("endFrequency", function() { expect(dVBCChannelScanParameters.endFrequency).toBeDefined(); });
            it("raster", function() { expect(dVBCChannelScanParameters.raster).toBeDefined(); });
            it("startNetworkScanOnNIT", function() { expect(dVBCChannelScanParameters.startNetworkScanOnNIT).toBeDefined(); });
            it("modulationModes", function() { expect(dVBCChannelScanParameters.modulationModes).toBeDefined(); });
            it("symbolRate", function() { expect(dVBCChannelScanParameters.symbolRate).toBeDefined(); });
            it("networkId", function() { expect(dVBCChannelScanParameters.networkId).toBeDefined(); });
        });
    });
    describe("7.13.21 Extensions to video/broadcast for synchronization", function() {
        it("addStreamEventListener", function() { expect(videoBroadcast.addStreamEventListener).toBeDefined(); });
        it("removeStreamEventListener", function() { expect(videoBroadcast.removeStreamEventListener).toBeDefined(); });
        describe("7.13.21.1 The StreamEvent class", function() {
            beforeEach(function() {
                streamEvent;
            });
            it("eventName", function() { expect(streamEvent.eventName).toBeDefined(); });
            it("data", function() { expect(streamEvent.data).toBeDefined(); });
            it("text", function() { expect(streamEvent.text).toBeDefined(); });
            it("status", function() { expect(streamEvent.status).toBeDefined(); });
        });
    });
    describe("7.13.22 The ATSCTChannelScanParameters class", function() {
        beforeEach(function() {
            aTSCTChannelScanParameters;
        });
        describe("7.13.22.1 Properties", function() {
            it("startFrequency", function() { expect(aTSCTChannelScanParameters.startFrequency).toBeDefined(); });
            it("endFrequency", function() { expect(aTSCTChannelScanParameters.endFrequency).toBeDefined(); });
            it("raster", function() { expect(aTSCTChannelScanParameters.raster).toBeDefined(); });
            it("modulationModes", function() { expect(aTSCTChannelScanParameters.modulationModes).toBeDefined(); });
        });
    });
});
