describe('[EPG]. metadata search ', function() {
    "use strict";
    //***PreCondition:***  <br />  Channel Search is done. Signal cable should be connected. EPG Metadata should be downloaded.
    var searchManager,
        video,
        removeVideoWrapFn,
        channelConfig,
        channelList,
        metaSearchResult;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
        searchManager = oipfObjectFactory.createSearchManagerObject();
    });

    it('check api : searchManager', function (done) {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(2);
        expect(searchManager).toBeDefined();
        expect(searchManager.createSearch).toBeDefined();
        done();
    });

    //***Test Scenario:***
    // 1.	Channel Tune and wait for getting system time
    //2.	EPG Metadata search (from current time to 4 hours later)
    //3.	Series Metadata search with programme CRID
    //4.	Check metadata search result

    describe('tune', function () {
        var success;
        beforeEach(function (done) {
            $.when({})
                .pipe(jasmine.humax.setChannel(video, channelList[0], 30000))
                .done(function () {
                    success = true;
                }).always(function() {
                    setTimeout(done, 15 * 1000); //time for get system time
                });
        }, 30000*6);

        it("Channel Change succeed", function () {
            expect(success).toBeTruthy();
        });
    });

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
                } // else if(state === 2) { // result is no longer valid   }
            };
        });
    });

    describe('series meta search', function() {
        it('get series meta search data', function(done) {
            var seriesPro, groupCRIDs, crid, keyword, ccid;
            if (metaSearchResult && metaSearchResult.length > 0) {
                console.log('metaSearchResult.length : ' + metaSearchResult.length);
                seriesPro = jasmine.humax.find(metaSearchResult, function(item){
                    return (item.groupCRIDs && item.groupCRIDs.length > 0);
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
                        jasmine.humax.search.print(searchObj);
                        done();
                    } // else if(state === 2) { // result is no longer valid   }
                };
            }
        });
    });

    //***Notes:*** <br /> If there are no series programmes, this test could be failed.
});
