// *
// * * 
// * * 
// * * 
// * * * * * 

const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: ");

for (let i = 1; i <= N; i++) {
    let str = '';

    if (i === 1) 
    {
        str += '*';
    } else if (i === N) 
    {
        str += '* '.repeat(N);
    } else 
    {
        str += '* ';
        str += '* ';
    }

    console.log(str);
}
