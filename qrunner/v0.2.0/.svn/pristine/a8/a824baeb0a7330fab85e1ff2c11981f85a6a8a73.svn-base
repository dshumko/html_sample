describe('[RECORDING] conflict ', function() {
    "use strict";
//***PreCondition:*** <br /> Channel Search is done. Signal cable should be connected.
var video,
        recordingScheduler,
        removeVideoWrapFn,
        channelConfig,
        channelList,
        conflictList;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });
    afterAll(function () {
        removeVideoWrapFn();
    });

    it('check api : videoBroadcast ', function(){
        expect(video).toHaveProperties(['currentChannel']);
        expect(channelList.length).toBeGreaterThan(2);
        console.log('channelList.length : ' + channelList.length);
    });

    //***Test Scenario:***
    //1.	Try instant recording in different 3 channels
    //2.	Recording Conflict event will be delivered when try third instant recording.
    //3.	Remove one Recording that is in progress, then try third recording again
    //4.	Check if conflict event is delivered and third recording try is successful

    describe('recording conflict', function() {
        var waitForChannelChange = 10000,
            waitForBuffering = 20000,
            extendTimeLimit = ( waitForChannelChange + waitForBuffering ) * 3 + 5000;
        beforeAll(function (done) {  //OP TDC Model's record resource is limited to 2, so 3th record try makes conflict happen.
            $.when({})
                .pipe(function () {
                    console.log('set first channel !!!');
                    return jasmine.humax.setChannel(video, channelList[0], waitForChannelChange);
                })
                .pipe(function () {
                    return recordNow();
                })
                .pipe(function () {
                    console.log('---------------------- record Now End -----------------------');
                    console.log('set second channel !!!');
                    return jasmine.humax.setChannel(video, channelList[1], waitForChannelChange);
                })
                .pipe(function () {
                    return recordNow();
                })
                .pipe(function () {
                    console.log('---------------------- record Now End -----------------------');
                    console.log('set third channel !!!');
                    return jasmine.humax.setChannel(video, channelList[2], waitForChannelChange);
                })
                .pipe(function () {
                    return recordNow();
                })
                .always(function (conflicts) {
                    console.log('---------------------- record Now End -----------------------');
                    conflictList = conflicts;
                    setTimeout(done, waitForBuffering);
                });
        }, extendTimeLimit);
        it('check conflict list', function () {
            expect(conflictList).toBeDefined();
            console.log('check conflict List : ' + conflictList.length);
            expect(conflictList.length).toBeGreaterThan(0);
        });
    });

    describe('remove a conflict and try record again', function() {
        var isRecordTrySuccess = false;
        beforeEach(function(done) {
            removeRecording([conflictList[0]]);  //remove a recording that is in progress, then try record again
            recordNow()
                .then(function(conflictList) {
                    console.log('---------------------- record Now End -----------------------');
                    if (conflictList && conflictList.length > 0) {
                        isRecordTrySuccess = false;
                    } else {
                        isRecordTrySuccess = true;
                    }
                    done();
                });
        }, 25000);
        it('check record try success', function () {
            expect(isRecordTrySuccess).toBeTruthy();
        });
    });

    //***Notes:*** <br />  TDC Model's record resource number is limited to 2

    function recordNow () {
        var deferred = $.Deferred(), timeoutHandle, isCallRecordNowAPI = false;
        var recordDuration = 7200; //2 hours
        var eventUnbinder;

        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            PVREvent: function(e){
                jasmine.humax.pvr.print(e.state, e.error);
                if (!isCallRecordNowAPI) {
                    return;
                }
                switch (e.state) {
                    case jasmine.humax.pvr.state.RECORDING_REC_STARTED:
                        console.log('onPVREvent - RECORDING_REC_STARTED !!! ');
                        clearTimeout(timeoutHandle);
                        eventUnbinder();
                        deferred.resolve();
                        break;
                    case jasmine.humax.pvr.state.RECORDING_REC_START_CONFLICT:
                    case jasmine.humax.pvr.state.RECORDING_ERROR:
                        console.log('onPVREvent - RECORDING_ERROR !!! ');
                        jasmine.humax.pvr.print(e.state, e.error);
                        if (e.scheduledRecordingConflicts && e.scheduledRecordingConflicts.length) {
                            console.log(["onPVREvent - error recording.name : " + e.recording.name,
                                "onPVREvent - error recording.channel.name : " + e.recording.channel.name,
                                "onPVREvent - error recording.duration : " + e.recording.duration,
                                "onPVREvent - conflicts.length : " + e.scheduledRecordingConflicts.length].join('\n'));

                            var conflictList = [];
                            if (e.error === jasmine.humax.pvr.error.ERROR_TUNER_CONFLICT) {
                                //```TUNER_CONFLICT error ```never happens in OP TDC Models that have a live only tuner
                                jasmine.humax.each(e.scheduledRecordingConflicts, function(conflict){
                                    var foundConflictItem = jasmine.humax.find(conflictList, function(listItem){
                                        return listItem[0].channel.tsid === conflict.channel.tsid;
                                    });
                                    if(foundConflictItem){
                                        foundConflictItem.push(conflict);
                                    }else{
                                        conflictList.push([conflict]);
                                    }
                                });
                            } else {
                                conflictList = jasmine.humax.map(e.scheduledRecordingConflicts, function(item){ return item; });
                            }
                            clearTimeout(timeoutHandle);
                            eventUnbinder();
                            deferred.resolve(conflictList);
                        }
                        break;
                    default:
                        break;
                }
            }
        });
        setTimeout(function() {
            console.log('---------------------- record Now Start -----------------------');
            var recordID = video.recordNow(recordDuration);
            isCallRecordNowAPI = true;
            if (recordID === null || recordID === undefined) {
                console.log('recording error...');
            }
        }, 10000);  //wait for previous recording event finish

        timeoutHandle = setTimeout(function() {
           deferred.reject();
        }, 20000);

        return deferred;
    }

    function removeRecording(conflictList) {
        console.log('removeRecording - conflictList.length : ' + (!!conflictList ? conflictList.length:[] ) );
        jasmine.humax.each(conflictList, function(item){
            if (isLive(item.showType)) {
                var currentRecordingList = jasmine.humax.filter(recordingScheduler.recordings||[], function(recording){
                    return isLive(recording.showType);
                });

                var ccid = item.channel.ccid;
                var recording = jasmine.humax.find(currentRecordingList,function(recording){
                    return recording.channel.ccid === ccid;
                });
                if(!!recording){
                    console.log('stop recording : ' + recording.name);
                    recordingScheduler.stop(recording);
                }
            }
            console.log('remove recording : ' + item.name);
            recordingScheduler.remove(item);
        });

        function isLive(showType){ return showType === 0;  }
        /*function isFirstRun(showType){ return showType === 1;  }*/
        /*function isRerun(showType){ return showType === 2;  }*/
    }
});