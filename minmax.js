const input = require("readline-sync")
let N = input.questionInt("Enter the number of elements: ");
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let i = 0;

while (i<N) {
   let num = input.questionInt();

if(num>max) {
    max=num;

}
if (num<min) {
    min = num;
} 
i++;
}
{
    console.log("maximum value:",max);
    console.log("minimum value:",min);
}