describe('[DEVICE] Sowftware Update', function() {
    "use strict";
    //***PreCondition:*** Channel Search is done. Signal cable should be connected.
    var TSWUSpec = {// MUST be same with DxSwUpdate_Spec_e @ dlib_swupdate.h
            ESPEC_NONE: 0,
            ESPEC_ASTRA: 1,
            ESPEC_SATDVBSSU: 2,
            ESPEC_DTT: 3,
            ESPEC_SKYD: 4,
            ESPEC_APS: 5,
            ESPEC_IRDETO: 6,
            ESPEC_HUMAX: 7,
            ESPEC_FSATSSU: 8,
            ESPEC_UPC: 9,
            ESPEC_KDG: 10
        },
        TSWUEvent = {// MUST be same with DxSwUpdate_Event_e @ dlib_swupdate.h
            EEventConnectSuccess: 0,
            EEventConnectFail: 1,
            EEventDetectSuccess: 2,
            EEventDetectSuccessInLive: 3,
            EEventDetectFail: 4,
            EEventDownloadSuccess: 5,
            EEventDownloadFail: 6,
            EEventDownloadProgress: 7,
            EEventInstallSuccess: 8,
            EEventInstallFail: 9,
            EEventInstallProgress: 10,
            EEventErorr: 11,
            EEventFinish: 12
        },
        TSWUSource = {// MUST be same with DxSwUpdate_Source_e @ dlib_swupdate.h
            ESourceNone: 0,
            ESourceRf: 1,
            ESourceIp: 2,
            ESourceFile: 3,
            ESourceUsb: 4
        },
        configuration, localSystem, swupdate, isFoundSW;

    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        swupdate = localSystem.swupdate;
    });
    it('check api : contentManager, storageUtil object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(swupdate).toBeDefined();
        expect(swupdate).toHaveProperties(['startDetectWithType', 'startDownload']);
    });

    //***Test Scenario: ***
    //1.	Software update check
    //2.	If there is update version, download software
    //3.	After download software, reboot system

    xdescribe('software update check when standby wakeup', function () {
        var strQuery = "", fHasNewOtaVersion = false, curVersion = "", newVersion = "", NO_NEW_OTA_VERSION = '0.00.00';
        var STR_PREFIX_OTA_VER = 'DKCXAB';

        beforeEach(function() {
            var strVersionInfo = swupdate.verBootupHumaxOta;
            if (strVersionInfo) {
                var strVersionArray = strVersionInfo.split(STR_PREFIX_OTA_VER);
                console.log('strVersionArray.length : ' + strVersionArray.length);
                var type = strVersionArray[0];
                console.log('type : ' + type);
                if (strVersionArray.length === 3) {
                    if (strVersionArray[0] === "NORMAL") {
                        strQuery = 'startBootupHumaxOta';
                    } else if (strVersionArray[0] === "STANDBY") {
                        strQuery = 'startInstallStandbyOta';
                    }
                    curVersion = STR_PREFIX_OTA_VER + " " + strVersionArray[1].trim();
                    newVersion = STR_PREFIX_OTA_VER + " " + strVersionArray[2].trim();
                    console.log('curVersion : ' + curVersion);
                    console.log('newVersion : ' + newVersion);
                    if (strVersionArray[2].trim() !== NO_NEW_OTA_VERSION && strQuery !== "") {
                        fHasNewOtaVersion = true;
                        isFoundSW = true;
                    }
                }
            }
        });
        it('check ota', function () {
            expect(fHasNewOtaVersion).toBeDefined();
        });
    });

    describe('software update check in settings ota check button', function () {
        var isGetSwUpdateEvent = false;
        beforeEach(function(done) {
            startDetectWithType(TSWUSpec.ESPEC_SATDVBSSU)
                .then(function() {
                    isGetSwUpdateEvent = true;
                    done();
                }, function() {
                    isGetSwUpdateEvent = false;
                    done();
                });
        }, 1300 * 1000);
        it('check get software update event', function () {
            expect(isGetSwUpdateEvent).toBeTruthy();
        });
    });

    describe('software download', function () {
        var isDownloadDone = false;
        beforeEach(function(done) {
            if (isFoundSW) {
                startDownload(TSWUSpec.ESPEC_SATDVBSSU)
                    .then(function() {
                        isDownloadDone = true;
                        done();
                    }, function() {
                        isDownloadDone = false;
                        done();
                    });
            } else {
                isDownloadDone = true;
                done();
            }
        },  1050 * 1000);
        it('check software download', function() {
             expect(isDownloadDone).toBeTruthy();
             console.log('reboot system');
             swupdate.restartSystem();
             expect(true).toBeTruthy();
        });
    });

    function startDetectWithType(otaSpec) {
        var deferred = $.Deferred(), timeoutHandle;
        var eventType, source, curver, foundver;

        swupdate.onUpdateEvent = function (SwUpdateEventInfo) {
            eventType = SwUpdateEventInfo.getInfo('event');
            source = SwUpdateEventInfo.getInfo('source_type');
            curver = SwUpdateEventInfo.getInfo('current_version');
            foundver = SwUpdateEventInfo.getInfo('found_version');
            console.log('onUpdateEvent - eventType : ' + eventType);
            console.log('onUpdateEvent - sourceType : ' + source);
            console.log('onUpdateEvent - currentVersion : ' + curver);
            console.log('onUpdateEvent - foundVersion : ' + foundver);

            if (eventType === TSWUEvent.EEventDetectSuccess) {
                console.log('onUpdateEvent - eventType : TSWUEvent.EEventDetectSuccess');
                if (source === TSWUSource.ESourceRf || source === TSWUSource.ESourceIp || source === TSWUSource.ESourceUsb) {
                    isFoundSW = true;
                    clearTimeout(timeoutHandle);
                    deferred.resolve();
                    /*swupdate.startDownload(otaSpec);*/
                }
            } else if (eventType === TSWUEvent.EEventDetectFail) {
                console.log('onUpdateEvent - eventType : TSWUEvent.EEventDetectFail');
                isFoundSW = false;
                clearTimeout(timeoutHandle);
                deferred.resolve();
            }
        };

        swupdate.startDetectWithType(otaSpec);

        timeoutHandle = setTimeout(function() {
            deferred.reject();
            console.log("Timeout ... ");
        }, 1200 * 1000);

        return deferred;
    }

    function startDownload(otaSpec) {
        var deferred = $.Deferred(), timeoutHandle;
        var eventType, progress, progressMax;

        swupdate.onUpdateEvent = function (SwUpdateEventInfo) {
            eventType = SwUpdateEventInfo.getInfo('event');

            if (eventType === TSWUEvent.EEventDownloadProgress || eventType === TSWUEvent.EEventInstallProgress) {
                progress = SwUpdateEventInfo.getInfo('progress');
                progressMax = SwUpdateEventInfo.getInfo('progress_max');
                console.log('onUpdateEvent - progress : ' + progress);
                console.log('onUpdateEvent - progressMax : ' + progressMax);
                if (progress === progressMax) {
                    clearTimeout(timeoutHandle);
                    deferred.resolve();
                }
            } else if (eventType === TSWUEvent.EEventDownloadFail || eventType === TSWUEvent.EEventInstallFail) {
                console.log('onUpdateEvent - Download Fail !!');
                swupdate.cancelDownload();
                clearTimeout(timeoutHandle);
                deferred.reject();
            }
        };
        console.log('start Download');
        swupdate.startDownload(otaSpec);

        timeoutHandle = setTimeout(function() {
            deferred.reject();
            console.log("Timeout ... ");
        }, 1000 * 1000);

        return deferred;
    }
});


