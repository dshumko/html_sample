
//start test
var oipfobjectFactory = window.oipfObjectFactory;
var avControl = undefined;

if( oipfobjectFactory !== undefined )
{
    try {
    	avControl = oipfobjectFactory.createVideoMpegObject();
    } catch (e)
    {
        console.log(e);
    }
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

var SPEED_NORMAL = 1;
var VIDEO_CONTENT = "http://10.0.12.35/media/video_sample.mp4";
var AUDIO_CONTENT = "http://10.0.12.35/media/audio_sample.mp3";
var DUMMY_CONTENT = "http://10.0.12.35/media/dummy.mp4";

var _body = document.getElementById('qrunner');
var vplayer  = document.createElement('object');
vplayer.id = 'video';
vplayer.type = 'video/mp4';
_body.appendChild(vplayer);


module("7.14.1 A/V Control");
test("data", function() {
    try {
        ok(avControl.data !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playPosition", function() {
    try {
        ok(avControl.playPosition !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playTime", function() {
    try {
        ok(avControl.playTime !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("playState", function() {
    try {
        ok(avControl.playState !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("error", function() {
    try {
        ok(avControl.error !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("speed", function() {
    try {
        ok(avControl.speed !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onPlayStateChange", function() {
    try {
        ok(avControl.onPlayStateChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("width", function() {
    try {
        ok(avControl.width !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("height", function() {
    try {
        ok(avControl.height !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("fullScreen", function() {
    try {
        ok(avControl.fullScreen !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onFullScreenChange", function() {
    try {
        ok(avControl.onFullScreenChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onfocus", function() {
    try {
        ok(avControl.onfocus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onblur", function() {
    try {
        ok(avControl.onblur !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("play()", function() {
    try {
        ok(avControl.play !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("stop()", function() {
    try {
        ok(avControl.stop !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("seek()", function() {
    try {
        ok(avControl.seek !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setVolume()", function() {
    try {
        ok(avControl.setVolume !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("setFullScreen()", function() {
    try {
        ok(avControl.setFullScreen !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("focus()", function() {
    try {
        ok(avControl.focus !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});


module("trickmodes");
test("onPlaySpeedChanged", function() {
    try {
        ok(avControl.onPlaySpeedChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onPlayPositionChanged", function() {
    try {
        ok(avControl.onPlayPositionChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	test("playSpeeds[]", function() {
	    try {
	        ok(avControl.playSpeeds !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}
test("onplaySpeedsArrayChanged", function() {
    try {
        ok(avControl.onplaySpeedsArrayChanged !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
if(HBBTV_ON==0){
	test("oitfSourceIPAddress", function() {
	    try {
	        ok(avControl.oitfSourceIPAddress !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("oitfSourcePortAddress", function() {
	    try {
	        ok(avControl.oitfSourcePortAddress !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("oitfNoRTSPSessionControl", function() {
	    try {
	        ok(avControl.oitfNoRTSPSessionControl !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("oitfRTSPSessionId", function() {
	    try {
	        ok(avControl.oitfRTSPSessionId !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

module("parental rating errors");
test("onParentalRatingChange", function() {
    try {
        ok(avControl.onParentalRatingChange !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});
test("onParentalRatingError", function() {
    try {
        ok(avControl.onParentalRatingError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("DRM rights errors");
test("onDRMRightsError", function() {
    try {
        ok(avControl.onDRMRightsError !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

module("playing media objects");
	test("setSource()", function() {
	    try {
	        ok(avControl.setSource !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	
	if(HBBTV_ON==0){
	module("UI feedback of buffering A/V content");
	test("readyToPlay", function() {
	    try {
	        ok(avControl.readyToPlay !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onReadyToPlay", function() {
	    try {
	        ok(avControl.onReadyToPlay !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onRepresentationChange", function() {
	    try {
	        ok(avControl.onRepresentationChange !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("onPeriodChange", function() {
	    try {
	        ok(avControl.onPeriodChange !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("availableRepresentationsBandwidth", function() {
	    try {
	        ok(avControl.availableRepresentationsBandwidth !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("availableRepresentationIds", function() {
	    try {
	        ok(avControl.availableRepresentationIds !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("currentRepresentation", function() {
	    try {
	        ok(avControl.currentRepresentation !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("currentRepresentationId", function() {
	    try {
	        ok(avControl.currentRepresentationId !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("maxRepresentation", function() {
	    try {
	        ok(avControl.maxRepresentation !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("minRepresentation", function() {
	    try {
	        ok(avControl.minRepresentation !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("supportedStrategies", function() {
	    try {
	        ok(avControl.supportedStrategies !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("getAvailablePlayTime()", function() {
	    try {
	        ok(avControl.getAvailablePlayTime !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setBufferingStrategy()", function() {
	    try {
	        ok(avControl.setBufferingStrategy !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
	test("setRepresentationStrategy()", function() {
	    try {
	        ok(avControl.setRepresentationStrategy !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

module("media queuing");
test("queue()", function() {
    try {
        ok(avControl.queue !== undefined, "is exists");
    } catch (e) {
        ok (false, "not exists");
    }
});

if(HBBTV_ON==0){
	module("volume control");
	test("getVolume()", function() {
	    try {
	        ok(avControl.getVolume !== undefined, "is exists");
	    } catch (e) {
	        ok (false, "not exists");
	    }
	});
}

var tcNormalPlayback = function (content) {
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
};

var tcCheckPlaySpeedChanged = function (content) {
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
};

var tcSeekStress = function (content) {
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
};

var tcCheckFinished = function (content) {
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
};

var tcCheckError = function (content) {
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
};

var tcVolumeControl = function (content) {
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
};

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
