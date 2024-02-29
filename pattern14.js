// * * * *
// * *
// * *
// *
// * *
// * *
// * * * *
const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: ");
    for (let i = 1; i < N * 2 - 1; i++) {
        if (i === 1 || i === N * 2 - 2) {
            console.log("* ".repeat(N));
        } else if  (i===N) {
            console.log("* ");
        }
        else {
            console.log("* *")
        }
    }


