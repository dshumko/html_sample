describe('[LIVE] Fast Channel Change Scenario', function() {
    "use strict";
    //***PreCondition:***<br /> Channel Search is done. Signal cable should be connected.
    var video,
        channelConfig,
        channelList,
        removeVideoWrapFn;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);

        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });

    afterAll(function () {
        removeVideoWrapFn();
    });

    it('check api : channel, channel list', function () {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['channelList']);
        expect(channelList.length).toBeGreaterThan(2);
    });

    //***Test Scenario:***
    //1.	Channel tune
    //2.	Set 2 FCC Channel
    //3.	Tune to FCC Channel

    describe('tune', function () {
        var success;
        beforeEach(function (done) {
            jasmine.humax.setChannel(video, channelList[1], 30000)
            .done(function () { success = true;})
            .always(function() {
                setTimeout(done, 3 * 1000);
            });
        }, 30000*6);

        it("Channel Change succeed", function () {
            expect(success).toBeTruthy();
        });
    });

    describe('fast channel change', function() {
        beforeAll(function(done) {
            var fccVideoIDNull = 0; // Video ID would be selected at MW.
            /*FCC CHANNEL NUMBER IS 2*/
            if (channelList[0].channelType === channelList[0].TYPE_TV) {
                console.log('set FCC : ' + channelList[0].name);
                video.setChannelFCC(channelList[0], fccVideoIDNull);
            }
            if (channelList[2].channelType === channelList[2].TYPE_TV) {
                console.log('set FCC : ' + channelList[2].name);
                video.setChannelFCC(channelList[2], fccVideoIDNull);
            }
            setTimeout(done, 1000);
        });
        afterAll(function(){
            video.stop();
        });
        it('fast channel change', function() {
            console.log('start FCC');
            video.setChannel(channelList[2], false, "");
            expect(true).toBeTruthy();
        });
    });

    //***Notes: ***  <br />  TDC Model's FCC Number is restricted to 2
});