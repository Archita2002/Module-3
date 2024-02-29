// 1
// 1 2 1
// 1 2 3 2 1
// 1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: ");

for (let i = 1; i <= N; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += j + ' ';
    }

    for (let j = i - 1; j > 0; j--) {
        row += j + ' ';
    }
    console.log(row);
}
