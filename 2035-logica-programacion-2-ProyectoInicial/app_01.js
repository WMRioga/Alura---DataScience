function promedio() {
    let list = []
    // let tamanoLista = parseInt(prompt("Enter the number of elements in the list:"));
    let tamanoLista = 5
    for (let i = 0; i < tamanoLista; i++) {
        // let randomNumber = parseFloat(prompt("Enter a number:"));
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        list.push(randomNumber);
    }
    let sum = list.reduce((acc, curr) => acc + curr, 0);
    let average = sum / list.length;
    console.log(`The list is: ${list.join(", ")}`);
    console.log(`The average is: ${average}`);
    console.log(`The sum is: ${sum}`);
    console.log(`The length of the list is: ${list.length}`);
    console.log(`The maximum value in the list is: ${Math.max(...list)}`);
    console.log(`The minimum value in the list is: ${Math.min(...list)}`);
    console.log(`The sorted list is: ${list.sort((a, b) => a - b).join(", ")}`);
    // EL cuadrado de cada elemento de la lista
    let squaredList = list.map(num => num * num);
    console.log(`The squared list is: ${squaredList.join(", ")}`);
    return average;
}
promedio();