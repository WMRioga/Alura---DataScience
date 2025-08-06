// let Head_1 = document.querySelector('h1');      /* Selects the first <h1> element in the document */
// Head_1.innerHTML = 'JS Game';

// let Parrafo_1 = document.querySelector('.texto__parrafo');      /* Selects the first element with the class 'texto__parrafo' */
// Parrafo_1.innerHTML = 'Please enter a number between 1 and 10.';

function changeText(elementHTML, text) {
    let elementToChange = document.querySelector(elementHTML);  /* Selects the element based on the provided selector */
    elementToChange.innerHTML = text;  /* Changes the innerHTML of the selected element */
    return;
}

function changeColor(elementHTML, color) {
    let elementToChange = document.querySelector(elementHTML);  /* Selects the element based on the provided selector */
    elementToChange.style.color = color;  /* Changes the color of the selected element */
    return;
}

function HiddenNumberGame(){
    // let valorMaximo = prompt("Enter the maximum value for the random number (E.G. between 1 and 20):");
    let randomNumber = Math.floor(Math.random() * valorMaximo) + 1;
    // Si el numero generado ya fue usado, se genera otro
    if (listedNumber.length == valorMaximo){
        console.log("No more numbers available to generate.");
        changeText('.texto__parrafo', "No more numbers available to generate.")
        changeColor('.texto__parrafo', 'red')
        changeColor('h1', 'red')
        document.querySelector('#intentar').disabled = true;
        return null;  /* Returns null if no more numbers are available */
    } else {
        // console.log(`Warning: You have used ${listedNumber.length} out of ${valorMaximo} numbers.`);
        while (listedNumber.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * valorMaximo) + 1;  /* Generates a new random number between 1 and 10 */
        }
        console.log(`El número aleatorio generado es: ${randomNumber}`);  /* Logs the generated random number to the console */
        console.log(`Numeros ya usados: ${listedNumber.join(", ")}`);
        // console.log(typeof randomNumber);  /* Logs the type of 'randomNumber' to the console */
        listedNumber.push(randomNumber);  /* Adds the generated random number to the 'listedNumber' array */
        return randomNumber;
    }
}

function clearInput() {
    document.querySelector("#userNumber").value = "";  /* Clears the input field with id 'userNumber' */
}

function reloadGame() {
    clearInput();
    condicionesIniciales();  /* Calls the function to set the initial conditions */
    document.querySelector('#reiniciar').disabled = true;  /* Disables the button with id 'reiniciar' */ 
}

function condicionesIniciales() {
    changeText('h1', 'JS Game');
    changeText('.texto__parrafo', `Please enter a number between 1 and ${valorMaximo}.`);
    changeColor('h1', 'Yellow');
    hiddenNumber = HiddenNumberGame();
    counter = 1;
    return;
}

let listedNumber = [];  /* Variable to store the hidden numbers */
let hiddenNumber;
let counter;
// let valorMaximo = prompt("Enter the maximum value for the random number (E.G. between 1 and 20):");
let valorMaximo = 5;
condicionesIniciales();  /* Calls the function to set the initial conditions */

function ValidacionUsuario() {
    let userNumber = parseInt(document.getElementById('userNumber').value);  /* Gets the value from the input field with id 'userNumber' */
    console.log(`You entered a valid number: ${userNumber}`);
    // console.log(typeof userNumber);  /* Logs the type of 'userNumber' to the console */
    if (userNumber === hiddenNumber){
        changeText('.texto__parrafo', `Congratulations! You found the hidden number using ${counter} ${counter == 1 ? "attempt" : "attempts"}.`)
        changeColor('h1', 'green')
        clearInput();
        document.querySelector('#reiniciar').disabled = false;
    }  else {
        if (userNumber < hiddenNumber) {
            changeText('.texto__parrafo', 'The hidden number is higher than your guess.')
            changeColor('h1', 'red')
        } else {
            changeText('.texto__parrafo', 'The hidden number is lower than your guess.')
            changeColor('h1', 'red')
        }
        counter++;
        clearInput();
    }
    return;
}