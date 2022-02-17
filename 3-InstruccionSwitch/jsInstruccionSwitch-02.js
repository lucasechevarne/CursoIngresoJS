function mostrar()
{
	//tomo el mes
	
	let mesDelAño;
	let mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Agosto":
		mensaje = "Abrigate que hace frio";
		break;

		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		mensaje = "Ya paso el frio";
		break;
		
		case "Enero":
		case "Febrero":
		case "Marzo":
				
		mensaje = "Vacaciones de verano";
		break;

	}
	alert(mensaje);

}//Lucas Echevarne 