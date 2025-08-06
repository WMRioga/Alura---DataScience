alert("¡Bienvenida y bienvenido a nuestro sitio web!");
/*
let semanaDia = prompt("¿Qué día de la semana es hoy? (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo)");
console.log(semanaDia);
if (semanaDia.toLowerCase() === "lunes") {
    alert("¡Feliz inicio de semana!");
} else if (semanaDia.toLowerCase() === "viernes") {
    alert("¡Ya casi es fin de semana!");
} else if (semanaDia.toLowerCase() === "domingo") {
    alert("¡Espero que estés disfrutando tu día de descanso!");
} else {
    alert(`¡Espero que tengas un buen ${semanaDia}!`);
}
*/  
/*
let numeroUsuario = prompt("¿Cuál es tu número a adivinar?");
console.log(numeroUsuario); // Este es un comentario en JavaScript que se muestra en la consola del navegador
if (numeroUsuario > 0) {
    alert("¡Has ingresado un número positivo!");
} else if (numeroUsuario == 0) {
    alert("¡Has ingresado el número cero!");
} else {
    alert("¡Has ingresado un número negativo!");
}
*/
/*
let numeroValorUsado = prompt("¿Cuanto dinero gastaste? (Ingresa un números)");
let valorAhorro = 1000;
console.log(numeroValorUsado);
if (numeroValorUsado < valorAhorro) {
    alert(`Te queda un saldo de ${valorAhorro - numeroValorUsado} después de tu compra.`);
} else {
    alert("¡Lo siento! Has gastado más de lo que tenías ahorrado.");
}
*/

/* Ciclo While para adivinar un número */

let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 0;
let palabraIntentos = "intento";

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("¿Cuál es tu número a adivinar?");
    console.log(numeroUsuario); 
    intentos++;
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades! Has adivinado el número ${numeroSecreto} en ${intentos} ${palabraIntentos}.`);
    } else {
        palabraIntentos = "intentos"
        if (numeroUsuario < numeroSecreto) {
            alert("El número era mayor. " + numeroSecreto);
        } else {
            alert("El número era menor. " + numeroSecreto);
        }
    }
}
    alert("¡Gracias por participar!"); 
