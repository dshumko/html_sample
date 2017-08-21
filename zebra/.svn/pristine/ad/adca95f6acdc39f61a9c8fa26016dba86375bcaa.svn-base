describe('[RECORDING] time base ', function() {
    "use strict";
    //***PreCondition:*** <br /> Channel Search is done. Signal cable should be connected.
    var video,recordingScheduler,channelConfig,channelList;
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
    //2.	Check record count
    //3.	Delete all reservation items

    describe('check reservation ', function(){
        var beforeRecordingLength;
        beforeAll(function(done){
             /*make reservation*/
            beforeRecordingLength = (!!recordingScheduler.recordings) ? recordingScheduler.recordings.length || 0 : 0;
            makeReservation(recordingScheduler, channelList[1].ccid).always(done);
        }, 12000);
        afterAll(function(){
             /*remove reservation*/
            jasmine.humax.each(recordingScheduler.recordings, function(record){
                recordingScheduler.remove(record);
            });
            recordingScheduler.refresh();
            /*console.log("LENGTH:"+recordingScheduler.recordings.length);*/
        });

        it('check reserved count ', function(){
            expect(recordingScheduler.recordings.length).toBeGreaterThan(beforeRecordingLength);
        }, 12000);
    });

    /* implementation*/
    function makeReservation(scheduler, channelID){
        var deferred = $.Deferred(),
        removeEventsFn = jasmine.humax.events(scheduler, {
            PVREvent: function(e){
                switch(e.state){
                    case jasmine.humax.pvr.state.RECORDING_SCHEDULED:
                        jasmine.humax.pvr.print(e.state, e.error);
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
            scheduler.recordAt(afterTwoMinute(), durationSixtyMinute, repeatDaysOnce, channelID, normalReservation, 1);
        }

        function afterTwoMinute(){
            var now = new Date();
            now.setSeconds(0);
            now.setMinutes(now.getMinutes() + 2);
            return Math.floor(now.getTime() / 1000);
        }
    }
});