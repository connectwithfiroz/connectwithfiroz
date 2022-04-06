var noOfDrumBtn = document.querySelectorAll(".drum").length;
//make sound 
function  makeSound(pressedkey) {
	switch(pressedkey){
			case "a":
				var sound = new Audio("sounds/tom-2.mp3");
				sound.play();
			break;
			case "s":
				var sound = new Audio("sounds/tom-3.mp3");
				sound.play();
			break;
			case "d":
				var sound = new Audio("sounds/tom-4.mp3");
				sound.play();
			break;
			case "f":
				var sound = new Audio("sounds/tom-1.mp3");
				sound.play();
			break;
			case "j":
				var sound = new Audio("sounds/snare.mp3");
				sound.play();
			break;
			case "k":
				var sound = new Audio("sounds/crash.mp3");
				sound.play();
			break;
			case "l":
				var sound = new Audio("sounds/kick-bass.mp3");
				sound.play();
			break;
			default: 
				var sound = new Audio("sounds/crash.mp3");
				sound.play();
		}
}
//add animation on buttons
function addAnimation(btn){
	document.querySelector("."+btn).classList.add("pressed");
	//remove pressed class after some time
	setTimeout(function(){
		document.querySelector("."+btn).classList.remove("pressed");
	},100);
}
//Detecting click event
for(var i = 0; i < noOfDrumBtn; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		makeSound(this.innerText);
		addAnimation(this.innerText);
	});
}
// Detecting key event
document.addEventListener("keypress",function(event){
	makeSound(event.key);
	addAnimation(event.key);
})