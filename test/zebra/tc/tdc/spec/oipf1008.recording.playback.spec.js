describe('[RECORDING] Playback Scenario', function() {
    "use strict";
    //***PreCondition:***  <br />  recording file should exist.
    var /*video,
    removeVideoWrapFn,*/
        recordingScheduler,
        avControl,
        recordingList,
        currentRecording,
        timelimit = {
            stateChange : 10000,
            dummy : 10000
        };

    beforeAll(function () {
        /*video = oipfObjectFactory.createVideoBroadcastObject();
        removeVideoWrapFn = jasmine.humax.videoWrapper(video);*/
        recordingScheduler = oipfObjectFactory.createRecordingSchedulerObject();
        avControl = oipfObjectFactory.createHumaxVideoOnDemandObject();
    });
    /*afterAll(function () {
        removeVideoWrapFn();
    });*/

    it('check api : av controller ', function(){
        /*expect(video).toBeDefined();*/
        expect(avControl).toBeDefined();
        expect(avControl).toHaveProperties([
            'setSource',
            'data',
            'play',
            'seek',
            'stop',
            'speed',
            'playPosition',
            'playState',
            'playTime',
            'playSpeeds',
            'getPlayingThumbnail'
        ]);
    });

    describe('Recording List', function() {
        it('check recording list', function() {
            expect(recordingScheduler.recordings).toBeDefined();
            recordingList = jasmine.humax.filter(recordingScheduler.recordings||[], function(recording){
                return !!recording.id;
            });
            expect(recordingList.length).toBeGreaterThan(0);
            currentRecording = recordingList[0];
        });
    });

    //***Test Scenario:***
    //1.	Recording file play.
    //2.	Recording play pause, fast forward, fast rewind, seek
    //3.	Check Recording play pause, fast forward, fast rewind, seek API function is called successfully

    describe('Recording Play', function(){
        var isRecordingPlay = false;
        beforeAll(function(done){
            console.log('Get Path :: '+ currentRecording.id);
            play(avControl, currentRecording.id, timelimit.stateChange)
                .then(function() {
                    isRecordingPlay = true;
                }, function() {
                    isRecordingPlay = false;
                });
            setTimeout(done, timelimit.stateChange + timelimit.dummy);
        }, timelimit.stateChange + timelimit.dummy * 2);

        it('play', function(){
            expect(isRecordingPlay).toBeTruthy();
        });
    });

    describe('Recording Playback', function(){
        it('check pause', function(done){
            expect(avControl.play(0)).toBeTruthy();
            console.log('setSpeed 0');
            setTimeout(function() {
                avControl.play(1);
                done();
            }, timelimit.stateChange);
        }, timelimit.stateChange+timelimit.dummy);

        it('check fast forward', function(done){
            expect(avControl.play(2)).toBeTruthy();
            console.log('setSpeed 2');
            setTimeout(function() {
                avControl.play(1);
                done();
            }, timelimit.stateChange);
        }, timelimit.stateChange+timelimit.dummy);

        it('check fast rewind', function(done){
            expect(avControl.play(-2)).toBeTruthy();
            console.log('setSpeed -2');
            setTimeout(function() {
                avControl.play(1);
                done();
            }, timelimit.stateChange);
        }, timelimit.stateChange+timelimit.dummy);

        it('check seek', function(done) {
            $.when({})
                .pipe(function() {
                    var deferred = $.Deferred();
                    setTimeout(function () {
                        /*console.log ('currentRecording.lastPlayPosition : ' + currentRecording.lastPlayPosition);
                        expect(currentRecording.lastPlayPosition).toBeGreaterThan(0);
                        var position = currentRecording.lastPlayPosition * 1000;*/
                        if(!!currentRecording){
                            console.log ('seek to 10 : ' + currentRecording.lastPlayPosition);
                        }
                        expect(avControl.seek(10 * 1000)).toBeTruthy();  // back to 10 seconds position
                        deferred.resolve();
                    }, 3000);
                    return deferred.promise();
                })
                .done(function () {
                    setTimeout(function() {
                        done();
                    }, timelimit.stateChange);
                });
        }, timelimit.stateChange+timelimit.dummy);
    });

    function play(avController, uri, timeout){
        var deferred = $.Deferred(), result;
        jasmine.humax.extend(avController, {
            /*OIPF 7.13.2.2*/
            onPlaySpeedChanged: function(speed){
                console.log("SPEED : "+speed);
            },
            onPlayPositionChanged: function(position){
                console.log("POSITION: "+position);
                if (position > 0) {
                    deferred.resolve();
                }
            },
            onPlaySpeedsArrayChanged: function(){
                /*var speeds = collectionToArray(video.playSpeeds);
                console.log(speeds);
                deferred.notify({speeds:speeds});*/
            },
            /*OIPF 7.14.9*/
            onPlayStateChange: function() {
                var playState = avController.playState;
                var error = avController.error;
                var source = avController.data;
                console.log("state:" + playState + " :  error :" + error + ":  soure:" + source);
                /********** PlayState Type *************
                *** EPLAY_STATE_STOPPED : 0
                *** EPLAY_STATE_PLAYING : 1
                *** EPLAY_STATE_PAUSED : 2
                *** EPLAY_STATE_CONNECTING : 3
                *** EPLAY_STATE_BUFFERING : 4
                *** EPLAY_STATE_FINISHED : 5
                *** EPLAY_STATE_ERROR : 6
                ****************************************/
                /************ Error Type ***************
                *** OPLVOD_PLAY_ERROR_NO_ERROR : -1
                *** OPLVOD_PLAY_ERROR_NOT_SUPPORTED_FORMAT : 0
                *** OPLVOD_PLAY_ERROR_SERVER_FAIL : 1
                *** OPLVOD_PLAY_ERROR_UNDEFINED : 2
                *** OPLVOD_PLAY_ERROR_INSUFFICIENT_RESOURCE : 3
                *** OPLVOD_PLAY_ERROR_CONTENT_CORRUPT : 4
                *** OPLVOD_PLAY_ERROR_CONTENT_NOT_AVAILABLE : 5
                *** OPLVOD_PLAY_ERROR_NOT_AVAILABLE_POSITION : 6
                *** OPLVOD_PLAY_ERROR_BLOCK_PARENTAL_CONTROL : 7
                *** OPLVOD_PLAY_ERROR_DRM : 8
                *****************************************/
            }
        });

        avController.setSource(uri);
        /*avController.data = uri;*/
        avController.play(1);

        setTimeout(function(){
            deferred.reject();
        }, timeout);

        /*avController.seek(pos);*/
        return deferred;
    }
});
