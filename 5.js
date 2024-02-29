const input= require("readline-sync")
let year = input.questionInt("Enter the year; ");

if (year%400==0) {
    console.log( year+ "is a leap year: ");
    
} 
else if(year%4==0) {
    if (year%100!==0) {
        console.log( year+ "is a leap year: ");
        
    } else {
        console.log(year+ "is not a leap year: ");
    }
}
/// If none of the above conditions are true, it's not a leap year
else {
    console.log(year+ "is not a leap year: ");
}


    
