// * * * * *
// * * * *
// * * *
// * *
// *


const input = require("readline-sync")
let N = input.questionInt(" Enter the value of N: ");

for (let i = N; i>=0; i--) 
{
    let row = "";
    for (let j = 1; j <= i; j++)
    {
        row += "*";
    }
    console.log(row);
}
  
    

