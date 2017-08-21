describe('[LIVE] Schedule Reminder Scenario', function() {
    "use strict";
    //***PreCondition:***<br /> Channel Search is done. Signal cable should be connected.
    var video,
        removeVideoWrapFn,
        channelConfig,
        channelList,
        recordingScheduler,
        reminder;

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

    //***Test Scenario:***
    //1.	Channel tune and wait for getting system time
    //2.	Schedule reminder which has start time 2 minutes later from current time.
    //3.	Wait until scheduled reminder starts and channel change
    //4.	Check reminder is scheduled and starts successfully

    describe('tune', function () {
        var success;
        beforeAll(function (done) {
            jasmine.humax.setChannel(video, channelList[0], 30000)
                .done(function(){ success = true; })
                .always(function() {
                    setTimeout(done, 20 * 1000); //time for get system time
                });
        }, 30000*6);
        afterAll(function(){
            video.stop();
        });

        it("Channel Change succeed", function () {
            expect(success).toBeTruthy();
        });
    });

    describe('schedule reminder', function () {
        var now, isRemindSuccess = false;
        beforeEach(function (done) {
            now = new Date();
            now.setSeconds(0);
            now.setMinutes(now.getMinutes() + 2);  // 2 minutes after from now
            var startTime = Math.floor(now.getTime() / 1000);
            var duration = 3600;   //60min
            var repeatDays = 0;    // once
            var factoryType = jasmine.humax.pvr.type.remind;
            var ccid = channelList[1].ccid;  //channel id
            /*var volume;   // volume is not used in reminder*/
            setReminder(startTime, duration, repeatDays, ccid, factoryType, 1/*, volume*/)
                .then(function(){ isRemindSuccess = true; },
                    function() { isRemindSuccess = false; })
                .always(function(){
                    setTimeout(done, 3 * 1000);
                });
        }, 300 * 1000);

        it('check reminder success', function () {
            expect(isRemindSuccess).toBeTruthy();
        });
    });

    function setReminder(startTime, duration, repeatDays, ccid, factoryType, targetStorage, volume) {
        var deferred = $.Deferred(), timeoutHandle, eventUnbinder;
        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            PVREvent: function(e){
                var state = e.state, recording = e.recording;
                jasmine.humax.pvr.print(state);
                switch (state) {
                    case jasmine.humax.pvr.state.RECORDING_SCHEDULED:
                        reminder = recording;
                        break;
                    case jasmine.humax.pvr.state.RECORDING_REC_PRESTART:
                        console.log('compare with cached reminder - cached uid : ' + reminder.uid + ', new uid : ' + recording.uid);
                        break;
                    case jasmine.humax.pvr.state.RECORDING_REC_STARTED:
                        console.log('compare with cached reminder - cached uid : ' + reminder.uid + ', new uid : ' + recording.uid);
                        if (reminder.uid === recording.uid) {
                            video.setChannel(recording.channel, false, "");
                            clearTimeout(timeoutHandle);
                            deferred.resolve();
                        }
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
        }, 180 * 1000);

        deferred.always(eventUnbinder);
        return deferred;
    }
});