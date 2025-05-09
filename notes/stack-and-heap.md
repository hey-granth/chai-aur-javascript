# Stack And Heap

## Stack
- Used in primitive datatypes
- Used for function calls

## Heap
- Used in non-primitive datatypes
- Used for dynamic memory allocation
---
## Stack vs Heap in JavaScript

| Characteristic        | Stack                                                  | Heap                                        |
|-----------------------|--------------------------------------------------------|---------------------------------------------|
| **Storage Type**      | Fixed-size, ordered memory allocation                  | Dynamic, unstructured memory allocation     |
| **Access Speed**      | Faster                                                 | Slower                                      |
| **Size Limitation**   | Limited (smaller)                                      | Larger (limited by available memory)        |
| **Memory Allocation** | Automatic                                              | Manual (managed by garbage collector)       |
| **Storage Contents**  | Primitive values (numbers, booleans, etc.), references | Objects, arrays, functions                  |
| **Lifetime**          | Follows function execution                             | Persists until no references remain         |
| **Organization**      | LIFO (Last In, First Out)                              | No specific order                           |
| **Access Pattern**    | Sequential                                             | Random                                      |
| **Variable Scope**    | Function execution context                             | Application-wide                            |
| **Memory Clean-up**   | Automatic when execution context ends                  | Garbage collection when no references exist |

- Garbage collection is a process of automatic memory management that reclaims memory occupied by objects that are no longer in use, preventing memory leaks and optimizing memory usage.

---
> Basically what happens is, when you create two variables with the same value, both of them are stored at different references. If you change the value of the second variable, it won't affect the value of the first variable.
> ```javascript
> let a = 10;
> let b = a;
> b = 20;
> console.log(a); // 10
> console.log(b); // 20```

> However, this is not the case with non-primitive datatypes. If you create 2 variables with the same value, they will be referenced to the same point in heap. Therefore, any changes in either of the variables will be reflected in the other variable.
> ```javascript
> let a = { name: "John" };
> let b = a;
> b.name = "Doe";
> console.log(a.name); // Doe
> console.log(b.name); // Doe```

