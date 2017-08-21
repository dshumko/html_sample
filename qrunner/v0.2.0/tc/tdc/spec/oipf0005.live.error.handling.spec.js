describe('[LIVE] Live Error Handling Scenario', function() {
    "use strict";
    //***PreCondition:*** <br /> Channel Search is done. Signal cable should be not connected.
    var video,
        channelConfig,
        channelList,
        casUtil,
        removeVideoWrapFn;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);
        casUtil = oipfObjectFactory.createHumaxCasUtil();
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
        expect(channelList.length).toBeGreaterThan(0);
    });

    //***Test Scenario:***
    //1.	Channel tune
    //2.	Check what kind of live error event will be delivered

    describe('tune', function () {
        var eventget;
        beforeAll(function (done) {
            casUtil.openSession(0x5600, 0, 2, null);  //0x5600:Verimatrix, 0:slotIdx, 2:Banner Message Type
            setChannelPromiseFn(channelList[0])
            .done(function () {
                eventget = true;
            }).always(done);
        }, 30000*6);

        it("Channel Change", function () {
            expect(eventget).toBeTruthy();
        });

        afterAll(function () {
            video.stop();
        });
    });

    //***Notes:*** <br />   When signal cable is not connected, "CHANNEL_ERROR_CANNOT_TUNE" event will be delivered
    function setChannelPromiseFn(channel) {
        var deferred = $.Deferred(),
            eventUnbinder = jasmine.humax.events( video, {
                PlayStateChange:function(e){
                    console.log("PlaySateChange - state : " + e.state +", error : " + e.error);
                    /*********** Play State Type *******
                     OPLBROADCAST_PLAY_STATE_UNREALIZED			= 0,
                     OPLBROADCAST_PLAY_STATE_CONNECTING			= 1,
                     OPLBROADCAST_PLAY_STATE_PRESENTING			= 2,
                     OPLBROADCAST_PLAY_STATE_STOPPED				= 3
                     ***********************************/
                    /********* Error Type **************
                     OPLBROADCAST_CHANNEL_ERROR_CHANNEL_NOT_SUPPORTED : 0
                     OPLBROADCAST_CHANNEL_ERROR_CANNOT_TUNE : 1
                     OPLBROADCAST_CHANNEL_ERROR_TUNER_LOCK : 2
                     OPLBROADCAST_CHANNEL_ERROR_PARENTAL_LOCK : 3
                     OPLBROADCAST_CHANNEL_ERROR_ENCRYPTED_CHANNEL : 4
                     OPLBROADCAST_CHANNEL_ERROR_UNKNOWN_CHANNEL : 5
                     OPLBROADCAST_CHANNEL_ERROR_CHANNEL_SWITCH_INTERRUPTED : 6
                     OPLBROADCAST_CHANNEL_ERROR_CANNOT_TUNE_DUETO_RECORD : 7
                     OPLBROADCAST_CHANNEL_ERROR_CANNOT_RESOLVE_IP_CHANNEL : 8
                     OPLBROADCAST_CHANNEL_ERROR_BANDWIDTH : 9
                     OPLBROADCAST_CHANNEL_ERROR_CANNOT_SUPPORT_CHANNEL_LIST : 10
                     OPLBROADCAST_CHANNEL_ERROR_INSUFFICIENT_RESOURCE : 11
                     OPLBROADCAST_CHANNEL_ERROR_NOT_FOUND_IN_TRANSPORT : 12
                     OPLBROADCAST_CHANNEL_ERROR_MOTOR_MOVING : 13
                     OPLBROADCAST_CHANNEL_ERROR_CAS_BLOCK : 14
                     OPLBROADCAST_CHANNEL_ERROR_PIN_DENIED : 15
                     OPLBROADCAST_CHANNEL_ERROR_AV_UNDERRUN : 16
                     OPLBROADCAST_CHANNEL_ERROR_HDMI_BLOCK : 17
                     OPLBROADCAST_CHANNEL_ERROR_7DAY_TIMER_BLOCK : 18
                     OPLBROADCAST_CHANNEL_ERROR_NO_VIDEO : 19
                     OPLBROADCAST_CHANNEL_ERROR_NO_AV : 20
                     OPLBROADCAST_CHANNEL_ERROR_NOT_RUNNING : 21
                     OPLBROADCAST_CHANNEL_ERROR_NO_EIT : 22
                     OPLBROADCAST_CHANNEL_ERROR_5_TIMES_PIN_FAIL : 23
                     OPLBROADCAST_CHANNEL_ERROR_60DAY_FTA_LIMIT : 24
                     OPLBROADCAST_CHANNEL_ERROR_EMPTY_CHANNEL : 25
                     OPLBROADCAST_CHANNEL_ERROR_NOK_ANTENNA : 26
                     OPLBROADCAST_CHANNEL_ERROR_NO_ERROR : 27
                     OPLBROADCAST_CHANNEL_ERROR_UNDEFINED : 100
                     *************************************/
                    deferred.resolve();
                },
                ChannelChangeError: function (e) {
                    if (e.channel) {
                        console.log("ChannelChangeError - channel name : " + e.channel.name);
                    } else {
                        console.log("ChannelChangeError - no channel info");
                    }
                     /*errorState enum type is same as PlayStateChange event's error enum type*/
                    console.log("ChannelChangeError - errorState : " + e.errorState);
                    deferred.resolve();
                },
                ChannelChangeSucceeded: function (e) {
                    //When signal cable is not connected, this event have to be not delivered.
                    console.log("change success , channel : " + e.channel.name);
                    deferred.reject();
                },
                CasMessageNotify: function (e) {
                    console.log("CasMessageNotify - module : " + e.module + ", slot : " + e.slot + ", seesionHandle : " + e.seesionHandle + ", message : " + e.message);
                    var uiData = JSON.parse(e.message);
                    if (uiData && uiData.uidata && uiData.uidata.string) {
                        if (uiData.uidata.string[0].id === "eVmxIptv_ErrMsg_DecodeFailureKeyNotAvailable") {
                            /* When you get "eVmxIptv_ErrMsg_DecodeFailureKeyNotAvailable" you should show Decode Fail Message */
                            deferred.resolve();
                        }
                    }
                }
            });

        video.setChannel(channel, false, "");

        setTimeout(function () {
            deferred.reject();
            console.log("Timeout ... ");
        }, 30000);
        deferred.always(function(){
            eventUnbinder();
        });
        return deferred;
    }
});