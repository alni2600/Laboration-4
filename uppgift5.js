// Lösning till uppgift 5. Av Alexandra Nilsson, 2026

"use strict";

//skapar array med fem maträtter
let dishes = ["Korv stroganoff", "Blodpudding", "Spaghetti med köttfärssås", "Fisksoppa", "Kåldolmar med potatis"];

//1. skriver ut alla maträtter 
//Man kan också skriva ut alla enskilda element genom att gå igenom dem i en for-loop
//ett tredje alternativ hade varit att använda metoden forEach() och gå igenom alla element
console.log(`Alla maträtter: ${dishes}`);

//2. skriver ut det första elementet i arrayen
console.log(`Första elementet: ${dishes[0]}`);

//3. Skriver ut sista elementet, oavsett hur många element det innehåller
console.log(`Sista elementet: ${dishes[dishes.length-1]}`);

//4. Lägger till en ny maträtt sist i arrayen
dishes.push("Köttbullar med mos");

//5. Tar bort den första maträtten i arrayen
dishes.shift();

//6. Skriver ut arrayen igen. Nu använder jag istället forEach()
console.log("Skriver ut alla maträtter efter ändringarna: ");
dishes.forEach(item => {
    console.log(item);
});