// Humax_API_v3.5.1.docx
describe('2.	Extended OIPF APIs', function() {
    "use strict";
    describe('2.1.	Object Factory APIs (OipfObjectFactory)', function(){
        it('createDlnaManagerObject', function(){
            expect(oipfObjectFactory.createDlnaManagerObject).toBeDefined();
        });
        it('createSambaManagerObject', function(){
            expect(oipfObjectFactory.createSambaManagerObject).toBeDefined();
        });
        it('createWoonManagerObject', function(){
            expect(oipfObjectFactory.createWoonManagerObject).toBeDefined();
        });
        it('createContentManagerObject', function(){
            expect(oipfObjectFactory.createContentManagerObject).toBeDefined();
        });
        it('createMediaSearchManagerObject', function(){
            expect(oipfObjectFactory.createMediaSearchManagerObject).toBeDefined();
        });
        it('CreateHumaxConfigurationObject', function(){
            expect(oipfObjectFactory.CreateHumaxConfigurationObject).toBeDefined();
        });
        it('createHumaxStorageUtilObject', function(){
            expect(oipfObjectFactory.createHumaxStorageUtilObject).toBeDefined();
        });
        it('createHumaxCasUtil', function(){
            expect(oipfObjectFactory.createHumaxCasUtil).toBeDefined();
        });
        it('createBluetoothManagerObject', function(){
            expect(oipfObjectFactory.createBluetoothManagerObject).toBeDefined();
        });
        it('createHumaxVideoBroadcastObject', function(){
            expect(oipfObjectFactory.createHumaxVideoBroadcastObject).toBeDefined();
        });
        it('createHumaxVideoOnDemandObject', function(){
            expect(oipfObjectFactory.createHumaxVideoOnDemandObject).toBeDefined();
        });
    });
    describe('2.2.	Application Management APIs', function(){
        var applicationManager, app;
        beforeEach(function() {
            applicationManager = document.createElement('object');
            applicationManager.setAttribute("type", "application/oipfApplicationManager");
            document.body.appendChild(applicationManager);

            app = applicationManager.getOwnerApplication(window.document);
        });
        describe('2.2.1.	Application Class	', function(){
            it('startWidget', function(){
                expect(app.startWidget).toBeDefined();
            });
            describe('2.2.1.1.	Application Manager Class', function(){
                describe('Constants', function(){
                    it('HBBTV_APP_TYPE_AUTOSTART', function(){
                        expect(applicationManager.HBBTV_APP_TYPE_AUTOSTART).toBe(1);
                    });
                    it('HBBTV_APP_TYPE_INDEPENDENT', function(){
                        expect(applicationManager.HBBTV_APP_TYPE_INDEPENDENT).toBe(2);
                    });
                    it('HBBTV_APP_TYPE_DIGITALTELETEXT', function(){
                        expect(applicationManager.HBBTV_APP_TYPE_DIGITALTELETEXT).toBe(0);
                    });
                });
                describe('Methods', function(){
                    it('createHbbTVApplication', function(){
                        expect(applicationManager.createHbbTVApplication).toBeDefined();
                    });
                    it('destoryHbbTVApplication', function(){
                        expect(applicationManager.destoryHbbTVApplication).toBeDefined();
                    });
                    it('addOIPFApplication ', function(){
                        expect(applicationManager.addOIPFApplication ).toBeDefined();
                    });
                    it('removeOIPFApplication ', function(){
                        expect(applicationManager.removeOIPFApplication ).toBeDefined();
                    });
                    it('removeAllOIPFApplications ', function(){
                        expect(applicationManager.removeAllOIPFApplications ).toBeDefined();
                    });
                    it('doTeletext', function(){
                        expect(applicationManager.doTeletext).toBeDefined();
                    });
                    it('createPortalApplication ', function(){
                        expect(applicationManager.createPortalApplication ).toBeDefined();
                    });
                    it('destroyPortalApplication ', function(){
                        expect(applicationManager.destroyPortalApplication ).toBeDefined();
                    });
                    it('getHumaxApplications ', function(){
                        expect(applicationManager.getHumaxApplications ).toBeDefined();
                    });
                    it('createHumaxApplication', function(){
                        expect(applicationManager.createHumaxApplication).toBeDefined();
                    });
                    it('destroyHumaxApplication ', function(){
                        expect(applicationManager.destroyHumaxApplication ).toBeDefined();
                    });
                });
            });
            describe('2.2.1.2.	Application Private Data Class', function(){
                var privateData;
                beforeEach(function(){
                    privateData = app.privateData;
                });
                describe('Properties', function(){
                    it('wakeupRepeatDays ', function(){
                        expect(privateData.wakeupRepeatDays ).toBeDefined();
                    });
                    it('wakeupVolume ', function(){
                        expect(privateData.wakeupVolume ).toBeDefined();
                    });
                    it('wakeupTime ', function(){
                        expect(privateData.wakeupTime ).toBeDefined();
                    });
                    it('wakeupChannel ', function(){
                        expect(privateData.wakeupChannel ).toBeDefined();
                    });
                    it('tvtvWakeupTime ', function(){
                        expect(privateData.tvtvWakeupTime ).toBeDefined();
                    });
                    it('isTvtvStandbyEnable ', function(){
                        expect(privateData.isTvtvStandbyEnable ).toBeDefined();
                    });
                    it('widgetContentUrl ', function(){
                        expect(privateData.widgetContentUrl ).toBeDefined();
                    });
                });
                describe('Methods', function(){
                    it('prepareWakeupOITF ', function(){
                        expect(privateData.prepareWakeupOITF ).toBeDefined();
                    });
                    it('prepareWakeupTvtvUpdate ', function(){
                        expect(privateData.prepareWakeupTvtvUpdate ).toBeDefined();
                    });
                });
            });
        });
        afterEach(function(){
            document.body.removeChild(applicationManager);
        });
    });
    describe('2.3.	PARENTAL RATING AND PARENTAL CONTROL APIs', function(){
        var pcmanager, pcmanagerApi,
            prschemes,  prschemesApi,
            prscheme, prschemeApi;
        beforeEach(function () {
            pcmanager = document.createElement('object');
            pcmanager.setAttribute("type", "application/oipfParentalControlManager");
            document.body.appendChild(pcmanager);
            pcmanagerApi = oipfObjectFactory.createParentalControlManagerObject();

            prschemes = pcmanager.parentalRatingSchemes;
            prschemesApi = pcmanagerApi.parentalRatingSchemes;

            prscheme = prschemes.getParentalRatingScheme("dvb-si");
            prschemeApi = prschemesApi.getParentalRatingScheme("dvb-si");
        });

        describe('2.3.1.	Parental Control Manager Class', function(){
            it('resetParentalControlPIN ', function(){
                expect(pcmanager.resetParentalControlPIN ).toBeDefined();
                expect(pcmanagerApi.resetParentalControlPIN ).toBeDefined();
            });
        });
        describe('2.3.2.	Parental Rating Scheme Class', function(){
            describe('Methods', function(){
                it('changeThreshold ', function(){
                    expect(prscheme.changeThreshold ).toBeDefined();
                    expect(prschemeApi.changeThreshold ).toBeDefined();
                });
            });
        });
        describe('2.3.3.	Parental Rating Scheme Collection Class', function(){
            describe('Methods', function(){
                it('getParentalRatingScheme', function(){
                    expect(prschemes.getParentalRatingScheme).toBeDefined();
                    expect(prschemesApi.getParentalRatingScheme).toBeDefined();
                });
            });
        });
        afterEach(function () {
            document.body.removeChild(pcmanager);
        });
    });

    describe('2.4.	SCHEDULED RECORDING APIs', function(){
        var record;
        beforeEach(function () {
            record = document.createElement('object');
            record.setAttribute("type", "application/oipfRecordingScheduler");
            document.body.appendChild(record);
        });
        describe('2.4.1.	RecordingScheduler class', function(){
            describe('Events', function(){
                it('onFileOpEvent', function(){
                    expect(record.onFileOpEvent).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('record', function(){
                    expect(record.record).toBeDefined();
                    /* TODO : more functional test
                    ScheduledRecording* record(Programme* p)
                    ScheduledRecording* record(Programme* p, Integer factory)
                    ScheduledRecording* record(Programme* p, Integer factory, Integer target)
                    */
                });
                it('recordAt', function(){
                    expect(record.recordAt).toBeDefined();
                    /* TODO : more functional test
                     ScheduledRecording* recordAt(Integer startTime, Integer duration, Integer repeatDays, char*  channelID)
                     ScheduledRecording* recordAt(Integer startTime, Integer duration, Integer repeatDays, char*channelID, Integer factory)
                     ScheduledRecording* recordAt(Integer startTime, Integer duration, Integer repeatDays, char*channelID, Integer factory, Integer target)

                     */
                });
                it('recordConfirm', function(){
                    expect(record.recordConfirm).toBeDefined();
                });
                it('update', function(){
                    expect(record.update).toBeDefined();
                    /* TODO : more functional test
                     ScheduledRecording* update(ObjectInstance* inObj, Integer startTime, Integer duration, Integer repeatDays, char* channelID)
                     ScheduledRecording* update(ObjectInstance* inObj, Integer startTime, Integer duration, Integer repeatDays, char* channelID, Integer factory)
                     ScheduledRecording* update(ObjectInstance* inObj, Integer startTime, Integer duration, Integer repeatDays, char* channelID, Integer factory, Integer target)
                     */
                });
                it('copyRecording', function(){
                    expect(record.copyRecording).toBeDefined();
                });
                it('removeRecording', function(){
                    expect(record.removeRecording).toBeDefined();
                });
                it('stopFileOp', function(){
                    expect(record.stopFileOp).toBeDefined();
                });
                it('setSeriesLock', function(){
                    expect(record.setSeriesLock).toBeDefined();
                });
                it('startSatRecord', function(){
                    expect(record.startSatRecord).toBeDefined();
                });
            });
        });
        describe('2.4.2.	PVR Event class', function(){
            describe('Properties', function(){
                it('onPVREvent', function(){
                    expect(record.onPVREvent).toBeDefined();
                });
                //TODO , we need more functional test for onPVREvent handler
                // OIPF  page 161
                // Humax Extension  page 19
            });
        });
        describe('2.4.3.	ScheduledRecording	', function(){
            var scheduledRecord;
            beforeEach(function(){
                scheduledRecord = {} ; // record.record(); TODO
            });
            describe('Properties', function() {
                it('isScheduledAsSeries', function () {
                    expect(scheduledRecord.isScheduledAsSeries).toBeDefined();
                });
                it('seriesID', function () {
                    expect(scheduledRecord.seriesID).toBeDefined();
                });
                it('groupCRIDs', function () {
                    expect(scheduledRecord.groupCRIDs).toBeDefined();
                });
                it('volume', function () {
                    expect(scheduledRecord.volume).toBeDefined();
                });
                it('programmeCRID', function () {
                    expect(scheduledRecord.programmeCRID).toBeDefined();
                });
                it('diseqcInput', function () {
                    expect(scheduledRecord.diseqcInput).toBeDefined();
                });
                it('frequency', function () {
                    expect(scheduledRecord.frequency).toBeDefined();
                });
                it('polarisation', function () {
                    expect(scheduledRecord.polarisation).toBeDefined();
                });
                it('symbolRate', function () {
                    expect(scheduledRecord.symbolRate).toBeDefined();
                });
                it('satType', function () {
                    expect(scheduledRecord.satType).toBeDefined();
                });
            });
        });
        describe('2.4.4.	Recording', function(){
            describe('Constants', function(){
                it('ERROR_REC_CAS', function () {
                    expect(record.ERROR_REC_CAS).toBeDefined();
                });
                it('ID_TVA_CRID', function () {
                    expect(record.ID_TVA_CRID).toBeDefined();
                });
                it('ID_DVB_EVENT', function () {
                    expect(record.ID_DVB_EVENT).toBeDefined();
                });
                it('ID_TVA_GROUP_CRID', function () {
                    expect(record.ID_TVA_GROUP_CRID).toBeDefined();
                });
            });
            describe('Properties', function(){
                it('isScheduledAsSeries', function () {
                    expect(record.isScheduledAsSeries).toBeDefined();
                });
                it('seriesID', function () {
                    expect(record.seriesID).toBeDefined();
                });
                it('discId', function () {
                    expect(record.discId).toBeDefined();
                });
                it('season', function () {
                    expect(record.season).toBeDefined();
                });
                it('willBeDeleted', function () {
                    expect(record.willBeDeleted).toBeDefined();
                });
                it('lastPlayPosition', function () {
                    expect(record.lastPlayPosition).toBeDefined();
                });
                it('thumbnail', function () {
                    expect(record.thumbnail).toBeDefined();
                });
                it('isManualLocked', function () {
                    expect(record.isManualLocked).toBeDefined();
                });
                it('isScrambled', function () {
                    expect(record.isScrambled).toBeDefined();
                });
                it('copyControl', function () {
                    expect(record.copyControl).toBeDefined();
                });
                it('groupCRIDs', function () {
                    expect(record.groupCRIDs).toBeDefined();
                });
                it('programmeCRID', function () {
                    expect(record.programmeCRID).toBeDefined();
                });
                it('subtitleTypes', function () {
                    expect(record.subtitleTypes).toBeDefined();
                });
                it('doNotDeleteSetTime', function () {
                    expect(record.doNotDeleteSetTime).toBeDefined();
                });
            });
        });
        afterEach(function(){
            document.body.removeChild(record);
        });
    });

    describe('2.5.	METADATA APIs', function(){
        var searchMgr, search;
        beforeEach(function () {
            searchMgr= document.createElement('object');
            searchMgr.setAttribute("type", "application/oipfSearchManager");
            document.body.appendChild(searchMgr);

            search = searchMgr.createSearch(2);
        });
        describe('2.5.1.	MetadataSearch class', function(){
            describe('Properties ',function(){
                it('id', function () {
                    expect(search.id).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('addConstraint', function () {
                    expect(search.addConstraint).toBeDefined();
                });
                /*void addConstraint(string field)
                 void addConstraint(string field, string value) */
                 });
        });
        afterEach(function(){
            document.body.removeChild(searchMgr);
        });
    });

    describe('2.6.	SCHEDULED CONTENT AND HYBRID TUNER APIs', function(){
        var video, channelConfig;
        beforeEach(function () {
            video= document.createElement('object');
            video.setAttribute("type", "video/broadcast");
            document.body.appendChild(video);

            channelConfig = video.getChannelConfig();
        });
        describe('2.6.1.	Channel Config class', function(){
            describe('Properties', function() {
                it('genre', function () {
                    expect(channelConfig.genre).toBeDefined();
                });
                it('genreExt', function () {
                    expect(channelConfig.genreExt).toBeDefined();
                });
            });
            describe('Methods', function() {
                it('createChannelScanOptionsObject ', function () {
                    expect(channelConfig.createChannelScanOptionsObject ).toBeDefined();
                    /*ChannelScanOptions createChannelScanOptionsObject ()
                     CSearchedInfo createChannelSearchedInfoObject( Integer count ) */
                });
                it('removeChannel', function () {
                    expect(channelConfig.removeChannel).toBeDefined();
                });
                it('removeChannelList', function () {
                    expect(channelConfig.removeChannelList).toBeDefined();
                });
                it('controlScan', function () {
                    expect(channelConfig.controlScan).toBeDefined();
                });
                it('setSelectedConflictLcn', function () {
                    expect(channelConfig.setSelectedConflictLcn).toBeDefined();
                });
            });
            describe('Events', function() {
                it('onChannelListUpdate', function () {
                    expect(channelConfig.onChannelListUpdate).toBeDefined();
                });
                it('onChannelScan', function () {
                    expect(channelConfig.onChannelScan).toBeDefined();
                });
            });
            describe('2.6.1.1.	Channel class', function(){
                var channel;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    var channelList = channelConfig.channelList;
                    channel = channelList.getChannel(0);
                });
                describe('Constant', function() {
                    it('TYPE_ALL', function () {
                        expect(channel.TYPE_ALL).toBe(100);
                    });
                    it('CAS_FTA', function () {
                        expect(channel.CAS_FTA).toBe(0);
                    });
                    it('CAS_NAGRA', function () {
                        expect(channel.CAS_NAGRA).toBe(1);
                    });
                    it('CAS_IRDETO', function () {
                        expect(channel.CAS_IRDETO).toBe(2);
                    });
                    it('CAS_NDS', function () {
                        expect(channel.CAS_NDS).toBe(3);
                    });
                    it('CAS_VIACCESS', function () {
                        expect(channel.CAS_VIACCESS).toBe(4);
                    });
                    it('CAS_CONAX', function () {
                        expect(channel.CAS_CONAX).toBe(5);
                    });
                    it('CAS_MEDIAGUARD', function () {
                        expect(channel.CAS_MEDIAGUARD).toBe(6);
                    });
                    it('CAS_CRYPTOWORKS', function () {
                        expect(channel.CAS_CRYPTOWORKS).toBe(7);
                    });
                    it('CAS_JPBCAS', function () {
                        expect(channel.CAS_JPBCAS).toBe(10);
                    });
                    it('CAS_JPCCAS', function () {
                        expect(channel.CAS_JPCCAS).toBe(11);
                    });
                });
                describe('Properties', function() {
                    it('name', function () {
                        expect(channel.name).toBeDefined();
                    });
                    it('majorChannel', function () {
                        expect(channel.majorChannel).toBeDefined();
                    });
                    it('manualBlock', function () {
                        expect(channel.manualBlock).toBeDefined();
                    });
                    it('favourite', function () {
                        expect(channel.favourite).toBeDefined();
                    });
                    it('removed', function () {
                        expect(channel.removed).toBeDefined();
                    });
                    it('channelStatus', function () {
                        expect(channel.channelStatus).toBeDefined();
                    });
                    it('casIDs', function () {
                        expect(channel.casIDs).toBeDefined();
                    });
                    it('svcoptype', function () {
                        expect(channel.svcoptype).toBeDefined();
                    });
                    it('hasTeletext', function () {
                        expect(channel.hasTeletext).toBeDefined();
                    });
                    it('defaultAuth', function () {
                        expect(channel.defaultAuth).toBeDefined();
                    });
                    it('svcSection', function () {
                        expect(channel.svcSection).toBeDefined();
                    });
                    it('isHD', function () {
                        expect(channel.isHD).toBeDefined();
                    });
                    it('tuningInfo', function () {
                        expect(channel.tuningInfo).toBeDefined();
                    });
                });
            });
            describe('2.6.1.2.	FavouriteListCollection class', function(){
                var favCollection;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    favCollection = channelConfig.favouriteLists;
                });
            });
            describe('2.6.1.3.	FavouriteList class', function(){
                var favList;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    var favCollection = channelConfig.favouriteLists;
                    favList = favCollection.getFavouriteList();
                });
                describe('Methods ', function() {
                    it('insertBefore2', function () {
                        expect(favList.insertBefore2).toBeDefined();
                    });
                    it('commit2', function () {
                        expect(favList.commit2).toBeDefined();
                    });
                });
            });
            describe('2.6.1.4.	ChannelScanParametersCollection', function(){
                var channelParams;
                beforeEach(function () {
                    channelConfig = video.getChannelConfig();
                    channelParams = channelConfig.createChannelScanParametersObject();
                });
                describe('Methods ', function() {
                    it('addChannelScanParam', function () {
                        expect(channelParams.addChannelScanParam).toBeDefined();
                    });
                    it('removeChannelScanParam', function () {
                        expect(channelParams.removeChannelScanParam).toBeDefined();
                    });
                });
            });
            describe('2.6.1.5.	ChannelScanParameters', function(){
                var channelParam;
                beforeEach(function () {
                    channelConfig = video.getChannelConfig();
                    channelParam = channelConfig.createChannelScanParametersObject().item(0);
                });
                describe('Properties ', function() {
                    it('idType', function () {
                        expect(channelParam.idType).toBeDefined();
                    });
                    it('removeChannelScanParam', function () {
                        expect(channelParam.removeChannelScanParam).toBeDefined();
                    });
                });
            });
            describe('2.6.1.6.	ChannelScanOption class', function(){
                var channelScanOptions;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    channelScanOptions = channelConfig.createChannelScanOptionsObject();
                });
                describe('Properties ', function() {
                    it('casType', function () {
                        expect(channelScanOptions.casType).toBeDefined();
                    });
                    it('enableNetworkScan', function () {
                        expect(channelScanOptions.enableNetworkScan).toBeDefined();
                    });
                });
            });
            describe('2.6.1.7.	DVBTChannelSanParameters class', function(){
                var dvbtParam;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    dvbtParam = channelConfig.createChannelScanParametersObject(12);  //ID_DVB_T
                });
                describe('Properties', function(){
                    it('transmission', function () {
                        expect(dvbtParam.transmission).toBeDefined();
                    });
                });
            });
            describe('2.6.1.8.	DVBSChannelSanParameters class', function(){
                var dvbsParam;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    dvbsParam = channelConfig.createChannelScanParametersObject(11);  //ID_DVB_S
                });
                describe('Properties', function(){
                    it('antennaId', function () {
                        expect(dvbsParam.antennaId).toBeDefined();
                    });
                    it('antennaName', function () {
                        expect(dvbsParam.antennaName).toBeDefined();
                    });
                });
            });
            describe('2.6.1.9.	DVBCChannelSanParameters class', function(){
                var dvbcParam;
                beforeEach(function () {
                    var channelConfig = video.getChannelConfig();
                    dvbcParam = channelConfig.createChannelScanParametersObject(10);  //ID_DVB_C
                });
            });
        });
        afterEach(function(){
            document.body.removeChild(video);
        });
    });

    describe('2.7.	Shared Utility classes	', function(){
        var record, programme;
        beforeEach(function () {
            record = document.createElement('object');
            record.setAttribute("type", "application/oipfRecordingScheduler");
            document.body.appendChild(record);

            programme = record.createProgrammObject();
        });
        describe('2.7.1.	Programme class', function(){
            describe('Constants', function(){
                it('ID_FSAT_EVENT', function () {
                    expect(programme.ID_FSAT_EVENT).toBe(10);
                });
            });
            describe('Properties', function(){
                it('recording', function () {
                    expect(programme.recording).toBeDefined();
                });
                it('subtitleType', function () {
                    expect(programme.subtitleType).toBeDefined();
                });
                it('subtitleTypes', function () {
                    expect(programme.subtitleTypes).toBeDefined();
                });
                it('scheduledRecording', function () {
                    expect(programme.scheduledRecording).toBeDefined();
                });
                it('recordings', function () {
                    expect(programme.recordings).toBeDefined();
                });
                it('programmeCRID', function () {
                    expect(programme.programmeCRID).toBeDefined();
                });
                it('recommendationCRID', function () {
                    expect(programme.recommendationCRID).toBeDefined();
                });
                it('mediaDeeplinkID', function () {
                    expect(programme.mediaDeeplinkID).toBeDefined();
                });
                it('mediaDeeplinkUrl', function () {
                    expect(programme.mediaDeeplinkUrl).toBeDefined();
                });
                it('mediaDeeplinkExpireDate', function () {
                    expect(programme.mediaDeeplinkExpireDate).toBeDefined();
                });
            });
        });
        describe('2.7.2.	AVComponent', function(){
            var avcontrol, component;
            beforeEach(function () {
                avcontrol = document.createElement('object');
                avcontrol.setAttribute("type", "video/mpeg");
                document.body.appendChild(avcontrol);
                component = avcontrol.getComponents(avcontrol.COMPONENT_TYPE_VIDEO).item(0);
            });
            describe('Properties', function(){
                it('subType', function () {
                    expect(component.subType).toBeDefined();
                });
                it('language2', function () {
                    expect(component.language2).toBeDefined();
                });
            });
            afterEach(function(){
                document.body.removeChild(avcontrol);
            });
        });
        describe('2.7.3.	AVSubtitleComponent', function(){
            var avcontrol, component;
            beforeEach(function () {
                avcontrol = document.createElement('object');
                avcontrol.setAttribute("type", "video/mpeg");
                document.body.appendChild(avcontrol);
                component = avcontrol.getComponents(avcontrol.COMPONENT_TYPE_SUBTITLE).item(0);
            });
            describe('Properties', function(){
                it('subType', function () {
                    expect(component.subType).toBeDefined();
                });
            });
            afterEach(function(){
                document.body.removeChild(avcontrol);
            });
        });
        afterEach(function(){
            document.body.removeChild(record);
        });
    });
});