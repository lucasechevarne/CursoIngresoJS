/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

    let importe;
    let nuevoimporte;
    let aumento;

    importe = parseFloat(document.getElementById("txtIdImporte").value);
    
    aumento = importe * 10 / 100;

    nuevoimporte = importe - aumento;

    document.getElementById("txtIdResultado").value = nuevoimporte;

	
}
// Lucas Echevarne 