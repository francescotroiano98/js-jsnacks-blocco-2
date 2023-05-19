
let numberofattempts = 0
computernumber = Math.round(Math.random() * 100 +1);
console.log(computernumber);
usernumber = parseInt(prompt("Write a number"))


while (usernumber != computernumber){
    
    if (usernumber < computernumber){
  
        alert("Your number is smaller than the number of the computer,please try again")
        usernumber = parseInt(prompt("Write a number"))
        console.log(usernumber);
    } else if (usernumber > computernumber){
        alert("Your number is bigger than the number of the computer, please try again")
        usernumber = parseInt(prompt("Write a number"))
        console.log(usernumber);
    }

    usernumber === computernumber;
    numberofattempts = numberofattempts + 1;
    console.log(numberofattempts);
}

