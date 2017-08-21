var player1, player2;
var b_sw = false;

function step_1(){
	console.log("stop 1 ");
	player1 = document.createElement('video');
	player1.setAttribute('id', 'player1');
	player1.setAttribute('controls', true);
	player1.setAttribute('width', 320);
	player1.setAttribute('height', 240);
	player1.setAttribute('preload', 'auto');
	player1.style.display = "none";
	var pos = document.getElementById("node");
		//document.body.appendChild(player1);
	pos.appendChild(player1);
	player1.src = "http://html5demos.com/assets/dizzy.mp4";
	player1.load();
}

function step_2(){
	console.log("stop 2 ");
	player2 = document.createElement('video');
	player2.setAttribute('id', 'player2');
	player2.setAttribute('controls', true);
	player2.setAttribute('width', 320);
	player2.setAttribute('height', 240);
	player2.setAttribute('preload', 'none');
	player2.style.display = "block";
	var pos = document.getElementById("node");
	pos.appendChild(player2);
	//document.body.appendChild(player2);
	player2.src = "http://10.0.12.33/media/video_sample.mp4";
}

function step_1_1(){
	console.log("stop 1_1 ");
	player1.load();
}
function step_2_1(){
	console.log("stop 2_1 ");
	player2.play();
}



function step_3(){
	console.log("stop 3 ");
	player1.style.display = "block";
}

function step_4(){
	console.log("stop 4 ");
	player2.pause();
}

function step_5(){
	console.log("stop 5 ");
	player1.play();
}

function step_6(){
	console.log("stop 6 ");
	player2.style.display = "none";
}

function step_7(){
	console.log("stop 7 ");
	step_1();
	step_1_1();
	step_2();
	step_2_1();
}

function step_8(){
	b_sw = true;
	console.log("stop 8 ");
	step_3();
	step_4();
	step_5();
	step_6();
}

function step_9(){
	b_sw = false;
	step_7();
	player2.addEventListener('timeupdate',function(e){
			if(player2.currentTime > 5){
			if(b_sw == false)
			step_8();
			}
		});
}

function step_10(){
	if(player1){
		player1.pause();
		player1.src = "";
		player1.load();
		player1.parentNode.removeChild(player1);
		player1 = null;
	}

	if(player2){
		player2.pause();
		player2.src = "";
		player2.load();
		player2.parentNode.removeChild(player1);
		player2 = null;

	}
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

function step_11(){
	player2.src = "http://html5demos.com/assets/dizzy.mp4";
	player2.load();
}

	