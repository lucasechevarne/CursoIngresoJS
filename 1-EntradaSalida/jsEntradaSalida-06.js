/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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
// Lucas Echevarne

