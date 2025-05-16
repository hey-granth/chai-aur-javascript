const name = 'Granth';
const age = 19;
const isStudent = true;

console.log("Granth " + "Agarwal");  // Concatenation
console.log(`My name is ${name} and I am ${age} years old`); // Template literals

const name2 = new String('Granth');
console.log(name2); // String object
console.log(name2.length); // Length of string
console.log(name2.charAt(0)); // First character
console.log(name[0]); // First character
console.log(name2.__proto__); // Prototype of string

console.log(name2.toUpperCase());   // doesn't change the original string
console.log(name2.indexOf('h')); // Index of character

// substring
console.log(name2.substring(0, 3)); // Substring from index 0 to 3
// substring(), substr() and slice() are like slicing in python
// you can also enter negative values in slice() to get the last n characters.

const anotherString = '   Granth   ';
console.log(anotherString.trim());  // trim() removes the extra spaces from the start and end of the string

const url = 'https://www.google.com/granth%20agarwal';

console.log(url.replace('%20', '-')); // replace() replaces the first occurrence of the string

console.log(url.includes('%20')); // includes() checks if the string contains the given string, and returns true or false

console.log(url.split('/')); // split() splits the string into an array of strings