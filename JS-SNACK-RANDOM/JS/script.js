function randomListNumber() {
  
  const numberArray = [];

  while (numberArray.length < 4) {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (!numberArray.includes(randomNumber)) {
      numberArray.push(randomNumber);
    }
  }

  return numberArray;
}

const randomNumbers = randomListNumber();

console.log(randomNumbers);
