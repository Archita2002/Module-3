// Take a number N from the user as input and repeatedly find the sum of the digits of the number till you get a single digit. 
// Print that digit. Example: 678 -> 6+7+8 = 21 -> 2+1 = 3
const input =require("readline-sync")
let num = input.questionInt("Enter the value of num: ");

while (num >= 10) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    num = sum;
}

console.log('Output:', num);
