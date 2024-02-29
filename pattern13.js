// *
// * *
// * *
// * *
// * *
// * *
// *
const input = require("readline-sync");
let N = input.questionInt("Enter the value of N: "),str="*";
for(let i=1;i<=N*2-1;i++)
{
 if(i==1 || i==N*2-1)
 {
    console.log(str.repeat(1));
 }
 else{
    console.log(str.repeat(2));
 }
}