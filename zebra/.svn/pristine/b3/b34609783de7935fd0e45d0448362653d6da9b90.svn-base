describe('[DEVICE] Storage Util Scenario', function() {
    "use strict";
    //***PreCondition:***<br />  Internal HDD should be mounted
    var recordingScheduler, storageUtil;
    beforeAll(function () {
        storageUtil = oipfObjectFactory.createHumaxStorageUtilObject();
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
    });

    it('check api : storageUtil', function () {
        expect(storageUtil).toBeDefined();
        expect(storageUtil).toHaveProperties([
            'getPhysicalStorages', 'supportedFormatTypes'
        ]);
    });

    //***Test Scenario:***
    //1.	Find Internal HDD from storage list
    //2.	Format Internal HDD
    //3.	Check if format is finished

    describe('do format', function () {
        var isFormatSuccess = false;
        beforeEach(function (done) {
            var physicalStorages = storageUtil.getPhysicalStorages(),
            internalHDD = jasmine.humax.find(physicalStorages, function(pStorage){
                return  (pStorage.kind === jasmine.humax.storage.kind.HDD)  &&
                    (pStorage.usage === jasmine.humax.storage.usage.PVR) ;
            });

            if (internalHDD) {
                doFormat(internalHDD)
                    .then(function() { isFormatSuccess = true; },
                                function() {isFormatSuccess = false;})
                    .always(done);
            } else {
                isFormatSuccess = false;
                done();
            }
        }, 10 * 60 * 1000);

        it('check format success', function() {
            expect(isFormatSuccess).toBeTruthy();
        });
    });

    //***Notes:***<br /> If storage format time is longer than 10 minutes, test could be timeout.
    function doFormat(internalHDD) {
        var deferred = $.Deferred(), timeoutHandle;
        if (internalHDD) {
            storageUtil.onPhysicalStorageStatus = function (id, status) {
                switch (status) {
                    case jasmine.humax.storage.state.needFormat:
                        console.log('The HDD has not been formatted properly. To record programmes, you need to format the HDD first');
                        break;
                    default:
                        break;
                }
            };
            internalHDD.onFormatProgress = function(state, progress, progressMax, errMessage) {
                console.log('onFormatProgress called! - state[' + state + '] progress[' + progress + '] progressMax[' + progressMax + '] errMessage [' + errMessage + ']');
                /*if (progress >= progressMax) {
                    deferred.resolve();
                }*/
                switch(state) {
                    case jasmine.humax.storage.formatProgress.none:
                        break;
                    case jasmine.humax.storage.formatProgress.onGoing:
                        break;
                    case jasmine.humax.storage.formatProgress.finished:
                        recordingScheduler.refresh();
                        clearTimeout(timeoutHandle);
                        deferred.resolve();
                        break;
                    case jasmine.humax.storage.formatProgress.error:
                        break;
                    default:
                        break;
                }
            };
        }

        internalHDD.formatAll();

        timeoutHandle = setTimeout(function() {
            deferred.reject();
            console.log('timeout...');
        }, 10 * 60 * 1000);

        deferred.always(function(){
            storageUtil.onPhysicalStorageStatus = null;
            internalHDD.onFormatProgress = null;
        });

        return deferred;
    }
});
