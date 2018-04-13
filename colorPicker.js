//this selects the h3 element
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
//check to make sure the elements are selected
/*console.log(css);
console.log(color1);
console.log(color2);*/
//console.log(body);

//testing
//body.style.background = "red";


//third part after refactoring
function setGradient(){
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";


//output css text 
css.textContent = body.style.background + ";";

}

//selects color1 value and  changes as you select the picker
color1.addEventListener("input", setGradient);
	//body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";


//selects color2 value and  changes as you select the picker
color2.addEventListener("input", setGradient);
	//body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";





//events
//second part with functions written completly out without refactoring
/*color1.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

})

color2.addEventListener("input", function(){
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
})*/

//first part for testing
//events that grabs the colors for testing
/*color1.addEventListener("input", function(){
	console.log(color1.value);

})

color2.addEventListener("input", function(){
	console.log(color2.value);
})
*/
