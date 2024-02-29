// *
// * * *
// * * * * *
// * * * * * * *
// * * * * *
// * * *
// *
const input = require("readline-sync")
let N = input.questionInt(" Enter the value of N: ");
let j = 1;

for (let i = 1; j<=N; j++) {
   console.log('*'.repeat(i));
   i = i + 2;
   
}


for (;j > 0; j=j-2) {
   console.log(''.repeat((N - j) / 2) + '*'.repeat(j));
}
   