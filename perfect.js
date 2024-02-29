const input = require("readline-sync");
let a = input.question("Enter the number:");
let n = Number(a);
let i = 1;
let sum = 0;

while(n>i) {
  if(n%i==0) {
    sum+= i;
    
} 
i++;
}
if(sum==n) {
    console.log("perfect number");
} else {
    console.log("not a perfect number");
}
 
