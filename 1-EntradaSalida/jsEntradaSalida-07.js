/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let pimerdato
	let segundodato
	let resultado

	primerdato = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundodato = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerdato + segundodato

	alert("El resultado es " + resultado);
}

function restar()
{
	let pimerdato
	let segundodato
	let resultado

	primerdato = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundodato = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerdato - segundodato

	alert("El resultado es " + resultado);
}

function multiplicar()
{ 
	let pimerdato
	let segundodato
	let resultado

	primerdato = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundodato = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerdato * segundodato

	alert("El resultado es " + resultado);
}

function dividir()
{
	let pimerdato
	let segundodato
	let resultado

	primerdato = parseInt(document.getElementById("txtIdNumeroUno").value);
	segundodato = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerdato / segundodato

	alert("El resultado es " + resultado);
}

//Lucas Echevarne 