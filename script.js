var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function createBt(parent)
{
	var bt = document.createElement("button");
	var txt = document.createTextNode("Aleatorio");
	bt.appendChild(txt);
	bt.className = "colorR";
	parent.appendChild(bt);
}


function ColRandom()
{

	var col1 = ((1<<24)*Math.random()|0).toString(16);
	var col2 = ((1<<24)*Math.random()|0).toString(16);
	
	document.querySelector(".color1").value = "#"+col1;
	document.querySelector(".color2").value = "#"+col2;

	body.style.background = 
	"linear-gradient(to right, " 
	+ "#"+ col1
	+ ", " 
	+ "#"+ col2
	+ ")";

	css.textContent = body.style.background + ";";
}

function BtCol()
{
	var chncol = document.getElementsByClassName("colorR")[0];
	console.log(chncol);
	chncol.addEventListener("click", function(){ColRandom()});
	
}


createBt(body);
BtCol()


body.onload = function(){setGradient()};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);