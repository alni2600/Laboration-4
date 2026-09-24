// Lösning till uppgift 9. Av Alexandra Nilsson, 2026

"use strict";

//skapar en funktion så att jag lätt kan skapa flera personer 
function Person (nameInput, ageInput, cityInput){
    this.name = nameInput;
    this.age = ageInput;
    this.city = cityInput;
}

//Skapar 5 personer med egenskaper
const person1 = new Person ("Axel", 40, "Karlstad");
const person2 = new Person ("Lena", 78, "Stockholm");
const person3 = new Person ("Hampus", 15, "Örebro");
const person4 = new Person ("Felicia", 23, "Örnsköldsvik");
const person5 = new Person ("Dennis", 8, "Stockholm");

//skapar en array som innehåller 5 personer
let People = [
    person1,
    person2,
    person3,
    person4,
    person5
];