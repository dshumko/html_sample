describe('[MEDIA] viewright playback scenario', function() {
    "use strict";
    //***PreCondition:***<br /> Network is connected
    var videoPlay, drmAgent;

    //***Test Scenario: ***
    //1.	Append Video Tag and drmAgent object to DOM and set url
    //2.	sendDRMMessage
    //3.	get DRMMessageResult event and play video
    //4.    stream Pause, resume, seek, fast forward, fast rewind, stop

    it('play', function (done) {
        drmAgent = document.createElement('object');
        drmAgent.setAttribute("id", "drmAgent");

        videoPlay = document.createElement('video');
        videoPlay.setAttribute("id", "videoId");
        videoPlay.setAttribute("display", 'block');
        videoPlay.setAttribute("position", 'absolute');
        videoPlay.videoPlayType = 0;
        videoPlay.preload = 'auto';
        videoPlay.controls = true;
        if (videoPlay.hasAttribute("controls")) {
            videoPlay.removeAttribute("controls");
        }

        document.body.appendChild(videoPlay);
        document.body.appendChild(drmAgent);
        drmAgent.setAttribute("type", "application/oipfDrmAgent");
        drmAgent.onDRMMessageResult = function (msgID, resultMsg, resultCode){
            console.log('onDRMMessageResult msgID :'+msgID+', resultMsg : '+resultMsg+', resultCode: '+resultCode);
            console.log('videoPlay - play');
            videoPlay.play();
            setTimeout(function() {
                done();
            }, 25000);
        };

        videoPlay.setAttribute("type", 'video/mp4');
        videoPlay.setAttribute("src", 'http://ys-vod.cdn.yousee.tv/iPhone/iPhone-src/vod/encryp/EG_9273/EG_9273_Low.m3u8');

        drmAgent.sendDRMMessage("application/viewrightweb.initiator+xml", "<SetVmxCas><CAS_URL>vkey.cdn.yousee.tv</CAS_URL><VendorName>YouSee</VendorName></SetVmxCas>", "");
    }, 50000);

    it('pause', function (done) {
        videoPlay.pause();
        console.log('videoPlay - pause');
        setTimeout(function() {
            done();
        }, 6000);
    }, 7000);

    it('resume', function (done) {
        videoPlay.play();
        console.log('videoPlay - resume');
        setTimeout(function() {
            done();
        }, 6000);
    }, 7000);

    it('fast forward, rewind', function (done) {
        videoPlay.playbackRate += 1;
        console.log('videoPlay - fast forward');
        setTimeout(function() {
            videoPlay.playbackRate -= 1;
            console.log('videoPlay - back to normal rate');
            done();
        }, 6000);
    }, 7000);

    it('stop', function (done) {
        videoPlay.pause();
        videoPlay.src = null;
        console.log('videoPlay - stop');
        document.body.removeChild(videoPlay);
        done();
    });
});