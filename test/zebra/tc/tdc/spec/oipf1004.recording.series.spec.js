describe('[RECORDING] Recording series ', function() {
    "use strict";
    //***PreCondition:*** <br /> Channel Search is done. Signal cable should be connected. EPG Metadata should be downloaded.
    var video,
        channelConfig,
        channelList,
        recordingScheduler,
        searchManager,
        metaSearchResult,
        seriesMetaSearchResult,
        scheduleList = [];

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
        expect(recordingScheduler.record).toBeDefined();
        expect(recordingScheduler.removeSeries).toBeDefined();
        /*Tune*/
        jasmine.humax.setChannel(video, channelList[0], 5000 /*wait for channel change*/).always(function(){
            setTimeout(done, 15000 /*buffering*/);
        });
    }, 5000 + 15000 + 1000 /*wait for buffering & channel change */);

    //***Test Scenario:***
    //1.	Channel Tune
    //2.	EPG Metadata search (from current time to 4 hours later)
    //3.	Series Metadata search with programme CRID
    //4.	Find first series programme in series metadata search result
    //5.	Request series recording with first series programme
    //6.	Check whether series recording schedule is made successfully or not
    //7.    Check whether series recording schedule is removed successfully or not

    describe('meta search', function() {
        it('get meta search data', function(done) {
            var searchObj = searchManager.createSearch(jasmine.humax.search.target.scheduled);
            expect(searchObj).toBeDefined();
            /*channel constraint*/
            searchObj.addChannelConstraint(channelList[0]); //first channel
            searchObj.addChannelConstraint(channelList[1]); //second channel

            var now = new Date();
            var startTime = Math.ceil(now.getTime() / 1000);
            var endTime = startTime + 14400; // 4hours from now

            /*make query*/
            var query = searchObj.createQuery("endTime", jasmine.humax.query.gt, startTime);
            query = query.and(searchObj.createQuery("startTime", jasmine.humax.query.lt, endTime));
            searchObj.setQuery(query);

            /*set result count*/
            searchObj.result.getResults(0, 100);  //offset, count

            searchManager.onMetadataSearch= function(search, state){
                console.log("onMetadataSearch - state : " + state);
                if(jasmine.humax.search.isAvailableState(state) && searchObj.id === search.id){
                    searchObj.result.update();
                    metaSearchResult = searchObj.result;
                    jasmine.humax.search.print(searchObj);
                    done();
                }
            };
        });
    });

    describe('series meta search', function() {
        it('get series meta search data', function(done) {
            var seriesPro, groupCRIDs, crid, keyword, ccid, currentTime;
            currentTime = new Date().getTime();

            if (metaSearchResult && metaSearchResult.length > 0) {
                console.log('metaSearchResult.length : ' + metaSearchResult.length);
                seriesPro = jasmine.humax.find(metaSearchResult, function(searchResult){
                    return (searchResult.groupCRIDs && searchResult.groupCRIDs.length > 0) &&  //is series
                                (currentTime < (new Date(searchResult.startTime*1000)).getTime());
                });
            }

            if (seriesPro) {
                groupCRIDs = seriesPro.groupCRIDs;
                crid = groupCRIDs[0];
                console.log('crid : ' + crid);
                keyword = "sCRID:" + crid;
                if (seriesPro.cridSearchInSameSvc) { //cridSearchInSameSvc is used for flag whether all channels or specific channels
                    ccid = seriesPro.channel.ccid;
                    console.log('ccid : ' + ccid);
                }

                var searchObj = searchManager.createSearch(jasmine.humax.search.target.scheduled);
                expect(searchObj).toBeDefined();

                /*filter rf*/
                searchObj.addConstraint('target', 'rfepg');

                /*make query*/
                var now = Math.ceil(new Date().getTime() / 1000);
                var query = searchObj.createQuery("endTime", jasmine.humax.query.gt, now);
                query = query.and(searchObj.createQuery("keyword", jasmine.humax.query.contains, keyword));
                if (ccid) {
                    query = query.and(searchObj.createQuery("ccid", jasmine.humax.query.eq, ccid));
                }

                searchObj.setQuery(query);
                searchObj.result.getResults(0, 100);  //offset, count
                searchManager.onMetadataSearch = function(search, state){
                    console.log("onMetadataSearch - state : " + state);
                    if(jasmine.humax.search.isAvailableState(state) && searchObj.id === search.id){
                        searchObj.result.update();
                        seriesMetaSearchResult = searchObj.result;
                        jasmine.humax.search.print(searchObj);
                        done();
                    }
                };
            }
        });
    });

    /*
     *   [Notice] you should know before tests below (record & remove series)
     *    - Default : "series recording with metadata" test is enabled(describe) while "remove series recording" test is disabled(xdescribe).
     *    - you should test "remove series recording" after "series recording with metadata" test is done.
     *      => by modifying [describe]<=>[xdescribe]
     *    - There are two ways to get scheduled recording list.
     *      1) use "recordingScheduler.getScheduledRecordings()" API.
     *      2) keep&manage a kind of array in any layer of your webapp.
     *         (ex) see how "scheduleList" variable is used in this test script.(based on Event)
     *      => The first is used in this test script, but we use the second in our webapp.
     */

    describe("series recording with metadata", function() {
        var isSeriesRecord = false;
        beforeEach(function(done) {
            var firstItem = findFirstSeriesEvent(seriesMetaSearchResult);
            seriesRecord(firstItem)
                .then(function() {
                    isSeriesRecord = true;
                    done();
                },function() {
                    isSeriesRecord = false;
                    done();
                });
        }, 15000 + 15000 + 1000);
        it('check series record success' , function() {
           expect(isSeriesRecord).toBeTruthy();
        });
    });

    xdescribe("remove series recording", function() {
        var bRemovedSeriesRecord = false;
        beforeEach(function(done) {
            var scheduleRecordings = recordingScheduler.getScheduledRecordings();
            //var scheduleRecordings = scheduleList;
            console.log('scheduleRecordings.length : ' + scheduleRecordings.length);
            var firstItem = findFirstSeriesSchedule(scheduleRecordings);
            if (firstItem) {
                removeSeriesRecord(firstItem)
                    .then(function() {
                        bRemovedSeriesRecord = true;
                        done();
                    },function() {
                        bRemovedSeriesRecord = false;
                        done();
                    });
            } else {
                done();
            }
        }, 15000 + 15000 + 1000);
        it('check remove series record success' , function() {
            expect(bRemovedSeriesRecord).toBeTruthy();
        });
    });

//***Notes: *** <br />
// When series record scheduling is successful,  "onPVREvent -ERECORDING_SCHEDULED" will be delivered as same times as scheduled series programme count

    function findFirstSeriesEvent (seriesMetaDatas) {
        var tempTime, tempDateObj, startTime, startItem;
        var currentTime = new Date().getTime();
        console.log('Find First Series Event ...');
        jasmine.humax.each(seriesMetaDatas, function(item,i){
            tempDateObj = new Date(item.startTime * 1000);
            tempTime = tempDateObj.getTime();
            if (currentTime < tempTime) {
                if (!startTime || startTime > tempTime) {
                    startTime = tempTime;
                    console.log('seriesMetaDatas[' + i + '], First Item : ' + tempDateObj.toString());
                    startItem = item;
                }
            }
        });

        if (startItem) {
            console.log('startItem.name : ' + startItem.name);
            return startItem;
        } else {
            console.log('seriesMetaDatas.item(0).name : ' + seriesMetaDatas.item(0).name);
            return seriesMetaDatas.item(0);
        }
    }

    function findFirstSeriesSchedule(aScheduleList) {
        var tempTime, tempDateObj, startTime, startItem;
        var currentTime = new Date().getTime();
        console.log('Find First Series Schedule ...');
        if (aScheduleList.length === 0) {
            console.log('No schedule list! should record first correctly');
            return null;
        }
        jasmine.humax.each(aScheduleList, function(item,i){
            tempDateObj = new Date(item.startTime * 1000);
            tempTime = tempDateObj.getTime();
            if (currentTime < tempTime) {
                if (!startTime || startTime > tempTime) {
                    startTime = tempTime;
                    console.log('scheduleList[' + i + '], First Item : ' + tempDateObj.toString());
                    startItem = item;
                }
            }
        });

        if (startItem) {
            console.log('startItem.name : ' + startItem.name);
            return startItem;
        } else {
            console.log('aScheduleList.item(0).name : ' + aScheduleList[0].name);
            return aScheduleList[0];
        }
    }

    function seriesRecord(programme) {
        var deferred = $.Deferred(), timeoutHandle, eventUnbinder;

        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            PVREvent: function(e){
                jasmine.humax.pvr.print(e.state, e.error);
                switch (e.state) {
                    case jasmine.humax.pvr.state.RECORDING_SCHEDULED:
                        //```hint``` If series record scheduling is successful,
                        //you will get this event as same times as scheduled series programme count
                        scheduleList.push(e.recording);
                        deferred.resolve();
                        break;
                    case jasmine.humax.pvr.state.RECORDING_REC_START_CONFLICT:
                    case jasmine.humax.pvr.state.RECORDING_ERROR:
                        deferred.reject();
                        break;
                    default:
                        break;
                }
            }
        });
        console.log('series record - programme.name : ' + programme.name);

        var returnScheduledRecording = recordingScheduler.record(programme, jasmine.humax.pvr.type.seriesRecording, jasmine.humax.pvr.target.internalHDD);
        if ((returnScheduledRecording === null) || (returnScheduledRecording === undefined)) {
            console.log('[series record] invalid returnScheduledRecording');
        }

        timeoutHandle = setTimeout(function() {
            console.log('timeout...');
            deferred.reject();
        }, 15000 + 15000);

        deferred.always(function(){
            clearTimeout(timeoutHandle);
            eventUnbinder();
        });
        return deferred;
    }

    function removeSeriesRecord(aSchedule) {
        var deferred = $.Deferred(), timeoutHandle, eventUnbinder;

        eventUnbinder = jasmine.humax.events(recordingScheduler, {
            PVREvent: function(e){
                jasmine.humax.pvr.print(e.state, e.error);
                switch (e.state) {
                    case jasmine.humax.pvr.state.RECORDING_DEL_SCHEDULED:
                        var removeIdx = getIndexOfArr(scheduleList, e.recording);
                        console.log('removeIdx : ' + removeIdx);
                        if (removeIdx > -1) {
                            scheduleList.splice(removeIdx, 1);
                        }
                        deferred.resolve();
                        break;
                    default:
                        break;
                }
            }
        });
        console.log('remove series record - programme.name : ' + aSchedule.name);

        recordingScheduler.removeSeries(aSchedule); // no return value

        timeoutHandle = setTimeout(function() {
            console.log('timeout...');
            deferred.reject();
        }, 15000 + 15000);

        deferred.always(function(){
            clearTimeout(timeoutHandle);
            eventUnbinder();
        });
        return deferred;
    }

    function getIndexOfArr(arr, aSchedule) {
        var i = 0, len = arr.length;
        for (i=0; i<len; i+=1) {
            if (isSameSchedule(arr[i], aSchedule)) {
                return i;
            }
        }
        return -1;
    }

    function isSameSchedule(a, b) {
        var bSame = false;
        if (!a || !b) {
            return false;
        }
        if (a.programmeID && b.programmeID) {
            //for EBReservation
            if (a.programmeID === b.programmeID) {
                bSame = true;
            }
        } else {
            if (!a.programmeID && !b.programmeID) {
                //for TBReservation
                if (a.uid === b.uid) {
                    bSame = true;
                }
            }
        }
        return bSame;
    }
});
