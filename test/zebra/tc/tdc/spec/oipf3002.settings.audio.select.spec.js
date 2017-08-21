describe('[SETTINGS] Audio select', function() {
    "use strict";

    var configuration, localSystem, output, audioList;
    beforeEach(function () {
        configuration = oipfObjectFactory.createHumaxConfigurationObject();
        localSystem = configuration.localSystem;
        output = localSystem.hmx_outputs[0];
        audioList = localSystem.hmx_audios;
    });

    it('check api : humax configuration, local system object', function () {
        expect(configuration).toBeDefined();
        expect(localSystem).toBeDefined();
        expect(output).toBeDefined();
        expect(audioList).toBeDefined();
    });

    xit('display audio list', function(done){
        expect(audioList.length).toBeGreaterThan(0);
        console.log("Audio count : " + audioList.length);
        jasmine.humax.each(audioList, displayAudio());
        console.log("description enable: " + output.audioDescriptionEnabled );
        done();
    });

    //***Test Scenario:*** <br />
    //1.	Set audio setting
    //2.	Check if audio setting is done correctly

    it('set audio output , PCM, Stereo, lipsyncDelay 20ms', function(done){
        /*set*/
        jasmine.humax.each(audioList, setAudio({
            modeDigitalAudioOutput:'PCM',     //'PCM', 'Multi Channel'
            soundMode:'Stereo',               //'Stereo', 'Left', 'Right'
            lipSyncDelay:20                   // 0 ~ 400
        }));
        /*check*/
        jasmine.humax.each(audioList, checkAudio({
            modeDigitalAudioOutput:'PCM',
            soundMode:'Stereo',
            lipSyncDelay:20
        }));
        done();
    });

    /* Humax extension API 3.5.2.3 HMX_Audio, name property */
    function checkAudio(data){
        var checkFn = {
            audio_hdmi: allCheck,
            audio_spdif : function(audio) {return  ( audio.modeDigitalAudioOutput === data.modeDigitalAudioOutput );},
            audio_0 : allCheck
        };

        function allCheck(audio){
            var check = true;
            eachIn(data, function(item, index){
                check = check && ( audio[index] === item );
            });
            return check;
        }
        return function(audio){
            expect(( checkFn[audio.name] || function(){return false;} )(audio)).toBeTruthy();
        };
    }

    function setAudio(data){
        var setFn = {
            audio_hdmi: function(audio) { merge(audio, data); },
            audio_spdif : function(audio) {
                if(data.modeDigitalAudioOutput){
                    audio.modeDigitalAudioOutput = data.modeDigitalAudioOutput;
                }
            },
            audio_0 : function(audio) { merge(audio, data); }
        };
        return function(audio){
            ( setFn[audio.name] || function(){} )(audio);
        };
    }

    function displayAudio() {
        var displayFn = {
            audio_hdmi : function(audio){
                console.log('[AUDIO_HDMI]Output: '+audio.modeDigitalAudioOutput+',  Delay: '+audio.lipSyncDelay+" ms");
            },
            audio_spdif : function(audio){
                console.log('[AUDIO_SPDIF]Output: '+audio.modeDigitalAudioOutput);
            },
            audio_0 : function(audio){
                console.log('[AUDIO_audio_0]Output: '+audio.modeDigitalAudioOutput);
            }
        };
        return function(audio){
            ( displayFn[audio.name] || function(){} )(audio);
        };
    }

    function eachIn(obj, fn) {
        var n;
        for( n in obj){
            if(obj.hasOwnProperty(n)){
                fn(obj[n], n);
            }
        }
    }

    function merge(obj, data) {
        var n;
        for( n in data){
            if(data.hasOwnProperty(n)){
                obj[n] = data[n];
            }
        }
        return obj;
    }
});
