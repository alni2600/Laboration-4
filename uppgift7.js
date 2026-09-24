// Lösning till uppgift 7. Av Alexandra Nilsson, 2026

"use strict";

//skapar array med sex tal
let numberArray = [9, 3, 7, 3, 8, 2];

//skapar funktion som returnerar totalsumman när den anropas
function calculateSum ( ){
    //sum har ett startvärde, 0
    let sum = 0;

    //här loopas alla enskilda element i arrayen igenom och adderas till totalsumman
    numberArray.forEach(item => {
        sum = sum + item;
    });
    //den totala summan är funktionens returvärde
    return sum;
}

//anropar funktionen (med arrayen som argument) och skriver ut summan.
console.log(calculateSum( numberArray ));