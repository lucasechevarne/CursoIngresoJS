function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <13 ) {
    alert("Usted es Niño/a");
}
    if (edad >=13 && edad <=18 ){
	alert("Usted es adolescente");
}
    else {
	alert("Usted es mayor de edad");
}


}//Lucas Echevarne