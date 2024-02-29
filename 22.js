// Pascal's Triangle

const input = require("readline-sync");
const numberOfRows = input.questionInt("Enter the value of numberOfRows: ");

const t = [];

for (let i = 0; i < numberOfRows; i++) {
    // t stands for triangle
    t[i] = [];
    // c stands for currentvaLue
    let c= 1;
    for (let j = 0; j <= i; j++) {
        t[i][j] = c;
        c = c* (i - j) / (j + 1);
    }
}

// Print Pascal's Triangle
for (let i = 0; i < numberOfRows; i++) {
    console.log(t[i].join(' '));
}
