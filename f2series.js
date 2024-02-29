 const input = require("readline-sync")
 let X = input.questionInt(" Enter the value of X: ");
 let N = input.questionInt(" Enter the value of N: ");
 let i = 1;
 let sum = 0;
 let a = 1;


 while(i<=N) {
    if(i % 2!==0){
        sum = sum + X ** a/a;
       
        
    }
     else{
        sum = sum - X ** a/a;
    }
        i++;
        a = a+2;
 }
 {
    console.log("Sum of the series:", sum)
 }