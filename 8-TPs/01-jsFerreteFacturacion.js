/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerprecio
    let segundoprecio
    let tercerprecio
    let resultado
    
    primerprecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoprecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    tercerprecio = parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado = primerprecio + segundoprecio + tercerprecio; 

    alert("El resultado de la suma es " + resultado);
}
function Promedio () 
{
	let primerprecio
    let segundoprecio
    let tercerprecio
    let resultado
    
    primerprecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoprecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    tercerprecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    resultado = primerprecio + segundoprecio + tercerprecio;

    alert("El promedio es " + resultado /3);	
}
function PrecioFinal () 
{
	let primerprecio
    let segundoprecio
    let tercerprecio
    let resultado
    let iva
    let preciofinal
    
    primerprecio = parseFloat(document.getElementById("txtIdPrecioUno").value);
    segundoprecio = parseFloat(document.getElementById("txtIdPrecioDos").value);
    tercerprecio = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    resultado = primerprecio + segundoprecio + tercerprecio; 
    
    iva = resultado * 21 / 100;

    preciofinal = resultado + iva;
    
    alert("El precio final es  " + preciofinal);

}
//Lucas Echevarne 