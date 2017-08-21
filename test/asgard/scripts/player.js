/////////// Player /////////////
function Player(page, ID, style, data, header, hasImage) {
    this.infoTimer = null;
    this.progressTimer = null;
    this.page = document.getElementById(page);
    this.player = null;
    this.header = document.getElementById(header);
    this.GeneratePlayer(page, ID, style, data);	
    this.player.onReadyStateChange = onReadyStateChange;
    this.player.onPlayStateChange = onPlayStateChange;
    this.player.onBuffering = onBuffering;
    this.player.onError = onError;
    this.hasImage = hasImage;
    this.trickPlayPosition = "";
    this.isTrickPlay = 0;
    this.isTrickPlaySelectable = 1;
    this.currentTrickSpeed = 1;
  	this.trickPlayInterval = 660000;
    //this.trickPlayInterval = 300000;
    //this.pBar = document.getElementById(0playerBar" + page);


/*
    this.updateDurationInfo = function (element, playPosition, playTime, onTrickPlay) {

        //        if (this.player.playState == 3 || this.player.playState == 4)
        //            this.loadingImage.style.display = 'inline';
        //        else
        //            this.loadingImage.style.display = 'none';

        if (!this.isTrickPlay || onTrickPlay) {

            var pbarRange = 355;
            var pbarLeft = 15;
            var pballLeft = 10;
            //            var durationInfoleft = -40;
            if (onTrickPlay)
                var pt = new Number(playPosition) / 1000;
            else
                var pt = new Number(this.player.playPosition) / 1000;
            //            var hh = Math.floor(pt / 3600);
            //            var mm = Math.floor((pt % 3600) / 60);
            var ss = Math.floor(pt % 60);

            var minute = Math.floor(pt / 60);
            //            element.innerHTML = (hh != 0 ? hh + ":" : "") + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss) + "/";
            element.innerHTML = (minute < 10 ? "0" + minute : minute) + ":" + (ss < 10 ? "0" + ss : ss) + "/";

            pt = new Number(playTime) / 1000;
            //            hh = Math.floor(pt / 3600);
            //            mm = Math.floor((pt % 3600) / 60);
            ss = Math.floor(pt % 60);

            //            element.innerHTML += (hh != 0 ? hh + ":" : "") + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
            element.innerHTML += Math.floor(pt / 60) + ":" + (ss < 10 ? "0" + ss : ss);
            if (onTrickPlay)
                var position = Math.ceil(playPosition * pbarRange / playTime);
            else
                var position = Math.ceil(this.player.playPosition * pbarRange / playTime);
            if (position > 0) {
                if (position >= pbarRange) {
                    this.pBar.style.width = pbarRange + 'px';
                    this.pBall.style.left = (pbarRange + pballLeft) + 'px';
                    //this.durationInfo.style.left = (pbarRange + durationInfoleft) + 'px';
                }
                else {
                    this.pBar.style.width = position + 'px';
                    this.pBall.style.left = (position + pballLeft) + 'px';
                    //this.durationInfo.style.left = (position + durationInfoleft) + 'px';
                }

            }

        }
        //document.getElementById("debug").innerHTML = "PlayState: " + this.player.playState + "<br/>" +
        //"PlayTime: " + this.player.playTime + "<br/>" +
        //"PlayPosition: " + this.player.playPosition;
        //document.getElementById("debug").innerHTML = this.getPlayStateStr(this.player.playState);
    }
*/


    this.getReadyStateStr = function (rs) {
        switch (rs) {
            case 0:
                return "0[not set to be played.]";
            case 1:
                return "1[loading media]";
            case 3:
                return "3[loaded a media file]";
            case 4:
                return "4[downloaded all data]";
            default:
                return "";
        }

        return null;
    }




}



Player.prototype.GeneratePlayer = function (page, ID, style, data) {

    var tmp_elm = document.createElement('object');
    tmp_elm.setAttribute("class", style);
    tmp_elm.setAttribute("id", ID);
    tmp_elm.setAttribute("autostart", "false");
    tmp_elm.setAttribute("type", "video/mpeg");
    tmp_elm.setAttribute("data", data);
    this.page.appendChild(tmp_elm);
    this.player = tmp_elm;
	
	this.progressBar = document.createElement('div');
    this.progressBar.setAttribute("class", "duration");

    tmpElm = document.createElement('img');
    tmpElm.src = "images/panel.png";
    this.progressBar.appendChild(tmpElm);

    tmpElm = document.createElement('img');
    tmpElm.src = "images/mor.png";
    tmpElm.style.position = 'absolute';
    tmpElm.style.top = '13px';
    tmpElm.style.width = '0px';
    tmpElm.style.left = '15px';
    tmpElm.style.height = '12px';
    tmpElm.style.zIndex = 30;
    this.pBar = tmpElm;
    this.progressBar.appendChild(tmpElm);

    tmpElm = document.createElement('img');
    tmpElm.src = "images/top.png";
    tmpElm.style.position = 'absolute';
    tmpElm.style.top = '14px';
    tmpElm.style.left = '10px';
    tmpElm.style.zIndex = 31;
    this.pBall = tmpElm;
    this.progressBar.appendChild(tmpElm);

    this.durationInfo = document.createElement('div');
    this.durationInfo.setAttribute("class", "dInfo");
    this.progressBar.appendChild(this.durationInfo);

    this.page.appendChild(this.progressBar);
	
	this.GoToPositiodurationInfo = document.createElement('div');
    this.durationInfo.setAttribute("class", "dInfo");
    this.progressBar.appendChild(this.durationInfo);

    this.page.appendChild(this.progressBar);


    this.GoToPositionArea = document.createElement('div');
    this.GoToPositionArea.setAttribute("class", "trickPlayArea");
    this.page.appendChild(this.GoToPositionArea);

    tmp_elm = document.createElement('div');
    tmp_elm.setAttribute("class", "tirckPlayText");
    this.GoToPositionArea.appendChild(tmp_elm);
    this.positionText = tmp_elm;
}

Player.prototype.doFF = function()
{
	if(this.currentTrickSpeed < 16 && this.currentTrickSpeed > 0)
	{
		this.currentTrickSpeed *= 2;
	}
	else if(this.currentTrickSpeed <= 0 || this.currentTrickSpeed == 16)
	{	
		this.currentTrickSpeed = 2;
	}
	this.player.play(this.currentTrickSpeed);
	this.showProgressBar(this.trickPlayInterval);
}

Player.prototype.doRWD = function()
{
	if(this.currentTrickSpeed > -16 && this.currentTrickSpeed < 0)
	{
		this.currentTrickSpeed *= 2;
	}
	else if (this.currentTrickSpeed >= 0 || this.currentTrickSpeed == -16)
	{
		this.currentTrickSpeed = -2;
	}
	this.player.play(this.currentTrickSpeed);
	this.showProgressBar(this.trickPlayInterval);
	
}

Player.prototype.updateDurationInfo = function(element, playPosition, playTime, onTrickPlay) {

    if (this.isTrickPlay == 0 || onTrickPlay != 0) {
		var pbarRange = 355;
        //var pbarLeft = 15;
        var pballLeft = 10;
        var pt;
        var position;
        if (onTrickPlay)
            pt = new Number(playPosition) / 1000;
        else
            pt = new Number(this.player.playPosition) / 1000;
        var ss = Math.floor(pt % 60);
        var minute = Math.floor(pt / 60);
        element.innerHTML = (minute < 10 ? "0" + minute : minute) + ":" + (ss < 10 ? "0" + ss : ss) + "/";

        pt = new Number(playTime) / 1000;
        ss = Math.floor(pt % 60);
	rate = this.currentTrickSpeed;
        element.innerHTML += Math.floor(pt / 60) + ":" + (ss < 10 ? "0" + ss : ss + "  x" + rate);
        if (onTrickPlay)
            position = Math.ceil(playPosition * pbarRange / playTime);
        else
            position = Math.ceil(this.player.playPosition * pbarRange / playTime);
        if (position > 0) {
            if (position >= pbarRange) {
                this.pBar.style.width = pbarRange + 'px';
                this.pBall.style.left = (pbarRange + pballLeft) + 'px';
            }
            else {
                this.pBar.style.width = position + 'px';
                this.pBall.style.left = (position + pballLeft) + 'px';
            }
        }
    }
};

Player.prototype.play = function () {
	/*
	var UAString = new String(navigator.userAgent);
       	if(UAString.indexOf("ANT") == -1)
        {
	        var drmAgent = document.getElementById('playready');
		var msgType = 'application/vnd.ms-playready.initiator+xml';     
		var LA = 'http://mm-staging-ce.nowtilus.tv/api/acquireLicense?APIKey=API-081547112399&AuthToken=abc8835e0c10d8ffa0d3271884650c4a&DestinationTypeID=4269&DestinationUniqueID=mrhartmann&skuID=222807&chunked=false';
		var xmlLicenceAcquisition = '<LA_URL>' + LA + '</LA_URL>';
		drmAgent.sendDRMMessage(msgType, xmlLicenceAcquisition, 'urn:dvb:casystemid:19219');
	}*/

    var base = this;
    setPlayerinfo = function () {

        base.updateDurationInfo(base.durationInfo, base.player.playPosition, base.player.playTime, 0);
    }
    hidePbar = function () {
        base.hideProgressBar();
    }
    this.durationInfo.style.display = 'inline';
    this.player.play(this.currentTrickSpeed);
    this.infoTimer = setInterval('setPlayerinfo();', 450);
    this.progressTimer = setTimeout('hidePbar();', 10000);
}

Player.prototype.pause = function () {
    this.player.play(0);
}

Player.prototype.stop = function () {
    this.reset();
    this.player.stop();
}

var loadingTimerVisible = 0;
Player.prototype.init = function () {
    var base = this;

    // this.loadingImage.style.display = 'inline';
    loadingTimerVisible = 1;
    //    this.videoImage.style.display = 'none';
    if (this.player.playState == 1 || this.player.playState == 2)
        this.stop();
}

Player.prototype.setdata = function (data) {
    this.player.data = data;
    this.play();
}

Player.prototype.setFullScreen = function () {
    this.player.setAttribute("class", "playerfullscreen");
    this.durationInfo.style.display = 'none';
    //    this.pBar.style.display = 'none';
    this.header.style.display = 'none';
}

Player.prototype.setDefaultScreen = function () {
    this.player.setAttribute("class", "playerdefault");
    this.durationInfo.style.display = 'inline';
    //    this.pBar.style.display = 'inline';
    this.header.style.display = 'inline';
}

Player.prototype.reset = function () {

    //this.pBar.style.width = '0px';
    this.player.data = "";
    //    this.pBar.style.width = '0px';
    //    this.pBall.style.left = '-63px';
    //    this.durationInfo.style.display = 'none';
}

Player.prototype.show = function () {
    this.page.style.visibility = 'visible';
}

Player.prototype.hide = function () {
    this.page.style.visibility = 'hidden';
    this.hideProgressBar();
}

Player.prototype.trickyPlay = function () {
    /*if (this.progressTimer != null)
        clearInterval(this.progressTimer);

    clearInterval(this.infoTimer);
*/
    this.isTrickPlaySelectable = 0;
    var pos = parseInt(this.trickPlayPosition) * 1000;


    if (pos < this.player.playTime) {
	this.showProgressBar(this.trickPlayInterval);
        var base = this;

        //var position = Math.ceil(pos * 355 / this.player.playTime);

        //    this.pBar.style.width = position + 'px';
        //    this.pBall.style.left = (position + 10) + 'px';

        setPlayerinfo = function (index) {
            base.updateDurationInfo(base.durationInfo, pos, base.player.playTime, index);
        }
        var tmr = setTimeout('setPlayerinfo(1);', this.trickPlayInterval);
        this.GoToPositionArea.style.visibility = 'hidden';
/*
        hideloadingImage = function () {
            base.loadingImage.style.display = 'none';
            loadingTimerVisible = 0;
        }
        var loadingTimer = setTimeout('hideloadingImage();', this.trickPlayInterval);
*/
        goToPosition = function () {
            base.isTrickPlay = 0;
            base.isTrickPlaySelectable = 1;
            base.player.seek(pos);
            base.infoTimer = setInterval('setPlayerinfo(0);', 450);
            //        base.player.play(1);

        }

        var t = setTimeout('goToPosition();', 2000);
        //                this.player.seek(pos);


        this.trickPlayPosition = "";
    } else {
        this.GoToPositionArea.style.visibility = 'hidden';
        this.isTrickPlaySelectable = 1;
		this.trickPlayPosition = "";
    }

}

Player.prototype.showProgressBar = function (interval) {

    var base = this;

    if (this.progressTimer != null || this.progressBar.style.visibility != 'visible')
        clearInterval(this.progressTimer);


    hidePbar = function () {
        base.hideProgressBar();
    }

    this.progressTimer = setTimeout('hidePbar();', interval);
    this.progressBar.style.visibility = 'visible';
}

Player.prototype.hideProgressBar = function () {
    this.progressBar.style.visibility = 'hidden';
}

var timer = null;

function onReadyStateChange(lReadyState) {
    //    document.getElementById("debug").innerHTML += "ready state değişti";
}
/*
function onError() {
    //var media = document.getElementById("media");
    //var errorMsg = "error occured. (ERRCODE:" + media.error + ")";
    //alert(errorMsg);
}

function onPlayStateChange(newState) {
    if (debug_enabled == true)
        document.getElementById("debug").innerHTML += getPlayStateStr(mPlayer.player.playState) + " ";
    switch (mPlayer.player.playState) {
        case 1:
            hideloadingImage = function () {
                mPlayer.loadingImage.style.display = 'none';
                loadingTimerVisible = 0;
            }
            if (loadingTimerVisible)
                var loadingTimer = setTimeout('hideloadingImage();', 10000);

            mPlayer.playImage.style.visibility = 'hidden';
            break;
        case 2:
            mPlayer.loadingImage.style.display = 'none';
            mPlayer.playImage.style.visibility = 'visible';
            break;
        case 5:
            //document.getElementById("debug").innerHTML = "";
            clearInterval(mPlayer.infoTimer);
            window.location.href = "Channels.htm?channel_id=" + current_channel.channel_id;
            break;

        default:
            break;
    }
}
*/

function onError() {
//	this.reset();
//  this.player.stop();
//	document.location = "./index.htm";
//	break;
}

function onPlayStateChange() {
    if (window.debug_enabled == true)
        document.getElementById("debug").innerHTML += getPlayStateStr(window.mPlayer.player.playState) + " ";
    switch (window.mPlayer.player.playState) {
        case 1:
		/*
            hideloadingImage = function () {
                window.mPlayer.loadingImage.style.display = 'none';
                loadingTimerVisible = 0;
            };
            if (loadingTimerVisible)
                setTimeout('hideloadingImage();', 10000);

            window.mPlayer.playImage.style.visibility = 'hidden';
		*/
            break;
        case 2:
		/*
            window.mPlayer.loadingImage.style.display = 'none';
            window.mPlayer.playImage.style.visibility = 'visible';
		*/
            break;
        case 5:
        //  clearInterval(window.mPlayer.infoTimer);
            window.mPlayer.reset();
            window.mPlayer.player.stop();
            selectElement();	//change display
            break;

        default:
            break;
    }
}


function onBuffering(bIsBufferingStarted) {
    if (bIsBufferingStarted) {

    } else {
    }
}

function getPlayStateStr(st) {
    switch (st) {
        case 0:
            return "0 [stopped.]";
            break;
        case 1:
            return "1 [playing.]";
            break;
        case 2:
            return "2 [paused.]";
            break;
        case 3:
            return "3 [connecting.]";
            break;
        case 4:
            return "4 [buffering.]";
            break;
        case 5:
            return "5 [finished.]";
            break;
        case 6:
            return "6 [error.]";
            break;
        default:
            return st + "[not defined yet]";
            break;
    }
    return null;
}
//////////////////////////
