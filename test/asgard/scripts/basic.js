var nCategory;				//The number of category
var nList = 7;				//The number of element in list
var selectedDisplay = 0;	//0 - Basic layout, 1 - Player
var selectedCategory = 0;	//current selected category
var selectedList = 0;		//list idx in selected category
var lastCategory = -1;		//Last selected category
var listOffset = 0;			//list offset
var MediaContainer = new Array();
var MediaElement = new Array();
var isAnimateEnd = true;

/*
	MediaElement  ---- 	["mp4"]     ------- nElement 				: The number of registered media in container "mp4"
									------ contents ------ [0]~[n]  : contents' name in container "mp4"
									------    url   ------ [0]~[n]  : contents' url in container "mp4"
									------ duration ------ [0]~[n]  : contents' url in container "mp4"
									           .
									           .
									           .
									 
				  ----	["mkv"]	    ------- nElement
				                               .
				                               .
				                               .
							.
							.
							.
	
	MediaContainer ---- [0]~[n]  : Media Container info
								 : ex) MediaContainer [0] == "mp4"
								 	   MediaElement[ MediaContainer [0] ].nElement ==> this will get the number of registered mp4 contents 
*/



function ElementInfoStruct() {
	var nElement;
	var contents;
	var url;
	var duration;
	var meta;
	var thumbnail;
	var isDRM;
	var vcodec;
	var acodec;
	var vbitrate;
	var abitrate;
	var external;
}

window.onload = function() {
	var param = parseQueryString();
	if(param.cat == null)
		selectedCategory = 0;
	else selectedCategory = parseInt(param.cat);
	
	if(param.list == null)
		selectedList = 0;
	else selectedList = parseInt(param.list);
		
	if(param.offset == null)
		listOffset = 0;
	else listOffset = parseInt(param.offset);
	
	asgardInit();
	Init();
	
}
function asgardInit()
{
	var dvb = document.getElementById("dvb");
    	//dvb.setTVOff();
}

function playerInit()
{
    var strUrl = MediaElement[MediaContainer[selectedCategory]].url[selectedList+listOffset];

    //url validation check
 	/*
    var regexp = /^([a-z]+):\/\/((?:[a-z가-힣\d\-]{2,}\.)+[a-z]{2,})(:\d{1,5})?(\/[^\?]*)?(\?.+)?$/i;
	if(!regexp.test(url)) {
		alert("name is invalid (only acceepts a-z, 0-9)");
		selectElement();
		return;
	} 
	*/
	
	mPlayer = new Player("playerarea", "mplayer", "playerfullscreen", "", "", 0);
    mPlayer.init();
	mPlayer.setdata(strUrl); //url set
}

function playerLeave()
{
	delete mPlayer;
}

function displayKeyHandler(e) {
	var e = window.event || e;
        switch(e.keyCode){
                case VK_UP:
                case VK_DOWN:
		case VK_YELLOW:
		case VK_BLUE:
                        focusList(e.keyCode);
                        break;
                case VK_LEFT:
                case VK_RIGHT:
                        movingCategory(e.keyCode);
                        break;
                case VK_ENTER:
                        selectElement();
                        break;
		case VK_BACK:
			history.go(-1);
			break;
                default:
                        break;
        }
        return;
}


function playerKeyHandler(e) {
	var e = window.event || e;
	switch (e.keyCode) {
		case VK_DOWN:				
			if (this.progressTimer != null)
				clearInterval(this.progressTimer);
			mPlayer.showProgressBar(5000);
			break;

		case VK_UP:
			if (this.progressTimer != null)
				clearInterval(this.progressTimer);
			mPlayer.showProgressBar(5000);
			break;

		case VK_PLAY:
			mPlayer.player.play(1);
			mPlayer.currentTrickSpeed = 1;

		   /* if (this.progressTimer != null)
			clearInterval(this.progressTimer);
			mPlayer.showProgressBar(5000);*/
			break;

		case VK_PAUSE:
			mPlayer.player.play(0);
			mPlayer.currentTrickSpeed = 0;
			break;
		
		case VK_BACK:
		case VK_STOP: case VK_STOP_ALT:
			mPlayer.stop();
			document.location = "./index.html?cat="+selectedCategory+"&list="+selectedList+"&offset="+listOffset;
				
			break;
		case VK_0:
		case VK_1:
		case VK_2:
		case VK_3:
		case VK_4:
		case VK_5:
		case VK_6:
		case VK_7:
		case VK_8:
		case VK_9:
			if (mPlayer.isTrickPlaySelectable) {
				mPlayer.isTrickPlay = 1;
				//if (timer != null)
				//clearInterval(timer);
				if (mPlayer.trickPlayPosition.length == 3)
					mPlayer.trickPlayPosition = "";
				//            clearInterval(player.infoTimer);
				mPlayer.GoToPositionArea.style.visibility = 'visible';
				mPlayer.trickPlayPosition += (e.keyCode - 48).toString();
				mPlayer.positionText.innerHTML = mPlayer.trickPlayPosition;
				timer = setTimeout('mPlayer.trickyPlay('+ mPlayer.trickPlayPosition +');', 2000);
				mPlayer.isTrickPlaySelectable = 1;
			}
			break;

		case VK_REWIND:
			//mPlayer.player.play(-8);
			mPlayer.doRWD();
			break;

		case VK_BACKWARD_SEEK:
			if (mPlayer.isTrickPlaySelectable) {
				mPlayer.isTrickPlaySelectable = 0;
				//if (this.progressTimer != null)
			  //  clearInterval(this.progressTimer);
				mPlayer.showProgressBar(mPlayer.trickPlayInterval);
				if (mPlayer.player.playState == 1 || mPlayer.player.playState == 2) {
					//  mPlayer.playImage.style.visibility = 'hidden';
					mPlayer.isTrickPlay = 1;
					var pos = mPlayer.player.playPosition - mPlayer.trickPlayInterval;
					if (pos < 0) { pos = 0; }
					else if (pos > mPlayer.player.playTime) { 
							pos = mPlayer.player.playTime; 
					}
					var t = setTimeout('goToPosition();', 350);
					mPlayer.isTrickPlay = 0;

					goToPosition = function () {
						mPlayer.player.seek(pos);
						mPlayer.isTrickPlaySelectable = 1;
					}
				}
			}

			break;

		case VK_FAST_FWD:
			//mPlayer.player.play(8);
			mPlayer.doFF();
			break;

		 case VK_FOWARD_SEEK:
			if (mPlayer.isTrickPlaySelectable) {			
				mPlayer.isTrickPlaySelectable = 0;
	//                if (this.progressTimer != null)
	//                    clearInterval(this.progressTimer);
		                mPlayer.showProgressBar(mPlayer.trickPlayInterval);
				if (mPlayer.player.playState == 1 || mPlayer.player.playState == 2) {
					//this.playImage.style.visibility = 'hidden';
					mPlayer.isTrickPlay = 1;
					var pos = mPlayer.player.playPosition + mPlayer.trickPlayInterval;
					if (pos < 0) { pos = 0; }
					else if (pos > mPlayer.player.playTime) { pos = mPlayer.player.playTime; }
	
					var t = setTimeout('goToPosition();', 350);
					mPlayer.isTrickPlay = 0;

					goToPosition = function () {
						mPlayer.player.seek(pos);
						mPlayer.isTrickPlaySelectable = 1;
					}
				}
			}
			break;

		case VK_GREEN:
			//            document.getElementById("debug").innerHTML += "s1";
			//            var pi = player.player.mediaPlayInfo();
			//            document.getElementById("debug").innerHTML += "s2";
			//            var s = "Buf Remain: " + pi.bufBegin + "Buf End: " + pi.bufEnd + "Buf Remain: " + pi.bufRemain + "Bitrate Instant: " + pi.bitrateInstant + "Bitrate Target: " + pi.bitrateTarget;
			//            document.getElementById("debug").innerHTML += "Bilgiler" + s;
			break;

		default:
			mPlayer.showProgressBar(3000);
			break;
	}
}

function loadDisplay() {
        var displayTo;

        if(selectedDisplay == 0) {
                displayTo = "layout.html"
        } else {
                displayTo = "player.html"
        }

		request = createRequest();
	
		if(request == null) {
			alert("Unable to create request");
			return;
		}
		
		request.open("GET", displayTo, true);
		request.onreadystatechange = writeDisplayElement;
		request.send(null);
}

function writeDisplayElement() {
	if(request.readyState == 4) {
		if(request.status == 200) {
			document.getElementById('display').innerHTML = request.responseText;

			if(selectedDisplay == 0) {
				//키 핸들러 설정
				document.onkeydown = displayKeyHandler;
				 
				//category 쓰기
				writeCategory();
				writeLogo();
			}
			else if(selectedDisplay == 1){
				//키 핸들러 설정
				document.onkeydown = playerKeyHandler;
				
				//todo : 나중에는 실제 Player가 그려져야 함...
				//document.getElementById("play").innerHTML = contents[selectedCategory][selectedList];
			}
		}
	}
}

function writeCategory(direction) {
	var distance;
	if(isAnimateEnd == true)
	{
		isAnimateEnd = false;
		
		if(direction == VK_RIGHT) {
			distance = 50;
		} else if(direction == VK_LEFT) {
			distance = -50;
		}
		
		$('#category')
				.animate({opacity : 0, left: '-='+distance}, 'fast', function(){
					var left = parseInt($('#category').css('left'));
					$('#category')
						.css('left',((left+(distance*2))+"px"))
						.html(MediaContainer[selectedCategory].toUpperCase())
						.animate({opacity : 1, left: '-='+distance}, 'fast', writeContentList)
				})
	}
}

function writeArrow(){
	//화살표
	if(listOffset != 0) {
		//document.getElementById('up').innerHTML = "^^^^^^^^^";
		document.getElementById('up').innerHTML = "<img src='./images/up.gif'/>";
	} else {
		document.getElementById('up').innerHTML = "";
	} 
	
	if(listOffset + nList < MediaElement[MediaContainer[selectedCategory]].nElement) {
		document.getElementById('down').innerHTML = "<img src='./images/down.gif'/>";
	} else {
		document.getElementById('down').innerHTML = "";
	}
}

function writeLogo(){
	//document.getElementById('Logo').innerHTML = 'ASGARD';
	document.getElementById('Logo').innerHTML = "<img src='./images/logo.jpg'/>";
	document.getElementById("Logo").innerHTML += "<FONT SIZE=2><br>Press <FONT COLOR='yellow'>YELLOW</FONT> button is page-up</FONT>";
	document.getElementById("Logo").innerHTML += "<FONT SIZE=2><br>Press <FONT COLOR='blue'>BLUE</FONT> button is page-down</FONT>";
}

function writeContentList(direction) {
	isAnimateEnd = true;
	$("#contentList .element").hide();
			
	var contnr = MediaContainer[selectedCategory];
	
	//메타데이터 영역 초기화 or 컨텐츠 없을 경우 처리
	var metaArea = $('#metaData');
	var html = "";
	if(MediaElement[contnr].nElement == 0)
		html = "<center>no contents in this container</center>"
	document.getElementById("metaData").innerHTML = html;
	
	
	for(var idx=0; idx < nList; idx++) {
		if(MediaElement[contnr].contents[idx] != undefined) {
			$("#contentList #element"+idx).show();//fadeIn("fast");
			document.getElementsByClassName("thumbnail")[idx].innerHTML = "<img src='"+MediaElement[contnr].thumbnail[idx+listOffset]+"' height=50, width=50>";
			document.getElementsByClassName("title")[idx].innerHTML = MediaElement[contnr].contents[idx+listOffset];
			if(MediaElement[contnr].external[idx+listOffset] != true)
				document.getElementsByClassName("miniinfo")[idx].innerHTML = MediaElement[contnr].duration[idx+listOffset] + " / " + MediaElement[contnr].vcodec[idx+listOffset] + " / " + MediaElement[contnr].acodec[idx+listOffset] + " / " + MediaElement[contnr].vbitrate[idx+listOffset];
			else
				document.getElementsByClassName("miniinfo")[idx].innerHTML = "external link"
			document.getElementsByClassName("drm")[idx].innerHTML = "";
			
			var drmarea = document.getElementsByClassName("drm")[idx];
			var protocol = MediaElement[contnr].url[idx+listOffset].split("/")[5];
			
			if(protocol == "HTTP_LINUX")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "linux_http" || protocol == "linux_calypso")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "HTTP_WINDOWS" || protocol == "windows_http")
			{
				drmarea.innerHTML += "<img src='./images/windows.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "LINUX_HLS")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/hls.png'>&nbsp;&nbsp;";
			}
			else
			{
				protocol = MediaElement[contnr].url[idx+listOffset].split("/")[3];
				if(protocol == "ASGARD_MMS")
				{	
					drmarea.innerHTML += "<img src='./images/windows.png'>&nbsp;&nbsp;";
					drmarea.innerHTML += "<img src='./images/mms.png'>&nbsp;&nbsp;";
				}
			}
				
			if(MediaElement[contnr].external[idx+listOffset] == true)
			{
				drmarea.innerHTML += "<img src='./images/external.png'>&nbsp;&nbsp;";	
			}		
							
			if(MediaElement[contnr].isDRM[idx+listOffset] != "none")
			{
				drmarea.innerHTML += "<img src='./images/drm.gif' height=28, width=28>&nbsp;&nbsp;";
			}
		}
	}
	focusList();
	writeArrow();
}

function focusList(direction) {
	var selectedListOld = selectedList;
	var contnr = MediaContainer[selectedCategory];
	
	if(MediaElement[contnr].nElement == 0)
		return;

	if(direction == VK_UP) {
		if(selectedList == 0) {
			/* Wrap around */
			updateList(direction);
			writeArrow();
		}
		else  {
			selectedListOld = selectedList--;
		}
	} 
	else if(direction == VK_YELLOW) {
		if(selectedList == 0) {
			if(listOffset == 0) {
				return;
			}
			else {
				for(var idx = 0; idx < nList; idx++)
				{
					updateList(VK_UP);
				}
				writeArrow();
			}
		}
		else  {
			selectedListOld = selectedList;
			selectedList = 0;
			writeArrow();
		}
	} 
	else if(direction == VK_DOWN) {
		var mxidx = nList;
		if(mxidx > MediaElement[contnr].nElement)
		{
			mxidx = MediaElement[contnr].nElement;
		}

		if(selectedList == mxidx -1) {
			updateList(direction);
			writeArrow();
		}
		else {
			selectedListOld = selectedList++;
		}
	}
	else if(direction == VK_BLUE) {
		if(selectedList == nList-1) {
			if(MediaElement[contnr].nElement - listOffset > nList) {
				for(var idx = 0; idx < nList; idx++)
				{
					updateList(VK_DOWN);
				}
				writeArrow();
			}
			else
				return;
		}
		else {
			if(selectedList == MediaElement[contnr].nElement-1) {
				return;
			}
			else
			{
				selectedListOld = selectedList;
				selectedList = nList - 1;
				writeArrow();
			}
		}
	}
	$("#contentList #element"+selectedListOld).css("color","white");
	$("#contentList #element"+selectedList+"*").css("color","orange");

	var mxidx = nList;

	if(nList > MediaElement[contnr].nElement)
	{
		mxidx = MediaElement[contnr].nElement;
	}

	for(var idx=0; idx < mxidx; idx++)
	{
		document.getElementsByClassName("indicator")[idx].innerHTML = "";
	}
	//document.getElementsByClassName("indicator")[selectedListOld].innerHTML = "";
	document.getElementsByClassName("indicator")[selectedList].innerHTML = "<img src='./images/indicator.png'>";
	writeMetadata(selectedList+listOffset);
}


function writeMetadata(content) {
	var metaArea = $('#metaData');
	var contnr = MediaContainer[selectedCategory];
	var html = "<center><img src='"+MediaElement[contnr].thumbnail[content]+"' width='50%'></center></br></br>"
	html += MediaElement[contnr].meta[content];
	
	document.getElementById("metaData").innerHTML = html;
}


//방향과 함께 함수를 호출할 경우 아래, 혹은 휘로 리스트를 한칸 이동하여 갱신
function updateList(direction) {
	var contnr = MediaContainer[selectedCategory];
	var mxidx = nList;
	
	if(mxidx > MediaElement[contnr].nElement)
	{
		mxidx = MediaElement[contnr].nElement;
	}

	if(direction == VK_DOWN) {
		if( nList < MediaElement[contnr].nElement - listOffset - 1) {
			listOffset++;
		}
		else
		{
			if( MediaElement[contnr].nElement > nList )
			{
				/* Wrap around */
				listOffset = 0;
				selectedList = 0;
			}
			else
			{
				selectedList = 0;
			}
		}
		
		$("#contentList .element .title").html("");
		$("#contentList .element .miniinfo").html("");
		$("#contentList .element .drm").html("");
		
		for(var idx=0; idx < mxidx; idx++) {
			document.getElementsByClassName("thumbnail")[idx].innerHTML = "<img src='"+MediaElement[contnr].thumbnail[idx+listOffset]+"' height=50, width=50>";
			document.getElementsByClassName("title")[idx].innerHTML = MediaElement[contnr].contents[idx+listOffset];
			if(MediaElement[contnr].external[idx+listOffset] != true)
				document.getElementsByClassName("miniinfo")[idx].innerHTML = MediaElement[contnr].duration[idx+listOffset] + " / " + MediaElement[contnr].vcodec[idx+listOffset] + " / " + MediaElement[contnr].acodec[idx+listOffset] + " / " + MediaElement[contnr].vbitrate[idx+listOffset];
			else
				document.getElementsByClassName("miniinfo")[idx].innerHTML = "external link";
			document.getElementsByClassName("drm")[idx].innerHTML = "";
			
			var drmarea = document.getElementsByClassName("drm")[idx];
			var protocol = MediaElement[contnr].url[idx+listOffset].split("/")[5];
			
			if(protocol == "HTTP_LINUX")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "linux_http" || protocol == "linux_calypso")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "HTTP_WINDOWS" || protocol == "windows_http")
			{
				drmarea.innerHTML += "<img src='./images/windows.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "LINUX_HLS")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/hls.png'>&nbsp;&nbsp;";
			}
			else
			{
				protocol = MediaElement[contnr].url[idx+listOffset].split("/")[3];
				if(protocol == "ASGARD_MMS")
				{	
					drmarea.innerHTML += "<img src='./images/windows.png'>&nbsp;&nbsp;";
					drmarea.innerHTML += "<img src='./images/mms.png'>&nbsp;&nbsp;";
				}
			}		

			if(MediaElement[contnr].external[idx+listOffset] == true)
			{
				drmarea.innerHTML += "<img src='./images/external.png'>&nbsp;&nbsp;";	
			}	
			if(MediaElement[contnr].isDRM[idx+listOffset] != "none")
			{
				drmarea.innerHTML += "<img src='./images/drm.gif' height=28, width=28>&nbsp;&nbsp;";
			}
		}		
	} else if(direction == VK_UP) {
		if( listOffset != 0) {
			listOffset--;
		}
		else
		{
			if(MediaElement[contnr].nElement > nList)
			{
				/* Wrap around */
				listOffset = MediaElement[contnr].nElement - 7;
				selectedList = nList - 1;
			}
			else
			{
				selectedList = MediaElement[contnr].nElement-1;	
			}
		}
		$("#contentList .element .title").html("");
		$("#contentList .element .miniinfo").html("");
		$("#contentList .element .drm").html("");
					
		for(var idx=0; idx < mxidx; idx++) {
			document.getElementsByClassName("thumbnail")[idx].innerHTML = "<img src='"+MediaElement[contnr].thumbnail[idx+listOffset]+"' height=50, width=50>";
			document.getElementsByClassName("title")[idx].innerHTML = MediaElement[contnr].contents[idx+listOffset];
			if(MediaElement[contnr].external[idx+listOffset] != true)
				document.getElementsByClassName("miniinfo")[idx].innerHTML = MediaElement[contnr].duration[idx+listOffset] + " / " + MediaElement[contnr].vcodec[idx+listOffset] + " / " + MediaElement[contnr].acodec[idx+listOffset] + " / " + MediaElement[contnr].vbitrate[idx+listOffset];
			else
				document.getElementsByClassName("miniinfo")[idx].innerHTML = "external link";
			document.getElementsByClassName("drm")[idx].innerHTML = "";
			
			var drmarea = document.getElementsByClassName("drm")[idx];
			var protocol = MediaElement[contnr].url[idx+listOffset].split("/")[5];
				
			if(protocol == "HTTP_LINUX")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "linux_http" || protocol == "linux_calypso")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "HTTP_WINDOWS" || protocol == "windows_http")
			{
				drmarea.innerHTML += "<img src='./images/windows.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/http.png'>&nbsp;&nbsp;";
			}
			else if(protocol == "LINUX_HLS")
			{
				drmarea.innerHTML += "<img src='./images/linux.png'>&nbsp;&nbsp;";
				drmarea.innerHTML += "<img src='./images/hls.png'>&nbsp;&nbsp;";
			}
			else
			{
				protocol = MediaElement[contnr].url[idx+listOffset].split("/")[3];
				if(protocol == "ASGARD_MMS")
				{	
					drmarea.innerHTML += "<img src='./images/windows.png'>&nbsp;&nbsp;";
					drmarea.innerHTML += "<img src='./images/mms.png'>&nbsp;&nbsp;";
				}
			}
			
			if(MediaElement[contnr].external[idx+listOffset] == true)
			{
				drmarea.innerHTML += "<img src='./images/external.png'>&nbsp;&nbsp;";	
			}	
			
			if(MediaElement[contnr].isDRM[idx+listOffset] != "none")
			{
				drmarea.innerHTML += "<img src='./images/drm.gif' height=28, width=28>&nbsp;&nbsp;";
			}
		} 
	}
}


function movingCategory(direction) {
	if(selectedDisplay==0) {
		if(direction == VK_LEFT) {
			if(selectedCategory > 0)selectedCategory--;
			else selectedCategory = nCategory-1;
			
			writeCategory(direction);
			lastCategory = selectedCategory;
		}
		else if(direction == VK_RIGHT) {
			if(selectedCategory < nCategory-1) selectedCategory++;
			else selectedCategory = 0;
			
			writeCategory(direction);
			lastCategory = selectedCategory;
		}
	
		//list 초기화
		selectedList = 0;
		listOffset = 0;
		$("#contentList .element").css("color","white");
	}	
}

function selectElement() {
	if(selectedDisplay==0) {
		//플레이어 화면으로 전환
		selectedDisplay = 1;
		loadDisplay();
	}
	else if(selectedDisplay==1 /* 플레이어 내에서 버튼 선택을 위해 추가 조건값 필요 */ ) {
		selectedDisplay = 0;
		loadDisplay();
	}
}

/*******************
/*    DB 관련
/******************/

function Init()
{
    dbmgr('fnGetContainer','',dbResponseContainerData);
}

function GetMedia()
{
    dbmgr('fnGetMedia','0',dbResponseMediaData);
}

function dbResponseContainerData()
{
	if(responseText != "")
	{
		var JSONtext = responseText;
		
		var obj = JSON.parse(JSONtext);
		var containeridx = 0;

		for(i=0;;i++)
		{
			if(obj[i]==null)
				break;
			
			contnr = obj[i].name;
			MediaContainer[containeridx++] = contnr;

			MediaElement[contnr] = new ElementInfoStruct();
			MediaElement[contnr].nElement = 0;
			MediaElement[contnr].contents = new Array();
			MediaElement[contnr].url = new Array();
			MediaElement[contnr].duration = new Array();
			MediaElement[contnr].meta = new Array();
			MediaElement[contnr].thumbnail = new Array();
			MediaElement[contnr].isDRM = new Array();
			MediaElement[contnr].vcodec = new Array();
			MediaElement[contnr].acodec = new Array();
			MediaElement[contnr].vbitrate = new Array();
			MediaElement[contnr].abitrate = new Array();
			MediaElement[contnr].external = new Array();
		}
		
		contnr = "unknown";
		MediaContainer[containeridx++] = contnr;
		MediaElement[contnr] = new ElementInfoStruct();
		MediaElement[contnr].nElement = 0;
		MediaElement[contnr].contents = new Array();
		MediaElement[contnr].url = new Array();
		MediaElement[contnr].duration = new Array();
		MediaElement[contnr].meta = new Array();
		MediaElement[contnr].thumbnail = new Array();
		MediaElement[contnr].isDRM = new Array();
		MediaElement[contnr].vcodec = new Array();
		MediaElement[contnr].acodec = new Array();
		MediaElement[contnr].vbitrate = new Array();
		MediaElement[contnr].abitrate = new Array();
		MediaElement[contnr].external = new Array();
	
		GetMedia();
	}
}

function dbResponseMediaData()
{
	if(responseText != "")
	{
		var JSONtext = responseText;
		var obj = JSON.parse(JSONtext);

		for(i=0;;i++)
		{
			if(obj[i]==null)
				break;
				
			if(obj[i].isdel==true)
				continue;

			contnr = obj[i].container.toLowerCase();
			
			//validation contnr
			for(idx=0; idx < MediaContainer.length; idx++)
			{
				if(MediaContainer[idx] == contnr)
					break;				
			}
			
			//if contnr doesn't exist in DB, add to unknown
			if(idx == MediaContainer.length)
			{
				contnr = "unknown";
			}
			
			
			elementidx = MediaElement[contnr].nElement;
			
			MediaElement[contnr].contents[ elementidx ] = obj[i].name;
			MediaElement[contnr].url[ elementidx ] = obj[i].path;
			MediaElement[contnr].meta[ elementidx ] = obj[i].description;
			if(obj[i].thumbnail == "0" || obj[i].thumbnail == "" || obj[i].external == "1")
			{
				MediaElement[contnr].thumbnail[ elementidx ] = "./images/nothumbnail.png";
			}
			else
			{
				MediaElement[contnr].thumbnail[ elementidx ] = obj[i].thumbnail;
			}
			MediaElement[contnr].isDRM[ elementidx ] = obj[i].drm;
			MediaElement[contnr].external[ elementidx ] = obj[i].external;
			
			if(obj[i].external != true)
			{
				MediaElement[contnr].vcodec[ elementidx ] = obj[i].vcodec;
				MediaElement[contnr].acodec[ elementidx ] = obj[i].acodec;
				MediaElement[contnr].vbitrate[ elementidx ] = parseInt(obj[i].vbitrate / 1024) + "Kbps";
				MediaElement[contnr].abitrate[ elementidx ] = parseInt(obj[i].abitrate / 1024) + "Kbps";
				
				var duration = "";
				if(obj[i].duration != "-1")
				{
					//calculate human readable duration
					var sec = parseInt(obj[i].duration);
					var minute = parseInt(sec/60);
					var sec = parseInt(sec%60);
					var hour = parseInt(minute/60);
					var minute = parseInt(minute%60);
					
					if(hour != 0)
					{
						if(hour < 10)
							duration += "0";
						duration += hour;
					}
					else
					{
						duration += "00";						
					}
					duration += ":";
										
					if(minute != 0)
					{
						if(minute < 10)
							duration += "0";
							
						duration += minute;
					}
					else
					{
						duration += "00"
					}
					duration += ":"
					
					if(sec < 10)
						duration += "0";
						
					duration += sec;
				}
				else
					duration = "unknown";	
			
				MediaElement[contnr].duration[ elementidx ] = duration;
			}
			
			MediaElement[contnr].nElement++;
		}
		
		nCategory = MediaContainer.length;
		loadDisplay();
	}
}
