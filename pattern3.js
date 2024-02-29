// 1
// 2 3
// 4 5 6
// 7 5 9 10

const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: ");

let a = 1;


for (let i = 1; i <= N; i++) 
{
    let row = "";

    
    for (let j = 1; j <= i; j++) 
    {
        row += a + " ";
        a++;
    }

    console.log(row);
}
