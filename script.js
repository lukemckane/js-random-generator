let nameInput = document.getElementById('nameInput');
let ask = document.getElementById('ask');
let animals = ['lions', 'eagles', 'dolphins', 'bears', 'owls'];
let actions = ['frolicking', 'tumbling', 'pouncing', 'wandering', 'playing'];
let descriptors = ['great', 'slight', 'terrible'];
let emotions = ['serenity', 'fury', 'hope', 'despair', 'wisdom'];
let prophecy = document.getElementById('prophecy');
let bgColor = ['white', 'black', 'brown'];
let color = ['red', 'green', 'blue'];
let weight = ['normal', 'bold'];

ask.addEventListener("click", function(){

	giveProphecy(nameInput.value);
	restyle();

});

function giveProphecy(incName) {
	let numOne = Math.floor(Math.random() * 5) + 2;
	let numTwo = Math.floor(Math.random() * 5);
	let numThree = Math.floor(Math.random() * 5);
	let numFour = Math.floor(Math.random() * 3);
	let numFive = Math.floor(Math.random() * 5);

	prophecy.innerText = 'Oh ' + incName + ", the Oracle has prophecized that on the day you witness " + numOne + " " + animals[numTwo] + " " + actions[numThree] + ", you will experience " + descriptors[numFour] + " " + emotions[numFive] + "!";
}

function restyle() {
	let styleNumOne = Math.floor(Math.random() * 3);
	let styleNumTwo = Math.floor(Math.random() * 3);
	let styleNumThree = Math.floor(Math.random() * 2);

	prophecy.style.backgroundColor = bgColor[styleNumOne];
	prophecy.style.color = color[styleNumTwo];
	prophecy.style.fontWeight = weight[styleNumThree];
}