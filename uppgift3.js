// Lösning till uppgift 3. Av Alexandra Nilsson, 2026
"use strict";

let age = 67;

//villkor om age är mindre än 18 år (men inte 18)
if (age < 18) {
    console.log("Barn");
//testar om age är lika med eller större än 65
} else if (age >= 65){
    console.log("Pensionär");
//om age inte är mindre än 18 eller äldre än 65 är age 18-64
} else {
    console.log("Vuxen");
}