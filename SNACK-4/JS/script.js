const firstword = prompt("Inserisci la prima parola");

const secondword = prompt("Inserisci la seconda parola");


function wordcomparison(firstword, secondword) {

    if (firstword.length === secondword.length) {

        console.log("Le parole hanno la stessa lunghezza");

    } else if (firstword.length > secondword.length) {

        console.log("La prima parola è più lunga della seconda parola");

    } else {
        
        console.log("La prima parola è più corta della seconda parola");
    }
}

wordcomparison(firstword, secondword);