function mostrar()
{
	let mesDelAño
	let mensaje

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño){
	case "Febrero":
	mensaje = "Este mes tiene menos de 29 dias";
	break;

	default:
	mensaje = "Este mes tiene mas de 29 dias";
	break;
		
	 }
	 alert(mensaje);


}//Lucas Echevarne