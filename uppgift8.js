// Lösning till uppgift 8. Av Alexandra Nilsson, 2026

"use strict";

//skapar ett objekt
const book1 = {
    title : "The Hobbit",
    author : "J.R.R. Tolkien",
    year : 1937
}

//skapar ytterligare ett objekt
const book2 = {
    title : "Harry Potter och de vises sten",
    author : "J.K. Rowling",
    year : 2001
}

//skapa funktion som skriver ut egenskaperna
function printObject(anyBook){
    //skriver ut parametrarna
    console.log("Titel: " + anyBook.title);
    console.log("Författare: " + anyBook.author);
    console.log("Utgivningsår: " + anyBook.year);
}

//anropar funktionen och här kan man ange den specifika bok man vill ska skrivas ut
 printObject(book1);
