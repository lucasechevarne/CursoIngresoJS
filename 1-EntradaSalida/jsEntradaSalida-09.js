/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar el sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo;
    let nuevosueldo;
    let aumento;

    sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
    
    aumento = sueldo * 10 / 100;

    nuevosueldo = sueldo + aumento;

    document.getElementById("txtIdResultado").value = nuevosueldo;
	
}
// Lucas Echevarne