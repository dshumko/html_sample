/*
 * TEST CASE for CEA-2014
 *
 * written by STB-Component Browser Part.
 *
 */

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

var SPEED_NORMAL = 1;
var VIDEO_CONTENT = "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4";
var AUDIO_CONTENT = "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4";
var DUMMY_CONTENT = "http://download.wavetlan.com/SVV/Media/HTTP/H264/Other_Media/H264_test5_voice_mp4_480x360.mp4";

var _body = document.getElementById('qrunner');
var av  = document.createElement('object');
_body.appendChild(av);
av.id = 'video';
av.type = 'video/mp4';

module("Properties");

test("type", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.type !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("data", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.data !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("playPosition", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.playPosition !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("playTime", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.playTime !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("playState", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.playState !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("error", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.error !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }

});

test("speed", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.speed !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("nrTracks", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.nrTracks !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("currentTrackIndex", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.currentTrackIndex !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onPlayStateChange", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onPlayStateChange !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onFullScreenChange", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onFullScreenChange !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("persist", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.persist !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("fullScreen", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.fullScreen !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onPlaySpeedChanged", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onPlaySpeedChanged !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onPlayPositionChanged", function () {
    try {
        var vplayer = document.getElementById("video");
        var vplayer = document.getElementById("video");
        ok(vplayer.onPlayPositionChanged !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onParentalRatingChange", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onParentalRatingChange !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onParentalRatingError", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onParentalRatingError !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("onDRMRightsError", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onDRMRightsError !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("SelectedComponentChanged", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.onSelectedComponentChanged !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

module("Methods");

test("play()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.play !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("stop()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.stop !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("seek()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.seek !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("setVolume()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.setVolume !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("next()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.next !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("previous()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.previous !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("seekSegment()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.seekSegment !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("setFullScreen()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.setFullScreen !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("setSource()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.setSource !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("getComponents()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.getComponents !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("getCurrentActiveComponents()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.getCurrentActiveComponents !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("selectComponent()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.selectComponent !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("unselectComponent()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.unselectComponent !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("getVolume()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.getVolume !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});

test("queue()", function () {
    try {
        var vplayer = document.getElementById("video");
        ok(vplayer.queue !== undefined, "is Exists?");
    } catch (e) {
        ok(false, e);
    }
});


var tcNormalPlayback = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("NormalPlayback", function () {
        expect( 1 );
        var tc_timer = setTimeout(function () {                
            if (vplayer.playState == 1) {
                vplayer.stop();
                ok(true, "Normal Playback success");
            }
            else {
                vplayer.stop();
                ok(false, "Normal Playback fail");
            }
            QUnit.start();
        }, 5000);

        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.width = 200;
        vplayer.height = 150;
        
        vplayer.play(SPEED_NORMAL);
    }
    );
};

var tcCheckFullScreenChange = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("CheckFullScreenChange", function () {
        var tc_timer =  setTimeout(function () {
            QUnit.start();
            vplayer.setFullScreen(false);
            vplayer.stop();
            vplayer.onPlayStateChange = null;
            vplayer.onFullScreeChange = null;
            ok(false, "CheckFullScreenChange fail");
        }, 15000);

        vplayer = document.getElementById('video');
        vplayer.data = content;
        
        vplayer.onPlayStateChange = function () {
            if (vplayer.playState == 1) {
                vplayer.setFullScreen(true);
            }
        };

        vplayer.onFullScreenChange = function () {
            if (vplayer.fullScreen == true) {
                clearTimeout(tc_timer);           
                setTimeout(function() {
                    QUnit.start();
                    vplayer.setFullScreen(false);
                    vplayer.stop();
                    vplayer.onPlayStateChange = null;
                    vplayer.onFullScreenChange = null;
                    ok(true, "CheckFullScreenChange success");
                }, 4000);
            }
        };
        vplayer.play(SPEED_NORMAL);
    });
};

var tcSetFullScreen = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("SetFullScreen", function () {
        setTimeout(function () {
            QUnit.start();
            vplayer.setFullScreen(false);
            vplayer.onPlayStateChange = null;
            if (vplayer.fullScreen == false) {
                vplayer.stop();
                ok(true, "SetFullScreen success");
            } else {
                vplayer.stop();
                ok(false, "SetFullScreen fail");
            }
        }, 12000);
        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);
        vplayer.onPlayStateChange = function () {
            var fullScreen = false;
            if (vplayer.playState == 1) {
                vplayer.setFullScreen(true);    
                setTimeout(function() {
                    vplayer.setFullScreen(!vplayer.fullScreen);
                    setTimeout(function() {
                        vplayer.setFullScreen(!vplayer.fullScreen);
                        setTimeout(function() {
                            vplayer.setFullScreen(!vplayer.fullScreen);
                            
                        }, 2500 );
                    }, 2500 );
                }, 2500 );
            }
        };
    });
}

var tcCheckPlaySpeedChanged = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("CheckPlaySpeedChanged", function () {
        var target_speed = 2;
        //var speedchange_tcnum = TC_NUM+1;
        var tc_timer = setTimeout(function () {
            QUnit.start();
            vplayer.onPlayStateChange = null;
            vplayer.onPlaySpeedChanged = null;
            vplayer.stop();
            ok(false, "CheckPlaySpeedChanged fail");

        }, 10000);

        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);
        vplayer.onPlayStateChange = function () {
            if (vplayer.playState == 1) {
                vplayer.play(target_speed);
            }
        };
        vplayer.onPlaySpeedChanged = function (s) {
            if (s == target_speed) {
                clearTimeout(tc_timer);
                QUnit.start();
                vplayer.onPlayStateChange = null;
                vplayer.onPlaySpeedChanged = null;
                vplayer.stop();
                ok(true, "CheckPlaySpeedChanged success");
            }
        };
    }
    );
};

var tcSetPlaySpeed = function (content, speed) {
    var vplayer = document.getElementById("video");
    asyncTest("SetPlaySpeed x" + speed, function () {
        setTimeout(function () {
            QUnit.start();
            if (vplayer.speed == speed) {
                vplayer.stop();
                ok(true, "SetPlaySpeed success");
            }
            else {
                vplayer.stop();
                ok(false, "SetPlaySpeed fail");
            }
        }, 10000);

        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);
        vplayer.onPlayStateChange = function () {
            if (vplayer.playState == 1) {
                vplayer.play(speed);
            }
        };
    });
};


var tcSeektoHalf = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("SeektoHalf", function () {
        setTimeout(function () {
            QUnit.start();
            var duration = vplayer.playTime;
            var min = (duration / 2) - 10000;
            var max = (duration / 2) + 10000;
            vplayer.onPlayStateChange = null;
            if (vplayer.playPosition >= min && vplayer.playPosition <= max) {
                vplayer.stop();
                ok(true, "Seek success");
            }
            else {
                vplayer.stop();
                ok(false, "Seek fail");
            }
        }, 7000);
        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);
        vplayer.onPlayStateChange = function () {
            if (vplayer.playState == 1) {
                var duration = vplayer.playTime;
                var pos = duration / 2;
                vplayer.seek(pos);
            }
        };
    });
}

var tcSeekStress = function (content) {
    var vplayer = document.getElementById("video");
    var pos = 0;
    var time = 0;
    asyncTest("SeekStress", function () {
        setTimeout(function () {
            QUnit.start();
            var min = pos - 10000;
            var max = pos + 10000;
            vplayer.onPlayStateChange = null;
            if (vplayer.playPosition >= min && vplayer.playPosition <= max) {
                vplayer.stop();
                ok(true, "Seek success");
            }
            else {
                vplayer.stop();
                ok(false, "Seek fail");
            }
        }, 15000);
        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);

        vplayer.onPlayStateChange = function () {
			if (vplayer.playState == 1) {
				var duration = vplayer.playTime;
				var inc = duration/10;
				pos += inc;
				setTimeout( function() {
                    vplayer.seek(pos);
                    setTimeout( function() {
                        pos += inc;
                        vplayer.seek(pos);
                        setTimeout( function() {
                            pos += inc;
                            vplayer.seek(pos);
                            setTimeout( function() {
                                pos += inc;
                                vplayer.seek(pos);
                                setTimeout( function() {
                                    pos += inc;
                                    vplayer.seek(pos);
                                    setTimeout( function() {
                                        pos += inc;
                                        vplayer.seek(pos);
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000 );
			}
		};
    });
}

var tcCheckFinished = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("CheckFinished", function () {
        var tc_timer = setTimeout(function () {
            QUnit.start();
            vplayer.onPlayStateChange = null;
            if (vplayer.playState == 5) {
                vplayer.stop();
                ok(true, "CheckFinished success");
            }
            else {
                vplayer.stop();
                ok(false, "CheckFinished fail");
            }
        }, 20000);
        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.onPlayStateChange = function () {
            if (vplayer.playState == 1) {
                var duration = vplayer.playTime;
                vplayer.seek(duration - 5000);
            } else if (vplayer.playState == 5) {
                clearTimeout(tc_timer);
                QUnit.start();
                ok(true, "CheckFinished success");
                vplayer.onPlayStateChange = null;
            }
        };
        vplayer.play(SPEED_NORMAL);
    });
}

var tcCheckError = function (content) {
    var vplayer = document.getElementById("video");
    asyncTest("CheckError", function () {
        setTimeout(function () {
            QUnit.start();
            if (vplayer.playState == 6) {
                vplayer.stop();
                ok(true, "CheckError success");
            }
            else {
                vplayer.stop();
                ok(false, "CheckError fail");
            }
        }, 5000);
        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);
    });
}

var tcVolumeControl = function (content) {
    var vplayer = document.getElementById("video");
    var target_volume = 50;
    asyncTest("VolumeControl", function () {
        setTimeout(function () {
            QUnit.start();
            vplayer.onPlayStateChange = null;
            if (vplayer.getVolume() == target_volume) {
                vplayer.stop();
                ok(true, "VolumeControl success");
            } else {
                vplayer.stop();
                ok(false, "VolumeControl fail");
            }
        }, 10000);
        vplayer = document.getElementById('video');
        vplayer.data = content;
        vplayer.play(SPEED_NORMAL);
        vplayer.onPlayStateChange = function () {
            if (vplayer.playState == 1) {
                vplayer.setVolume(target_volume);
            }
        };
    });
}

function tc_playback() {
    module("Playback - Video");
    // normal playback
    
    tcNormalPlayback(VIDEO_CONTENT);

    // setWindow
    tcCheckFullScreenChange(VIDEO_CONTENT);
    tcSetFullScreen(VIDEO_CONTENT);

    // set speed
    tcCheckPlaySpeedChanged(VIDEO_CONTENT);
    tcSetPlaySpeed(VIDEO_CONTENT, 2);
    tcSetPlaySpeed(VIDEO_CONTENT, 4);
    tcSetPlaySpeed(VIDEO_CONTENT, 8);

    // seek
    tcSeektoHalf(VIDEO_CONTENT);
    tcSeekStress(VIDEO_CONTENT);
    
    tcCheckFinished(VIDEO_CONTENT);
    tcCheckError(DUMMY_CONTENT);
    tcVolumeControl(VIDEO_CONTENT);

    module("Playback - Audio");
    // normal playback
    tcNormalPlayback(AUDIO_CONTENT);

    // set speed
    tcSetPlaySpeed(AUDIO_CONTENT, 2);
    tcSetPlaySpeed(AUDIO_CONTENT, 4);
    tcSetPlaySpeed(AUDIO_CONTENT, 8);

    // seek
    tcSeektoHalf(AUDIO_CONTENT);
    tcSeekStress(AUDIO_CONTENT);
    tcCheckFinished(AUDIO_CONTENT);
    tcCheckError(DUMMY_CONTENT);
}

tc_playback();
