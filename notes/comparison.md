# Comparison Operators

## Difference between `==` and `===`
```javascript
let a = 10;
let b = "10";
console.log(a == b); // true
console.log(a === b); // false
```
`==` checks for value equality, while `===` checks for both value and type equality.

---
## Difference between `!=` and `!==`
```javascript
let a = 10;
let b = "10";
console.log(a != b); // false
console.log(a !== b); // true
```
`!=` checks for value inequality, while `!==` checks for both value and type inequality.

> Note: `==` and `!=` perform type coercion, while `===` and `!==` do not.

> Comparison operators convert `null` to a number 0 and then compare it with other numbers/

---
## Why does `null == undefined` return `true`?
```javascript
console.log(null == undefined); // true
```
`null` and `undefined` are considered equal in JavaScript because they both represent the absence of a value. However, they are not strictly equal (`===`) because they are of different types.

---
## Why does `null == 0` return `false`?
```javascript
console.log(null == 0); // false
```
`null` is not equal to `0` because `null` represents the absence of a value, while `0` is a number. When comparing `null` with a number, JavaScript does not perform type coercion, so they are not considered equal.

> Note: One should avoid using `==` for comparison in JavaScript, as it can lead to unexpected results due to type coercion. It is recommended to use `===` for strict equality checks. ALso, comparisons with `null` and `undefined` should be done using `===` or `!==` to avoid confusion. That's why people prefer TypeScript over JavaScript :)