let number = [];
let sum = 0;

while (sum < 50){

    let usernumber = parseInt(prompt("Scrivi un numero"));

    number.push(usernumber);

    sum += usernumber;

    console.log(number);
}