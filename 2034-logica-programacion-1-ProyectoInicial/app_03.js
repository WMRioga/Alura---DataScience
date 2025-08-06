alert(`welcome to our website!`);

/* Countdown from 10 to 1 */
/*
let numberTen = 10;
while (numberTen > 0) {
    console.log(numberTen);
    numberTen--;
}

let numberOne = 1;
while (numberOne <= 10) {
    console.log(numberOne);
    numberOne++;
}

let numberUser = prompt("Enter a number between 1 and 10:");
while (numberUser < 1 || numberUser > 10) {
    numberUser = prompt("Invalid number. Please enter a number between 1 and 10:");
}
console.log(`You entered a valid number: ${numberUser}`);
while (numberUser > 0) {
    console.log(numberUser);
    numberUser--;
}
console.log("End of the program. Thank you for participating!");
*/

/* -------------------- Guess the number ----------------------*/

/*
let numberHidden = 10, attempts = prompt("How many attempts do you want to have? (1-5)"), counter = 0;
let attemptsWord = "attempt", message = "";

while (attempts < 1 || attempts > 5) {
    attempts = prompt("Invalid number. Please enter a number between 1 and 5:");
}

while (attempts > counter) {
    let userNumber = prompt("Enter a number between 1 and 20:");
    while (userNumber < 1 || userNumber > 20) {
        userNumber = prompt("Invalid number. Please enter a number between 1 and 20:");
    }
    console.log(`You entered a valid number: ${userNumber}`);

    if (userNumber == numberHidden) {
        console.log(`Congratulations! You found the hidden number using ${counter + 1} ${attemptsWord}.`);
        break;
    } else {
        attemptsWord = "attempts";
        if (userNumber < numberHidden) {
        console.log("The hidden number is higher than your guess. Turns left: " + (attempts - counter - 1));
        message = `The hidden number is higher than your guess.`;
        } else {
            console.log("The hidden number is lower than your guess. Turns left: " + (attempts - counter - 1));
            message = `The hidden number is lower than your guess.`;
        }
        counter++;
        alert(`${message} \nYou have ${attempts - counter} ${attemptsWord} left.`);
    }
    console.log(`Attempts: ${attempts}, Counter: ${counter}`);
    if (attempts == counter) {
        let gameOverMessage = "Game over! You've run out of attempts." + `\nThe hidden number was ${numberHidden}.`;
        console.log(gameOverMessage);
        alert(gameOverMessage);
        break
    }
}
*/

/* -------------------- Guess the number ----------------------*/

/* Calcular un valor pseudo aleatorio entre 1 y 20 */
let valorMaximo = prompt("Enter the maximum value for the random number (E.G. between 1 and 20):");
let randomNumber = Math.floor(Math.random() * valorMaximo) + 1;
// console.log(`El número aleatorio generado es: ${randomNumber}`);
// parseInt(Math.random() * 3) + 1; Aleatorio entre 1 y 3
// parseInt me entrega la parte entera de un número, funciona como Math.floor

let numberHidden = randomNumber, attempts = prompt("How many attempts do you want to have? (1-5)"), counter = 0;

while (attempts < 1 || attempts > 5) {
    attempts = prompt("Invalid number. Please enter a number between 1 and 5:");
}
while (attempts > counter) {
    let userNumber = prompt(`Enter a number between 1 and ${valorMaximo}:`);
    while (userNumber < 1 || userNumber > valorMaximo) {
        userNumber = prompt(`Invalid number. Please enter a number between 1 and ${valorMaximo}:`);
    }
    console.log(`You entered a valid number: ${userNumber}`);

    if (userNumber == numberHidden) {
        console.log(`Congratulations! You found the hidden number using ${counter + 1} ${counter == 0 ? "attempt" : "attempts"}.`);
        alert(`Congratulations! You found the hidden number using ${counter + 1} ${counter == 0 ? "attempt" : "attempts"}. \nThe hidden number was ${numberHidden}.`);
        alert("Thank you for playing!");
        break;
    } else {
        console.log(`The hidden number is ${userNumber < numberHidden ? "higher" : "lower"} than your guess. Turns left:  ${attempts - counter - 1}`);
        alert(`The hidden number is ${userNumber < numberHidden ? "higher" : "lower"} than your guess. \nYou have ${attempts - counter - 1} ${attempts - counter == 1 ? "attempt" : "attempts"} left.`);
        counter++;
    }
    // console.log(`Attempts: ${attempts}, Counter: ${counter}`);
    if (attempts == counter) {
        let gameOverMessage = "Game over! You've run out of attempts." + `\nThe hidden number was ${numberHidden}.`;
        console.log(gameOverMessage);
        alert(gameOverMessage);
        break
    }
}