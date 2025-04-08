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