// Lösning till uppgift 9. Av Alexandra Nilsson, 2026

"use strict";

//skapar en funktion (konstruktorfunktion) så att jag lätt kan skapa flera personer samtidigt
function Person (nameInput, ageInput, cityInput){
    this.name = nameInput;
    this.age = ageInput;
    this.city = cityInput;
}

//Skapar 5 personer (objekt) med egenskaper (nyckel-värden)
const person1 = new Person ("Axel", 40, "Karlstad");
const person2 = new Person ("Lena", 78, "Stockholm");
const person3 = new Person ("Hampus", 15, "Örebro");
const person4 = new Person ("Felicia", 23, "Örnsköldsvik");
const person5 = new Person ("Dennis", 18, "Stockholm");

//skapar en array som innehåller 5 personer (de 5 jag skapade här ovanför)
let People = [person1, person2, person3, person4, person5];

 //skapar funktion som skriver ut allt
function printPerson (p){
     //kontrollerar om personen är myndig och ger variabeln ett värde (myndig eller omyndig) beroende på personens ålder
    let ofAge;
    if (p.age < 18){
        ofAge = "omyndig"
    } else {
        ofAge = "myndig";
    }
    //skriver ut
    console.log(`${p.name} bor i ${p.city} och är ${ofAge}.`);
};
 
//skapar en for-loop som går igenom hela arrayen, oavsett hur många personer den innehåller
for (let i = 0; i < People.length; i++){
    //anropar funktionen för varje person
    printPerson(People[i]);
}