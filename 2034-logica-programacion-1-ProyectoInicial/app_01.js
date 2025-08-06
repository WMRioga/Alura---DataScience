alert("¡Bienvenida y bienvenido a nuestro sitio web!"); // Este es un comentario en JavaScript que se muestra como alerta popup
// prompt("¿Cuál es tu nombre?"); // Este es un comentario en JavaScript que muestra un cuadro de diálogo de entrada de texto
// let nombreUsuario = prompt("¿Cuál es tu nombre?");
// if (nombreUsuario) {
//     alert(`¡Hola ${nombreUsuario}!`);
// } else {
//     alert("¡Hola, visitante!");
// }
// let numeroUsuario = prompt("¿Cuál es tu número a adivinar?");
// console.log(numeroUsuario); // Este es un comentario en JavaScript que se muestra en la consola del navegador
// let numeroSecreto = 5;
// if (numeroUsuario == numeroSecreto) {
//     alert("¡Felicidades! Has adivinado el número.");
// } else if (numeroUsuario < numeroSecreto) {
//     alert("El número es mayor. Inténtalo de nuevo.");
// } else {
//     alert("El número es menor. Inténtalo de nuevo.");
// }
// let nombreUsuario = 'Lua';
// let edadUsuario = 25;

/*
let numeroVentas = 50;
let saldoDisponible = 1000, 
    limiteCredito = 5000,
    tasaInteres = 0.05;
*/

// let mensajeError = "¡Error! Completa todos los campos";
// alert(mensajeError);

let nombreUsuario = prompt("¿Cuál es tu nombre?");   
console.log(nombreUsuario);
let edadUsuario = prompt("¿Cuál es tu edad?");
console.log(edadUsuario);

/* Este es un comentario en bloque que explica el propósito del código.*/
if (edadUsuario >= 18) {
    alert(`Lo siento ${nombreUsuario}, debes ser mayor de edad para acceder a este sitio.`);
} else {
    alert(`¡Bienvenido al sitio ${nombreUsuario}!`);
}

let numeroUsuario = prompt("¿Cuál es tu número a adivinar?");
console.log(numeroUsuario); // Este es un comentario en JavaScript que se muestra en la consola del navegador
let numeroSecreto = 5;
if (numeroUsuario == numeroSecreto) {
    alert(`¡Felicidades! Has adivinado el número ${numeroSecreto}.`);   //Comilla invertida para interpolación de variables
} else if (numeroUsuario < numeroSecreto) {
    alert("El número era mayor. " + numeroSecreto);
} else {
    alert("El número era menor. " + numeroSecreto);
}
alert("¡Gracias por participar!");

/* Prueba de comentario en bloque */
