// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    // 1. Obtenemos el elemento del input y su valor.
    let inputAmigo = document.querySelector('.input-name');
    let nombreAmigo = inputAmigo.value.trim(); // .trim() elimina espacios en blanco al inicio y final.

    // 2. Verificamos si el campo está vacío.
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        inputAmigo.placeholder = 'Por favor, ingresa un nombre';
        inputAmigo.focus();
        return;
    }

    // 3. Verificamos si el amigo ya fue agregado.
    if (amigos.includes(nombreAmigo)) {
        alert(`El amigo "${nombreAmigo}" ya fue agregado.`);
        inputAmigo.value = '';
        inputAmigo.focus();
        return;
    }

    // 4. Si todo está bien, agregamos el amigo a la lista.
    amigos.push(nombreAmigo);
    console.log(amigos);

    let listaAmigos = document.querySelector('.name-list'); // Seleccionamos el elemento de la lista
    listaAmigos.innerHTML = ''; // Limpiamos la lista actual

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });

    // 5. Limpiamos el input para el siguiente nombre.
    inputAmigo.value = '';
    inputAmigo.placeholder = "Escribe un nombre";
    inputAmigo.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.querySelector('.result-list');
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
    amigos = []; // Limpiamos la lista de amigos después del sorteo
}