const input = require("readline-sync");

let m = input.questionInt("Enter the starting value of the range (m): ");
let n = input.questionInt("Enter the ending value of the range (n): ");

for (let num = m; num <= n; num++) {
    let sum = 0;
    let t = num;
    let k = 0;
    
    while (t !== 0) {
        k++;
        t = t / 10;
        t -= t% 1;
    }

    t = num;

    while (t !== 0) {
        let d = t % 10;
        let a = 1;
        

        for (let i = 0; i < k; i++) {
            a *= d;
        }
        
        sum += a;
        t= t / 10;
        t -= t % 1;
    }

    if (sum === num) {
        console.log(num + " is an Armstrong number");
    }
}
