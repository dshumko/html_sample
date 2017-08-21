describe('[LIVE] tsr playback scenario', function() {
    "use strict";
    //***PreCondition:*** <br /> Channel Search is done. Signal cable should be connected.
    var video,
        removeVideoWrapFn,
        channelConfig,
        channelList;

    beforeAll(function () {
        video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);

        channelConfig = video.getChannelConfig();
        channelList = channelConfig.channelList;
    });
    afterAll(function () {
        removeVideoWrapFn();
    });

    it('check api : video', function () {
        expect(video).toBeDefined();
        expect(video).toHaveProperties(['getChannelConfig']);
        expect(video).toHaveProperties([
            'setSpeed','resume','pause','seek',
            /*'playbackOffset','maxOffset','startOffset',*/
            'playSpeeds',
            'stopTimeshift']);
        expect(video).toHaveProperties([
            'RECORDING_UNREALIZED',
            'RECORDING_SCHEDULED',
            'RECORDING_REC_PRESTART',
            'RECORDING_REC_ACQUIRING_RESOURCES',
            'RECORDING_REC_STARTED',
            'RECORDING_REC_UPDATED',
            'RECORDING_REC_COMPLETED',
            'RECORDING_TS_ACQUIRING_RESOURCES',
            'RECORDING_TS_STARTED',
            'RECORDING_ERROR']);
    });

    //***Test Scenario:***
    //1.	Channel tune and wait for stacking tsr buffer
    //2.	Live pause, fast rewind, fast forward, seek
    //3.	Check pause, fast rewind, fast forward, seek API function is called successfully
    describe('scenario TSR ', function(){
        var playbackState, isSuccessTune = false;
        beforeAll(function(done){
            setPlaybackEvent().progress(function(state){
                playbackState = state;
            });
            tune().then(function(){
                isSuccessTune = true;
                console.log("START BUFFERING : " + 3000);
                setTimeout(function() {
                    console.log("video.maxOffset : " + video.maxOffset);
                    //expect(video.maxOffset).toBeGreaterThan(0);
                    done();
                }, 3000);
            }, done);
        }, 3000 + 30000 + 30000);
        afterAll(function(){
            video.stop();
        });

        it('check tune ', function(done){
            expect(isSuccessTune).toBeTruthy();
            done();
        });

        it('check pause', function(done){
            expect(video.currentChannel).toBeDefined();
            expect(video.setSpeed(0)).toBeTruthy();
            console.log('setSpeed 0');
            setTimeout(function() {
                video.setSpeed(1);
                done();
            }, 10000);
        }, 10000+10000);

        it('check fast rewind', function(done){
            expect(video.currentChannel).toBeDefined();
            expect(video.setSpeed(-2)).toBeTruthy();
            console.log('setSpeed -2');
            setTimeout(function() {
                video.setSpeed(1);
                done();
            }, 10000);
        }, 10000+10000);

        xit('check fast forward', function(done){
            expect(video.currentChannel).toBeDefined();
            expect(video.setSpeed(2)).toBeTruthy();
            console.log('setSpeed 2');
            setTimeout(function() {
                video.setSpeed(1);
                done();
            }, 10000);
        }, 10000+10000);

        it('check seek', function(done) {
            expect(video.seek(-10, 1)).toBeTruthy(); //move from current position, 1 means current
            console.log('seek to -10 offset position from current - video.playbackOffset : ' + video.playbackOffset);
            setTimeout(function() {
                done();
            }, 10000);
        }, 10000+10000);


    });

    //***Notes:***  <br />  When pause, fast rewind, fast forward, seek API function is called, <br />
    //current speed and position will be delivered from onPlaySpeedChanged and onPlayPositionChanged event.

    function tune(){
        var deferred = $.Deferred(),
            prepareTestChannel = channelList[2],
            testTargetChannel = channelList[0];

        jasmine.humax.setChannel(video, prepareTestChannel, 30000)
            .always(function(){
                jasmine.humax.setChannel(video, testTargetChannel, 30000).then(
                    function(){ deferred.resolve(); },
                    function(){ deferred.reject(); }
                );
            });
        return deferred;
    }

    function setPlaybackEvent(){
        var deferred = $.Deferred(), eventUnBindFn;
        eventUnBindFn = jasmine.humax.events(video, {
            /*OIPF 7.13.1*/
            PlayStateChange: function(e){
                console.log("onPlayStateChange - state: "+ e.state + ", error: " + e.error);
            },
            /*OIPF 7.13.2.2*/
            PlaySpeedChanged: function(e){
                console.log("SPEED : "+ e.speed);
                deferred.notify({speed: e.speed});
            },
            PlayPositionChanged: function(e){
                console.log("POSITION: "+ e.position);
                deferred.notify({position: e.position});
            },
            RecordingEvent: function(e){
                console.log("RECORDING EVENT: "+ e.state + ":" + e.error +":" + e.recordingId );
                deferred.notify({state: e.state});
            },
            PlaySpeedsArrayChanged: function(){
                var speeds = jasmine.humax.map(video.playSpeeds);
                console.log("speed channge : " + speeds);
                deferred.notify({speeds:speeds});
            }
        });
        //jasmine.humax.events(video, {
        //    RecordingEvent: function(e) {
        //        console.log("RecordingEvent: "+ e.state);
        //        deferred.notify({state: e.state});
        //    }
        //});
        setTimeout(function () {
            eventUnBindFn();
            deferred.reject();
        }, 300000);
        return deferred;
    }
});