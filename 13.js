

const input = require("readline-sync");
let N = input.questionInt("Enter the number of N: ");
let HCF = 1;

let firstNumber = input.questionInt("Enter the firstNumber: ");

for (let i = 2; i <= N; i++) {

    let nextNumber = input.questionInt("Enter the nextNumber: ");
    let a = firstNumber;
    let b = nextNumber;

    while (b !== 0) {
        let num = b;
        b = a % b;
        a = num;
    }
    HCF = a;
    firstNumber=nextNumber;
}


console.log("HCF:",HCF);
