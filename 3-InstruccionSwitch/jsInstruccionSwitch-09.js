function mostrar()
{
	// PRESENTO VARIABLES

	let estacionIngresada 
	let destino 
	let preciofinal
	let descuento = 0
	let aumento = 0
	const TARIFA = 15000

//RELEVO LOS DATOS

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

//SWITCH AUMENTOS - DESCUENTOS

	switch(estacionIngresada){

		case "Invierno":
		if(destino == "Bariloche"){
	    aumento = 20;
			}
			else if(destino == "Mar del plata"){
				descuento = 20;
			}
			else{
				descuento = 10; 
			}
		break;

		case "Verano":
		    if(destino == "Bariloche"){
				descuento = 20;
		    }
		    else if(destino == "Mar del plata"){
			aumento = 20;	
		    }	
		    else{ aumento = 10;
			}
		break;

		case "Primavera":
	    case "Otoño":
		if(destino == "Cordoba"){
			preciofinal = TARIFA;
			}
			else{
		    aumento = 10;
			}
		

		break;
	}

	//CALCULO DEL PRECIO FINAL

	if( aumento != 0){
		preciofinal = TARIFA + TARIFA * aumento /100;
	}
	else if( descuento != 0){
		preciofinal = TARIFA - TARIFA * descuento /100;
	}
	else {
		preciofinal = TARIFA;
	}

// ALAERT FINAL

	alert("Precio final $ " + preciofinal);

}//Lucas Echevarne