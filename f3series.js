const input = require("readline-sync");
let X = input.questionInt("Enter the value of x: ");
let N = input.questionInt("Enter the value of N: ");
let i = 1;
let sum = 0;

while (i <= N)
{
    let j = 1;
    let a = 1;

    
    while (j <= i)
    {
        a = a * (-1)**(j-1) * j;
        j++;
    }
        sum = sum + (X**i) / a;

       i+= 2;

}
console.log("Sum of the series:", sum);
