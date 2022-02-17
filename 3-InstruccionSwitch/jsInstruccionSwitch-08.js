function mostrar()
{
	let destinoIngresado 
	let mensaje
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){

		case "Bariloche":
		mensaje = "Hace frio";
		break

		case "Ushuaia":
		mensaje = "Hace mucho frio";
		break

		case "Mar del plata":
		mensaje = "Hace calor";
		break

		case "Cataratas":
		mensaje = "Hace calor y hay humedad";
		break;
	}
	alert(mensaje);

}//Lucas Echevarne 