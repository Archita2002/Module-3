// rotations
const input = require("readline-sync");
let n = input.questionInt("Enter the number n: ");
let r = input.questionInt("Enter the number of r: ");
let a = [];

for (let i = 0; i < n; i++) {
    a[i] = input.questionInt(`Enter number ${i + 1}: `);
}


for (let i = 0; i < r; i++) {
    let l = a[n - 1];
    for (let j = n - 1; j > 0; j--) {
        a[j] = a[j - 1];
    }
    a[0] = l;
}
console.log("Rotated array:", a.join(' '));

