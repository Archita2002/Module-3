
const input = require("readline-sync")

let number = input.questionInt("Enter the number:")
let n = number;
let i = 2;
let isprime = true;

if (n<=1) {
    isprime = false;
    
}


while (i<=n-1) {
    if(n%i==0) {
     isprime = false;
}
i++;
}

if (isprime) {
    console.log(number + " is a prime number");
} else {
    console.log(number + " is not a prime number");
}
    
