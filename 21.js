// Write a program to take N numbers from a user as input and then print the duplicates in those N numbers.
const input = require("readline-sync");
let n = input.questionInt("Enter the value of n: ");
let a = [];
let b = [];

for (let i = 0; i < n; i++) {
    a[i] = input.questionInt(`Enter number ${i + 1}: `);
    b[i] = 0;
}

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (a[i] === a[j]) {
            b[i]++;
        }
    }
}

console.log("Duplicates:");

for (let i = 0; i < n; i++) {
    if (b[i] > 0) {
        console.log(a[i]);
    }
}
