const input = require("readline-sync")
let sideAB = input.questionInt("Enter the length of side AB: ");
let sideBC = input.questionInt("Enter the length of side BC: ");
let sideCD = input.questionInt("Enter the length of side CD: ");
let sideDA = input.questionInt("Enter the length of side DA: ");
let internalangle = input.questionFloat("Enter the internal angle in degree: ");

if (sideAB === sideBC && sideBC === sideCD && sideCD === sideDA) {
    if(internalangle == 90) {
    console.log(" it's a square: ");
    }

else{
    console.log(" it's a rhombus: ");

    }
}
else if(sideAB === sideCD && sideBC === sideDA) {
    if(internalangle === 90) {
    console.log(" it's a rectangle: ");
    }
    else {
    console.log(" it's a parallelogram: ");
    }
}


else {
    console.log("It's an irregular quadrilateral. ");
}




