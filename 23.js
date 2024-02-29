// frequency

const input = require("readline-sync");
let n = input.questionInt("Enter the value of n: ");
let a = [];

for (let i = 0; i < n; i++) {
    let num = input.questionInt(`Enter number ${i + 1}: `);
    a.push(num);
}


for (let i = 0; i < n; i++) {
    let c = 1;
    if (a[i] !== 0) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] === a[j]) {
                c++;
                a[j] = 0; 
            }
        }
        console.log(`${a[i]} - ${c}`);
    }
}
