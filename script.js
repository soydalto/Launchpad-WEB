document.addEventListener("keydown",(e)=>{
	let codigo = (e.which || e.keyCode);
    codigo = String.fromCharCode(codigo);
	let v = obtenerValor(codigo);
	document.getElementsByTagName('button')[v].style.borderWidth = "0px";
	document.getElementsByTagName('button')[v].style.filter = "contrast(6)";
	document.getElementsByTagName('audio')[v].currentTime = 0;
	document.getElementsByTagName('audio')[v].play();
	setTimeout(()=>{
	document.getElementsByTagName('button')[v].style.borderWidth = "2px";
	document.getElementsByTagName('button')[v].style.filter = "contrast(1)";
	},400)
})


function obtenerValor(cod){
	cod = cod.toLowerCase();
    if (cod == "1") { return 0; }
    else if (cod == "2") { return 1; }
    else if (cod == "3") { return 2; }
    else if (cod == "q") { return 3; }
    else if (cod == "w") { return 4; }
    else if (cod == "e") { return 5; }
    else if (cod == "a") { return 6; }
    else if (cod == "s") { return 7; }
    else if (cod == "d") { return 8; }
    else if (cod == "z") { return 9; }
    else if (cod == "x") { return 10; }
    else if (cod == "c") { return 11; }
    else if (cod == "4") { return 12; }
    else if (cod == "r") { return 13; }
    else if (cod == "f") { return 14; }
    else if (cod == "v") { return 15; }
    else if (cod == "5") { return 16; }
    else if (cod == "t") { return 17; }
    else if (cod == "g") { return 18; }
    else if (cod == "b") { return 19; }
    else {
    	return "";
    }
}