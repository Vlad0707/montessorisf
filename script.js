var toggleOpen = function(event) {	
	
	document.body.classList.toggle("open");

};

document.querySelector("nav").onclick = toggleOpen;

document.querySelector(".close").onclick = toggleOpen;