'use strict';

let name = "Granth"; // string
let age = 25; // number
let isStudent = true; // boolean
let job = null; // null
let life = undefined; // undefined
let symbol = Symbol("unique"); // symbol
let bigInt = BigInt(1234567890123456789012345678901234567890); // BigInt

console.log(symbol);
console.log(bigInt);

console.log(typeof symbol);
console.log(typeof bigInt);
console.log(typeof null);
console.log(typeof undefined);

const id = Symbol('124');
const id2 = Symbol('124');
console.log(id === id2); // false
console.log(id == id2); // false

// Arrays, Objects and Functions
const heroes = ['Ironman', 'Spiderman', 'Thor'];    // array
const person = { name: 'Granth', age: 25 }; // object
const greet = function() { // function
    console.log('Hello');
};