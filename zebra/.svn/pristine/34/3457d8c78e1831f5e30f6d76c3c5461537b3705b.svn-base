describe('[MEDIA] hls playback scenario', function() {
    "use strict";
    //***PreCondition:***<br /> Network is connected
    var videoPlay;

    //***Test Scenario: ***
    //1.	Append Video Tag to DOM and set url
    //2.	Load the url source and play HLS stream
    //3.	HLS stream Pause, resume, seek, fast forward, fast rewind, stop

    it('play', function (done) {
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
        videoPlay.setAttribute("type", 'video/mp4');
        //***Notes: ***<br />
        //The URL is now hardcoded  <br />
        //```url``` http://ys-vod.ds.cdn.yousee.tv/iPhone/iPhone-src/vod/clear/trailer/ML_1190_TR/ML_1190_TR_High/1200/index-1200.m3u8
        videoPlay.setAttribute("src", 'http://ys-vod.ds.cdn.yousee.tv/iPhone/iPhone-src/vod/clear/trailer/ML_1190_TR/ML_1190_TR_High/1200/index-1200.m3u8');
        videoPlay.load();
        videoPlay.play();
        console.log('videoPlay - play');
        setTimeout(function() {
           done();
        }, 6000);
    }, 7000);

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

    xit('seek', function (done) {
        videoPlay.currentTime += 20;
        //console.log('videoPlay - seek forward 20');
        setTimeout(function() {
            videoPlay.currentTime -= 20;
            //console.log('videoPlay - seek backward 20');
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
        videoPlay.src = "";
        try{
            videoPlay.removeAttribute("src");
        } catch(e){
        }
        videoPlay.load();
        document.body.removeChild(videoPlay);
        videoPlay = null;
        console.log('videoPlay - stop');
        done();
    });
});