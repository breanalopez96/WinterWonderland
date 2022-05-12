/*
Circle with gradient in the center function
For rendering on HTML5 Canvas
Derek Curry 2015 -- for DMS 110
*/

// You MUST set up the canvas element to be referenced by JavaScript:
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

console.log('Imported circle file'); // checks to make sure file is imported

// Circle variables x-center, y-center, radius, inner gradiant color, outer gradiant color, stroke size, stroke color


//function gradientCircle(x,y,r,c1,c2,stroke,strokecolor) {

function gradientCircle(x,y,r,c1,c2) {
	// The circle is translated to center the gradient: http://www.w3schools.com/tags/canvas_translate.asp
	context.save();  // context is saved
	context.translate(x, y);  // the translate x & y are what place the circle

	context.beginPath();
	context.arc(0, 0, 5, 0, 2 * Math.PI, false);
//context.arc(0, 0, r, 0, 2 * Math.PI, false);

	// create radial gradient
	//var grd = context.createRadialGradient(0, 0, r/.5, 0, 0, .5);
	var grd = context.createRadialGradient(0, 0, r/10, 0, 0, r);
	grd.addColorStop(0, "#FFFCF2");
	grd.addColorStop(1, "F9F4F5");


context.fillStyle = grd;
context.fill();

	context.restore();  // context is restored
}


// Words array
var wordArray = ['Flannel shirts and cozy sweaters',
				'Memories created during the holidays',
				'snow days that happen on your days off',
				'Coquito and pernil',
				'Iced cup of coffee from Dunkin\' that you wish you didn\' buy because you didn\'t bring gloves that day']
//document.getElementById('word').innerHTML = wordArray;

// Use a forEach loop with an anonymous function
//takes the inner html of the object and making the array, plus the phtase I like and the element and creating new paragraphs
var sweets = document.getElementById('winter');
wordArray.forEach(function(element){
	console.log(element);
	sweets.innerHTML = sweets.innerHTML + '<p> &#10052; For the '+element+'.</p>';
}, false);
