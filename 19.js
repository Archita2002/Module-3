// Write a program to take N numbers from a user as input and store them in an array and then take another number from the user M, 
// and delete the Mth element from the array. Print the final array.
const input = require("readline-sync");

let N = input.questionInt("Enter the value of N: ");
let a = [N];

for (let i = 0; i < N; i++) {
    a[i] = input.questionInt(`Enter element ${i + 1}: `);
}


let p = input.questionInt("Enter the index element to delete: ");
{
    for (let i = p; i < N - 2; i++) {
        a[i] = a[i + 1];
    }
    
    for (let i = 0; i < N - 1; i++) {
        console.log(a[i]);
    }
} 


