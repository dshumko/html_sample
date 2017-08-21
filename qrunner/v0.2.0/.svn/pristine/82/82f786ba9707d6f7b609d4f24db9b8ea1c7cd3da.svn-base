describe('[RECORDING] instant delayed recording ', function() {
    "use strict";
    //***PreCondition:***<br /> Channel Search is done. Signal cable should be connected.
    var video,
        recordingScheduler,
        removeVideoWrapFn,
        channelConfig,
        channelList,
        configuration;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);

        configuration = oipfObjectFactory.createHumaxConfigurationObject();

        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });
    afterAll(function () {
        removeVideoWrapFn();
    });

    it('check api : videoBroadcast ', function(){
        expect(video).toHaveProperties(['currentChannel','recordDelayed','recordNow' ]);
    });

    it('check PVR support flag ', function(){
        var localSystem = configuration.localSystem;
        var pvrSupport = localSystem.pvrSupport;
        expect(localSystem).toBeDefined();
        expect(pvrSupport).toBe(1);
    });


    //***Test Scenario:***
    //1.	Channel tune and wait for stacking tsr buffer ( for delayed recording )
    //2.	Start record
    //3.	Check record started <br />
    //4. <s>Delete all record item</s>

    describe('check api : videoBroadcast offset properties', function(){
        var waitForBuffering = 70000,
            waitForChannelChange = 5000,
            waitForAllProcess =  waitForBuffering + waitForChannelChange + 5000 /*margin*/;

        beforeEach(function(done){
            jasmine.humax.setChannel(video, channelList[0], waitForChannelChange)
            .always(function(){
                    var msgOff = jasmine.humax.screenMessage("Please wait for buffering ..  about "+(waitForBuffering/1000)+" sec");
                    setTimeout(function(){
                        msgOff();
                        done();
                    }, waitForBuffering);});
        }, waitForAllProcess);
        afterEach(function(){
            video.stop();
        });

        it('start/max/playback offset ',function() {
            expect(video).toHaveProperties(['maxOffset', 'startOffset', 'playbackOffset']);
        });
    });


    describe('check recordDelayed ', function(){
        var waitForRecording = 5000,
            waitForPreCondition = 10000,
            recordCount, recordID, eventUnbindFn;
        beforeAll(function(done){
            var startPosition = video.playbackOffset|| 0,
                duration = 6000;
            recordCount = recordingScheduler.recordings.length;

            console.log("record : " + startPosition + "  duration: " +duration);
            recordID  = video.recordDelayed( startPosition, duration);

            eventUnbindFn = jasmine.humax.events(recordingScheduler, {
                PVREvent:function(e){
                    jasmine.humax.pvr.print(e.state, e.error);
                }
            });

            setTimeout(done, waitForRecording);
        },waitForPreCondition);

        it('check record id  ', function(){
            expect(recordID).not.toBeNull();
            expect(recordID).not.toBeUndefined();
            expect(recordingScheduler.recordings.length).toBeGreaterThan(recordCount);
            eventUnbindFn();
        });
    });

/*
    describe('check delete record ', function(){
        var notifier, recordCount;
        beforeAll(function(done){
            recordCount = recordingScheduler.recordings.length;
            jasmine.humax.eachItem(recordingScheduler.recordings||[], function(record){
                recordingScheduler.remove(record);
            });
            notifier = jasmine.humax.notify(recordingScheduler,"PVREvent",['state','error'])
                .notify(function(state,error){
                    jasmine.humax.pvr.print(state,error);

                    if(indexOfPVRStateFn("RECORDING_DEL_SCHEDULED") ===  state){
                        recordCount = (!!recordingScheduler.recordings?recordingScheduler.recordings.length:0);
                    }
                    if(recordCount === 0){
                        done();
                    }
                });
        });
        it('check recording count 0', function(){
            if(!!recordingScheduler.recordings) {
                expect(recordingScheduler.recordings.length).toBeLessThan(1);
            }
            notifier.close();
        });
    });
*/
});