// Lösning till uppgift 2. Av Alexandra Nilsson, 2026
// Jag har gjort en funktion för att inte använda globala variabelnamn

"use strict";

//skapar en funktion som gör beräkningarna
function calculatePriceWithoutVAT (price, quantity){
    //Skriver ut värdena varje gång man anropar funktionen
    console.log("Pris: " + price);
    console.log("Antal: " + quantity);
    return price * quantity;
}

/*skapar en variabel som får priset utan moms. 
 Anropar funktionen och skriver in värden */
let totPriceWithoutVAT = calculatePriceWithoutVAT(100, 3);