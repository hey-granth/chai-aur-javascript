// Basic Arithmetic Operations

console.log(2+2);   // addition
console.log(2-2);   // subtraction
console.log(2*2);   // multiplication
console.log(2/2);   // division
console.log(2**2);  // exponentiation / power
console.log(2%2);   // modulus

// String concatenation
let str1 = 'Granth ' + 'Agarwal';
console.log(str1);  // Granth Agarwal

let str2 = 'Granth ' - 'Agarwal';
console.log(str2);  // NaN (Not a Number)

// String multiplication
let str3 = 'Granth ' * 2;
console.log(str3);  // NaN (Not a Number)

console.log('Granth ' + 2); // Granth 2
console.log(typeof('Granth ' + 2)); // string

console.log('Granth ' - 2); // NaN
console.log(typeof('Granth ' - 2)); // number

console.log('1' + 2 + 2); // 122
console.log(typeof('1' + 2)); // string

console.log(1 + 1 + '2');
console.log(typeof(1 + 1 + '2')); // string

console.log(true);  // true
console.log(+true); // 1
// here, js converted the boolean value of true to number. However, the following will give an error.
// console.log(true+);

console.log(false); // false
console.log(+false); // 0
console.log(+''); // 0

// Increment operators
let counter = 100;
counter++;
console.log(counter++); // 100
console.log(++counter);   // 101