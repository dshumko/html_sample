describe('[RECORDING] file operate', function() {
    "use strict";
    //***PreCondition:*** <br />  recording file should exist. Internal HDD and USB Memory should be mounted
    var recordingScheduler,
        recordingList,
        storageUtil,
        internalHDD,
        usbMemory;

    beforeEach(function (done) {
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        storageUtil = oipfObjectFactory.createHumaxStorageUtilObject();
        setTimeout(function() {
            recordingList = jasmine.humax.filter(recordingScheduler.recordings||[], function(recording){
                return !!recording.id;
            });
            done();
        }, 10 * 1000);
    }, 15 * 1000);

    it('check api : recordingScheduler, storageUtil', function(){
        expect(recordingScheduler).toBeDefined();
        expect(storageUtil).toBeDefined();
        expect(recordingList).toBeDefined();
        expect(recordingList.length).toBeGreaterThan(0);
    });

    //***Test Scenario:***
    //1.	Find Internal HDD and USB Memory from storage list
    //2.	Copy recording file from internal HDD to USB Memory
    //3.	Remove recording file from internal HDD
    //4.	Check if get recording file operation complete event

    describe('get Internal HDD, USBMemory', function() {
        beforeEach(function(done) {
            setTimeout(function() {
                jasmine.humax.each(storageUtil.getPhysicalStorages(), function(pStorage, i){
                    console.log(['pStorage[' + i + '].kind : ' + pStorage.kind,
                                            'pStorage[' + i + '].usage : ' + pStorage.usage,
                                            'pStorage[' + i + '].type : ' + pStorage.type].join('\n'));

                    switch(checkStorageType(pStorage)){
                        case "internalHDD":
                            internalHDD = pStorage;
                            break;
                        case "usbMemory":
                            usbMemory = pStorage;
                            break;
                        default:
                            break;
                    }
                });
                done();
            }, 10 * 1000); //waiting for checking usb
        }, 15 * 1000);
        it('get Internal HDD, USBMemory check', function() {
            expect(internalHDD).toBeDefined();
            expect(usbMemory).toBeDefined();
        });
    });

    describe('copy recording from internal hdd to usb memory', function () {
        var isCopyDone = false;
        beforeEach(function(done) {
            copyRecording(recordingList[0], usbMemory)
                .then(function() {
                    isCopyDone = true;
                }, function() {
                    isCopyDone = false;
                }).always(done);
        }, 300 * 1000);
        it('check recording copy done', function() {
            expect(isCopyDone).toBeTruthy();
        });
    });

    describe('remove recording from internal hdd', function () {
       var isRemoveDone = false;
        beforeEach(function(done) {
            console.log('recordingList.length : ' + recordingList.length);
            removeRecording(recordingList[0])
                .then(function() {
                    isRemoveDone = true;
                }, function() {
                    isRemoveDone = false;
                }).always(done);
        }, 180 * 1000);
        it('check recording remove done', function() {
            console.log('recordingList.length : ' + recordingList.length);
            expect(isRemoveDone).toBeTruthy();
        });
    });

    //***Notes:***  <br />  if recording file size is too big, test would be failed because timeout

    function checkStorageType(storage){
        var storageType = "unknown";
        if(jasmine.humax.storage.kind.HDD === storage.kind){
            if (jasmine.humax.storage.usage.PVR  === storage.usage) {
                console.log('found Internal HDD');
                storageType = "internalHDD";
            } else if (jasmine.humax.storage.needFormat === storage.usage) {
                if (jasmine.humax.storage.type.internal === storage.type) {
                    console.log('found Internal HDD');
                    storageType = "internalHDD";
                }
            }
        } else if (jasmine.humax.storage.kind.USB === storage.kind) {
            console.log('found USB Memory');
            storageType = "usbMemory";
        }
        return storageType;
    }

    function copyRecording(recording, targetStorage) {
        var deferred = $.Deferred(), copyTicket, timeoutHandle, eventUnbinder;
        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            FileOpEvent : function(e) { //IDLE, REQ, COPY, MOVE, DELETE
                if (e.ticket !== copyTicket) {
                    console.log('onFileOpEvent - ticket is different');
                    return;
                }
                jasmine.humax.fileOp.print(e.state);
                switch (e.state) {
                    case jasmine.humax.fileOp.state.complete:
                        deferred.resolve();
                        break;
                    case jasmine.humax.fileOp.state.error:
                    case jasmine.humax.fileOp.state.notEnoughSpace:
                        deferred.reject();
                        break;
                    default:
                        break;
                }
            }
        });
        console.log('copyRecording - recording.name : ' + recording.name + ', targetStorage.id : ' + targetStorage.id);
        copyTicket = recordingScheduler.copyRecording(recording, targetStorage.id);

        timeoutHandle = setTimeout(function(){
            deferred.reject();
        }, 240 * 1000);

        deferred.always(function(){
            eventUnbinder();
        });

        return deferred;
    }

    function removeRecording(recording) {
        var deferred = $.Deferred(), timeoutHandle, eventUnbinder;

        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            PVREvent: function(e){
                jasmine.humax.pvr.print(e.state, e.error);
                switch (e.state) {
                    case jasmine.humax.pvr.state.RECORDING_DEL_SCHEDULED:
                        clearTimeout(timeoutHandle);
                        deferred.resolve();
                        break;
                    default:
                        break;
                }
            }
        });
        console.log('removeRecording - recording.name : ' + recording.name);
        recordingScheduler.remove(recording);

        timeoutHandle = setTimeout(function(){
            deferred.reject();
        }, 12 * 1000);

        deferred.always(function(){
            eventUnbinder();
        });

        return deferred;
    }
});