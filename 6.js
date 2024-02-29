// find the largest number
const input = require("readline-sync")
let a = input.question("Enter a number:")
let b = input.question("Enter a number:")
let c = input.question("Enter a number:")


if(a>b) // check the largest number
{ 
    if(a>c)
    {
     console.log(a);  // print the largest number
       
    } else
    {
      console.log(c);
    }
}
    
else if(b>c) // check the largest number
{
      console.log(b);
} else  
{
      console.log(c);
}
    