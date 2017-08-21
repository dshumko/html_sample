fdescribe('[LIVE] Channel tune scenario', function() {
    "use strict";
    // ***PreCondition : ***<br /> Channel Search is done. Signal cable should be connected.
    var video, channelConfig, channelList;
    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });

    it('check api : channel, channel list', function () {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(0);
    });

    //*** Test Scenario : ***
    // 1.	Tune first channel from channel list.
    // 2.	Check channel tune is successful

    describe('tune', function () {
        var success = false;
        beforeEach(function (done) {
            $.when()
                .pipe(function(){ return jasmine.humax.setChannel(video, channelList[1], /*wait for*/  30000 ); })
                .pipe(function(){ return jasmine.humax.setChannel(video, channelList[0], /*wait for*/  30000 ); })
                .done(function () {success = true; })
                .always(done);
        }, 30000*3);
        afterEach(function(){
            video.stop();
        });
        it("Channel Change succeed", function () {
            expect(success).toBeTruthy();
        });
    });
});
