/* problema N3

Recibir 3 numeros de los cuales si son 3 iguales el resultadoesel ganador, 
si son solo 2 iguales el resultado es de segundopuesto y si son todos diferentes damos un premio minimo: 
un helado gratis!


var primerNumero = prompt ("Ingrese un número", ["primer número "]);
var segundoNumero = prompt ("Ingrese otro número", ["segundo número"]);
var tercerNumero = prompt ("Ingrese un número más", ["tercer número"]);


//var tresNumerosIguales = "https://www.recreoviral.com/wp-content/uploads/2016/11/Reci%C3%A9n-levantada-4.gif";
//var dosNumerosIguales = "https://cloud.alqueria.es/wp-content/uploads/sites/8/2020/12/Pantera-Rosa-walking-original-300x300.gif";
//var ningunNumeroIgual = "https://c.tenor.com/Ko8aH6DRw1QAAAAM/wake-up-bed.gif";

*/

let primerNumero = "numero uno";
let segundoNumero = "numero dos";
let tercerNumero = "numero tres";

function verificacion() {
    primerNumero = document.querySelector('#primer_numero').value;
    segundoNumero = document.querySelector('#segundo_numero').value;
    tercerNumero = document.querySelector('#tercer_numero').value;


    if (primerNumero == segundoNumero && tercerNumero == primerNumero) {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Ganador!! </h1> 
        `;

    } else if (primerNumero == segundoNumero || tercerNumero == primerNumero || tercerNumero == segundoNumero) {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Felicitaciones! Ud. salió en segundo lugar! </h1> 
        `;

    } else {
        document.querySelector('#mensaje_resultado').innerHTML = `
            <h1> Sonría, Ud ha ganado un helado gratis </h1> 
        `;
    }
}