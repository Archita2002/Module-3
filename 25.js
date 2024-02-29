const input = require("readline-sync");
let n = input.questionInt("Enter the length of the n: ");
let a= [];

for (let i = 0; i < n; i++) {
    let num = input.questionInt(`Enter element ${i + 1}: `);
    a.push(num);
}

let max= 0;
let c= 0;

for (let i = 0; i < n; i++) {
    if (a[i] === 1) {
    c++;
    } else {
        max = Math.max(max, c);
        c = 0;
    }
}

console.log('Maximum:', max);
