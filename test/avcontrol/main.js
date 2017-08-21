window.onload = function() {
	var SAMPLE_VIDEO = "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4";//"http://10.0.12.35/test/avcontrol/media/video_sample.mp4";
	var SAMPLE_AUDIO = "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4";//"http://10.0.12.35/test/avcontrol/media/audio_sample.mp3";
	var SAMPLE_VIDEO2 = "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4";//"http://10.0.12.35/test/avcontrol/media/video_sample_2.wmv";
	var SAMPLE_DUMMY = "http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4";//"http://10.0.12.35/test/avcontrol/media/video_dummy.mp3";

	var vodObject;
	var btnCreate = document.getElementById('btnCreate');
	var btnCreateByOIPF = document.getElementById('btnCreateByOIPF');
	var btnCreateDummy = document.getElementById('btnCreateDummy');
	var btnPlay = document.getElementById('btnPlay');
	var btnPause = document.getElementById('btnPause');
	var btnStop = document.getElementById('btnStop');
	var btnSeekMinus10 = document.getElementById('btnSeekMinus10');
	var btnSeekPlus10 = document.getElementById('btnSeekPlus10');
	var btnSpeedsGet = document.getElementById('btnSpeedsGet');
	var btnSpeedMinus2 = document.getElementById('btnSpeedMinus2');
	var btnSpeedPlus2 = document.getElementById('btnSpeedPlus2');
	var btnDestroy = document.getElementById('btnDestroy');
	var tagLog = document.getElementById('log');
	var tagVod = document.getElementById('vod');

	var vodObject2;	
	var btnCreate2 = document.getElementById('btnCreate2');
	var btnPlay2 = document.getElementById('btnPlay2');
	var btnDestroy2 = document.getElementById('btnDestroy2');


	var btnChangeData = document.getElementById('btnChangeData');
	var btnSetWidth200 = document.getElementById('btnSetWidth200');
	var btnSetWidth400 = document.getElementById('btnSetWidth400');
	var btnGetWidth = document.getElementById('btnGetWidth');
	var btnSetHeight200 = document.getElementById('btnSetHeight200');
	var btnSetHeight400 = document.getElementById('btnSetHeight400');
	var btnGetHeight = document.getElementById('btnGetHeight');
	var btnSetFullScreenTrue = document.getElementById('btnSetFullScreenTrue');
	var btnSetFullScreenFalse = document.getElementById('btnSetFullScreenFalse');

	var printLog = function(str) {
		tagLog.value += str + '\n';
		tagLog.scrollTop = tagLog.scrollHeight;
	};
	var onPlayStateChange = function() {
		if(vodObject) {
			printLog("onPlayStateChange playState="+vodObject.playState);
			if(vodObject.playState === 6) {
				printLog("onPlayStateChange error="+vodObject.error);
			}
		}
	}
	var onPlayPositionChanged = function(position) {
		if(vodObject) {
			printLog("onPlayPositionChanged position="+position/*+", playPosition="+vodObject.playPosition+", playTime="+vodObject.playTime*/);
		}
	}
	var onPlaySpeedChanged = function(speed) {
		if(vodObject) {
			printLog("onPlaySpeedChanged speed="+speed+", vodObject.speed="+vodObject.speed);
		}
	}
	var onPlaySpeedArrayChanged = function() {
		if(vodObject) {
			printLog("onPlaySpeedArrayChanged");
			var result = vodObject.playSpeeds;
			if (result) {
				if (result.length > 0) {
					for(var i=0; i<result.length; i++) {
						printLog('result['+i+'] = '+result[i]);						
					}		
				} else {
					printLog('result => []');				
				}				
			} else {
				printLog('can not get playSpeeds');						
			}		
		}
	}
	var onFullScreenChange = function() {
		if(vodObject) {
			printLog("onFullScreenChange fullScreen="+vodObject.fullScreen);
		}		
	}

	btnCreate.onclick = function clickBtnCreate() {
		printLog('clickBtnCreate !!');	
		if (!vodObject) {		
			vodObject = document.createElement('object');
			vodObject.id = 'vodObject';
			vodObject.type = 'video/mp4';
			vodObject.data = SAMPLE_VIDEO;
			/*
			vodObject.setAttribute('id','vodObject');
			vodObject.setAttribute('type','video/mp4');
			//vodObject.setAttribute('type','video/x-ms-wmv');
			vodObject.setAttribute('data',SAMPLE_VIDEO);
			*/
		} else {
			printLog('Already vodObject create!!');
		}
	};
	btnCreateByOIPF.onclick = function clickBtnCreateByOIPF() {
		printLog('clickBtnCreate !!');	
		if (!vodObject) {		
			if (window.oipfObjectFactory.isObjectSupported("video/mpeg")) {
				vodObject = window.oipfObjectFactory.createVideoMpegObject();
				tagVod.appendChild(vodObject);

				vodObject.onPlayStateChange = onPlayStateChange;
				vodObject.onPlayPositionChanged = onPlayPositionChanged;
				vodObject.onPlaySpeedChanged = onPlaySpeedChanged;
				vodObject.onPlaySpeedArrayChanged = onPlaySpeedArrayChanged;
				vodObject.onFullScreenChange = onFullScreenChange;

				vodObject.id = 'vodObject';
				vodObject.type = 'video/mp4';
				vodObject.data = SAMPLE_VIDEO;

				printLog('Create vodObject !!');
			} else {
				printLog('NOT Supported vodObject !!');

			}
		} else {
			printLog('Already vodObject create!!');
		}
	};
	btnCreateDummy.onclick = function clickBtnCreateDummy() {
		printLog('clickBtnCreate !!');	
		if (!vodObject) {		
			vodObject = document.createElement('object');
			vodObject.setAttribute('id', 'vodObject');
			vodObject.setAttribute('type', 'video/mp4');
			vodObject.setAttribute('data', SAMPLE_DUMMY);	

			vodObject.onPlayStateChange = onPlayStateChange;
			vodObject.onPlayPositionChanged = onPlayPositionChanged;
			vodObject.onPlaySpeedChanged = onPlaySpeedChanged;

			tagVod.appendChild(vodObject);
			printLog('Create vodObject !!');
		} else {
			printLog('Already vodObject create!!');
		}
	};
	btnPlay.onclick = function clickBtnPlay() {
		printLog('clickBtnPlay !!');	
		if (vodObject) {
			var result = vodObject.play(1);
			printLog('result => '+result);			
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnPause.onclick = function clickBtnPause() {
		printLog('clickBtnPause !!');	
		if (vodObject) {	
			var result = vodObject.play(0);
			printLog('result => '+result);			
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnStop.onclick = function clickBtnStop() {
		printLog('clickBtnStop !!');	
		if (vodObject) {	
			var result = vodObject.stop();
			printLog('result => '+result);	
			vodObject.data = "";	
			vodObject.removeAttribute("data");
			//vodObject.play(0);
			//vodObject.parentNode.removeChild(vodObject);
			//vodObject = null;
			printLog('TODO vodObject remove!!');			
		} else {
			printLog('TODO vodObject create!!');			
		}		
	}
	btnSeekMinus10.onclick = function clickBtnSeekMinus10() {
		printLog('clickBtnSeekMinus10 !!');	
		if (vodObject) {
			var currentPosition = vodObject.playPosition;
			printLog('currentPosition => '+currentPosition);		
			if (currentPosition > 10) {
				var result = vodObject.seek(currentPosition-10000);
			}
			printLog('result => '+result);				
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnSeekPlus10.onclick = function clickBtnSeekPlus10() {
		printLog('clickBtnSeekPlus10 !!');	
		if (vodObject) {	
			var currentPosition = vodObject.playPosition;
			printLog('currentPosition => '+currentPosition);	
			var result = vodObject.seek(currentPosition+10000);
			printLog('result => '+result);		
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnSpeedsGet.onclick = function clickBtnSpeedsGet2() {
		printLog('clickBtnSpeedsGet2 !!');	
		if (vodObject) {	
			var result = vodObject.playSpeeds;
			if (result) {
				if (result.length > 0) {
					for(var i=0; i<result.length; i++) {
						printLog('result['+i+'] = '+result[i]);						
					}		
				} else {
					printLog('result => []');				
				}				
			} else {
				printLog('can not get playSpeeds');						
			}			
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnSpeedMinus2.onclick = function clickBtnSpeedMinus2() {
		printLog('clickBtnSpeedMinus2 !!');	
		if (vodObject) {	
			var result = vodObject.play(-2);
			printLog('result => '+result);			
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnSpeedPlus2.onclick = function clickBtnSpeedPlus2() {
		printLog('clickBtnSpeedPlus2 !!');	
		if (vodObject) {	
			var result = vodObject.play(2);
			printLog('result => '+result);			
		} else {
			printLog('TODO vodObject create!!');			
		}
	};
	btnDestroy.onclick = function clickBtnDestroy() {
		printLog('clickBtnDestroy !!');	
		if (vodObject) {	
			vodObject.play(0);
			vodObject.src="";
			vodObject.removeAttribute('src');
			tagVod.removeChild(vodObject);
			vodObject = null;
			delete vodObject;
			printLog('Destroy vodObject with src!!');			
		} else {
			printLog('TODO vodObject create!!');			
		}
	};

	btnCreate2.onclick = function clickBtnCreate2() {
		printLog('clickBtnCreate2 !!');	
		if (!vodObject2) {		
			vodObject2 = document.createElement('object');
			vodObject2.id = 'vodObject2';
			vodObject2.type = 'video/mp4';
			vodObject2.data = SAMPLE_VIDEO;

			vodObject2.onPlayStateChange = onPlayStateChange;
			vodObject2.onPlayPositionChanged = onPlayPositionChanged;
			vodObject2.onPlaySpeedChanged = onPlaySpeedChanged;

			tagVod.appendChild(vodObject2);
			printLog('Create vodObject2 !!');
		} else {
			printLog('Already vodObject2 create!!');
		}
	};
	btnPlay2.onclick = function clickBtnPlay2() {
		printLog('clickBtnPlay2 !!');	
		if (vodObject2) {
			var result = vodObject2.play(1);
			printLog('result => '+result);			
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnDestroy2.onclick = function clickBtnDestroy2() {
		printLog('clickBtnDestroy2 !!');	
		if (vodObject2) {	
			tagVod.removeChild(vodObject2);
			delete vodObject2;
			vodObject2 = null;
			printLog('Destroy vodObject2 !!');			
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};


	btnChangeData.onclick = function clickBtnChangeData() {
		printLog('clickBtnChangeData !!');	
		if (vodObject) {			
			vodObject.data = SAMPLE_VIDEO2;
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnSetWidth200.onclick = function clickBtnSetWidth200() {
		printLog('clickBtnSetWidth200 !!');	
		if (vodObject) {			
			vodObject.width = 200;
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnSetWidth400.onclick = function clickBtnSetWidth400() {
		printLog('clickBtnSetWidth400 !!');	
		if (vodObject) {			
			vodObject.width = 400;
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnGetWidth.onclick = function clickBtnGetWidth() {
		printLog('clickBtnGetWidth !!');	
		if (vodObject) {			
			printLog('width = '+vodObject.width);
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnSetHeight200.onclick = function clickBtnSetHeight200() {
		printLog('clickBtnSetHeight200 !!');	
		if (vodObject) {
			vodObject.height = 200;		
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnSetHeight400.onclick = function clickBtnSetHeight400() {
		printLog('clickBtnSetHeight400 !!');	
		if (vodObject) {	
			vodObject.height = 400;			
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnGetHeight.onclick = function clickBtnGetHeight() {
		printLog('clickBtnGetHeight !!');	
		if (vodObject) {
			printLog('height = '+vodObject.height);
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnSetFullScreenTrue.onclick = function clickBtnSetFullScreenTrue() {
		printLog('clickBtnSetFullScreenTrue !!');	
		if (vodObject) {
			vodObject.setFullScreen(true);		
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
	btnSetFullScreenFalse.onclick = function clickBtnSetFullScreenFalse() {
		printLog('clickBtnSetFullScreenFalse !!');	
		if (vodObject) {
			vodObject.setFullScreen(false);					
		} else {
			printLog('TODO vodObject2 create!!');			
		}
	};
};