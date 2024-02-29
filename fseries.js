const input = require("readline-sync")
let x = input.questionInt("Enter the X number:");
let N = input.questionInt(" Enter the N series: ");


let sum = 0;
let i = 1;

while(i<=N) {
    sum = sum + x**i/i
    i++;
}
{
    console.log("sum of the series:",sum);
}




    
