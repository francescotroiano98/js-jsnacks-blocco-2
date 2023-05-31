/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */
const nameList = ['pino', 'goku', 'VEGETA', 'ERCAPITANO','Paulo', 'pippo', 'ginetto','golem', 'junior', 'senior'];

const nameUppercaseList = [];

console.log(nameUppercaseList);

function capitalizeFirstLetter() {

  nameList.forEach(word => {

    const formattedName = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    nameUppercaseList.push(formattedName);

  });
}

capitalizeFirstLetter();


      