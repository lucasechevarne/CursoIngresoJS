function mostrar()
{
	//tomo la hora
	let horaDelDia 
	let mensaje 
	
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	switch(horaDelDia){
	case 7:
    case 8:
	case 9:
	case 10:
	case 11:
	mensaje = "Es de mañana"
	break;

	case 12:
    case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	mensaje = "Es de tarde"
	break;

	case 0:
    case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 21:
	case 22:
	case 23:
	case 24:
	mensaje = "Es de noche"
	break;

	default:
	mensaje = "No es un valor valido, por favor ingrese que represente una hora del dia";
	break;
	}
	alert(mensaje);

}//Lucas Echevarne