# Strings in Javascript

- Strings are immutable
- Strings are indexed
- Strings are iterable
- Strings are objects
- Strings are not primitive
- Strings are not a data type
- Strings can be represented by either `''` or `""`.
---
## String Methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

---
## Using Backticks
- Backticks are used to create template literals, which allow for multi-line strings and string interpolation.
```javascript
let name = 'Granth';
let age = 19;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is Granth and I am 19 years old.
```
## String Operations

### String Concatenation
```javascript
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); // Output: Hello World
```

### String Length
```javascript
let str = "Hello World";
let length = str.length;
console.log(length);
```

> String stores the literals not like an array as in C, but as an object (or a dictionary in python terms). Is is mapped in the format in which the literal's index is it key and the literal itself is stored as a value mapped with the respective index (key).

## `substring()` VS `substr()` VS `slice()`
- `substring(start, end)` - Returns the part of the string between the start and end indexes. The substring is inclusive of the start index and exclusive of the end index.
- `substr(start, length)` - Returns the part of the string starting from the start index and with the specified length.
- `slice(start, end)` - Returns the part of the string between the start and end indexes. The slice is inclusive of the start index and exclusive of the end index. It can also accept negative indexes.
```javascript
let str = "Hello World";
console.log(str.substring(0, 5)); // Output: Hello
console.log(str.substr(0, 5)); // Output: Hello
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.slice(-5)); // Output: World
```


