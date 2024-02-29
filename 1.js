const input=require("readline-sync")
let a = input.questionInt("Enter a number:")
let b = input.questionInt("Enter a number:")
let c = input.questionInt("Enter a number:")

if (a>b) {
    max = a;
    min = b;
    
}
else {
    max = b;
    min = a;  
}
if (max>c) {
    mx = max;
    mm = c;
    
} else {
    mx = c;
    mm  = max;
    
}
if (mm>min) {
    console.log("mm is second max:",mm);
}
else {
    console.log("min is second  max:",min);
}
