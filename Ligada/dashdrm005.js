/*global HbbTVTestAPI: false */
/*jslint sloppy: true, maxerr: 1000, vars: true, browser: true */

var testAPI, video, video2, timerId;


var PLAYREADY_CONTENT_URL_INVALID = "http://10.0.12.35/test/Ligada/Stream/1/index.mpd";
var PLAYREADY_CONTENT_URL_VALID = "http://10.0.12.35/test/Ligada/Stream/2/index.mpd";


function tearDown() {
    clearTimeout(timerId);

    try {
        video.pause();
    } catch (ignore) {}

    try {
        video.removeEventListener("playing", playingEventListener, false);
    } catch (ignore) {}

    try {
        video.removeEventListener("error", videoErrorListener, false);
    } catch (ignore) {}

    try {
        video2.pause();
    } catch (ignore) {}

    try {
        video2.removeEventListener("playing", playingEventListener, false);
    } catch (ignore) {}

    try {
        video2.removeEventListener("error", videoErrorListener, false);
    } catch (ignore) {}
}

function hbbtvOnLoad(){
    var appMan, app, source_elem;

    try {
        appMan = document.getElementById("app-man");
        app = appMan.getOwnerApplication(document);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception when getting the " +
            "owner Application object. Error: " + err.message);
        return;
    }

    try {
        app.show();
    } catch (err) {
        window.debug("+++(WEBLOG) Exception when calling show() " +
            "on the owner Application object. Error: " + err.message);
        return;
    }

    window.debug("+++(WEBLOG) Application initialised");

    try {
        video = document.createElement("video");
        video.id = "html5video";
        //source_elem = document.createElement("source");
        //source_elem.setAttribute("src", "http://10.0.12.33/media/dizzy1.mp4");//PLAYREADY_CONTENT_URL_INVALID);
        //source_elem.setAttribute("type", "application/dash+xml");
        video.src = PLAYREADY_CONTENT_URL_INVALID;
        video.type = "application/dash+xml";
        //video.appendChild(source_elem);
        document.body.insertBefore(video, document.body.firstChild);
    } catch (ex) {
        window.debug("+++(WEBLOG) Creation of video player failed. Exception details: " + ex);
        tearDown();
        return;
    }

    window.debug("+++(WEBLOG) Video player created with no PlayReady ContentProtection element");

    try {
        video.addEventListener("playing", playingEventListener, false);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception subscribing to 'playing' events. Error: " + err.message);
        tearDown();
        return;
    }

    try {
        video.addEventListener("error", videoErrorListener, false);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception subscribing to 'error' events. Error: " + err.message);
        tearDown();
        return;
    }

    timerId = setTimeout(drmRightsErrorTimeoutCallback, 20000);

    window.debug("+++(WEBLOG) Call play() on HTMLVideoElement with invalid licence");

    try {
        video.play();
    } catch (err) {
        window.debug("+++(WEBLOG) Exception starting playback of the video associated with the HTMLVideoElement. Error: " +
                err.message);
        tearDown();
        return;
    }
};


function drmRightsErrorTimeoutCallback() {
    window.debug("+++(WEBLOG) Test failed: Video playback should have generated a DRM rights error");
    tearDown();
}


function playingEventListener() {
    // Report that we got a playing event, though it's incidental to the operation of the test,
    // i.e. it's for information only
    window.debug("+++(WEBLOG) HTMLVideoElement 'playing' event received");
}


function videoErrorListener() {
    var error;
    clearTimeout(timerId);

    try {
        error = video.error.code;
    } catch (err) {
        window.debug("+++(WEBLOG) Exception obtaining error code from HTML5VideoElement. Error: " + err);
        tearDown();
        return;
    }

    if (error === 3) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_DECODE");
        pauseFailedVideo();
        return;
    }

    if (error === 1) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_ABORTED");
    } else if (error === 2) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_NETWORK");
    } else if (error === 4) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_SRC_NOT_SUPPORTED");
    } else {
        window.debug("+++(WEBLOG) Received unknown HTMLVideoElement 'error' event: code = " + error);
    }

    tearDown();
}

function pauseFailedVideo() {
    // First pause the existing video, before trying to destroy it. If it's not already playing,
    // we won't consider this an error.
    try {
        video.addEventListener("pause", pauseEventListener, false);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception subscribing to 'pause' events. Error: " + err.message);
        tearDown();
        return;
    }

   window.debug("+++(WEBLOG) Call pause() on HTMLVideoElement");

    timerId = setTimeout(pauseEventTimeout, 10000);

    try {
        video.pause();
    } catch (err) {
        window.debug("+++(WEBLOG) Exception calling 'pause()' on HTMLVideoElement. Error: " + err);
        tearDown();
        return;
    }
}


function pauseEventTimeout() {
    window.debug("+++(WEBLOG) Timeout on waiting for 'pause' event; continue to remove video");
    removeFailedVideo();
}


function pauseEventListener() {
    clearTimeout(timerId);
    window.debug("+++(WEBLOG) Received 'pause' event from HTMLVideoElement");
    removeFailedVideo();
}


function removeFailedVideo() {
    var source_elem;

    // Tear down existing video. Code sequence based on Annex J of the HbbTV spec.
    try {
        video.removeEventListener("playing", playingEventListener, false);
        video.removeEventListener("error", videoErrorListener, false);
        video.removeEventListener("pause", pauseEventListener, false);
        video.src = "";
        video.removeAttribute("src");
        video.load();
        video.parentNode.removeChild(video);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception removing HTMLVideoElement from document");
        tearDown();
        return;
    }

   window.debug("+++(WEBLOG) Removed HTMLVideoElement");

    // Create a second video element, this time with a valid licence.
    try {
        video2 = document.createElement("video");
        video2.id = "html5video";
        source_elem = document.createElement("source");
        source_elem.setAttribute("src", PLAYREADY_CONTENT_URL_VALID);
        source_elem.setAttribute("type", "application/dash+xml");
        video2.appendChild(source_elem);
        document.body.insertBefore(video2, document.body.firstChild);
    } catch (ex) {
        window.debug("+++(WEBLOG) Creation of second video player failed. Exception details: " + ex);
        tearDown();
        return;
    }

   window.debug("+++(WEBLOG) Second video player created with a PlayReady ContentProtection element");

    try {
        video2.addEventListener("playing", playing2EventListener, false);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception subscribing to 'playing' events. Error: " + err.message);
        tearDown();
        return;
    }

    try {
        video2.addEventListener("error", video2ErrorListener, false);
    } catch (err) {
        window.debug("+++(WEBLOG) Exception subscribing to 'error' events. Error: " + err.message);
        tearDown();
        return;
    }

    timerId = setTimeout(playingEvent2TimeoutCallback, 12000);

    try {
        video2.play();
    } catch (err) {
        window.debug("+++(WEBLOG) Exception starting playback of the video associated with the second HTMLVideoElement. Error: " +
                err.message);
        tearDown();
        return;
    }
}


function playingEvent2TimeoutCallback() {
    window.debug("+++(WEBLOG) Timed out waiting for 'playing' event on second HTMLVideoElement");

    tearDown();
}


function playing2EventListener() {
    clearTimeout(timerId);
   window.debug("+++(WEBLOG) Received 'playing' event on second HTMLVideoElement");

    window.debug("+++(WEBLOG) When no license is available for a content and a MPEG CENC ContentProtection" +
            " element is present in the MPD and no ContentProtection element is present" +
        "Check that the video is visible and playing correctly, displayed full-screen with the correct aspect ratio and no decoding artefacts.");
        endTestCallBack();
}


function video2ErrorListener() {
    var error;
    clearTimeout(timerId);

    try {
        error = video2.error.code;
    } catch (err) {
        window.debug("+++(WEBLOG) Exception obtaining error code from second HTML5VideoElement. Error: " + err);
        tearDown();
        return;
    }

    if (error === 1) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_ABORTED");
    } else if (error === 2) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_NETWORK");
    } else if (error === 3) {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_DECODE");
    } else {
        window.debug("+++(WEBLOG) Received HTMLVideoElement 'error' event: MEDIA_ERR_SRC_NOT_SUPPORTED");
    }

    tearDown();
}


function endTestCallBack() {
    tearDown();
}

