// * *
// ** **
// *** ***
// ********
// *** ***
// ** **
// * *
const input = require("readline-sync")
let n = input.questionInt(" Enter the value of n: ");

for (let i = 1; i <= n; i++)
{
    let str = '';
    
    for (let j = 1; j <= i; j++) 
    {
        str += '*';
    }
    
    if (i < n) 
    {
        str += ' ';
    }
    
    for (let k = 1; k <= i; k++) 
    {
        str += '*';
    }
    console.log(str);
}


for (let i = n - 1; i >= 1; i--) 
{
    let str = '';
    
    for (let j = 1; j <= i; j++) 
    {
        str += '*';
    }
    
    if (i < n)
    {
        str += ' ';
    }
    
    for (let k = 1; k <= i; k++) 
    {
        str += '*';
    }
    console.log(str);
}
