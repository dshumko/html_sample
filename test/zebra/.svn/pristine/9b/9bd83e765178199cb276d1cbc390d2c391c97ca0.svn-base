describe('[RECORDING] event base recording ', function() {
    "use strict";
    //***PreCondition:***<br /> Channel Search is done. Signal cable should be connected. EPG Metadata should be downloaded.
    var video, channelConfig, channelList, recordingScheduler, recordings, searchManager;
    beforeEach(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        searchManager = oipfObjectFactory.createSearchManagerObject();
    });

    it('check api : searchManager, recordingScheduler', function (done) {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(0);
        expect(searchManager).toBeDefined();
        expect(searchManager.createSearch).toBeDefined();
        expect(recordingScheduler).toBeDefined();
        /*Tune*/
        jasmine.humax.setChannel(video, channelList[0], 5000).always(function(){
            setTimeout(done, 15000);
        });
    }, 5000 + 15000 + 1000);

    //***Test Scenario:***
    //1.	Channel tune
    //2.	EPG Metadata search (from current time to 4 hours later)
    //3.	Make a event base recording schedule with programme object
    //4.	Check whether event base recording schedule is made successfully or not

    describe('Event Base Recording(EBR) ', function(){
        var metaSearch, recordingSchedule,  now, startTime, endTime;
        beforeEach(function(done){
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

        it('make EBR schedule', function(done){
            var programmes = metaSearch.result,
                len = programmes.length;
            expect(len).toBeGreaterThan(0);

            var programme = jasmine.humax.find(programmes, function(item){
                return item.startTime > (startTime + 3600);
            });

            console.log("programme : " + programme);
            if (!!programme) {
                recordingSchedule = recordingScheduler.record(programme, jasmine.humax.pvr.type.recording, jasmine.humax.pvr.target.internalHDD);

                console.log(['recordingSchedule.name : ' + recordingSchedule.name,
                    'recordingSchedule.programmeID : ' + recordingSchedule.programmeID].join('\n'));
            }

            setTimeout(function() {
                recordings = recordingScheduler.recordings;
                done();
            }, 15000);
        },15000 + 1000);

        it('check EBR is made : ', function(){
            console.log('recordings.length : ' + recordings.length);
            var isEBRMade = !!jasmine.humax.find(recordings, function(record){
                console.log('recording.programmeID : ' + record.programmeID);
                return recordingSchedule.programmeID === record.programmeID;
            });
            expect(isEBRMade).toBeTruthy();
        });
    });
});