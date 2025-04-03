# Basics

## Variables

### const

- the value once assigned can't be changed thereafter.
- const stands for constant.
- its scope is limited to the block.
- it must be initialized at declaration.
- for the objects, the reference remains constant but the elements and its properties can be modified.
- if you try to change the value of a const variable after already assigning one, it would just display an error `Assignment to constant variable.`

### let

- it is also block-scoped.
- can be declared without initializing. if a `let` variable is declared but not initialized, it is said to be in the Temporal Dead Zone (TDZ). if we try to access this variable before initialization, js will throw a `ReferenceError`.
- it can be updated but not re-declared within the same scope.

### var
- it has global scope
- can be redeclared and modified
- When js sees a `var` declaration, it lifts/hoists them up, and creates a space for them in the memory with the value `undefined`.
- If you've called the variable before assigning it a value, it will pass `undefined` as an argument. Afterward, it will carry the value assigned.
- `var` is preferably avoided because of its hoisting problems, plus scope issues, since it is function-scoped rather than block scope and can cause unwanted problems in the code.
```javascript
console.log(x); // Shows: undefined
var x = 10;
console.log(x); // Shows: 10
```

## Printing on the console
- `console.log` is used to print a single string or variable. If we want to print multiple values using `console.log`, we'd have to write it again and again, which is obv not preferable.
```javascript
console.log('Granth Agarwal');
```
- `console.table` is used to print multiple variables together using a single statement. It prints the data in a tabular form, as the name suggests.
```javascript
console.table([accountId, accountEmail, accountPassword]);
```