// check the largest number
const input = require("readline-sync")
let a = input.question("Enter a number:")
let b = input.question("Enter b number:")
let c = input.question("Enter c number:")
let d = input.question("Enter d number:")

if (a>b && a>c && a>d) {
    console.log("a is largest",a);   
}
    else if(b>a && b>c && b>d) {
    console.log("b is largest",b);
} 
    else if(c>a && c>b && c>d ) {
    console.log("c is largest",c);
}
    else {
    console.log("d is largest",d);
}