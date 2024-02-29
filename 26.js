

// const input = require("readline-sync");

// let n = input.questionInt("Enter the size of the first array (n): ");
// let s = input.questionInt("Enter the size of the second array (s): ");
// let a = [];
// let b = [];



// console.log("Enter elements for the first array:");
// for (let i = 0; i < n; i++) {
//     let c = input.questionInt(`Element ${i + 1}: `);
//     a.push(c);
// }

// console.log("Enter elements for the second array:");
// for (let j = 0; j < s; j++) {
//     let d = input.questionInt(`Element ${j + 1}: `);
//     b.push(d);
// }



// let i = 0;
// let j = 0;
// let k = 0;

// while (i < n && j < s) {
//     if (a[i] <= b[j]) {
//         m[k] = a[i];
//         i++;
//     } else {
//         m[k] = b[j];
//         j++;
//     }
//     k++;
// }

// while (i < n) {
//     m[k] = a[i];
//     i++;
//     k++;
// }

// while (j < s) {
//     m[k] = b[j];
//     j++;
//     k++;
// }


// console.log(m);

const input = require("readline-sync");

let n = input.questionInt("Enter the size of the first array (n): ");
let s = input.questionInt("Enter the size of the second array (s): ");
let a = [];
let b = [];
let m = [];

console.log("Enter elements for the first array:");
for (let i = 0; i < n; i++) {
    let c = input.questionInt(`Element ${i + 1}: `);
    a[i] = c; // Directly assign values to array a
}

console.log("Enter elements for the second array:");
for (let j = 0; j < s; j++) {
    let d = input.questionInt(`Element ${j + 1}: `);
    b[j] = d; // Directly assign values to array b
}

let i = 0;
let j = 0;
let k = 0;

// Merge the arrays a and b into m
while (i < n && j < s) {
    if (a[i] <= b[j]) {
        m[k] = a[i]; // Directly assign values to array m
        i++;
    } else {
        m[k] = b[j]; // Directly assign values to array m
        j++;
    }
    k++;
}

// Add remaining elements of a to m
while (i < n) {
    m[k] = a[i]; // Directly assign values to array m
    i++;
    k++;
}

// Add remaining elements of b to m
while (j < s) {
    m[k] = b[j]; // Directly assign values to array m
    j++;
    k++;
}

console.log("Merged sorted array:", m);
