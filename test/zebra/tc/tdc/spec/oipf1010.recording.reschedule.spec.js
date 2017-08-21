describe('[RECORDING] reschedule recording ', function() {
    "use strict";
    //***PreCondition:*** <br /> Channel Search is done. Signal cable should be connected.
    var video,recordingScheduler,channelConfig,channelList,mRecording;
    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });

    it('check api : video broadcast  ', function() {
        expect(video).toBeDefined();
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(0);
    });

    it('check api : recording scheduler  ', function(){
        expect(recordingScheduler).toBeDefined();
        expect(recordingScheduler).toHaveProperties(['recordings', 'recordAt']);
    });

    //***Test Scenario: ***
    //1.	Make reservation ( time base record )
    //2.	reschedule recording
    //3.	Delete all reservation items

    describe('check reservation ', function() {
        var beforeRecordingLength;
        beforeAll(function(done){
            /*make reservation*/
            beforeRecordingLength = (!!recordingScheduler.recordings) ? recordingScheduler.recordings.length || 0 : 0;
            makeReservation(recordingScheduler, channelList[1].ccid).always(done);
        }, 12000);

        it('check reserved count ', function(){
            expect(mRecording).toBeDefined();
            expect(recordingScheduler.recordings.length).toBeGreaterThan(beforeRecordingLength);
        }, 12000);
    });

    describe('update recording schedule', function() {
        var isRecordingRescheduled = false;
        beforeAll(function(done) {
            updateRecord(recordingScheduler, mRecording).then(function(){
                isRecordingRescheduled = true;
                done();
            }, function() {
                isRecordingRescheduled = false;
                done();
            });
        }, 12000);
        afterAll(function(){
            /*remove reservation*/
            jasmine.humax.each(recordingScheduler.recordings, function(record){
                recordingScheduler.remove(record);
            });
            recordingScheduler.refresh();
            /*console.log("LENGTH:"+recordingScheduler.recordings.length);*/
        });

        it('check is recording rescheduled', function() {
            expect(isRecordingRescheduled).toBeTruthy();
        });
    });

    /* implementation*/
    function makeReservation(scheduler, channelID){
        var deferred = $.Deferred(),
            removeEventsFn = jasmine.humax.events(scheduler, {
                PVREvent: function(e){
                    jasmine.humax.pvr.print(e.state, e.error);
                    switch(e.state){
                        case jasmine.humax.pvr.state.RECORDING_SCHEDULED:
                            mRecording = e.recording;
                            if (mRecording) {
                                console.log([
                                    '[scheduled recording] ',
                                    'name : ' + mRecording.name,
                                    'startTime : ' + new Date(mRecording.startTime * 1000),
                                    'duration : ' + mRecording.duration
                                ].join('\n'));
                            }
                            setTimeout(function(){
                                removeEventsFn();
                                deferred.resolve();
                            }, 5000);
                            break;
                        default:
                            break;
                    }
                }
            });

        reserveRecord();

        return deferred;

        /*reservation utility*/
        function reserveRecord(){
            var durationSixtyMinute= 3600,
                repeatDaysOnce = 0,
                normalReservation = 0;
            console.log('channelID : ' + channelID);
            scheduler.recordAt(afterTenMinute(), durationSixtyMinute, repeatDaysOnce, channelID, normalReservation, 1);
        }

        function afterTenMinute(){
            var now = new Date();
            now.setSeconds(0);
            now.setMinutes(now.getMinutes() + 10);
            return Math.floor(now.getTime() / 1000);
        }
    }

    function updateRecord(scheduler, recording) {
        var deferred = $.Deferred(),
            removeEventsFn = jasmine.humax.events(scheduler, {
                PVREvent: function(e){
                    jasmine.humax.pvr.print(e.state, e.error);
                    switch(e.state){
                        case jasmine.humax.pvr.state.RECORDING_REC_UPDATED:
                            mRecording = e.recording;
                            console.log([
                                '[rescheduled recording] ',
                                'name : ' + mRecording.name,
                                'startTime : ' + new Date(mRecording.startTime * 1000),
                                'duration : ' + mRecording.duration
                            ].join('\n'));
                            setTimeout(function(){
                                removeEventsFn();
                                deferred.resolve();
                            }, 5000);
                            break;
                        default:
                            break;
                    }
                }
            });
        var ccid = recording.channel.ccid;  //ccid
        var now = new Date();  // +30 min
        now.setSeconds(0);
        now.setMinutes(now.getMinutes() + 30);
        var startTime = Math.floor(now.getTime() / 1000);
        var duration = 7200;  //120 min
        var repeatDays = 0;  //once
        var factoryType = jasmine.humax.pvr.type.recording;
        var returnScheduledRecording = recordingScheduler.update(recording, startTime, duration, repeatDays, ccid, factoryType, 1);
        if ((returnScheduledRecording === null) || (returnScheduledRecording === undefined)) {
            console.log('[updateScheduledRecording] invalid returnScheduledRecording');
        }

        return deferred;
    }
});