# JavaScript Data Types

## 1. What is a Data Type?

A data type tells us **what kind of value** a variable contains.

Example:

```javascript
let name = "Rohit";
let age = 23;
let isStudent = true;
```

Here:

```text
"Rohit" → String
23      → Number
true    → Boolean
```

---

# 2. Types of Data Types

JavaScript data types are mainly divided into two categories:

```text
Primitive Data Types
        +
Non-Primitive Data Types
```

---

# 3. Primitive Data Types

JavaScript has **7 primitive data types**:

```text
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol
```

---

# 4. String

A String is used to store text.

```javascript
let name = "Rohit";
let city = 'Mohali';
```

Strings can use:

```javascript
"Double quotes"
'Single quotes'
`Backticks`
```

Example:

```javascript
let message = "Hello JavaScript";
```

---

# 5. Number

`Number` is used for both integers and decimal numbers.

```javascript
let age = 23;
let price = 99.99;
```

Both are `Number` values.

```javascript
let a = 10;
let b = 2.5;
```

---

# 6. BigInt

`BigInt` is used for very large integer values that are beyond the safe integer range of the normal `Number` type.

Example:

```javascript
let bigNumber = 123456789012345678901234567890n;
```

Notice the `n` at the end.

For normal calculations, you will usually use `Number`.

---

# 7. Boolean

Boolean has only two values:

```text
true
false
```

Example:

```javascript
let isLoggedIn = true;
let isAdmin = false;
```

Boolean values are commonly used in conditions.

---

# 8. Undefined

A variable has the value `undefined` when it has been declared but has not been assigned a value.

```javascript
let name;

console.log(name);
```

Output:

```text
undefined
```

---

# 9. Null

`null` represents an **intentional absence of a value**.

Example:

```javascript
let selectedUser = null;
```

This means we intentionally have no user value at the moment.

Simple difference:

```text
undefined → Value has not been assigned
null      → We intentionally set no value
```

---

# 10. Symbol

`Symbol` is used to create unique values.

Example:

```javascript
let id = Symbol("id");
```

Two symbols with the same description are still different:

```javascript
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
```

Output:

```text
false
```

Symbols are mainly useful for advanced JavaScript.

---

# 11. Non-Primitive Data Types

The main non-primitive type in JavaScript is:

```text
Object
```

Arrays and functions are also objects in JavaScript.

---

# 12. Object

An object stores data in **key-value pairs**.

Example:

```javascript
let person = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};
```

Here:

```text
name → key
"Rohit" → value

age → key
23 → value
```

We will study objects in detail later.

---

# 13. Array

An array is used to store multiple values in a single variable.

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

Array values have indexes:

```text
Apple  → 0
Mango  → 1
Banana → 2
```

Example:

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

# 14. Function

A function is a reusable block of code.

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

We can call it:

```javascript
greet();
```

Functions are objects in JavaScript, but they have special behavior because they can be called.

---

# 15. typeof Operator

The `typeof` operator is used to check the type of a value.

Example:

```javascript
let name = "Rohit";

console.log(typeof name);
```

Output:

```text
string
```

More examples:

```javascript
console.log(typeof 23);
console.log(typeof true);
console.log(typeof undefined);
```

Output:

```text
number
boolean
undefined
```

---

# 16. Important typeof Examples

```javascript
typeof "Hello"      // "string"
typeof 10           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof 10n          // "bigint"
typeof Symbol("id") // "symbol"
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
```

### Important

```javascript
typeof null
```

returns:

```text
"object"
```

This is a long-standing behavior in JavaScript.

Although `null` represents the absence of a value, `typeof null` being `"object"` is a known JavaScript quirk.

---

# 17. Primitive vs Non-Primitive

| Primitive | Non-Primitive |
|---|---|
| String | Object |
| Number | Array |
| BigInt | Function |
| Boolean | Other objects |
| Undefined | |
| Null | |
| Symbol | |

---

# 18. Important Points

- String stores text.
- Number stores numbers.
- BigInt stores very large integers.
- Boolean stores `true` or `false`.
- Undefined means a value has not been assigned.
- Null represents intentional absence of a value.
- Symbol creates unique values.
- Objects store data using key-value pairs.
- Arrays store multiple values.
- Functions are callable objects.
- `typeof` is used to check the type of a value.

---

# Common Mistakes

### Mistake 1: Forgetting quotes around strings

```javascript
let name = Rohit;
```

❌ Wrong

```javascript
let name = "Rohit";
```

✅ Correct

---

### Mistake 2: Using `True` or `False`

```javascript
let result = True;
```

❌ Wrong

JavaScript uses lowercase:

```javascript
let result = true;
```

✅ Correct

---

### Mistake 3: Confusing `null` and `"null"`

```javascript
let a = null;
let b = "null";
```

These are different.

```text
null     → Special null value
"null"   → String
```

---

# Quick Revision

```text
Primitive:
String
Number
BigInt
Boolean
Undefined
Null
Symbol

Non-Primitive:
Object
Array
Function
```

### Remember:

```javascript
let name = "Rohit";       // String
let age = 23;             // Number
let big = 123n;           // BigInt
let active = true;        // Boolean
let value;                // Undefined
let data = null;          // Null
let id = Symbol("id");    // Symbol
let person = {};          // Object
let fruits = [];          // Array
```

### Most Important:

```javascript
typeof value
```

is used to check the type of a value.