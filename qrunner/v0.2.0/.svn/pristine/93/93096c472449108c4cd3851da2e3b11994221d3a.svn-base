xdescribe('[UTILS] performance test ', function() {
    "use strict";
    var video;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
    });

    it('check access constants: ', function () {
        console.log("video.POSITION_START:" + video.POSITION_START);

        var n = 1000 * 1000, i = 0, v, o = {POSITION_START: 9};
        var closeTimerFn = jasmine.humax.timer('oipf object access '+n+' times');
        for (i = 0; i < n; i += 1) {
            v = video.POSITION_START;
            // GET_NUMBER("POSITION_START", BROADCAST_POSITION_START, JSP_GET_VALUE_CACHE);
        }
        closeTimerFn();

        closeTimerFn =  jasmine.humax.timer('javascript object access '+n+' times');
        for (i = 0; i < n; i += 1) {
            v = o.POSITION_START;
        }
        closeTimerFn();

        expect(video.POSITION_START).toBeDefined();
    }, 100000);

    it('check createVideoBroadcastObject() ', function(){
        console.log("call createVideoBroadcastObject");

        var n = 1000, i= 0, o;
        var closeTimerFn = jasmine.humax.timer('oipfObjectFactory.createVideoBroadcastObject() ->   '+n+' times');
        for(i=0;i<n;i+=1){
            o = oipfObjectFactory.createVideoBroadcastObject();
        }
        closeTimerFn(); //27427ms

        expect(true).toBeTruthy();
    });

    it('check getChannelConfig() ', function(){
        console.log('get getChannelConfig');

        var n = 1000, i= 0, o;
        var closeTimerFn = jasmine.humax.timer('video.getChannelConfig() ->   '+n+' times');
        for(i=0;i<n;i+=1){
            o = video.getChannelConfig();
        }
        closeTimerFn(); //1926ms

        expect(true).toBeTruthy();
    });

    it('check channelConfig.channelList ', function(){
        console.log('get channelList');

        var n = 1000, i= 0, channelConfig = video.getChannelConfig(), channelList;
        var closeTimerFn = jasmine.humax.timer('channelConfig.channelList->  '+n+' times');
        for(i=0;i<n;i+=1){
            channelList = channelConfig.channelList;
        }
        closeTimerFn(); //95ms

        expect(true).toBeTruthy();
    });

    it('check get channel.ccid', function(){
        console.log('get ccid');

        var n = 1000*1000, i= 0,
            channelConfig = video.getChannelConfig(),
            channel  = channelConfig.channelList[0],
            ccid;
        var closeTimerFn = jasmine.humax.timer('channelConfig.ccid->  '+n+' times - '+ channel.ccid);
        for(i=0;i<n;i+=1){
            ccid = channel.ccid;
            //DATA_GET_STRING(ccid);
        }
        closeTimerFn(); //38ms

        expect(true).toBeTruthy();
    });

    it('check get channelScanParametersObject', function(){
        console.log('get channelScanParametersObject');

        var n = 1000*1000, i= 0,
            channelConfig = video.getChannelConfig(), param;

        var closeTimerFn = jasmine.humax.timer('channelConfig.channelScanParametersObject->  '+n+' times');
        for(i=0;i<n;i+=1){
            param  = channelConfig.createChannelScanParametersObject(10);  //ID_DVB_C,
        }
        closeTimerFn(); //41,119ms

        expect(true).toBeTruthy();
    });
});