// Humax_API_v3.5.1.docx
describe('3.	Created HUMAX APIs', function() {
    'use strict';
    describe('3.1.	HDlna class', function () {
        var dlna;
        beforeEach(function(){
            dlna = oipfObjectFactory.createDlnaManagerObject();
        });
        describe('Properties', function(){
            it('dmp', function(){
                expect(dlna.dmp).toBeDefined();
            });
            it('dms', function(){
                expect(dlna.dms).toBeDefined();
            });
            it('dmr', function(){
                expect(dlna.dmr).toBeDefined();
            });
        });
        describe('3.1.1.	HDlnaDms class', function () {
            describe('Properties', function(){
                it('started', function(){
                    expect(dlna.dms.started).toBeDefined();
                });
                it('friendlyName', function(){
                    expect(dlna.dms.friendlyName).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('start ', function(){
                    expect(dlna.dms.start ).toBeDefined();
                });
                it('stop ', function(){
                    expect(dlna.dms.stop ).toBeDefined();
                });
            });
        });
        describe('3.1.2.	HDlnaDmp class', function () {
            describe('Properties', function(){
                it('state', function(){
                    expect(dlna.dmp.state).toBeDefined();
                });
            });
            describe('Events', function(){
                it('state', function(){
                    expect(dlna.dmp.onCDSScan).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('startScan', function(){
                    expect(dlna.dmp.startScan).toBeDefined();
                });
                it('stopScan', function(){
                    expect(dlna.dmp.stopScan).toBeDefined();
                });
                it('refreshDms', function(){
                    expect(dlna.dmp.refreshDms ).toBeDefined();
                });
                it('getAvailableCdsList ', function(){
                    expect(dlna.dmp.getAvailableCdsList  ).toBeDefined();
                });
            });
            describe('3.1.2.1.	HDlnaCds class', function () {
                var cds;
                beforeEach(function(){
                    cds = dlna.dmp.getAvailableCdsList().item(0);
                });
                describe('Properties', function(){
                    it('udn', function(){
                        expect(cds.udn).toBeDefined();
                    });
                    it('friendlyName', function(){
                        expect(cds.friendlyName).toBeDefined();
                    });
                    it('ipAddress', function(){
                        expect(cds.ipAddress).toBeDefined();
                    });
                });
                describe('Methods', function(){
                    it('browseContent ', function(){
                        expect(cds.browseContent ).toBeDefined();
                    });
                    it('searchContent', function(){
                        expect(cds.searchContent).toBeDefined();
                    });
                });
                describe('Events', function(){
                    it('onContentBrowse ', function(){
                        expect(cds.onContentBrowse ).toBeDefined();
                    });
                    it('onContentSearch', function(){
                        expect(cds.onContentSearch).toBeDefined();
                    });
                });
                describe('3.1.2.1.1.	HDlnaCdsContent class', function () {
                    var cdsContent;
                    beforeEach(function(){
                        cdsContent = {};
                    });
                    describe('Properties', function(){
                        it('objectID', function(){
                            expect(cdsContent.objectID).toBeDefined();
                        });
                        it('parentID', function(){
                            expect(cdsContent.parentID).toBeDefined();
                        });
                        it('objectType', function(){
                            expect(cdsContent.objectType).toBeDefined();
                        });
                        it('importURI', function(){
                            expect(cdsContent.importURI).toBeDefined();
                        });
                        it('thumbnailUrl', function(){
                            expect(cdsContent.thumbnailUrl).toBeDefined();
                        });
                        it('title', function(){
                            expect(cdsContent.title).toBeDefined();
                        });
                        it('date', function(){
                            expect(cdsContent.date).toBeDefined();
                        });
                        it('duration', function(){
                            expect(cdsContent.duration).toBeDefined();
                        });
                        it('resolution', function(){
                            expect(cdsContent.resolution).toBeDefined();
                        });
                        it('class', function(){
                            expect(cdsContent.class).toBeDefined();
                        });
                        it('restricted', function(){
                            expect(cdsContent.restricted).toBeDefined();
                        });
                        it('byteSeekAble', function(){
                            expect(cdsContent.byteSeekAble).toBeDefined();
                        });
                        it('digitalCopyControl', function(){
                            expect(cdsContent.digitalCopyControl).toBeDefined();
                        });
                        it('genre', function(){
                            expect(cdsContent.genre).toBeDefined();
                        });
                        it('childCount', function(){
                            expect(cdsContent.childCount).toBeDefined();
                        });
                        it('album', function(){
                            expect(cdsContent.album).toBeDefined();
                        });
                        it('artist', function(){
                            expect(cdsContent.artist).toBeDefined();
                        });
                    });
                });
            });
        });
        describe('3.1.3.	HDlnaDmr class', function () {
            describe('Properties', function(){
                it('started', function(){
                    expect(dlna.dmr.started).toBeDefined();
                });
                it('activated', function(){
                    expect(dlna.dmr.activated).toBeDefined();
                });
                it('friendlyName', function(){
                    expect(dlna.dmr.friendlyName).toBeDefined();
                });
            });
            describe('Events', function(){
                it('onReqPlay', function(){
                    expect(dlna.dmr.onReqPlay).toBeDefined();
                });
                it('onReqStop', function(){
                    expect(dlna.dmr.onReqStop).toBeDefined();
                });
                it('onReqPause', function(){
                    expect(dlna.dmr.onReqPause).toBeDefined();
                });
                it('onReqSeek', function(){
                    expect(dlna.dmr.onReqSeek).toBeDefined();
                });
                it('onReqSetVolume', function(){
                    expect(dlna.dmr.onReqSetVolume).toBeDefined();
                });
                it('onReqMute', function(){
                    expect(dlna.dmr.onReqMute).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('start ', function(){
                    expect(dlna.dmr.start ).toBeDefined();
                });
                it('stop', function(){
                    expect(dlna.dmr.stop).toBeDefined();
                });
                it('setMediaChange ', function(){
                    expect(dlna.dmr.setMediaChange ).toBeDefined();
                });
            });
        });
    });

    describe('3.2.	HSamba Class', function () {
        var smbMgr;
        beforeEach(function(){
            smbMgr = oipfObjectFactory.createSambaManagerObject();
        });
        //it('smbMgr', function(){
        //    expect(smbMgr).toBeDefined();
        //});
        describe('Constants', function(){
            it('eNATIVE_SAMBAC_SCAN_STARTED ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_SCAN_STARTED ).toBe(0);
            });
            it('eNATIVE_SAMBAC_SCAN_ADD ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_SCAN_ADD ).toBe(1);
            });
            it('eNATIVE_SAMBAC_SCAN_REMOVE ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_SCAN_REMOVE ).toBe(2);
            });
            it('eNATIVE_SAMBAC_SCAN_COMPLETE ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_SCAN_COMPLETE ).toBe(3);
            });
            it('eNATIVE_SAMBAC_SCAN_FAIL ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_SCAN_FAIL ).toBe(4);
            });
            it('eNATIVE_SAMBAC_MOUNT_OK ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_MOUNT_OK ).toBe(10);
            });
            it('eNATIVE_SAMBAC_MOUNT_FAIL ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_MOUNT_FAIL ).toBe(11);
            });
            it('eNATIVE_SAMBAC_UMOUNT_OK ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_UMOUNT_OK ).toBe(12);
            });
            it('eNATIVE_SAMBAC_UMOUNT_FAIL ', function(){
                expect(smbMgr.eNATIVE_SAMBAC_UMOUNT_FAIL ).toBe(13);
            });
        });
        describe('Events', function() {
            it('onScanResult ', function () {
                expect(smbMgr.onScanResult).toBe(0);
            });
            it('onMountResult ', function () {
                expect(smbMgr.onMountResult).toBe(0);
            });
        });
        describe('Methods', function() {
            it('startScan ', function () {
                expect(smbMgr.startScan).toBe(0);
            });
            it('stopScan ', function () {
                expect(smbMgr.stopScan).toBe(0);
            });
            it('mount ', function () {
                expect(smbMgr.mount).toBe(0);
            });
            it('unmount',function () {
                expect(smbMgr.unmount ).toBe(0);
            });
            it('unmountAll',function () {
                expect(smbMgr.unmountAll ).toBe(0);
            });
            it('getAvailableList',function () {
                expect(smbMgr.getAvailableList ).toBe(0);
            });
        });
        describe('3.2.1.	HSambaResultEvent', function () {
            var smbEvent;
            beforeEach(function(){
                smbEvent = {};
            });
            describe('Properties', function(){
                it('state', function(){
                    expect(smbEvent.state).toBeDefined();
                });
                it('server', function(){
                    expect(smbEvent.server).toBeDefined();
                });
            });
        });
        describe('3.2.2.	HSambaServer', function () {
            var smbServer;
            beforeEach(function(){
                smbServer = {};
            });
            describe('Properties', function(){
                it('serverName', function(){
                    expect(smbServer.serverName).toBeDefined();
                });
                it('sharedName', function(){
                    expect(smbServer.sharedName).toBeDefined();
                });
                it('ip', function(){
                    expect(smbServer.ip).toBeDefined();
                });
                it('isMounted', function(){
                    expect(smbServer.isMounted).toBeDefined();
                });
                it('mountPath', function(){
                    expect(smbServer.mountPath).toBeDefined();
                });
                it('log', function(){
                    expect(smbServer.log).toBeDefined();
                });
                it('id', function(){
                    expect(smbServer.id).toBeDefined();
                });
                it('password', function(){
                    expect(smbServer.password).toBeDefined();
                });
            });
        });
    });
    describe('3.3.	HContentManager Class', function () {
        var contentMgr;
        beforeEach(function(){
            contentMgr = oipfObjectFactory.createContentManagerObject();
        });
        describe('Properties', function() {
            it('state', function () {
                expect(contentMgr.state).toBeDefined();
            });
            it('browseState', function () {
                expect(contentMgr.browseState).toBeDefined();
            });
        });

        describe('Events', function() {
            it('onContentOperate', function () {
                expect(contentMgr.onContentOperate).toBeDefined();
            });
            it('onContentBrowse', function () {
                expect(contentMgr.onContentBrowse).toBeDefined();
            });
            it('onContentMonitor', function () {
                expect(contentMgr.onContentMonitor).toBeDefined();
                // Spec에는 on이 빠져있음.
            });
            it('onContentScanSurvey', function () {
                expect(contentMgr.onContentScanSurvey).toBeDefined();
                // Spec에는 on이 빠져있음.
            });
            it('onContentSearch', function () {
                expect(contentMgr.onContentSearch).toBeDefined();
            });
        });

        describe('Methods', function() {
            it('autoCopy', function () {
                expect(contentMgr.autoCopy).toBeDefined();
            });
            it('copyContent', function () {
                expect(contentMgr.copyContent).toBeDefined();
            });
            it('deleteContent', function () {
                expect(contentMgr.deleteContent).toBeDefined();
                // Spec에는 on이 빠져있음.
            });
            it('makeDir', function () {
                expect(contentMgr.makeDir).toBeDefined();
                // Spec에는 on이 빠져있음.
            });
            it('removeDir', function () {
                expect(contentMgr.removeDir).toBeDefined();
            });
            it('stopFileOperation', function () {
                expect(contentMgr.stopFileOperation).toBeDefined();
            });
            it('browseContent', function () {
                expect(contentMgr.browseContent).toBeDefined();
            });
            it('getOperationState', function () {
                expect(contentMgr.getOperationState).toBeDefined();
            });
            it('reScan', function () {
                expect(contentMgr.reScan).toBeDefined();
            });
            it('startAutoScan', function () {
                expect(contentMgr.startAutoScan).toBeDefined();
            });
            it('isExist', function () {
                expect(contentMgr.isExist).toBeDefined();
            });
            it('hasFile', function () {
                expect(contentMgr.hasFile).toBeDefined();
            });
            it('isScanning', function () {
                expect(contentMgr.isScanning).toBeDefined();
            });
            it('requestScanNotify', function () {
                expect(contentMgr.requestScanNotify).toBeDefined();
            });
            it('extensionMonitor', function () {
                expect(contentMgr.extensionMonitor).toBeDefined();
            });
            it('moveContent', function () {
                expect(contentMgr.moveContent).toBeDefined();
            });
            it('getSize', function () {
                expect(contentMgr.getSize).toBeDefined();
            });
            it('searchContent', function () {
                expect(contentMgr.searchContent).toBeDefined();
            });
            it('createOperationToken', function () {
                expect(contentMgr.createOperationToken).toBeDefined();
            });
        });
        describe('3.3.1. HContent', function () {
            var content;
            beforeEach(function(){
                content = {};
            });
            describe('Properties', function() {
                it('contentType', function () {
                    expect(content.contentType).toBeDefined();
                });
                it('fileType', function () {
                    expect(content.fileType).toBeDefined();
                });
                it('fullPath', function () {
                    expect(content.fullPath).toBeDefined();
                });
                it('hasSubitem', function () {
                    expect(content.hasSubitem).toBeDefined();
                });
                it('date', function () {
                    expect(content.date).toBeDefined();
                });
                it('duration', function () {
                    expect(content.duration).toBeDefined();
                });
                it('lastViewTime', function () {
                    expect(content.lastViewTime).toBeDefined();
                });
                it('thumbnailUrl', function () {
                    expect(content.thumbnailUrl).toBeDefined();
                });
                it('resolution', function () {
                    expect(content.resolution).toBeDefined();
                });
                it('thumbResolution', function () {
                    expect(content.thumbResolution).toBeDefined();
                });
                it('pictureDate', function () {
                    expect(content.pictureDate).toBeDefined();
                });
                it('album', function () {
                    expect(content.album).toBeDefined();
                });
                it('title', function () {
                    expect(content.title).toBeDefined();
                });
                it('genre', function () {
                    expect(content.genre).toBeDefined();
                });
                it('watched', function () {
                    expect(content.watched).toBeDefined();
                });
                it('storageCategory', function () {
                    expect(content.storageCategory).toBeDefined();
                });
                it('size', function () {
                    expect(content.size).toBeDefined();
                });
                it('largeThumbnailUrl', function () {
                    expect(content.largeThumbnailUrl).toBeDefined();
                });
            });
        });
        describe('3.3.2. HContentManagerOperationToken', function () {
            var contentMgr;
            beforeEach(function(){
                contentMgr = {};
            });
            describe('Methods', function(){
                it('appPath', function() {
                    expect(contentMgr.appPath).toBeDefined();
                });
                it('removePath', function() {
                    expect(contentMgr.removePath).toBeDefined();
                });
            });
        });
    });
    describe('3.4.	HMX_Media class', function () {
        var media;
        beforeEach(function(){
            media = oipfObjectFactory.createMediaSearchManagerObject();
        });
        //it('media', function() {
        //    expect(media).toBeDefined();
        //});
        describe('Properties', function(){
            it('hmx_MediaScan', function() {
                expect(media.hmx_MediaScan).toBeDefined();
            });
            it('createSearchDLNA', function() {
                expect(media.createSearchDLNA).toBeDefined();
            });
            it('hmx_MediaDoFile', function() {
                expect(media.hmx_MediaDoFile).toBeDefined();
            });
            it('hmx_MediaFileUtil', function() {
                expect(media.hmx_MediaFileUtil).toBeDefined();
            });
        });
        describe('3.4.1.	HMX_Media Scan', function () {
            var scan;
            beforeEach(function(){
                scan = media.hmx_MediaScan();
            });
            describe('Events', function(){
                it('onMediaContentSearch', function() {
                    expect(scan.onMediaContentSearch).toBeDefined();
                });
                it('onDirectorySearch', function() {
                    expect(scan.onDirectorySearch).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('mediaBrowse', function() {
                    expect(scan.mediaBrowse).toBeDefined();
                });
                it('dirBrowse', function() {
                    expect(scan.dirBrowse).toBeDefined();
                });
                it('getVideoPlayPosition', function() {
                    expect(scan.getVideoPlayPosition).toBeDefined();
                });
                it('getVideoDuration', function() {
                    expect(scan.getVideoDuration).toBeDefined();
                });
                it('getVideoThumbnailUrl', function() {
                    expect(scan.getVideoThumbnailUrl).toBeDefined();
                });
                it('getVideoWatched', function() {
                    expect(scan.getVideoWatched).toBeDefined();
                });
                it('fileOpDo', function() {
                    expect(scan.fileOpDo).toBeDefined();
                });
                it('isFileExist', function() {
                    expect(scan.isFileExist).toBeDefined();
                });
                it('isDirExist', function() {
                    expect(scan.isDirExist).toBeDefined();
                });
                it('isCopying', function() {
                    expect(scan.isCopying).toBeDefined();
                });
                it('isDeleting', function() {
                    expect(scan.isDeleting).toBeDefined();
                });
                it('getSpaceInfo', function() {
                    expect(scan.getSpaceInfo).toBeDefined();
                });
            });
        });
        describe('3.4.2.	HMX_DMSSearcher', function () {
            var searchdlna;
            beforeEach(function(){
                searchdlna = media.createSearchDLNA();
            });
            describe('Properties', function(){
                it('browseState', function() {
                    expect(searchdlna.browseState).toBeDefined();
                });
            });
            describe('Events', function(){
                it('onDMSAttached', function() {
                    expect(searchdlna.onDMSAttached).toBeDefined();
                });
                it('onDMSDetached', function() {
                    expect(searchdlna.onDMSDetached).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('search', function() {
                    expect(searchdlna.search).toBeDefined();
                });
                it('getAvailableDMSList', function() {
                    expect(searchdlna.getAvailableDMSList).toBeDefined();
                });
                it('getCurrentDMS', function() {
                    expect(searchdlna.getCurrentDMS).toBeDefined();
                });
            });
            describe('3.4.2.1.	HMX_DMS', function () {
                var dms;
                beforeEach(function(){
                    dms = searchdlna.getCurrentDMS();
                });
                describe('Properties', function(){
                    it('udn', function() {
                        expect(dms.udn).toBeDefined();
                    });
                    it('friendlyname', function() {
                        expect(dms.friendlyname).toBeDefined();
                    });
                    it('ipAddress', function() {
                        expect(dms.ipAddress).toBeDefined();
                    });
                });
                describe('Events', function(){
                    it('onContentSearch ', function() {
                        expect(dms.onContentSearch ).toBeDefined();
                    });
                    it('_contentSearchedEvent ', function() {
                        expect(dms._contentSearchedEvent).toBeDefined();
                    });
                });
                describe('Methods', function(){
                    it('browseDirectChildren ', function() {
                        expect(dms.browseDirectChildren ).toBeDefined();
                    });
                });
            });
        });
        describe('3.4.3.	HMX_MediaDoFile', function () {
            var mediafile;
            beforeEach(function(){
                mediafile = media.hmx_MediaDoFile();
            });
            describe('Events', function(){
                it('onFileOpComplete',function() {
                    expect(mediafile.onFileOpComplete ).toBeDefined();
                });
            });
        });
        describe('3.4.4.	HMX_MediaFileUtil', function () {
            var fileutil;
            beforeEach(function(){
                fileutil = media.hmx_MediaFileUtil();
            });
            describe('Methods', function(){
                it('fileOpDo',function() {
                    expect(fileutil.fileOpDo ).toBeDefined();
                });
                it('isFileExist',function() {
                    expect(fileutil.isFileExist ).toBeDefined();
                });
                it('isDirExist ',function() {
                    expect(fileutil.isDirExist  ).toBeDefined();
                });
                it('isCopying ',function() {
                    expect(fileutil.isCopying  ).toBeDefined();
                });
                it('isDeleting  ',function() {
                    expect(fileutil.isDeleting   ).toBeDefined();
                });
                it('getSpaceInfo  ',function() {
                    expect(fileutil.getSpaceInfo   ).toBeDefined();
                });
            });
        });
    });
    describe('3.5.	HMaster Configuration', function () {
        var master, configuration, localsystem;
        beforeEach(function(){
            master = oipfObjectFactory.CreateHumaxConfigurationObject();
            configuration = master.configuration;
            localsystem = master.localsystem;
        });
        it('master configuration', function(){
            expect(master).toBeDefined();
        });
        describe('Properties', function(){
            it('configuration', function() {
                expect(configuration).toBeDefined();
            });
        });

        describe('3.5.1.	HConfiguration', function () {
            describe('Properties', function(){
                it('operatorId', function() {
                    expect(configuration.operatorId).toBeDefined();
                });
                it('preferredMenuLanguage', function() {
                    expect(configuration.preferredMenuLanguage).toBeDefined();
                });
                it('standbyPowerMode', function() {
                    expect(configuration.standbyPowerMode).toBeDefined();
                });
                it('automaticStandby', function() {
                    expect(configuration.automaticStandby).toBeDefined();
                });
                it('autoDelete', function() {
                    expect(configuration.autoDelete).toBeDefined();
                });
                it('audioBleepEnabled', function() {
                    expect(configuration.audioBleepEnabled).toBeDefined();
                });
                it('subtitleFontType', function() {
                    expect(configuration.subtitleFontType).toBeDefined();
                });
                it('infoDisplayTimeout', function() {
                    expect(configuration.infoDisplayTimeout).toBeDefined();
                });
                it('timeShiftEnabled', function() {
                    expect(configuration.timeShiftEnabled).toBeDefined();
                });
                it('descrambleOnOff', function() {
                    expect(configuration.descrambleOnOff).toBeDefined();
                });
                it('skipForwardTime', function() {
                    expect(configuration.skipForwardTime).toBeDefined();
                });
                it('instantReplayTime', function() {
                    expect(configuration.instantReplayTime).toBeDefined();
                });
                it('firstTimeBoot', function() {
                    expect(configuration.firstTimeBoot).toBeDefined();
                });
                it('channelsetupPin', function() {
                    expect(configuration.channelsetupPin).toBeDefined();
                });
                it('guidancepolicy', function() {
                    expect(configuration.guidancepolicy).toBeDefined();
                });
                it('hdmiCecMode', function() {
                    expect(configuration.hdmiCecMode).toBeDefined();
                });
                it('targetStorage', function() {
                    expect(configuration.targetStorage).toBeDefined();
                });
                it('hbbTvEnbled', function() {
                    expect(configuration.hbbTvEnbled).toBeDefined();
                });
            });
            describe('Methods', function() {
                it('getField', function () {
                    expect(configuration.getField).toBeDefined();
                });
                it('setField', function () {
                    expect(configuration.setField).toBeDefined();
                });
                it('doFactoryDefault', function () {
                    expect(configuration.doFactoryDefault).toBeDefined();
                    /*void doFactoryDefault(void)
                     void doFactoryDefault(string Default_Values)*/
                 });
                it('doDBRestore ', function () {
                    expect(configuration.doDBRestore ).toBeDefined();
                });
                it('getCamNameBySlot ', function () {
                    expect(configuration.getCamNameBySlot ).toBeDefined();
                });
                it('setServerActivationTime', function () {
                    expect(configuration.setServerActivationTime).toBeDefined();
                });
            });
        });
        describe('3.5.2.	HLocalSystem', function () {
            describe('Constants', function() {
                it('OFF', function () {
                    expect(localsystem.OFF).toBeDefined();
                });
                it('ON', function () {
                    expect(localsystem.ON).toBeDefined();
                });
                it('PASSIVE_STANDBY', function () {
                    expect(localsystem.PASSIVE_STANDBY).toBeDefined();
                });
                it('ACTIVE_STANDBY', function () {
                    expect(localsystem.ACTIVE_STANDBY).toBeDefined();
                });
                it('PASSIVE_STANDBY_HIBERATE', function () {
                    expect(localsystem.PASSIVE_STANDBY_HIBERATE).toBeDefined();
                });
            });
            describe('Properties', function() {
                it('releaseVersion', function () {
                    expect(localsystem.releaseVersion).toBeDefined();
                });
                it('majorVersion', function () {
                    expect(localsystem.majorVersion).toBeDefined();
                });
                it('minorVersion', function () {
                    expect(localsystem.minorVersion).toBeDefined();
                });
                it('powerState', function () {
                    expect(localsystem.powerState).toBeDefined();
                });
                it('previousPowerState', function () {
                    expect(localsystem.previousPowerState).toBeDefined();
                });
                it('timeCurrentPowerState', function () {
                    expect(localsystem.timeCurrentPowerState).toBeDefined();
                });
                it('volume', function () {
                    expect(localsystem.volume).toBeDefined();
                });
                it('tvStandard', function () {
                    expect(localsystem.tvStandard).toBeDefined();
                });
                it('pvrSupport', function () {
                    expect(localsystem.pvrSupport).toBeDefined();
                });
                it('deviceID', function () {
                    expect(localsystem.deviceID).toBeDefined();
                });
                it('vendorName', function () {
                    expect(localsystem.vendorName).toBeDefined();
                });
                it('modelName', function () {
                    expect(localsystem.modelName).toBeDefined();
                });
                it('softwareVersion', function () {
                    expect(localsystem.softwareVersion).toBeDefined();
                });
                it('hardwareVersion', function () {
                    expect(localsystem.hardwareVersion).toBeDefined();
                });
                it('serialNumber', function () {
                    expect(localsystem.serialNumber).toBeDefined();
                });
                it('oipfProfile', function () {
                    expect(localsystem.oipfProfile).toBeDefined();
                });
                it('chipId', function () {
                    expect(localsystem.chipId).toBeDefined();
                });
                it('systemReady', function () {
                    expect(localsystem.systemReady).toBeDefined();
                });
                it('pvrEnabled', function () {
                    expect(localsystem.pvrEnabled).toBeDefined();
                });
                it('standbyState', function () {
                    expect(localsystem.standbyState).toBeDefined();
                });
                it('ciplusEnabled', function () {
                    expect(localsystem.ciplusEnabled).toBeDefined();
                });
                it('mute', function () {
                    expect(localsystem.mute).toBeDefined();
                });
                it('updatedList', function () {
                    expect(localsystem.updatedList).toBeDefined();
                });
                it('hcrdata', function () {
                    expect(localsystem.hcrdata).toBeDefined();
                });
                it('checkHcrData', function () {
                    expect(localsystem.checkHcrData).toBeDefined();
                });
                it('hmx_outputs', function () {
                    expect(localsystem.hmx_outputs).toBeDefined();
                });
                it('hmx_audios', function () {
                    expect(localsystem.hmx_audios).toBeDefined();
                });
                it('boxFirstBootStatus', function () {
                    expect(localsystem.boxFirstBootStatus).toBeDefined();
                });
                it('boxAntennaPowerStatus', function () {
                    expect(localsystem.boxAntennaPowerStatus).toBeDefined();
                });
                it('boxServiceUpdateFlag', function () {
                    expect(localsystem.boxServiceUpdateFlag).toBeDefined();
                });
                it('networkManager', function () {
                    expect(localsystem.networkManager).toBeDefined();
                });
                it('frontPanel', function () {
                    expect(localsystem.frontPanel).toBeDefined();
                });
                it('swupdate', function () {
                    expect(localsystem.swupdate).toBeDefined();
                });
                it('channelImportExport', function () {
                    expect(localsystem.channelImportExport).toBeDefined();
                });
                it('coldBootDone', function () {
                    expect(localsystem.coldBootDone).toBeDefined();
                });
                it('casactionIrEmmForcedOta', function () {
                    expect(localsystem.casactionIrEmmForcedOta).toBeDefined();
                });
                it('lcnupdate', function () {
                    expect(localsystem.lcnupdate).toBeDefined();
                });
                it('clockRecovery', function () {
                    expect(localsystem.clockRecovery).toBeDefined();
                });
                it('trdconflict', function () {
                    expect(localsystem.trdconflict).toBeDefined();
                });
                it('antennaInfoLists', function () {
                    expect(localsystem.antennaInfoLists).toBeDefined();
                });
                it('microphoneVolume', function () {
                    expect(localsystem.microphoneVolume).toBeDefined();
                });
                it('microphoneEnabled', function () {
                    expect(localsystem.microphoneEnabled).toBeDefined();
                });
                it('connectedMicrophone', function () {
                    expect(localsystem.connectedMicrophone).toBeDefined();
                });
            });
            describe('Events', function() {
                it('onUserActionIdle', function () {
                    expect(localsystem.onUserActionIdle).toBeDefined();
                });
                it('onKeyboardResult', function () {
                    expect(localsystem.onKeyboardResult).toBeDefined();
                });
                it('onCamStateChange', function () {
                    expect(localsystem.onCamStateChange).toBeDefined();
                });
                it('onSmartcardStateChanged', function () {
                    expect(localsystem.onSmartcardStateChanged).toBeDefined();
                });
                it('onAttachedMicrophone', function () {
                    expect(localsystem.onAttachedMicrophone).toBeDefined();
                });
                it('onDetachedMicrophone', function () {
                    expect(localsystem.onDetachedMicrophone).toBeDefined();
                });
                it('onUsbWirelessStateChanged', function () {
                    expect(localsystem.onUsbWirelessStateChanged).toBeDefined();
                });
            });
            describe('Methods', function() {
                it('setApplicationReady', function () {
                    expect(localsystem.setApplicationReady).toBeDefined();
                });
                it('setScreenSize', function () {
                    expect(localsystem.setScreenSize).toBeDefined();
                });
                it('setPvrSupport', function () {
                    expect(localsystem.setPvrSupport).toBeDefined();
                });
                it('setPowerState', function () {
                    expect(localsystem.setPowerState).toBeDefined();
                });
                it('setDigestCredentials', function () {
                    expect(localsystem.setDigestCredentials).toBeDefined();
                });
                it('clearDigestCredentials', function () {
                    expect(localsystem.clearDigestCredentials).toBeDefined();
                });
                it('showMsgbox', function () {
                    expect(localsystem.showMsgbox).toBeDefined();
                });
                it('getField', function () {
                    expect(localsystem.getField).toBeDefined();
                });
                it('setField', function () {
                    expect(localsystem.setField).toBeDefined();
                });
                it('registerEventListener', function () {
                    expect(localsystem.registerEventListener).toBeDefined();
                });
                it('unregisterEventListener', function () {
                    expect(localsystem.unregisterEventListener).toBeDefined();
                });
                it('checkFileExistence', function () {
                    expect(localsystem.checkFileExistence).toBeDefined();
                });
            });
            describe('3.5.2.1.	HNetworkInterface', function () {
                var networkMgr;
                beforeEach(function(){
                    networkMgr = localsystem.networkManager();
                });
                describe('Properties', function() {
                    it('ipAddress', function () {
                        expect(networkMgr.ipAddress).toBeDefined();
                    });
                    it('macAddress', function () {
                        expect(networkMgr.macAddress).toBeDefined();
                    });
                    it('connected', function () {
                        expect(networkMgr.connected).toBeDefined();
                    });
                    it('enabled', function () {
                        expect(networkMgr.enabled).toBeDefined();
                    });
                    it('netmask', function () {
                        expect(networkMgr.netmask).toBeDefined();
                    });
                    it('gateway', function () {
                        expect(networkMgr.gateway).toBeDefined();
                    });
                    it('dns1st', function () {
                        expect(networkMgr.dns1st).toBeDefined();
                    });
                    it('dns2nd', function () {
                        expect(networkMgr.dns2nd).toBeDefined();
                    });
                    it('networkType', function () {
                        expect(networkMgr.networkType).toBeDefined();
                    });
                    it('dhcpOn', function () {
                        expect(networkMgr.dhcpOn).toBeDefined();
                    });
                    it('dnsAuto', function () {
                        expect(networkMgr.dnsAuto).toBeDefined();
                    });
                    it('ipv6Address', function () {
                        expect(networkMgr.ipv6Address).toBeDefined();
                    });
                    it('ipv6Prefix', function () {
                        expect(networkMgr.ipv6Prefix).toBeDefined();
                    });
                    it('ipv6Gateway', function () {
                        expect(networkMgr.ipv6Gateway).toBeDefined();
                    });
                    it('ipv6dns1st', function () {
                        expect(networkMgr.ipv6dns1st).toBeDefined();
                    });
                    it('ipv6dns2nd', function () {
                        expect(networkMgr.ipv6dns2nd).toBeDefined();
                    });
                    it('ipv6dhcpOn', function () {
                        expect(networkMgr.ipv6dhcpOn).toBeDefined();
                    });
                    it('ipv6dnsAuto', function () {
                        expect(networkMgr.ipv6dnsAuto).toBeDefined();
                    });
                });
                describe('Events', function() {
                    it('onLinkStatusChanged', function () {
                        expect(networkMgr.onLinkStatusChanged).toBeDefined();
                    });
                    it('onAccessStatusUpdated', function () {
                        expect(networkMgr.onAccessStatusUpdated).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('applyConfigure', function () {
                        expect(networkMgr.applyConfigure).toBeDefined();
                    });
                    it('stopConnecting', function () {
                        expect(networkMgr.stopConnecting).toBeDefined();
                    });
                    it('checkGatewayAccess', function () {
                        expect(networkMgr.checkGatewayAccess).toBeDefined();
                    });
                    it('checkDnsAccess', function () {
                        expect(networkMgr.checkDnsAccess).toBeDefined();
                    });
                });
            });
            describe('3.5.2.2.	HMX_Output	', function () {
                var outputs;
                beforeEach(function(){
                    outputs = localsystem.hmx_outputs();
                });
                describe('Methods', function() {
                    it('name', function () {
                        expect(outputs.name).toBeDefined();
                    });
                    it('type', function () {
                        expect(outputs.type).toBeDefined();
                    });
                    it('enabled', function () {
                        expect(outputs.enabled).toBeDefined();
                    });
                    it('scartEnabled', function () {
                        expect(outputs.scartEnabled).toBeDefined();
                    });
                    it('compositeEnabled', function () {
                        expect(outputs.compositeEnabled).toBeDefined();
                    });
                    it('componentEnabled', function () {
                        expect(outputs.componentEnabled).toBeDefined();
                    });
                    it('rfEnabled', function () {
                        expect(outputs.rfEnabled).toBeDefined();
                    });
                    it('hdmiEnabled', function () {
                        expect(outputs.hdmiEnabled).toBeDefined();
                    });
                    it('hdmiEnabled', function () {
                        expect(outputs.hdmiEnabled).toBeDefined();
                    });
                    it('spdifEnabled', function () {
                        expect(outputs.spdifEnabled).toBeDefined();
                    });
                    it('tvscartEnabled', function () {
                        expect(outputs.tvscartEnabled).toBeDefined();
                    });
                    it('tvscartFormat', function () {
                        expect(outputs.tvscartFormat).toBeDefined();
                    });
                    it('supportedTvScartFormats', function () {
                        expect(outputs.supportedTvScartFormats).toBeDefined();
                    });
                    it('vcrscartEnabled', function () {
                        expect(outputs.vcrscartEnabled).toBeDefined();
                    });
                    it('vcrscartFormat', function () {
                        expect(outputs.vcrscartFormat).toBeDefined();
                    });
                    it('supportedTvScartFormats', function () {
                        expect(outputs.supportedTvScartFormats).toBeDefined();
                    });
                    it('supportedVcrScartFormats', function () {
                        expect(outputs.supportedVcrScartFormats).toBeDefined();
                    });
                    it('videoStandard', function () {
                        expect(outputs.videoStandard).toBeDefined();
                    });
                    it('avAdditionalSignal', function () {
                        expect(outputs.avAdditionalSignal).toBeDefined();
                    });
                    it('tvAspectRatio', function () {
                        expect(outputs.tvAspectRatio).toBeDefined();
                    });
                    it('wss2hdmiMode', function () {
                        expect(outputs.wss2hdmiMode).toBeDefined();
                    });
                    it('videoDisplayFormat', function () {
                        expect(outputs.videoDisplayFormat).toBeDefined();
                    });
                    it('curResolution', function () {
                        expect(outputs.curResolution).toBeDefined();
                    });
                    it('supportedResolutions', function () {
                        expect(outputs.supportedResolutions).toBeDefined();
                    });
                    it('audioDescriptionEnabled', function () {
                        expect(outputs.audioDescriptionEnabled).toBeDefined();
                    });
                    it('subtitleEnabled', function () {
                        expect(outputs.subtitleEnabled).toBeDefined();
                    });
                    it('hardOfHearingEnabled', function () {
                        expect(outputs.hardOfHearingEnabled).toBeDefined();
                    });
                });
            });
            describe('3.5.2.3.	HMX_Audio', function () {
                var audios;
                beforeEach(function(){
                    audios = localsystem.hmx_audios();
                });
                describe('Properties', function() {
                    it('name', function () {
                        expect(audios.name).toBeDefined();
                    });
                    it('type', function () {
                        expect(audios.type).toBeDefined();
                    });
                    it('enabled', function () {
                        expect(audios.enabled).toBeDefined();
                    });
                    it('maxVolume', function () {
                        expect(audios.maxVolume).toBeDefined();
                    });
                    it('minVolume', function () {
                        expect(audios.minVolume).toBeDefined();
                    });
                    it('lipSyncDelay', function () {
                        expect(audios.lipSyncDelay).toBeDefined();
                    });
                    //it('name', function () {
                    //    expect(audios.name).toBeDefined();
                    //});
                    // 동일한 이름의 name 속성이 있다.  밑에는 stereo, Left, Right, Mix 이런 값을 가지게 된다.
                    it('transcodingEnabled', function () {
                        expect(audios.transcodingEnabled).toBeDefined();
                    });
                    it('modeDigitalAudioOutput', function () {
                        expect(audios.modeDigitalAudioOutput).toBeDefined();
                    });
                    it('codecDigitalAudioOutput', function () {
                        expect(audios.codecDigitalAudioOutput).toBeDefined();
                    });
                    it('modeTranscoding', function () {
                        expect(audios.modeTranscoding).toBeDefined();
                    });
                    it('supportedSoundModes', function () {
                        expect(audios.supportedSoundModes).toBeDefined();
                    });
                    it('supportedDigitalAudioOutputCodecs', function () {
                        expect(audios.supportedDigitalAudioOutputCodecs).toBeDefined();
                    });
                    it('supportedDigitalAudioOutputModes', function () {
                        expect(audios.supportedDigitalAudioOutputModes).toBeDefined();
                    });
                    it('supportedTranscodingModes', function () {
                        expect(audios.supportedTranscodingModes).toBeDefined();
                    });
                });
            });
            describe('3.5.2.4.	HFrontPanel	', function () {
                var frontpanel;
                beforeEach(function(){
                    frontpanel = localsystem.frontPanel();
                });
                describe('Methods', function() {
                    it('setString ', function () {
                        expect(frontpanel.setString ).toBeDefined();
                    });
                    it('setLed', function () {
                        expect(frontpanel.setLed).toBeDefined();
                    });
                    it('setAnimation',function () {
                        expect(frontpanel.setAnimation  ).toBeDefined();
                    });
                    it('setCurrentMediaInform', function () {
                        expect(frontpanel.setCurrentMediaInform).toBeDefined();
                    });
                });
            });
            describe('3.5.2.5.	HSoftwareUpdate', function () {
                var swupdate;
                beforeEach(function(){
                    swupdate = localsystem.swupdate();
                });
                describe('Properties', function() {
                    it('Frequency ', function () {
                        expect(swupdate.Frequency).toBeDefined();
                    });
                    it('SymbolRate ', function () {
                        expect(swupdate.SymbolRate).toBeDefined();
                    });
                    it('TransSpec ', function () {
                        expect(swupdate.Polarization).toBeDefined();
                    });
                    it('TransSpec ', function () {
                        expect(swupdate.TransSpec).toBeDefined();
                    });
                    it('PskMod ', function () {
                        expect(swupdate.PskMod).toBeDefined();
                    });
                    it('FecCodeRate ', function () {
                        expect(swupdate.FecCodeRate).toBeDefined();
                    });
                    it('verBootupHumaxOta ', function () {
                        expect(swupdate.verBootupHumaxOta).toBeDefined();
                    });
                });
                describe('Event', function() {
                    it('onUpdateEvent ', function () {
                        expect(swupdate.onUpdateEvent).toBeDefined();
                    });
                    it('onUpdateProgress ', function () {
                        expect(swupdate.onUpdateProgress).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('startDetect ', function () {
                        expect(swupdate.startDetect).toBeDefined();
                    });
                    it('cancelDetect ', function () {
                        expect(swupdate.cancelDetect).toBeDefined();
                    });
                    it('startDownload ', function () {
                        expect(swupdate.startDownload).toBeDefined();
                    });
                    it('cancelDownload ', function () {
                        expect(swupdate.cancelDownload).toBeDefined();
                    });
                    it('startInstall ', function () {
                        expect(swupdate.startInstall).toBeDefined();
                    });
                    it('cancelInstall ', function () {
                        expect(swupdate.cancelInstall).toBeDefined();
                    });
                    it('restartSystem ', function () {
                        expect(swupdate.restartSystem).toBeDefined();
                    });
                    it('swupdateInit ', function () {
                        expect(swupdate.swupdateInit).toBeDefined();
                    });
                    it('startDetectWithType ', function () {
                        expect(swupdate.startDetectWithType).toBeDefined();
                    });
                    it('startUpdate ', function () {
                        expect(swupdate.startUpdate).toBeDefined();
                    });
                    it('cancelUpdate ', function () {
                        expect(swupdate.cancelUpdate).toBeDefined();
                    });
                    it('startManualDetect ', function () {
                        expect(swupdate.startManualDetect).toBeDefined();
                    });
                    it('cancelManualDetect ', function () {
                        expect(swupdate.cancelManualDetect).toBeDefined();
                    });
                    it('startSwupdateState ', function () {
                        expect(swupdate.startSwupdateState).toBeDefined();
                    });
                });
                describe('3.5.2.5.1.	CSwUpdateInfo', function () {
                    var swupdateinfo;
                    beforeEach(function(){
                        swupdateinfo = {};
                    });
                    describe(function(){
                        it('Methods', function(){
                            expect(swupdateinfo.getInfo).toBeDefined();
                        });
                    });
                });
            });
            describe('3.5.2.6.	HMX_NetworkManager', function () {
                var networkMgr;
                beforeEach(function(){
                    networkMgr = localsystem.networkManager();
                });
                describe('Propertis', function(){
                    it('defaultDevIndex', function(){
                        expect(networkMgr.defaultDevIndex).toBeDefined();
                    });
                    it('linkStatus', function(){
                        expect(networkMgr.linkStatus).toBeDefined();
                    });
                });

                describe('Event', function(){
                    it('onNetworkStatusChanged', function(){
                        expect(networkMgr.onNetworkStatusChanged).toBeDefined();
                    });
                });

                describe('Methods', function(){
                    it('getWifiConfig', function(){
                        expect(networkMgr.getWifiConfig).toBeDefined();
                    });
                    it('getDMSConfig', function(){
                        expect(networkMgr.getDMSConfig).toBeDefined();
                    });
                    it('getFTPConfig', function(){
                        expect(networkMgr.getFTPConfig).toBeDefined();
                    });
                    it('getPPPoEConfig', function(){
                        expect(networkMgr.getPPPoEConfig).toBeDefined();
                    });
                });

                describe('3.5.2.6.1.	HMX_NetworkWiFiConfig', function () {
                    var wificonfig;
                    beforeEach(function(){
                        wificonfig = networkMgr.getWifiConfig();
                    });
                    describe('Event', function(){
                        it('onAccessPointUpdated', function(){
                            expect(wificonfig.onAccessPointUpdated).toBeDefined();
                        });
                    });
                    describe('Methods', function(){
                        it('isConnectedAP', function(){
                            expect(wificonfig.isConnectedAP).toBeDefined();
                        });
                        it('apScanning', function(){
                            expect(wificonfig.apScanning).toBeDefined();
                        });
                        it('stopApScanning', function(){
                            expect(wificonfig.stopApScanning).toBeDefined();
                        });
                        it('setKey', function(){
                            expect(wificonfig.setKey).toBeDefined();
                        });
                        it('applyConnectToAP', function(){
                            expect(wificonfig.applyConnectToAP).toBeDefined();
                        });
                        it('applyConnectToAPbyWPS', function(){
                            expect(wificonfig.applyConnectToAPbyWPS).toBeDefined();
                        });
                        it('getWaveStrength', function(){
                            expect(wificonfig.getWaveStrength).toBeDefined();
                        });
                        it('getConnectedAPInfo', function(){
                            expect(wificonfig.getConnectedAPInfo).toBeDefined();
                        });
                        it('getUserAP', function(){
                            expect(wificonfig.getUserAP).toBeDefined();
                        });
                    });
                });
                describe('3.5.2.6.2.	HMX_NetworkDMSConfig', function () {
                    var dmsconfig;
                    beforeEach(function(){
                        dmsconfig = networkMgr.getDMSConfig();
                    });
                    describe('Properties', function(){
                        it('actionStatus', function(){
                            expect(dmsconfig.actionStatus).toBeDefined();
                        });
                    });
                    describe('Methods', function(){
                        it('start', function(){
                            expect(dmsconfig.start).toBeDefined();
                        });
                        it('stop', function(){
                            expect(dmsconfig.stop).toBeDefined();
                        });
                    });
                });
                describe('3.5.2.6.3.	HMX_NetworkFTPConfig', function () {
                    var ftpconfig;
                    beforeEach(function(){
                        ftpconfig = networkMgr.getFTPConfig();
                    });
                    describe('Properties', function(){
                        it('ftpStatus', function(){
                            expect(ftpconfig.ftpStatus).toBeDefined();
                        });
                    });
                    describe('Methods', function(){
                        it('FTPServerOn', function(){
                            expect(ftpconfig.FTPServerOn).toBeDefined();
                        });
                        it('FTPServerOff', function(){
                            expect(ftpconfig.FTPServerOff).toBeDefined();
                        });
                    });
                });
                describe('3.5.2.6.4.	HMX_NetworkPPPoEConfig', function () {
                    var pppoeconfig;
                    beforeEach(function(){
                        pppoeconfig = networkMgr.getPPPoEConfig();
                    });
                    describe('Events', function(){
                        it('onPPPoEStatusChanged', function(){
                            expect(pppoeconfig.onPPPoEStatusChanged).toBeDefined();
                        });
                    });
                    describe('Methods', function(){
                        it('getOn', function(){
                            expect(pppoeconfig.getOn).toBeDefined();
                        });
                        it('getID', function(){
                            expect(pppoeconfig.getID).toBeDefined();
                        });
                        it('getPassword', function(){
                            expect(pppoeconfig.getPassword).toBeDefined();
                        });
                        it('setOn', function(){
                            expect(pppoeconfig.setOn).toBeDefined();
                        });
                        it('setID', function(){
                            expect(pppoeconfig.setID).toBeDefined();
                        });
                        it('setPassword', function(){
                            expect(pppoeconfig.setPassword).toBeDefined();
                        });
                        it('connect', function(){
                            expect(pppoeconfig.connect).toBeDefined();
                        });
                        it('disconnect', function(){
                            expect(pppoeconfig.disconnect).toBeDefined();
                        });
                    });
                });
                describe('3.5.2.6.5.	HMX_NetworkAccessPoint', function () {
                    var ap;
                    beforeEach(function(){
                        ap = {};
                    });
                    describe('Properties', function(){
                        it('essid', function(){
                            expect(ap.essid).toBeDefined();
                        });
                        it('secure', function(){
                            expect(ap.secure).toBeDefined();
                        });
                        it('authen', function(){
                            expect(ap.authen).toBeDefined();
                        });
                        it('encrypt', function(){
                            expect(ap.encrypt).toBeDefined();
                        });
                        it('waveStrength', function(){
                            expect(ap.waveStrength).toBeDefined();
                        });
                        it('connectSpeed', function(){
                            expect(ap.connectSpeed).toBeDefined();
                        });
                        it('isConnected', function(){
                            expect(ap.isConnected).toBeDefined();
                        });
                    });
                });
            });
            describe('3.5.2.7.	HChannelImportExport', function () {
                var channelie;
                beforeEach(function(){
                    channelie = {};
                });
                describe('Events', function() {
                    it('onChannelImportExport', function () {
                        expect(channelie.onChannelImportExport).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('startChannelExport', function () {
                        expect(channelie.startChannelExport).toBeDefined();
                    });
                    it('startChannelImport', function () {
                        expect(channelie.startChannelImport).toBeDefined();
                    });
                });
            });
            describe('3.5.2.8.	HColdBootDone', function () {
                var coldbootdone;
                beforeEach(function(){
                    coldbootdone = {};
                });
                describe('Events', function() {
                    it('onColdBootDone', function () {
                        expect(coldbootdone.onColdBootDone).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('getColdBootDone', function () {
                        expect(coldbootdone.getColdBootDone).toBeDefined();
                    });
                    it('releaseColdBootDoneListener', function () {
                        expect(coldbootdone.releaseColdBootDoneListener).toBeDefined();
                    });
                });
            });
            describe('3.5.2.9. HCasActionIrEmmForcedOta', function () {
                var ota;
                beforeEach(function(){
                    ota = {};
                });
                describe('Events', function() {
                    it('onCasActionIrEmmForcedOta', function () {
                        expect(ota.onCasActionIrEmmForcedOta).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('setListener', function () {
                        expect(ota.setListener).toBeDefined();
                    });
                    it('releaseListener', function () {
                        expect(ota.releaseListener).toBeDefined();
                    });
                });
            });
            describe('3.5.2.10. HLcnUpdate', function () {
                var lcnupdate;
                beforeEach(function(){
                    lcnupdate = localsystem.lcnupdate();
                });
                describe('Events', function() {
                    it('onLcnUpdate', function () {
                        expect(lcnupdate.onLcnUpdate).toBeDefined();
                        /*onLcnUpdate(Integer eventtype, String svcListName, Integer tvNum, Integer radioNum, String lastUpdatedTime, String lastCheckedTime, Boolean displayInfo, Integer coldbootResult)
                         onLcnUpdate(Integer eventtype, Integer numofsvclist, CLcnUpdateSvcList svclist, Integer numofnewsvc, CLcnUpdateSvc newsvc, Integer numofreplacedsvc, CLcnUpdateSvc replacedsvc)
                         */
                    });
                });
                describe('Methods', function() {
                    it('startLcnUpdate', function () {
                        expect(lcnupdate.startLcnUpdate).toBeDefined();
                    });
                    it('stopLcnUpdate', function () {
                        expect(lcnupdate.stopLcnUpdate).toBeDefined();
                    });
                    it('saveLcnUpdate', function () {
                        expect(lcnupdate.saveLcnUpdate).toBeDefined();
                    });
                    it('getLcnUpdateInfo', function () {
                        expect(lcnupdate.getLcnUpdateInfo).toBeDefined();
                    });
                    it('removeLcnUpdateInfo', function () {
                        expect(lcnupdate.removeLcnUpdateInfo).toBeDefined();
                    });
                });
                describe('3.5.2.10.1. CLcnUpdateSvcList', function () {
                    var svclist;
                    beforeEach(function(){
                        svclist = {};
                    });
                    describe('Properties', function() {
                        it('length', function () {
                            expect(svclist.length).toBeDefined();
                        });
                    });
                    describe('Methods', function() {
                        it('getInfo', function () {
                            expect(svclist.getInfo).toBeDefined();
                        });
                    });
                });
                describe('3.5.2.10.2. CLcnUpdateSvc', function () {
                    var svc;
                    beforeEach(function(){
                        svc = {};
                    });
                    describe('Properties', function() {
                        it('length', function () {
                            expect(svc.length).toBeDefined();
                        });
                    });
                    describe('Methods', function() {
                        it('getInfo', function () {
                            expect(svc.getInfo).toBeDefined();
                        });
                    });
                });
            });
            describe('3.5.2.11.	HClockRecovery', function () {
                var clockrecovery;
                beforeEach(function(){
                    clockrecovery = {};
                });
                describe('Events', function() {
                    it('onClockRecovery', function () {
                        expect(clockrecovery.onClockRecovery).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('startClockRecovery', function () {
                        expect(clockrecovery.startClockRecovery).toBeDefined();
                    });
                });
            });
            describe('3.5.2.12.	HTrdConflict', function () {
                var trdconflict;
                beforeEach(function(){
                    trdconflict = {};
                });
                describe('Events', function() {
                    it('onTrdConflict', function () {
                        expect(trdconflict.onTrdConflict).toBeDefined();
                    });
                });
                describe('Methods', function() {
                    it('setTrdConflict', function () {
                        expect(trdconflict.setTrdConflict).toBeDefined();
                    });
                    it('getTrdConflict', function () {
                        expect(trdconflict.getTrdConflict).toBeDefined();
                    });
                });
            });
            describe('3.5.2.13.	AntennaInfoCollection', function () {
                var antennainfo;
                beforeEach(function(){
                    antennainfo = {};
                });
                describe('Constants', function() {
                    it('UNDEFINED', function () {
                        expect(antennainfo.UNDEFINED).toBe(0);
                    });
                    it('EAST', function () {
                        expect(antennainfo.EAST).toBe(1);
                    });
                    it('WEST', function () {
                        expect(antennainfo.WEST).toBe(2);
                    });
                    it('STEP', function () {
                        expect(antennainfo.STEP).toBe(1);
                    });
                    it('TIMEOUT', function () {
                        expect(antennainfo.TIMEOUT).toBe(2);
                    });
                    it('CONTINUOUS', function () {
                        expect(antennainfo.CONTINUOUS).toBe(3);
                    });
                });
                describe('Methods', function() {
                    it('commit', function () {
                        expect(antennainfo.commit).toBeDefined();
                    });
                    it('refresh', function () {
                        expect(antennainfo.refresh).toBeDefined();
                    });
                    it('createAntennaInfo', function () {
                        expect(antennainfo.createAntennaInfo).toBeDefined();
                    });
                    it('getAntennaInfo', function () {
                        expect(antennainfo.getAntennaInfo).toBeDefined();
                    });
                    it('removeAll', function () {
                        expect(antennainfo.removeAll).toBeDefined();
                    });
                    it('getConnectionType', function () {
                        expect(antennainfo.getConnectionType).toBeDefined();
                    });
                    it('setConnectionType', function () {
                        expect(antennainfo.setConnectionType).toBeDefined();
                    });
                    it('gotoPosition', function () {
                        expect(antennainfo.gotoPosition).toBeDefined();
                    });
                    it('storePosition', function () {
                        expect(antennainfo.storePosition).toBeDefined();
                    });
                    it('recalculate', function () {
                        expect(antennainfo.recalculate).toBeDefined();
                    });
                    it('stop', function () {
                        expect(antennainfo.stop).toBeDefined();
                    });
                    it('setLimit', function () {
                        expect(antennainfo.setLimit).toBeDefined();
                    });
                    it('enableLimit', function () {
                        expect(antennainfo.enableLimit).toBeDefined();
                    });
                    it('disableLimit', function () {
                        expect(antennainfo.disableLimit).toBeDefined();
                    });
                    it('gotoDegree', function () {
                        expect(antennainfo.gotoDegree).toBeDefined();
                    });
                    it('gotoSatellite', function () {
                        expect(antennainfo.gotoSatellite).toBeDefined();
                    });
                    it('drive', function () {
                        expect(antennainfo.drive).toBeDefined();
                    });
                    it('getMyLatitude', function () {
                        expect(antennainfo.getMyLatitude).toBeDefined();
                    });
                    it('getMyLongitude', function () {
                        expect(antennainfo.getMyLatitude).toBeDefined();
                    });
                    it('setMyLatitude', function () {
                        expect(antennainfo.getMyLatitude).toBeDefined();
                    });
                    it('setMyLongitude', function () {
                        expect(antennainfo.getMyLatitude).toBeDefined();
                    });
                });
                describe('3.5.2.13.1.	AntennaInfo', function () {
                    var antennainfo;
                    beforeEach(function(){
                        antennainfo = {};
                    });
                    describe('Constants', function() {
                        it('TYPE_LNB', function () {
                            expect(antennainfo.TYPE_LNB).toBe(0);
                        });
                        it('TYPE_DISEQC', function () {
                            expect(antennainfo.TYPE_DISEQC).toBe(1);
                        });
                        it('TYPE_SCD', function () {
                            expect(antennainfo.TYPE_SCD).toBe(2);
                        });
                        it('TYPE_SMATV', function () {
                            expect(antennainfo.TYPE_SMATV).toBe(3);
                        });
                        it('TYPE_MONOBLOCK', function () {
                            expect(antennainfo.TYPE_MONOBLOCK).toBe(4);
                        });
                        it('LNBFREQ_UNIVERSAL', function () {
                            expect(antennainfo.LNBFREQ_UNIVERSAL).toBe(-1);
                        });
                        it('LNBVOLT_STD', function () {
                            expect(antennainfo.LNBVOLT_STD).toBe(0);
                        });
                        it('LNBVOLT_HIGH', function () {
                            expect(antennainfo.LNBVOLT_HIGH).toBe(1);
                        });
                        it('DISEQC_1_0', function () {
                            expect(antennainfo.DISEQC_1_0).toBe(0);
                        });
                        it('DISEQC_1_1', function () {
                            expect(antennainfo.DISEQC_1_0).toBe(1);
                        });
                        it('DISEQC_1_2', function () {
                            expect(antennainfo.DISEQC_1_0).toBe(2);
                        });
                        it('DISEQC_1_3', function () {
                            expect(antennainfo.DISEQC_1_0).toBe(3);
                        });
                        it('DISEQC_2_0', function () {
                            expect(antennainfo.DISEQC_1_0).toBe(4);
                        });
                        it('SW_N', function () {
                            expect(antennainfo.SW_N).toBe(0);
                        });
                        it('SW_A', function () {
                            expect(antennainfo.SW_N).toBe(1);
                        });
                        it('SW_B', function () {
                            expect(antennainfo.SW_N).toBe(2);
                        });
                        it('SW_C', function () {
                            expect(antennainfo.SW_N).toBe(3);
                        });
                        it('SW_D', function () {
                            expect(antennainfo.SW_N).toBe(4);
                        });
                        it('TONEBURST_A', function () {
                            expect(antennainfo.TONEBURST_A).toBe(1);
                        });
                        it('TONEBURST_B', function () {
                            expect(antennainfo.TONEBURST_B).toBe(2);
                        });
                    });
                    describe('Properties', function() {
                        it('id', function () {
                            expect(antennainfo.id).toBeDefined();
                        });
                        it('antennaType', function () {
                            expect(antennainfo.antennaType).toBeDefined();
                        });
                        it('satelliteType', function () {
                            expect(antennainfo.satelliteType).toBeDefined();
                        });
                        it('satelliteName', function () {
                            expect(antennainfo.satelliteName).toBeDefined();
                        });
                        it('lnbFrequency', function () {
                            expect(antennainfo.lnbFrequency).toBeDefined();
                        });
                        it('lnbVoltage', function () {
                            expect(antennainfo.lnbVoltage).toBeDefined();
                        });
                        it('diseqcVersion', function () {
                            expect(antennainfo.diseqcVersion).toBeDefined();
                        });
                        it('switchInput', function () {
                            expect(antennainfo.switchInput).toBeDefined();
                        });
                        it('enable22KHzTone', function () {
                            expect(antennainfo.enable22KHzTone).toBeDefined();
                        });
                        it('toneBurst', function () {
                            expect(antennainfo.toneBurst).toBeDefined();
                        });
                        it('position', function () {
                            expect(antennainfo.position).toBeDefined();
                        });
                        it('longitude', function () {
                            expect(antennainfo.longitude).toBeDefined();
                        });
                        it('scdBandNo0', function () {
                            expect(antennainfo.scdBandNo0).toBeDefined();
                        });
                        it('scdBandNo1', function () {
                            expect(antennainfo.scdBandNo1).toBeDefined();
                        });
                        it('scdBandNo2', function () {
                            expect(antennainfo.scdBandNo2).toBeDefined();
                        });
                        it('scdBandNo3', function () {
                            expect(antennainfo.scdBandNo3).toBeDefined();
                        });
                        it('scdBandFreq0', function () {
                            expect(antennainfo.scdBandFreq0).toBeDefined();
                        });
                        it('scdBandFreq1', function () {
                            expect(antennainfo.scdBandFreq1).toBeDefined();
                        });
                        it('scdBandFreq2', function () {
                            expect(antennainfo.scdBandFreq2).toBeDefined();
                        });
                        it('scdBandFreq3', function () {
                            expect(antennainfo.scdBandFreq3).toBeDefined();
                        });
                    });
                    describe('Methods', function() {
                        it('commit', function () {
                            expect(antennainfo.commit).toBeDefined();
                        });
                        it('refresh', function () {
                            expect(antennainfo.refresh).toBeDefined();
                        });
                    });
                });
            });
            describe('3.5.2.14.	SignalInfo', function () {
                var signalinfo;
                beforeEach(function(){
                    signalinfo = {};
                });
                describe('Properties', function() {
                    it('tuningParams', function () {
                        expect(signalinfo.tuningParams).toBeDefined();
                    });
                });
            });
        });
    });

    describe('3.6.	HMXStorageUtil', function () {
        var storageUtil;
        beforeEach(function(){
            storageUtil = oipfObjectFactory.createHumaxStorageUtilObject();
        });
        describe('Events', function() {
            it('onPhysicalStorageAttached', function () {
                expect(storageUtil.onPhysicalStorageAttached).toBeDefined();
            });
            it('onPhysicalStorageAttached', function () {
                expect(storageUtil.onPhysicalStorageAttached).toBeDefined();
            });
            it('onPhysicalStorageAttached', function () {
                expect(storageUtil.onPhysicalStorageAttached).toBeDefined();
            });
        });
        describe('Methods', function() {
            it('getPhysicalStorages', function () {
                expect(storageUtil.getPhysicalStorages).toBeDefined();
            });
            it('supportedFormatTypes', function () {
                expect(storageUtil.supportedFormatTypes).toBeDefined();
            });
        });
        describe('3.6.1.	PhysicalStorage', function () {
            var phystorage;
            beforeEach(function(){
                phystorage = storageUtil.getPhysicalStorages();
            });
            describe('Constants', function() {
                it('EInterfaceUnknown', function () {
                    expect(phystorage.EInterfaceUnknown).toBe(0);
                });
                it('EInterfaceSATA', function () {
                    expect(phystorage.EInterfaceSATA).toBe(1);
                });
                it('EInterfaceUSB', function () {
                    expect(phystorage.EInterfaceUSB).toBe(2);
                });
                it('ETypeUnknown', function () {
                    expect(phystorage.ETypeUnknown).toBe(0);
                });
                it('ETypeInternal', function () {
                    expect(phystorage.ETypeInternal).toBe(1);
                });
                it('ETypeExternal', function () {
                    expect(phystorage.ETypeExternal).toBe(2);
                });
                it('EKindUnknown', function () {
                    expect(phystorage.EKindUnknown).toBe(0);
                });
                it('EKindHDD', function () {
                    expect(phystorage.EKindHDD).toBe(1);
                });
                it('EKindUSBMemory', function () {
                    expect(phystorage.EKindUSBMemory).toBe(2);
                });
                it('EKindSDMemory', function () {
                    expect(phystorage.EKindSDMemory).toBe(3);
                });
                it('EUsageUnkown', function () {
                    expect(phystorage.EUsageUnkown).toBe(0);
                });
                it('EUsagePVR', function () {
                    expect(phystorage.EUsagePVR).toBe(1);
                });
                it('EUsageSubPVR', function () {
                    expect(phystorage.EUsageSubPVR).toBe(2);
                });
                it('EUsageStorage', function () {
                    expect(phystorage.EUsageStorage).toBe(3);
                });
                it('EPairingUnkown', function () {
                    expect(phystorage.EPairingUnkown).toBe(0);
                });
                it('EPairingOK', function () {
                    expect(phystorage.EPairingOK).toBe(1);
                });
                it('EPairingFail', function () {
                    expect(phystorage.EPairingFail).toBe(2);
                });
                it('EPairingNoInfo', function () {
                    expect(phystorage.EPairingNoInfo).toBe(3);
                });
                it('EPairingNow', function () {
                    expect(phystorage.EPairingNow).toBe(4);
                });
            });
            describe('Properties', function() {
                it('id', function () {
                    expect(phystorage.id).toBeDefined();
                });
                it('label', function () {
                    expect(phystorage.label).toBeDefined();
                });
                it('interfaceType', function () {
                    expect(phystorage.interfaceType).toBeDefined();
                });
                it('interface', function () {
                    expect(phystorage.interface).toBeDefined();
                });
                it('type', function () {
                    expect(phystorage.type).toBeDefined();
                });
                it('kind', function () {
                    expect(phystorage.kind).toBeDefined();
                });
                it('usage', function () {
                    expect(phystorage.usage).toBeDefined();
                });
                it('pairing', function () {
                    expect(phystorage.pairing).toBeDefined();
                });
                it('uuid', function () {
                    expect(phystorage.uuid).toBeDefined();
                });
                it('availableSize', function () {
                    expect(phystorage.availableSize).toBeDefined();
                });
                it('availablePvrSize', function () {
                    expect(phystorage.availablePvrSize).toBeDefined();
                });
                it('usedSize', function () {
                    expect(phystorage.usedSize).toBeDefined();
                });
                it('reservedSize', function () {
                    expect(phystorage.reservedSize).toBeDefined();
                });
                it('totalSize', function () {
                    expect(phystorage.totalSize).toBeDefined();
                });
                it('ismount', function () {
                    expect(phystorage.ismount).toBeDefined();
                });
            });
            describe('Events', function() {
                it('OnFormatProgress', function () {
                    expect(phystorage.OnFormatProgress).toBeDefined();
                });
                it('onDetachProgress', function () {
                    expect(phystorage.onDetachProgress).toBeDefined();
                });
                it('onRecoveryProgress', function () {
                    expect(phystorage.onRecoveryProgress).toBeDefined();
                });
                it('onUsbSpeedResult', function () {
                    expect(phystorage.onUsbSpeedResult).toBeDefined();
                });
            });
            describe('Methods', function() {
                it('getLogicalStorages', function () {
                    expect(phystorage.getLogicalStorages).toBeDefined();
                });
                it('detach', function () {
                    expect(phystorage.detach).toBeDefined();
                });
                it('formatAll', function () {
                    expect(phystorage.formatAll).toBeDefined();
                    /*void formatAll(void)
                     void formatAll(string strUUID)
                     */
                });
                it('recovery', function () {
                    expect(phystorage.recovery).toBeDefined();
                });
                it('setStorageName', function () {
                    expect(phystorage.setStorageName).toBeDefined();
                });
                it('setSwitchHddForPvr', function () {
                    expect(phystorage.setSwitchHddForPvr).toBeDefined();
                });
                it('checkUsbSpeed ', function () {
                    expect(phystorage.checkUsbSpeed ).toBeDefined();
                });
            });
            describe('3.6.1.1.	HMXLogicalStorage', function () {
                var logistorage;
                beforeEach(function(){
                    logistorage = phystorage.getLogicalStorages();
                });
                describe('Properties', function() {
                    it('id', function () {
                        expect(logistorage.id).toBeDefined();
                    });
                    it('available', function () {
                        expect(logistorage.available).toBeDefined();
                    });
                    it('pvr', function () {
                        expect(logistorage.pvr).toBeDefined();
                    });
                    it('availableSize', function () {
                        expect(logistorage.availableSize).toBeDefined();
                    });
                    it('usedSize', function () {
                        expect(logistorage.usedSize).toBeDefined();
                    });
                    it('reservedSize', function () {
                        expect(logistorage.reservedSize).toBeDefined();
                    });
                    it('totalSpace', function () {
                        expect(logistorage.totalSpace).toBeDefined();
                    });
                    it('formatType', function () {
                        expect(logistorage.formatType).toBeDefined();
                    });
                    it('path', function () {
                        expect(logistorage.path).toBeDefined();
                    });
                    it('label', function () {
                        expect(logistorage.label).toBeDefined();
                    });
                });
                describe('Events', function() {
                    it('onFormatProgress', function () {
                        expect(logistorage.onFormatProgress).toBeDefined();
                    });
                });
            });
        });
    });

    describe('3.7.	HCasUi', function () {
        var casui;
        beforeEach(function(){
            casui = oipfObjectFactory.createHumaxCasUtil();
        });
        describe('Methods', function(){
           it('openSession', function(){
               expect(casui.openSession).toBeDefined();
           });
            it('closeSession ', function(){
                expect(casui.closeSession ).toBeDefined();
            });
            it('closeSession ', function(){
                expect(casui.closeSession ).toBeDefined();
            });
        });
        describe('Events', function(){
            it('onCasUiEvent', function(){
                expect(casui.openSession).toBeDefined();
            });
        });
    });
    describe('3.8.	HBluetoothManager', function () {
        var bluetoothMgr;
        beforeEach(function(){
            bluetoothMgr = oipfObjectFactory.createBluetoothManagerObject();
        });
        describe('Properties', function(){
            it('enabled', function(){
                expect(bluetoothMgr.enabled).toBeDefined();
            });
        });
        describe('Events', function(){
            it('onStateUpdate', function(){
                expect(bluetoothMgr.onStateUpdate).toBeDefined();
            });
        });
        describe('Methods', function(){
            it('startScan', function(){
                expect(bluetoothMgr.startScan).toBeDefined();
            });
            it('stopScan', function(){
                expect(bluetoothMgr.stopScan).toBeDefined();
            });
            it('connect', function(){
                expect(bluetoothMgr.connect).toBeDefined();
            });
            it('disconnect', function(){
                expect(bluetoothMgr.disconnect).toBeDefined();
            });
            it('remove', function(){
                expect(bluetoothMgr.remove).toBeDefined();
            });
            it('getDeviceList ', function(){
                expect(bluetoothMgr.getDeviceList ).toBeDefined();
            });
            it('sendPincode ', function(){
                expect(bluetoothMgr.sendPincode ).toBeDefined();
            });
            it('getMacAddress',function(){
                expect(bluetoothMgr.getMacAddress  ).toBeDefined();
            });
        });
        describe('3.8.1.	HBluetoothDevice', function () {
            var bluetoothDevice;
            beforeEach(function(){
                bluetoothDevice = {};
            });
            describe('Properties', function(){
                it('id', function(){
                    expect(bluetoothDevice.id).toBeDefined();
                });
                it('name', function(){
                    expect(bluetoothDevice.name).toBeDefined();
                });
                it('status', function(){
                    expect(bluetoothDevice.status).toBeDefined();
                });
                it('index', function(){
                    expect(bluetoothDevice.index).toBeDefined();
                });
                it('address', function(){
                    expect(bluetoothDevice.address).toBeDefined();
                });
                it('supportedProfile', function(){
                    expect(bluetoothDevice.supportedProfile).toBeDefined();
                });
                it('devClass', function(){
                    expect(bluetoothDevice.devClass).toBeDefined();
                });
            });
            describe('Methods', function(){
                it('connect', function(){
                    expect(bluetoothDevice.connect).toBeDefined();
                });
                it('disconnect', function(){
                    expect(bluetoothDevice.disconnect).toBeDefined();
                });
                it('remove', function(){
                    expect(bluetoothDevice.remove).toBeDefined();
                });
                it('sendPincode', function(){
                    expect(bluetoothDevice.sendPincode).toBeDefined();
                });
            });
        });
    });
    describe('3.9.	HVideoBroadcast', function () {
        var video;
        beforeEach(function(){
            video = oipfObjectFactory.createHumaxVideoBroadcastObject();
        });
        describe('Events', function(){
            it('onAudioPathAcquired ', function(){
                expect(video.onAudioPathAcquired ).toBeDefined();
            });
            it('onAudioPathReleased ', function(){
                expect(video.onAudioPathReleased ).toBeDefined();
            });
        });
        describe('Methods', function(){
            it('requestAudioPath',function(){
                expect(video.requestAudioPath ).toBeDefined();
            });
            it('hasAudioPath',function(){
                expect(video.hasAudioPath  ).toBeDefined();
            });
        });
        describe('3.9.1. Video Broadcast	', function () {
            describe('Constants	', function () {
                it('RECORDING_UNREALIZED',function () {
                    expect(video.RECORDING_UNREALIZED).toBe(0);
                });
                it('RECORDING_SCHEDULED',function () {
                    expect(video.RECORDING_SCHEDULED).toBe(1);
                });
                it('RECORDING_REC_PRESTART',function () {
                    expect(video.RECORDING_REC_PRESTART).toBe(2);
                });
                it('RECORDING_REC_ACQUIRING_RESOURCES',function () {
                    expect(video.RECORDING_REC_ACQUIRING_RESOURCES).toBe(3);
                });
                it('RECORDING_REC_STARTED',function () {
                    expect(video.RECORDING_REC_STARTED).toBe(4);
                });
                it('RECORDING_REC_UPDATED',function () {
                    expect(video.RECORDING_REC_UPDATED).toBe(5);
                });
                it('RECORDING_REC_COMPLETED',function () {
                    expect(video.RECORDING_REC_COMPLETED).toBe(6);
                });
                it('RECORDING_TS_ACQUIRING_RESOURCES',function () {
                    expect(video.RECORDING_TS_ACQUIRING_RESOURCES).toBe(7);
                });
                it('RECORDING_TS_STARTED',function () {
                    expect(video.RECORDING_TS_STARTED).toBe(8);
                });
                it('RECORDING_ERROR',function () {
                    expect(video.RECORDING_ERROR).toBe(9);
                });
            });
            describe('Properties', function () {
                it('recordingState',function () {
                    expect(video.recordingState).toBeDefined();
                });
                it('playPosition',function () {
                    expect(video.playPosition).toBeDefined();
                });
                it('playSpeed',function () {
                    expect(video.playSpeed).toBeDefined();
                });
                it('startOffset',function () {
                    expect(video.startOffset).toBeDefined();
                });
                it('trickRestrictMode',function () {
                    expect(video.trickRestrictMode).toBeDefined();
                });
                it('maxDuration',function () {
                    expect(video.maxDuration).toBeDefined();
                });
            });
            describe('Events', function () {
                it('onTrickRestrictModeChanged',function () {
                    expect(video.onTrickRestrictModeChanged).toBeDefined();
                });
                it('onCasMessageNotify',function () {
                    expect(video.onCasMessageNotify).toBeDefined();
                });
                it('onCasUiNotify',function () {
                    expect(video.onCasUiNotify).toBeDefined();
                });
                it('onRctInfoChanged',function () {
                    expect(video.onRctInfoChanged).toBeDefined();
                });
                it('onNCDChanged',function () {
                    expect(video.onNCDChanged).toBeDefined();
                });
                it('onRequestPincode',function () {
                    expect(video.onRequestPincode).toBeDefined();
                });
            });
            describe('Methods', function () {
                it('recordNow',function () {
                    expect(video.recordNow).toBeDefined();
                });
                it('setChannelFCC',function () {
                    expect(video.setChannelFCC).toBeDefined();
                });
                it('recordDelayed',function () {
                    expect(video.recordDelayed).toBeDefined();
                    /*string recordDelayed(Integer startPos, Integer duration)
                     string recordDelayed(Integer startPos, Integer duration, Integer target)*/
                     });
                it('offComponent',function () {
                    expect(video.offComponent).toBeDefined();
                });
                it('requestThumbnail',function () {
                    expect(video.requestThumbnail).toBeDefined();
                });
                it('checkChannelChangable', function () {
                    expect(video.checkChannelChangable ).toBeDefined();
                });
                it('getPlayingThumbnail ',function () {
                    expect(video.getPlayingThumbnail ).toBeDefined();
                });
                it('resultPincode',function () {
                    expect(video.resultPincode).toBeDefined();
                });
            });
        });
    });
    describe('3.10.	HVideoOnDemand', function () {
        var vod;
        beforeEach(function(){
            vod = oipfObjectFactory.createHumaxVideoOnDemandObject();
        });
        describe('Events	', function () {
            it('onAudioPathAcquired', function () {
                expect(vod.onAudioPathAcquired).toBeDefined();
            });
            it('onAudioPathReleased ', function () {
                expect(vod.onAudioPathReleased ).toBeDefined();
            });
        });
        describe('Methods	', function () {
            it('requestAudioPath', function () {
                expect(vod.requestAudioPath).toBeDefined();
            });
            it('hasAudioPath', function () {
                expect(vod.hasAudioPath).toBeDefined();
            });
        });
        describe('3.10.1.	VideoOnDemand', function () {
            describe('Properties	', function () {
                it('BufferingProgress', function () {
                    expect(vod.BufferingProgress).toBeDefined();
                });
                it('BufferingTime', function () {
                    expect(vod.BufferingTime).toBeDefined();
                });
                it('PdlChunks', function () {
                    expect(vod.PdlChunks).toBeDefined();
                });
                it('ReadyState', function () {
                    expect(vod.ReadyState).toBeDefined();
                });
                it('hasSubtitle', function () {
                    expect(vod.hasSubtitle).toBeDefined();
                });
                it('SubtitleDisplay', function () {
                    expect(vod.SubtitleDisplay).toBeDefined();
                });
                it('SubtitleLanguage', function () {
                    expect(vod.SubtitleLanguage).toBeDefined();
                });
                it('SubtitleSyncTime', function () {
                    expect(vod.SubtitleSyncTime).toBeDefined();
                });
                it('SubtitleFontSize', function () {
                    expect(vod.SubtitleFontSize).toBeDefined();
                });
                it('SubtitleTextPosition', function () {
                    expect(vod.SubtitleTextPosition).toBeDefined();
                });
                it('SubtitleSupportLanguages', function () {
                    expect(vod.SubtitleSupportLanguages).toBeDefined();
                });
                it('trickRestrictMode', function () {
                    expect(vod.trickRestrictMode).toBeDefined();
                });
            });
            describe('Events	', function () {
                it('onReadyStateChange', function () {
                    expect(vod.onReadyStateChange).toBeDefined();
                });
                it('onTrickRestrictModeChanged', function () {
                    expect(vod.onTrickRestrictModeChanged).toBeDefined();
                });
            });
            describe('Methods	', function () {
                it('offComponent', function () {
                    expect(vod.offComponent).toBeDefined();
                });
                it('getPlayingThumbnail', function () {
                    expect(vod.getPlayingThumbnail).toBeDefined();
                });
            });
        });
    });
    describe('3.11.	HMXOperatorFeature', function () {
        var operatorFeature;
        beforeEach(function(){
            operatorFeature = {};
        });
        describe('Properties	', function () {
            it('name', function () {
                expect(operatorFeature.name).toBeDefined();
            });
        });
        describe('Methods	', function () {
            it('listenHomeTp', function () {
                expect(operatorFeature.listenHomeTp).toBeDefined();
            });
        });
    });
});