const input = require("readline-sync");
let a = input.questionInt("Enter the first number:");
let b = input.questionInt("Enter the second number:");
let m, n, hcf; 
if (a > b) {
    m = a;
    n = b;
} else {
    m = b;
    n = a;
}
if (a === b) {
    hcf = a;
} else {
    while (n !== 0) {
        let temp = n;
        n = m % n;
        m = temp;
    }
    hcf = m;
} 
let lcm = (a * b) / hcf;
console.log("HCF of", a, "and", b, "is:", hcf);
console.log("LCM of", a, "and", b, "is:", lcm);
