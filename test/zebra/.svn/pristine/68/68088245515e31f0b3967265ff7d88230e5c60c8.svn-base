// OIPF-T1-R2_Specification-Volume-5-Declarative-Application-Environment-v2_3-2014-01-24.pdf
describe('7.13 Scheduled content and hybrid tuner APIs', function() {
    "use strict";
    var video;
    beforeEach(function () {
        video= document.createElement('object');
        video.setAttribute("type", "video/broadcast");
        document.body.appendChild(video);
    });
    describe('7.13.1 The video/broadcast embedded object', function () {
        //describe('7.13.1.1 State diagram for video/broadcast objects');
        describe('7.13.1.2 Properties', function(){
            //it('width', function(){
            //    expect(video.width).toBeDefined();
            //});
            //it('height', function(){
            //    expect(video.height).toBeDefined();
            //});
            it('fullScreen', function(){
                expect(video.fullScreen).toBeDefined();
            });
            it('data', function(){
                expect(video.data).toBeDefined();
            });
            it('onChannelChangeError', function(){
                expect(video.onChannelChangeError).toBeDefined();
            });
            it('playState', function(){
                expect(video.playState).toBeDefined();
            });
            it('onPlayStateChange', function(){
                expect(video.onPlayStateChange).toBeDefined();
            });
            it('onChannelChangeSucceeded', function(){
                expect(video.onChannelChangeSucceeded).toBeDefined();
            });
            it('onFullScreenChange', function(){
                expect(video.onFullScreenChange).toBeDefined();
            });
            it('onfocus', function(){
                expect(video.onfocus).toBeDefined();
            });
            it('onblur', function(){
                expect(video.onblur).toBeDefined();
            });
        });
        describe('7.13.1.3 Methods', function(){
            it('getChannelConfig', function(){
                expect(video.getChannelConfig).toBeDefined();
            });
            it('bindToCurrentChannel', function(){
                expect(video.bindToCurrentChannel).toBeDefined();
            });
            it('createChannelObject', function(){
                expect(video.createChannelObject).toBeDefined();
            });
            it('setChannel', function(){
                expect(video.setChannel).toBeDefined();
            });
            it('prevChannel', function(){
                expect(video.prevChannel).toBeDefined();
            });
            it('nextChannel', function(){
                expect(video.nextChannel).toBeDefined();
            });
            it('stop', function(){
                expect(video.stop).toBeDefined();
            });
            it('setFullScreen', function(){
                expect(video.setFullScreen).toBeDefined();
            });
            it('setVolume', function(){
                expect(video.setVolume).toBeDefined();
            });
            it('getVolume', function(){
                expect(video.getVolume).toBeDefined();
            });
            it('release', function(){
                expect(video.release).toBeDefined();
            });
        });
    });
    describe('7.13.2 Extensions to video/broadcast for recording and time-shift', function () {
        //describe('7.13.1.1 State diagram for video/broadcast objects');
        describe('7.13.2.1 Additional constants for video/broadcast object', function(){
            it('POSITION_START', function(){
                expect(video.POSITION_START).toBe(0);
            });
            it('POSITION_CURRENT', function(){
                expect(video.POSITION_CURRENT).toBe(1);
            });
            it('POSITION_END', function(){
                expect(video.POSITION_END).toBe(2);
            });
        });
        describe('7.13.2.2 Additional properties for video/broadcast object', function(){
            it('onPlaySpeedChanged', function(){
                expect(video.onPlaySpeedChanged).toBeDefined();
            });
            it('onPlayPositionChanged', function(){
                expect(video.onPlayPositionChanged).toBeDefined();
            });
            it('playbackOffset', function(){
                expect(video.playbackOffset).toBeDefined();
            });
            it('maxOffset', function(){
                expect(video.maxOffset).toBeDefined();
            });
            it('recordingState', function(){
                expect(video.recordingState).toBeDefined();
            });
            it('onRecordingEvent', function(){
                expect(video.onRecordingEvent).toBeDefined();
            });
            it('playPosition', function(){
                expect(video.playPosition).toBeDefined();
            });
            it('playSpeed', function(){
                expect(video.playSpeed).toBeDefined();
            });
            it('playSpeeds', function(){
                expect(video.playSpeeds).toBeDefined();
            });
            it('onplaySpeedsArrayChanged', function(){
                expect(video.onplaySpeedsArrayChanged).toBeDefined();
            });
            it('timeShiftMode', function(){
                expect(video.timeShiftMode).toBeDefined();
            });
            it('currentTimeShiftMode', function(){
                expect(video.currentTimeShiftMode).toBeDefined();
            });
        });
        describe('7.13.2.3 Additional methods for video/broadcast object', function(){
            it('recordNow', function(){
                expect(video.recordNow).toBeDefined();
            });
            it('stopRecording', function(){
                expect(video.stopRecording).toBeDefined();
            });
            it('pause', function(){
                expect(video.pause).toBeDefined();
            });
            it('resume', function(){
                expect(video.resume).toBeDefined();
            });
            it('setSpeed', function(){
                expect(video.setSpeed).toBeDefined();
            });
            it('seek', function(){
                expect(video.seek).toBeDefined();
            });
            it('stopTimeshift', function(){
                expect(video.stopTimeshift).toBeDefined();
            });
            it('setChannel', function(){
                expect(video.setChannel).toBeDefined();
            });
        });
    });

    describe('7.13.3 Extensions to video/broadcast for access to EIT p/f', function () {
        it('programmes', function(){
            expect(video.programmes).toBeDefined();
        });
        it('onProgrammesChanged', function(){
            expect(video.onProgrammesChanged).toBeDefined();
        });
    });

    //describie('7.13.4 Extensions to video/broadcast for playback of selected  components'');
    describe('7.13.5 Extensions to video/broadcast for parental ratings errors', function () {
        it('onParentalRatingChange', function(){
            expect(video.onParentalRatingChange).toBeDefined();
        });
        it('onParentalRatingError', function(){
            expect(video.onParentalRatingError).toBeDefined();
        });
    });

    describe('7.13.6 Extensions to video/broadcast for DRM rights errors', function () {
        it('onDRMRightsError', function(){
            expect(video.onParentalRatingChange).toBeDefined();
        });
    });
    //describe('7.13.7 Extensions to video/broadcast for channel scan');
    describe('7.13.8 Extensions to video/broadcast for current channel information', function () {
        describe('7.13.8.1 Properties', function(){
            it('currentChannel', function(){
                expect(video.currentChannel).toBeDefined();
            });
        });
    });

    //describe('7.13.9 Extensions to video/broadcast for creating channel lists from SD&S fragments');
    describe('7.13.10 The ChannelConfig class', function () {
        var channelConfig;
        beforeEach(function () {
            channelConfig = video.getChannelConfig();
        });
        describe('7.13.10.1 Properties', function(){
            it('channelList', function(){
                expect(channelConfig.channelList).toBeDefined();
            });
            it('favouriteLists', function(){
                expect(channelConfig.favouriteLists).toBeDefined();
            });
            it('currentFavouriteList', function(){
                expect(channelConfig.currentFavouriteList).toBeDefined();
            });
            it('onChannelScan', function(){
                expect(channelConfig.onChannelScan).toBeDefined();
            });
            it('onChannelListUpdate', function(){
                expect(channelConfig.onChannelListUpdate).toBeDefined();
            });
            it('currentChannel', function(){
                expect(channelConfig.currentChannel).toBeDefined();
            });
        });
        describe('7.13.10.2 Methods', function(){
            it('createFilteredList', function(){
                expect(channelConfig.createFilteredList).toBeDefined();
            });
            it('startScan', function(){
                expect(channelConfig.startScan).toBeDefined();
            });
            it('stopScan', function(){
                expect(channelConfig.stopScan).toBeDefined();
            });
            it('createChannelList', function(){
                expect(channelConfig.createChannelList).toBeDefined();
            });
            it('createChannelObject', function(){
                expect(channelConfig.createChannelObject).toBeDefined();
            });
            it('createChannelScanParametersObject', function(){
                expect(channelConfig.createChannelScanParametersObject).toBeDefined();
            });
        });
    });
    describe('7.13.11 The ChannelList class', function(){
        var channelList;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            channelList = channelConfig.channelList;
        });
        describe('7.13.11.1 Methods', function (){
            it('getChannel', function(){
                expect(channelList.getChannel).toBeDefined();
            });
            it('getChannelByTriplet', function(){
                expect(channelList.getChannelByTriplet).toBeDefined();
            });
            it('getChannelBySourceID', function(){
                expect(channelList.getChannelBySourceID).toBeDefined();
            });
        });
    });

    describe('7.13.12 The Channel class', function(){
        var channel;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            var channelList = channelConfig.channelList;
            channel = channelList.getChannel(0);
        });
        describe('7.13.12.1 Constants', function (){
            it('TYPE_TV', function(){
                expect(channel.TYPE_TV).toBe(0);
            });
            it('TYPE_RADIO', function(){
                expect(channel.TYPE_RADIO).toBe(1);
            });
            it('TYPE_OTHER', function(){
                expect(channel.TYPE_TV).toBe(2);
            });
            it('ID_ANALOG', function(){
                expect(channel.TYPE_TV).toBe(0);
            });
            it('ID_DVB_C', function(){
                expect(channel.TYPE_TV).toBe(10);
            });
            it('ID_DVB_S', function(){
                expect(channel.ID_DVB_S).toBe(11);
            });
            it('ID_DVB_T', function(){
                expect(channel.ID_DVB_T).toBe(12);
            });
            it('ID_DVB_SI_DIRECT', function(){
                expect(channel.ID_DVB_SI_DIRECT).toBe(13);
            });
            it('ID_DVB_C2', function(){
                expect(channel.ID_DVB_C2).toBe(14);
            });
            it('ID_DVB_S2', function(){
                expect(channel.ID_DVB_S2).toBe(15);
            });
            it('ID_ISDB_C', function(){
                expect(channel.ID_ISDB_C).toBe(20);
            })
            it('ID_ISDB_S', function(){
                expect(channel.ID_ISDB_S).toBe(21);
            });
            it('ID_ISDB_T', function(){
                expect(channel.ID_ISDB_T).toBe(22);
            });
            it('ID_ATSC_T', function(){
                expect(channel.ID_ATSC_T).toBe(30);
            });
            it('ID_IPTV_SDS', function(){
                expect(channel.ID_IPTV_SDS).toBe(40);
            });
            it('ID_IPTV_URI', function(){
                expect(channel.ID_IPTV_URI).toBe(41);
            });
        });
        describe('7.13.12.2 Properties', function(){
            it('channelType', function(){
                expect(channel.channelType).toBeDefined();
            });
            it('idType', function(){
                expect(channel.idType).toBeDefined();
            });
            it('ccid', function(){
                expect(channel.ccid).toBeDefined();
            });
            it('tunerID', function(){
                expect(channel.tunerID).toBeDefined();
            });
            it('onid', function(){
                expect(channel.onid).toBeDefined();
            });
            it('tsid', function(){
                expect(channel.tsid).toBeDefined();
            });
            it('sid', function(){
                expect(channel.sid).toBeDefined();
            });
            it('sourceID', function(){
                expect(channel.sourceID).toBeDefined();
            });
            it('freq', function(){
                expect(channel.freq).toBeDefined();
            });
            it('cni', function(){
                expect(channel.cni).toBeDefined();
            });
            it('name', function(){
                expect(channel.name).toBeDefined();
            });
            it('majorChannel', function(){
                expect(channel.majorChannel).toBeDefined();
            });
            it('minorChannel', function(){
                expect(channel.minorChannel).toBeDefined();
            });
            it('dsd', function(){
                expect(channel.dsd).toBeDefined();
            });
            it('favourite', function(){
                expect(channel.favourite).toBeDefined();
            });
            it('favIDs', function(){
                expect(channel.favIDs).toBeDefined();
            });
            it('locked', function(){
                expect(channel.locked).toBeDefined();
            });
            it('manualBlock', function(){
                expect(channel.manualBlock).toBeDefined();
            });
            it('ipBroadcastID', function(){
                expect(channel.ipBroadcastID).toBeDefined();
            });
            it('channelMaxBitRate', function(){
                expect(channel.channelMaxBitRate).toBeDefined();
            });
            it('channelTTR', function(){
                expect(channel.channelTTR).toBeDefined();
            });
        });
        describe('7.13.12.3 Metadata extensions to Channel', function(){
            describe('7.13.12.3.1 Properties', function(){
                it('longName', function(){
                    expect(channel.longName).toBeDefined();
                });
                it('description', function(){
                    expect(channel.description).toBeDefined();
                });
                it('authorised', function(){
                    expect(channel.authorised).toBeDefined();
                });
                it('genre', function(){
                    expect(channel.genre).toBeDefined();
                });
                it('hidden', function(){
                    expect(channel.hidden).toBeDefined();
                });
                it('logoURL', function(){
                    expect(channel.logoURL).toBeDefined();
                });
            });
            describe('7.13.12.3.2 Methods', function(){
                it('getField', function(){
                    expect(channel.getField).toBeDefined();
                });
                it('getLogo', function(){
                    expect(channel.getLogo).toBeDefined();
                });
            });
        });
    });
    describe('7.13.13 The FavouriteListCollection class', function(){
        var favCollection;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            favCollection = channelConfig.favouriteLists;
        });
        describe('7.13.13.1 Methods', function(){
            it('getFavouriteList', function(){
                expect(favCollection.getFavouriteList).toBeDefined();
            });
        });
        describe('7.13.13.2 Extensions to FavouriteListCollection', function(){
            it('createFavouriteList', function(){
                expect(favCollection.createFavouriteList).toBeDefined();
            });
            it('remove', function(){
                expect(favCollection.remove).toBeDefined();
            });
            it('commit', function(){
                expect(favCollection.commit).toBeDefined();
            });
            it('activateFavouriteList', function(){
                expect(favCollection.activateFavouriteList).toBeDefined();
            });
        });
    });
    describe('7.13.14 The FavouriteList class', function(){
        var favList;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            var favCollection = channelConfig.favouriteLists;
            favList = favCollection.getFavouriteList();
        });
        describe('7.13.14.1 Properties', function(){
            it('favID', function(){
                expect(favList.favID).toBeDefined();
            });
            it('name', function(){
                expect(favList.name).toBeDefined();
            });
        });
        describe('7.13.14.2 Methods', function(){
            it('getChannel', function(){
                expect(favList.getChannel).toBeDefined();
            });
            it('getChannelByTriplet', function(){
                expect(favList.getChannelByTriplet).toBeDefined();
            });
            it('getChannelBySourceID', function(){
                expect(favList.getChannelBySourceID).toBeDefined();
            });
        });
        describe('7.13.14.3 Extensions to FavouriteList', function(){
            it('insertBefore', function(){
                expect(favList.insertBefore).toBeDefined();
            });
            it('remove', function(){
                expect(favList.remove).toBeDefined();
            });
            it('commit', function(){
                expect(favList.commit).toBeDefined();
            });
        });
    });
    //describe('7.13.15 The ChannelScanEvent class');
    describe('7.13.16 The ChannelScanOptions class', function(){
        var channelScanOptions;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            channelScanOptions = channelConfig.createChannelScanOptionsObject();
        });
        describe('7.13.16.1 Properties', function(){
            it('channelType', function(){
                expect(channelScanOptions.channelType).toBeDefined();
            });
            it('replaceExisting', function(){
                expect(channelScanOptions.replaceExisting).toBeDefined();
            });
        });
    });
    //describe('7.13.17 The ChannelScanParameters class');
    describe('7.13.18 The DVBTChannelScanParameters class', function(){
        var dvbtParam;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            dvbtParam = channelConfig.createChannelScanParametersObject(12);  //ID_DVB_T
        });
        describe('7.13.18.1 Properties', function(){
            it('startFrequency', function(){
                expect(dvbtParam.startFrequency).toBeDefined();
            });
            it('endFrequency', function(){
                expect(dvbtParam.endFrequency).toBeDefined();
            });
            it('raster', function(){
                expect(dvbtParam.raster).toBeDefined();
            });
            it('ofdm', function(){
                expect(dvbtParam.ofdm).toBeDefined();
            });
            it('modulationModes', function(){
                expect(dvbtParam.modulationModes).toBeDefined();
            });
            it('bandwidth', function(){
                expect(dvbtParam.bandwidth).toBeDefined();
            });
        });
    });

    describe('7.13.19 The DVBSChannelScanParameters class', function(){
        var dvbsParam;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            dvbsParam = channelConfig.createChannelScanParametersObject(11);  //ID_DVB_S
        });
        describe('7.13.19.1 Properties', function(){
            it('startFrequency', function(){
                expect(dvbsParam.startFrequency).toBeDefined();
            });
            it('endFrequency', function(){
                expect(dvbsParam.endFrequency).toBeDefined();
            });
            it('modulationModes', function(){
                expect(dvbsParam.modulationModes).toBeDefined();
            });
            it('symbolRate', function(){
                expect(dvbsParam.symbolRate).toBeDefined();
            });
            it('polarisation', function(){
                expect(dvbsParam.polarisation).toBeDefined();
            });
            it('codeRate', function(){
                expect(dvbsParam.codeRate).toBeDefined();
            });
            it('orbitalPosition', function(){
                expect(dvbsParam.orbitalPosition).toBeDefined();
            });
            it('networkId', function(){
                expect(dvbsParam.networkId).toBeDefined();
            });
        });
    });

    describe('7.13.20 The DVBCChannelScanParameters class', function(){
        var dvbcParam;
        beforeEach(function () {
            var channelConfig = video.getChannelConfig();
            dvbcParam = channelConfig.createChannelScanParametersObject(10);  //ID_DVB_C
        });
        describe('7.13.20.1 Properties', function(){
            it('startFrequency', function(){
                expect(dvbcParam.startFrequency).toBeDefined();
            });
            it('endFrequency', function(){
                expect(dvbcParam.endFrequency).toBeDefined();
            });
            it('Raster', function(){
                expect(dvbcParam.Raster).toBeDefined();
            });
            it('startNoetworkScanOnNIT', function(){
                expect(dvbcParam.startNoetworkScanOnNIT).toBeDefined();
            });
            it('modulationModes', function(){
                expect(dvbcParam.modulationModes).toBeDefined();
            });
            it('symbolRate', function(){
                expect(dvbcParam.symbolRate).toBeDefined();
            });
            it('networkId', function(){
                expect(dvbcParam.networkId).toBeDefined();
            });
        });
    });
    describe('7.13.21 Extensions to video/broadcast for synchronization', function(){
        it('addStreamEventListener', function(){
            expect(video.addStreamEventListener).toBeDefined();
        });
        it('removeStreamEventListener', function(){
            expect(video.removeStreamEventListener).toBeDefined();
        });
        var streamEvent;
        beforeEach(function(){
            streamEvent = {};
        });
        describe('7.13.21.1 The StreamEvent class', function(){
            it('eventName', function(){
                expect(streamEvent.eventName).toBeDefined();
            });
            it('data', function(){
                expect(streamEvent.data).toBeDefined();
            });
            it('text', function(){
                expect(streamEvent.text).toBeDefined();
            });
            it('status', function(){
                expect(streamEvent.status).toBeDefined();
            });
        });
    });
    afterEach(function () {
        document.body.removeChild(video);
    });
});