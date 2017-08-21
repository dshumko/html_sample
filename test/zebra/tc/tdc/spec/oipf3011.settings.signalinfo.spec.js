describe('[SETTINGS] Signal Information', function() {
    "use strict";

    var videoBroadcast,
        removeVideoWrapFn,
        channelConfig,
        channelList,
        configuration,
        localSystem;

    beforeAll(function () {
        videoBroadcast = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(videoBroadcast);
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        channelConfig = videoBroadcast.getChannelConfig();
        channelList = channelConfig.channelList;
    });
    afterAll(function () {
        removeVideoWrapFn();
    });

    var waitForBuffering = 30000,
        waitForChannelChange = 5000,
        waitForAllProcess =  waitForBuffering + waitForChannelChange + 5000 /*margin*/;
    beforeEach(function(done){

        jasmine.humax.setChannel(videoBroadcast, channelList[0], waitForChannelChange)
            .always(function(){
                var msgOff = jasmine.humax.screenMessage("Please wait for buffering ..  about "+(waitForBuffering/1000)+" sec");
                setTimeout(function(){
                    msgOff();
                    done();
                }, waitForBuffering);});
    }, waitForAllProcess);
    afterEach(function(){
        videoBroadcast.stop();
    });

    //***Test Scenario:*** <br />
    //1.	Check tuning(signal) information

    it('tuning information check', function () {
        var signalList = getSignalInfo();
        expect(signalList.length).toBeGreaterThan(0);
    });

    function getSignalInfo()
    {
        var signalInfo, //
            tunerList = localSystem.tuners, //
            i, //
            len = tunerList.length, //
            signalList = [],
            signal = {
                strength : 0,           //45
                quality : 0,            //100
                ber : 0,                //0
                snr : 0,                //37.72999954223633
                tuningParams : '',      //"248000,QAM64,6875" (Frequency/Constellation/SymbolRate)
                lock : false
            };
        console.log('Try to get signal info');
        if (tunerList) {
            for ( i = 0; i < len; i += 1) {
                signalInfo = tunerList.item(i).signalInfo;
                if (signalInfo.lock) {
                    signal.strength = signalInfo.strength;
                    signal.quality = signalInfo.quality;
                    signal.tuningParams = signalInfo.tuningParams;
                    signal.ber = signalInfo.ber;
                    signal.snr = signalInfo.snr;
                    signal.lock = true;
                    console.log('Signal[' + i + '] - strength = ' + signal.strength);
                    console.log('Signal[' + i + '] - quality = ' + signal.quality);
                    console.log('Signal[' + i + '] - tuningParams = ' + signal.tuningParams);
                    console.log('Signal[' + i + '] - ber = ' + signal.ber);
                    console.log('Signal[' + i + '] - snr = ' + signal.snr);
                    console.log('Signal[' + i + '] - lock = ' + signal.lock);
                    signalList.push(signal);
                }
            }
        }
        return signalList;
    }
});
