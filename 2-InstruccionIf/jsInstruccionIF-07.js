function mostrar()
{
	let edad
	let estado;
	

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if( edad < 18  && estado != "Soltero"){
		alert("Usted es muy joven para NO ser soltero");
		}
		
	}//Lucas Echevarne 