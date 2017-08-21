describe('[RECORDING] Recording onAir programme ', function() {
    "use strict";
    //***PreCondition:*** <br /> Channel Search is done. Signal cable should be connected.
    var video, recordingScheduler, searchManager, channelConfig, channelList, currentChannel, programmes;
    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        searchManager = oipfObjectFactory.createSearchManagerObject();
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });

    it('check api : video broadcast  ', function(done) {
        expect(video).toBeDefined();
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(3);
        /*Tune*/
        currentChannel = channelList[2];
        jasmine.humax.setChannel(video, currentChannel, 5000).always(function(){
            setTimeout(done, 15000);
        });
    }, 15000 + 5000 + 5000);

    it('check api : recording scheduler  ', function(){
        expect(recordingScheduler).toBeDefined();
        expect(recordingScheduler).toHaveProperties(['recordings', 'recordAt']);
    });

    //***Test Scenario: ***
    //1.	metadata search
    //2.	find onAir programme
    //3.	record the programme

    describe('metadata search', function() {
        var metaSearch, now, startTime, endTime;
        beforeAll(function(done){
            metaSearch = searchManager.createSearch(1);  // Metadata relating to scheduled content shall be searched.

            metaSearch.addChannelConstraint(channelList[0]);
            metaSearch.addChannelConstraint(channelList[1]);

            now = new Date();
            startTime = Math.ceil(now.getTime() / 1000);
            endTime = startTime + 14400;
            var query = metaSearch.createQuery("endTime", jasmine.humax.query.gt, startTime);
            query = query.and(metaSearch.createQuery("startTime", jasmine.humax.query.lt, endTime));
            metaSearch.setQuery(query);
            searchManager.onMetadataSearch= function(search, state){
                if(jasmine.humax.search.isAvailableState(state) && metaSearch.id === search.id){
                    metaSearch.result.update();
                    jasmine.humax.search.print(metaSearch);
                    done();
                }
            };
            metaSearch.result.getResults(0, 100);  //offset, count
        });

        it('check meta search result', function(){
            programmes = metaSearch.result;
            expect(programmes.length).toBeGreaterThan(0);
        });
    });

    describe('check reservation ', function(){
        var beforeRecordingLength;
        beforeAll(function(done){
            /*make reservation*/
            beforeRecordingLength = (!!recordingScheduler.recordings) ? recordingScheduler.recordings.length || 0 : 0;
            var programme = jasmine.humax.find(programmes, function(item){
                //find onAir programme
                var now = (new Date().getTime());
                var startTime = (new Date(item.startTime * 1000).getTime());
                var endTime = (new Date(item.startTime * 1000 + item.duration * 1000).getTime());
                return (startTime < now && endTime > now);
            });
            makeReservation(recordingScheduler, programme).always(done);
        }, 60000);
        afterAll(function(){
            /*remove reservation*/
            if (!!recordingScheduler.recordings) {
                jasmine.humax.each(recordingScheduler.recordings, function(record){
                    recordingScheduler.remove(record);
                });
            }
            recordingScheduler.refresh();
        });

        it('check reserved count ', function(){
            console.log('beforeRecordingLength : ' + beforeRecordingLength);
            console.log('recordingScheduler.recordings.length : ' + recordingScheduler.recordings.length);
            expect(recordingScheduler.recordings.length).toBeGreaterThan(beforeRecordingLength);
        }, 12000);
    });

    /* implementation*/
    function makeReservation(scheduler, programme){
        var deferred = $.Deferred(),
            removeEventsFn = jasmine.humax.events(scheduler, {
                PVREvent: function(e){
                    switch(e.state){
                        case jasmine.humax.pvr.state.RECORDING_SCHEDULED:
                        case jasmine.humax.pvr.state.RECORDING_REC_STARTED:
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
            var repeatDaysOnce = 0;
            var duration = 7200;
            var targetChannelId = programme.channel.ccid;
            var startTime;
            console.log('programme.name : ' + programme.name);
            console.log('targetChannelId : ' + targetChannelId);
            console.log('programme.programmeID : ' + programme.programmeID);

            if (programme && programme.programmeID) {
                duration = programme.startTime + programme.duration - currentTimeInSecond();
            }

            if (targetChannelId === currentChannel.ccid) {
                console.log('video.recordNow');
                video.recordNow(duration);
            } else {
                console.log('scheduler.recordAt');
                startTime = currentTimeInSecond();
                scheduler.recordAt(startTime, duration, repeatDaysOnce, targetChannelId, jasmine.humax.pvr.type.recording, 1);
            }
        }

        function currentTimeInSecond() {
            var now = new Date();
            return parseInt(now.getTime() / 1000, 10);
        }
    }
});