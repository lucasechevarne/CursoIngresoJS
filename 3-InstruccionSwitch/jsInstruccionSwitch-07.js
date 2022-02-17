function mostrar()
{
	let destinoIngresado 
	let mensaje
	
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){

		case "Bariloche":
		mensaje = "Sur";
		break

		case "Ushuaia":
		mensaje = "Sur";
		break

		case "Mar del plata":
		mensaje = "Este";
		break

		case "Cataratas":
		mensaje = "NorEste";
		break;
		
	}
	alert(mensaje);

}//Lucas Echevarne 