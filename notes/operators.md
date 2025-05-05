# Operators and Operations

## Arithmetic Operators
```javascript
console.log(2+2);   // addition
console.log(2-2);   // subtraction
console.log(2*2);   // multiplication
console.log(2/2);   // division
console.log(2**2);  // exponentiation / power
console.log(2%2);   // modulus
```
## increment and decrement operators

### Increment Operators
```javascript
let counter = 100;
counter++;
console.log(counter); // 101
console.log(counter++); // 101
console.log(++counter); // 103
```
`console.log(counter++);` should give 101, but it gives 102 because the increment happens after the value is logged.

### Decrement Operators
```javascript
let counter = 100;
counter--;
console.log(counter); // 99
console.log(counter--); // 99
console.log(--counter); // 97
```
`console.log(counter--);` should give 99, but it gives 98 because the decrement happens after the value is logged.
