/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let ancho 
let largo 
let perimetro
let alambre

ancho = parseInt(document.getElementById("txtIdAncho").value);
largo = parseInt(document.getElementById("txtIdLargo").value);
perimetro = (ancho + largo) * 2

alambre = (perimetro) * 3
 
alert("Se necesitan comprar " + alambre + " metros de alambre" );
}
function Circulo () 
{
	let alambre
    let radio
    let perimetro
    const PI = 3.14;
    
    radio = parseInt(document.getElementById("txtIdRadio").value);
    perimetro = 2 * PI * radio;

    alambre = (perimetro) * 3;

    alert("La cantidad de metros de alambre que necesito es " + alambre);


}
function Materiales () 
{
	let ancho;
    let largo;
    let cemento;
    let cal;
    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;

    ancho = parseInt(document.getElementById("txtIdAncho").value);
    largo = parseInt(document.getElementById("txtIdLargo").value);

    area = ancho * largo;

    cemento = area * CEMENTO_X_METRO;
    cal = area * CAL_X_METRO;

    alert("Para el contrapiso de " + (area) + " m2 necesito " + (cemento) + " bolsas de cemento y " + (cal) + " bolsas de cal");
}
//Lucas Echevarne 