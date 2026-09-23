// Lösning till uppgift 2. Av Alexandra Nilsson, 2026
"use strict";

//skapar en funktion som gör beräkningarna på totalsumman med och utan moms
function calculatePrice (price, quantity){
     //Skriver ut värdena varje gång man anropar funktionen
     console.log("Pris: " + price + " kr");
     console.log("Antal: " + quantity);
    
     //skapar variable att lagra totalpriset i (utan moms)
     let totPriceExclVAT = price * quantity;
     //skriver ut totalpris utan moms
     console.log("Totalpris utan moms: " + totPriceExclVAT + " kr");

     //skapar variabel med moms och skriver ut resultatet
     let totPriceInclVAT = totPriceExclVAT *  1.25;
     console.log("Totalpris inkl. moms: " + totPriceInclVAT + " kr");
}

//  Anropar funktionen och skriver in parametrarna */
calculatePrice(100, 3);

