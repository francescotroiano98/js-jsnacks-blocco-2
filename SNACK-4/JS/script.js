const firstword = prompt("Inserisci la prima parola");

const secondword = prompt("Inserisci la seconda parola");


wordcomparison(firstword, secondword);

function wordcomparison(wordOne, wordTwo) {

    if (wordOne.length === wordTwo.length) {

        console.log("Le parole hanno la stessa lunghezza");

    } else if (wordOne.length > wordTwo.length) {

        console.log("La prima parola è più lunga della seconda parola");

    } else {
        
        console.log("La prima parola è più corta della seconda parola");
    }
}
