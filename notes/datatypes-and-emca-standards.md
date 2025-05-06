# Datatypes and EMCA standards

## EMCA Standards

- [ECMA-262](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) is the standard for JavaScript, and it defines the core language features, including data types.
- `"use strict"` is a directive that enables strict mode in JavaScript, which helps catch common coding errors and "unsafe" actions such as defining global variables unintentionally. Basically, it helps you write cleaner code, while accessing it according to the EMCA standards. It is written at the top of a script or function.

> alert() function is rendered by browser. but since i am using an IDE which uses node.js to run the code, it doesn't support alert() function. So, I have to use console.log() instead of alert() to see the output.

***
## Datatypes In JavaScript
- JavaScript has dynamic typing, meaning variables can hold values of any type and can change types at runtime.
- JavaScript has 7 primitive data types:
  - `string`: Represents a sequence of characters. Example: `"Hello, World!"`
  - `number`: Represents numeric values, both integers and floating-point numbers. Stores numbers upto 2^53. Example: `42`, `3.14`
  - `boolean`: Represents a logical entity and can have two values: `true` or `false`.
  - `undefined`: A variable that has been declared but has not yet been assigned a value.
  - `null`: Represents the intentional absence of any object value.
  - `bigint`: Represents integers with arbitrary precision. Example: `1234567890123456789012345678901234567890n`
  - `symbol`: Represents a unique and immutable value, often used as object property keys.

---
## Primitive Datatypes
- Primitive data types are immutable, meaning their values cannot be changed once created. However, you can create a new value based on the original.
- When you assign a primitive value to a variable, JavaScript creates a copy of that value. This means that if you change the value of one variable, it does not affect the other variable.
- 7 types
  - `String`
  - `Number`
  - `Boolean`
  - `undefined`
  - `null`
  - `Bigint`
  - `Symbol`
---
## Non-Primitive Datatypes (Reference Datatypes)
- Non-primitive data types are mutable, meaning their values can be changed after creation. They are stored as references in memory.
- When you assign a non-primitive value to a variable, JavaScript creates a reference to that value. This means that if you change the value of one variable, it will affect all other variables that reference the same value.
- Non-primitive data types include:
  - `Object`: A collection of key-value pairs. Example: `{ name: "John", age: 30 }`
  - `Array`: A special type of object used to store ordered collections of values. Example: `[1, 2, 3]`
  - `Function`: A special type of object that can be called to execute code. Functions are first-class citizens in JavaScript.