//find second max number
 const input = require("readline-sync")
 let N = input.questionInt("Enter the value of N: ");
 let x = input.questionInt("Enter the value of x: ");
 let y = input.questionInt("Enter the value of y: ");
 let i = 2;
  if(x>y)
   {
     L = x;
     S = y;
   }
   else
   {
    L = y;
    S = x;
   }
   while(i<N)
   {
      let z = input.questionInt("Enter a number: ");
      if(z<L)
      {
        if(z<S)
        {
            S = S;
        }
        else
        {
            S = z;
        }
      }
      else
      {
        t = L
        L = z;
        S = t;
      }
      i++;
   }
   console.log(S) 
