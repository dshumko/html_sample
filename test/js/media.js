
function LOG(log) {
	window.debug("#### WEBLOG : " + log);
}

function control(player, c){
	var p = document.getElementById(player);
		console.log("--> " + player1 + "/" + c);

	if(c == 'play'){
		p.play();
		console.log("play");
	}
	else if(c == 'load'){
		p.load();
		console.log("load");
	}
	else if(c == 'pause'){
		p.pause();
		console.log("pause");
	}
	else if(c == 'show'){
		p.style.display = "block";
		console.log("show");
	}
	else if(c == 'hide'){
		p.style.display = "none";
		console.log("hide");
	}
	else if(c == 'remove'){
		p.pause();
		p.src = "";
		p.load();
		p.parentNode.removeChild(player1);
		p= null;
	}
}

var player4;

function test_2_1(){
	var pos = document.getElementById("node");
	player4 = document.createElement('video');
	pos.appendChild(player4);
	
	player4.src = "http://pmorigin.p4k.intigral.net/HLS/VOD/godzilla_20_clear/godzilla_20min.m3u8";
	player4.setAttribute('id', 'player4');
	player4.setAttribute('controls', true);
	player4.setAttribute('width', 320);
	player4.setAttribute('height', 240);
	player4.setAttribute('preload', 'none');
	player4.style.display = "block";
}
function test_2_2(){
	player4.load();
}
function test_2_3(){
	player4.play();
}
	