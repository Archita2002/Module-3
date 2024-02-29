// Write a program to take N numbers from a user as input and then take another number from the user M, and a number X 
// from the user to be inserted at the Mth location in the array. Print the final array.

const input = require("readline-sync");
let n = input.questionInt("Enter the value of n: ");
let a = [n];

for (let i = 0; i < n; i++) {
    a[i] = input.questionInt("Enter the element: ");
}

let p = input.questionInt("Enter the position  where you want to insert the number: ");
let x = input.questionInt("Enter the number  to be inserted: ");

for (let i = n - 1; i >= p - 1; i--) {
    a[i + 1] = a[i];
}

a[p - 1] = x;

console.log("Final array:", a.join(" "));
