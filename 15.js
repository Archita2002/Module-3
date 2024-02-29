// Write a program to take a number and print the count of the prime numbers that are strictly less than a number.


const input = require("readline-sync");
let number = input.questionInt("Enter a number: ");

let c = 0;


for (let i = 2; i < number; i++) {
    let isPrime = true; 
    let j = 2;
    while (j < i) {
        if (i % j === 0) {
            isPrime = false; 
        }
        j++; 
    }
    if (isPrime) {
        c++;
    }
}
console.log( "count of prime number:", number, "is:", c);

