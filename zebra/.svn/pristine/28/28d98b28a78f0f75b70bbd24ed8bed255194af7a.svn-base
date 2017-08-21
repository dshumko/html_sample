fdescribe('[LIVE] Cable Channel Search scenario', function() {
    "use strict";
    //  ***PreCondition :***<br />  Signal cable should be connected

    // ***Notes :*** <br />
    // Used Channel Search Parameter <br />
    //  `Frequency` : 143000  <br />
    //  `Raster` : 8000 <br />
    //  `NetworkScanOnNIT `: true <br />
    //  `modulationModes` : QAM256 <br />
    //   <font color =grey><space><sub>QAM16:4,   QAM32 :8, <u>QAM64:16</u>, QAM128 :32, QAM256:64, QAM1024:128, QAM4096:256 </sub></font><br />
    //  `symbolRate` : 6875000 <br />
    //  `networkId` : 100 <br />
     var scanParam =[{
            startFrequency: 682000, //143000,
            endFrequency: 682000, //143000,
            raster: 8000,        //8000,
            startNoetworkScanOnNIT: false, //DEPRECATED
            startNetworkScanOnNIT:false, //true
            modulationModes: 64, // QAM64
            symbolRate:"6875000",   //"6875000",
            networkId: 0  //100
        }],
        scanOption = {
            channelType : 0,  //TYPE_TV
            replaceExisting : false,
            casType : 0,
            enableNetworkScan : false
        },
        video, channelConfig;

    beforeAll(function(){ //Prepare API Object
        video = oipfObjectFactory.createVideoBroadcastObject();
        channelConfig = video.getChannelConfig();
    });

    /**STEP 1**/
    it('check api : channel config, scan parameter, scan option ...', function(){
        expect(video).toBeDefined();
        expect(channelConfig).toBeDefined();
        expect(channelConfig).toHaveProperties(['createChannelScanOptionsObject', 'createChannelScanParametersObject']);
        expect(channelConfig).toHaveProperties(['controlScan','startScan','stopScan']);
        /*DEPRECATED:  event callback properties are not exist anymore
        expect(channelConfig).toHaveProperties(['onChannelListUpdate','onChannelScan']);
        */
        expect(channelConfig).toHaveProperties(['removeChannel','removeChannelList']);

        var option = channelConfig.createChannelScanOptionsObject();
        expect(option).toHaveProperties(['channelType','replaceExisting']);
        expect(option).toHaveProperties(['casType','enableNetworkScan']);

        var params = channelConfig.createChannelScanParametersObject();
        expect(params).toHaveProperties(['addChannelScanParam']);

        var param = channelConfig.createChannelScanParametersObject(10);  //ID_DVB_C
        /*DEPRECATED: OIPF 2.1-> 2.3, Wrong word fixed :  startNoetworkScanOnNIT  -> startNetworkScanOnNIT*/
        expect(param).toHaveProperties(['startFrequency','endFrequency','raster',/*'startNetworkScanOnNIT',*/'modulationModes','symbolRate','networkId']);
    });

    // ** Test Scenario : **
    // 1. If channel list exist, remove channel lsit
    // 1. Start Channel search
    // 1. Save the channel search result
    xdescribe('remove all channels', function(){
        beforeAll(function(done){
            var channelList = channelConfig.channelList;
            if(channelList && channelList.length){
                jasmine.humax.each(channelList, function(channel){
                    /*console.log("REMOVE: "+channel.name);*/
                    channelConfig.removeChannel(channel);
                });
                channelConfig.removeChannelList(channelList);
            }
            setTimeout(done, 4000);  //wait for db update
        }, 240000);
        it('channel list is zero', function(done){
            expect(channelConfig.channelList.length).toBeLessThan(1);
            done();
        });
    });

    /* --> Start Channel search*/
    describe('channel scan ', function(){
        var scanComplete = false, scanResults;
        beforeAll(function(done){
            /*set event handler*/
            jasmine.humax.extend(channelConfig, {
                /*DEPRECATED :  Opera 4.6+OIPF 2.3+Humax Extension API :
                Does not work searchedInfos parameter in this onChannelListUpdate event
                 if we want to use searchInfos object , we should be use the channelListUpdateHumax API
                onChannelListUpdate : channelListUpdateEventHandler,
                onChannelScan: channeScanEventHandler, */
                onChannelListUpdateHumax : channelListUpdateEventHandler,
                onChannelScanHumax: channeScanEventHandler
            });

            function channelListUpdateEventHandler(){
                /*--> Save the channel search result*/
                channelConfig.controlScan('save');
                console.log("channel list update:"+channelConfig.channelList.length);
                searchComplete();
            }

            function channeScanEventHandler(type, progress, frequency, signalStrength,
                                            channelNumber,channelType, channelCount, transponderCount, searchedInfos) {
                if(progress > -1){
                    console.log('channel num : ' + channelCount + ", signal : " + signalStrength + ", frequency : " + frequency +
                                            ', progress : ' + progress + ', TPCount : ' + transponderCount);
                }

                if (progress === 100) {
                    if (channelCount > 0) {
                        if(!scanResults) {
                            channelConfig.controlScan('load');
                            jasmine.humax.each(searchedInfos, function (info, i) {
                                console.log(i + '. LCN : '  + searchedInfos.getInfo(i,'lcn') +
                                    ', ChannelType : ' + searchedInfos.getInfo(i, 'channelType') +
                                    ', name : ' + searchedInfos.getStringInfo(i, 'name'));
                            });
                            console.log('channel count : ' + channelCount);
                            scanResults = true;
                        }
                    } else {
                        console.log("channel scan 100% but channel count 0");
                        searchComplete();
                    }
                }
            }

            channelConfig.startScan(
                makeScanOption(channelConfig),
                makeCableScanParameter(channelConfig, scanParam));

            function searchComplete(){
                channelConfig.stopScan();
                scanComplete =  true;
                jasmine.humax.extend(channelConfig, {
                    onChannelListUpdateHumax : null,
                    onChannelScanHumax: null
                });
                done();
            }
        }, 240000);

        it('completed', function(){
            expect(scanComplete).toBeTruthy();
        });
    });


    /**UTILITY SECTION**/
    function makeScanOption(channelConfig){
        return jasmine.humax.extend(channelConfig.createChannelScanOptionsObject(),scanOption);
    }

    function makeCableScanParameter(channelConfig,tpList){
        var scanParamCollection = channelConfig.createChannelScanParametersObject();
        jasmine.humax.each(tpList, function(tp){
            scanParamCollection.addChannelScanParam(
                jasmine.humax.extend(channelConfig.createChannelScanParametersObject(10/*ID_DVB_C*/), tp));
        });
        return scanParamCollection;
    }
});

