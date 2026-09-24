// Lösning till uppgift 4. Av Alexandra Nilsson, 2026

"use strict";

//skapar en for-loop som skriver ut alla heltal från 1 till 20
console.log("Alla heltal från 1-20:");
for(let i = 1; i <= 20; i++){
    console.log(i);
}

//nu ska endast jämna siffror skrivas ut. Samma for-loop, men ett villkor inuti
console.log("Alla jämna heltal från 1-20:")
for(let i = 1; i <= 20; i++){
   if (i % 2 === 0){
        console.log(i);
   }
}