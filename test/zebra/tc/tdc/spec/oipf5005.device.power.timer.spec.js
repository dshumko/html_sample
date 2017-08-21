describe('[DEVICE] Power Timer Scenario', function() {
    "use strict";
    //***PreCondition: ***<br /> Channel Search is done. Signal cable should be connected.
    var video,
        removeVideoWrapFn,
        channelConfig,
        channelList,
        recordingScheduler;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
    });

    afterAll(function () {
        removeVideoWrapFn();
    });

    it('check api : channel, channel list, recscheduler', function () {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        console.log('channelList.length : ' + channelList.length);
        expect(channelList.length).toBeGreaterThan(0);
        expect(recordingScheduler).toBeDefined();
        expect(recordingScheduler).toHaveProperties(['recordings', 'recordAt']);
    });


    //***Test Scenario: ***
    //1.	Channel tune and wait for getting system time
    //2.	Set power on timer
    //3.	Check if power on timer schedule is made successfully

    describe('tune', function () {
        var success;
        beforeEach(function (done) {
            jasmine.humax.setChannel(video, channelList[0], 30000)
            .done(function () {success = true;})
            .always(function() {
                setTimeout(done, 20 * 1000); //time for get system time
            });
        }, 30000*6);

        it("Channel Change succeed", function () {
            expect(success).toBeTruthy();
        });
    });

    describe('schedule power on timer', function () {
        var now, isOnTimerScheduled = false;
        beforeEach(function (done) {
            var repeatDays = jasmine.humax.pvr.repeatDays('once'  /*'daily', 'weekly'*/);
            now = new Date();
            now.setSeconds(0);
            now.setMinutes(now.getMinutes() + 2);  // 2 minutes after from now
            var startTime = Math.floor(now.getTime() / 1000);
            var ccid = channelList[0].ccid;
            var duration = 0;
            var factoryType = jasmine.humax.pvr.type.powerOnTimer;
            var volume = 10; // volume could be 1~20
            setPowerOnTimer(startTime, duration, repeatDays, ccid, factoryType, 1, volume)
                .then(function(){isOnTimerScheduled = true;},
                    function() {isOnTimerScheduled = false;})
                .always(done);
        }, 70 * 1000);

        it('check schedule power on timer success', function () {
            expect(isOnTimerScheduled).toBeTruthy();
        });
    });

    function setPowerOnTimer(startTime, duration, repeatDays, ccid, factoryType, targetStorage, volume) {
        var deferred = $.Deferred(), timeoutHandle, eventUnbinder;
        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            PVREvent: function(e){
                jasmine.humax.pvr.print(e.state, e.error);
                switch (e.state) {
                    case jasmine.humax.pvr.state.RECORDING_SCHEDULED:
                        if (e.recording.factoryType === jasmine.humax.pvr.type.powerOnTimer) {
                            console.log('onPVREvent - Power On Timer Schedule is made');
                            clearTimeout(timeoutHandle);
                            deferred.resolve();
                        }
                        break;
                    case jasmine.humax.pvr.state.RECORDING_REC_PRESTART:
                        break;
                    case jasmine.humax.pvr.state.RECORDING_REC_STARTED:
                        break;
                    default:
                        break;
                }
            }
        });

        recordingScheduler.recordAt(
            startTime, duration, repeatDays, ccid, factoryType, targetStorage, volume
        );

        timeoutHandle = setTimeout(function() {
            deferred.reject();
            console.log("Timeout ... ");
        }, 60 * 1000);

        deferred.always(eventUnbinder);
        return deferred;
    }
});