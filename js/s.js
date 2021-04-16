var cr = 0;
var ck = 0;
var tv = 0;
var au = 0;

const tl = gsap.timeline({defaults: {ease: "power1.out"}});

//transition of logo
tl.to('.logo,.start', {y: '15%', duration: 1.5});
//transition of welcome page
function proceed(){
	tl.to('.screen-anim', {y:'-100%',duration: 1.5, delay: 0.5, onComplete:incr});
}
 
function incr(){
	ck++;
    au_1.play();
    doIt();
}

//swiped left
document.addEventListener('swiped-left', function(e) {
	if(document.getElementById('switched').classList.contains('switch-active') || ck != 1){
		//do nothing
	}
	else if(fncIsRunning == true){
		// do nothing
	}
	else if(document.getElementById('tut').classList.contains('tut-active')){
		//do nothing
	}
	else{
		document.getElementById('tut').classList.toggle('tut-active');
		dude();
	}		
});

//swiped right
document.addEventListener('swiped-right', function(e) {
	cr++;
	if(document.getElementById('tut').classList.contains('tut-active') || ck != 1){
		//do nothing
	}
	else{
		//for vibration on/off
		if(au % 2 == 0){
			au_9.play()
		}
		else{
			au_10.play()
		}
		document.getElementById('switched').classList.toggle('switch-active');
		document.querySelector('.icon-main').classList.toggle('bring-in');

		// 1s delay b4 quitting
		setTimeout(() => {
			document.getElementById('switched').classList.toggle('switch-active');
			document.querySelector('.icon-main').classList.toggle('bring-in');
		}, 1000);

		//timeout to change the Vibration OFF to ON and so on
		setTimeout(() => {

			//condition to ck whether ON or OFF
			if(document.getElementById('st').innerHTML.length == 12){
				document.getElementById('st').innerHTML = "Vibration OFF";
				document.getElementById('switch-t').innerHTML = "Vibration feature is turned OFF";
				document.getElementById('cont-switch').classList.toggle('of_switch');
			}
			else{
				document.getElementById('st').innerHTML = "Vibration ON";
				document.getElementById('switch-t').innerHTML = "Vibration feature is turned ON";
				document.getElementById('cont-switch').classList.toggle('of_switch');
			}
		}, 2000);
	}
	au++;
});

//close Tutorial section on click
function close_tut(){
	if(document.getElementById('switched').classList.contains('switch-active') || ck != 1){
		//do nothing
	}
	else if(fncIsRunning == true){
		//do nothing
	}
	else{
		if(!document.getElementById('tut').classList.contains('tut-active')){
			document.getElementById('tut').classList.toggle('tut-active');
			dude();
		}
		else{
			document.getElementById('tut').classList.toggle('tut-active');
		}
	}
}

//animation to bring the tutorial button
function doIt(){
	setTimeout(() => {
		document.querySelector('.icon-main').classList.toggle('bring-in');
	}, 2800);
}