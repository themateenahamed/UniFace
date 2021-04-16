var fncIsRunning = false;
var au_1 = new Audio('au/1.mp3');
var au_2 = new Audio('au/2.mp3');
var au_3 = new Audio('au/3.mp3');
var au_4 = new Audio('au/4.mp3');
var au_5 = new Audio('au/5.mp3');
var au_6 = new Audio('au/6.mp3');
var au_7 = new Audio('au/7.mp3');
var au_8 = new Audio('au/8.mp3');
var au_9 = new Audio('au/9.mp3');
var au_10 = new Audio('au/10.mp3')

function dude(){
	if(!fncIsRunning){
		fncIsRunning = true;
	}
	// setTimeout(() => {
		au_2.play()
	// }, 2000)
	au_2.onended = function(){
		window.navigator.vibrate([100,250,100,250,100,250,100]);
	}
	setTimeout(()=> {
		au_3.play()
	},27000)
	au_3.onended = function(){
		window.navigator.vibrate([100,250,100,250,100]);
	}
	setTimeout(()=> {
		au_4.play()
	},32000)
	au_4.onended = function(){
		window.navigator.vibrate([100,250,500,250,500,250,100]);
	}
	setTimeout(()=> {
		au_5.play()
	},39000)
	au_5.onended = function(){
		window.navigator.vibrate([500,250,100,250,100]);
	}
	setTimeout(()=> {
		au_6.play()
	},45000)
	au_6.onended = function(){
		window.navigator.vibrate([100,250,100,250,500,250,100]);
	}
	setTimeout(()=> {
		au_7.play()
	},50000)
	au_7.onended = function(){
		window.navigator.vibrate([500,250,100,250,100,250,500]);
	}
	setTimeout(()=> {
		au_8.play()
	},55000)
	setTimeout(() => {
		fncIsRunning = false;
	}, 78000)
}
