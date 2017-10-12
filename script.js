// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

function On(e){
	e.classList.toggle("on_bulb");
	document.body.classList.toggle("white");
}

function Black(e){
	e.classList.toggle("on_black");
	document.body.classList.toggle("ultraviolet");
}

function Blue(e){
	e.classList.toggle("on_blue");
	document.body.classList.toggle("blue");
}
