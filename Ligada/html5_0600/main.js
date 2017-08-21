/* global HbbTVTestAPI: false */
/* jslint sloppy: true, maxerr: 1000, vars: true, browser: true */

var testAPI;
var video;
var playingTimeout;
var waitTimeout;

var playReturned = false;
var playingEventDispatched = false;

function tearDown() {
    try { clearTimeout(playingTimeout); } catch (_) {}
    try { clearTimeout(waitTimeout); } catch (_) {}

    try {
        video.removeEventListener("playing", onPlaying, false);
    } catch (_) {}

    try {
        video.removeEventListener("error", onError1, false);
    } catch (_) {}

    try {
        video.removeEventListener("error", onError2, false);
    } catch (_) {}

    try { video.pause(); } catch (_) {}
    try {
        var sources = video.getElementsByTagName("source");
        for (var i = 0; i < sources.length; i++) {
            sources[i].setAttribute("src", "");
        }
    } catch (_) {}
    try { video.load(); } catch (_) {}
}

function getMediaErrorMsg(media) {
    var error = media.error;
    if (error === null || error === undefined) {
        return "The 'error' property of the object was " + error;
    }

    var errorName, networkStateName;
    switch (error.code) {
        case error.MEDIA_ERR_ABORTED:
            errorName = "MEDIA_ERR_ABORTED";
            break;
        case error.MEDIA_ERR_NETWORK:
            errorName = "MEDIA_ERR_NETWORK";

            switch (media.networkState) {
                case media.NETWORK_EMPTY:
                    networkStateName = "NETWORK_EMPTY";
                    break;
                case media.NETWORK_IDLE:
                    networkStateName = "NETWORK_IDLE";
                    break;
                case media.NETWORK_LOADING:
                    networkStateName = "NETWORK_LOADING";
                    break;
                case media.NETWORK_NO_SOURCE:
                    networkStateName = "NETWORK_NO_SOURCE";
                    break;
                default:
                    networkStateName = ("unknown network state or missing " +
                                        "enum constant");
                    break;
            }
            break;
        case error.MEDIA_ERR_DECODE:
            errorName = "MEDIA_ERR_DECODE";
            break;
        case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorName = "MEDIA_ERR_SRC_NOT_SUPPORTED";
            break;
        default:
            errorName = "unknown error code or missing enum constant";
            break;
    }

    var msg = errorName + " (" + error.code + ")";
    if (networkStateName) {
        msg += (", " + networkStateName + " (" + media.networkState + ")");
    }

    return msg;
}

function hbbtvOnLoad() {
    var appMan, app;

    try {
        appMan = document.getElementById("app-man");
        app = appMan.getOwnerApplication(document);
    } catch (err) {
        window.debug("(WEBLOG)Exception when getting the " +
            "owner application object. Error: " + err.message);
        return;
    }
    try {
        app.show();
    } catch (err) {
        window.debug("(WEBLOG)Exception when calling show() " +
            "on the owner application object. Error: " + err.message);
        return;
    }
    window.debug("(WEBLOG)Application initialised");

    video = document.getElementById("html5video");

    playingTimeout = setTimeout(onPlayingTimeout, 60000);

    try {
        video.addEventListener("playing", onPlaying, false);
    } catch (err) {
        window.debug("(WEBLOG)Error when adding a " +
            "'playing' event listener to the 'video' element. Error: " +
            err.message);
        tearDown();
        return;
    }
    window.debug("(WEBLOG)A 'playing' event listener " +
                                      "was added to the 'video' element");

    try {
        video.addEventListener("error", onError1, false);
    } catch (err) {
        window.debug("(WEBLOG)Error when adding an 'error' " +
            "event listener to the 'video' element. Error: " + err.message);
        tearDown();
        return;
    }
    window.debug("(WEBLOG)An 'error' event listener was added " +
                                      "to the 'video' element");

    try {
        video.play();
    } catch (err) {
        window.debug("(WEBLOG)Exception when calling play() " +
            "on the 'video' element. Error: " + err.message);
        tearDown();
        return;
    }
    window.debug("(WEBLOG)The play() method of the 'video' element returned");

    playReturned = true;
    if (playingEventDispatched) {
        wait();
    }
};

function onError1() {
    window.debug("(WEBLOG)An 'error' event was dispatched " +
                                       "from the 'video' element. Error: " + 
                                       getMediaErrorMsg(video));
    tearDown();
}

function onPlayingTimeout() {
   window.debug("(WEBLOG)A 'playing' event was not " +
        "dispatched from the 'video' element within 60 seconds");
    tearDown();
}

function onPlaying() {
    if (playingEventDispatched) {
        return;
    }

    try {
        video.removeEventListener("playing", onPlaying, false);
    } catch (err) {
        window.debug("(WEBLOG)Error when removing the " +
            "'playing' event listener from the 'video' element. Error: " +
            err.message);
        tearDown();
        return;
    }

    try {
        video.removeEventListener("error", onError1, false);
    } catch (err) {
        window.debug("(WEBLOG)Error when removing the 'error' " +
            "event listener from the 'video' element. Error: " + err.message);
        tearDown();
        return;
    }

    try {
        video.addEventListener("error", onError2, false);
    } catch (err) {
        window.debug("(WEBLOG)Error when adding an 'error' " +
            "event listener to the 'video' element. Error: " + err.message);
        tearDown();
        return;
    }

    clearTimeout(playingTimeout);
    window.debug("(WEBLOG)A 'playing' event was dispatched " +
                                      "from the 'video' element");

    playingEventDispatched = true;
    if (playReturned) {
        wait();
    }
}

function onError2() {
    window.debug("(WEBLOG)An 'error' event was dispatched " +
                                       "from the 'video' element. Error: " + 
                                       getMediaErrorMsg(video));
    tearDown();
}

function wait() {
    waitTimeout = setTimeout(checkMetadata, 5000);
}

function checkMetadata() {
    var audioTracks, audioTrack;

    try {
        video.removeEventListener("error", onError2, false);
    } catch (err) {
        window.debug("(WEBLOG)Error when removing the 'error' " +
            "event listener from the 'video' element. Error: " + err.message);
        tearDown();
        return;
    }
    window.debug("(WEBLOG)The 'error' event listener was " +
                                      "removed from the 'video' element");

    try {
        audioTracks = video.audioTracks;
    } catch (err) {
        window.debug("(WEBLOG)Exception when getting the " +
            "'audioTracks' property of the 'video' element. Error: " +
            err.message);
        tearDown();
        return;
    }

    if (audioTracks === null || audioTracks === undefined) {
       window.debug("(WEBLOG)The 'audioTracks' property of " +
            "the 'video' element was " + audioTracks);
        tearDown();
        return;
    }

    if (audioTracks.length !== 1) {
        window.debug("(WEBLOG)The 'length' property of the " +
            "AudioTrackList object was not equal to 1. Actual value: " +
            audioTracks.length);
        tearDown();
        return;
    }
    window.debug("(WEBLOG)The 'length' property of the " +
                                      "AudioTrackList object was equal to 1");

    audioTrack = audioTracks[0];
    if (audioTrack === null || audioTrack === undefined) {
        window.debug("(WEBLOG)When using array notation, the " +
            "first item of the AudioTrackList object was " + audioTrack);
        tearDown();
        return;
    }

    if (audioTracks[0].id !== "50600") {
        window.debug("(WEBLOG)The value of the AudioTrack " +
            "object's 'id' property was not equal to 50600. " +
            "Actual value: " + audioTracks[0].id);
        tearDown();
        return;
    }
    window.debug("(WEBLOG)The value of the AudioTrack object's " +
        "'id' property was equal to 50600");

    tearDown();
}
