# JavaScript Truthy and Falsy Values

## 1. What are Truthy and Falsy Values?

JavaScript mein jab kisi value ko condition ke andar use karte hain, JavaScript us value ko internally `true` ya `false` ki tarah treat karta hai.

Example:

```javascript
if ("Hello") {
    console.log("Condition is true");
}
```

Output:

```text
Condition is true
```

Because `"Hello"` is a **truthy value**.

---

# 2. Truthy Values

A **truthy value** is a value that JavaScript treats as `true` in a Boolean context.

Examples:

```javascript
if ("Hello") {
    console.log("Truthy");
}

if (10) {
    console.log("Truthy");
}

if (true) {
    console.log("Truthy");
}
```

Common truthy values:

```text
"Hello"
"Rohit"
10
-5
3.14
true
[]
{}
```

---

# 3. Falsy Values

A **falsy value** is a value that JavaScript treats as `false` in a Boolean context.

JavaScript has a small list of falsy values.

Important ones:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Example:

```javascript
if (0) {
    console.log("True");
} else {
    console.log("False");
}
```

Output:

```text
False
```

Because `0` is falsy.

---

# 4. Empty String

An empty string is falsy:

```javascript
let name = "";

if (name) {
    console.log("Name exists");
} else {
    console.log("Name is empty");
}
```

Output:

```text
Name is empty
```

But a string containing something is truthy:

```javascript
let name = "Rohit";

if (name) {
    console.log("Name exists");
}
```

Output:

```text
Name exists
```

Important:

```text
""      → falsy
"Hello" → truthy
"0"     → truthy
```

`"0"` is a non-empty string, so it is truthy.

---

# 5. Boolean Conversion

We can use `Boolean()` to see whether a value is truthy or falsy.

```javascript
console.log(Boolean(10));
```

Output:

```text
true
```

```javascript
console.log(Boolean(0));
```

Output:

```text
false
```

More examples:

```javascript
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
```

---

# 6. Truthy/Falsy in if

This is commonly used in conditions.

Instead of:

```javascript
let name = "Rohit";

if (name !== "") {
    console.log("Name available");
}
```

You can simply write:

```javascript
let name = "Rohit";

if (name) {
    console.log("Name available");
}
```

Because a non-empty string is truthy.

---

# 7. Falsy Example

```javascript
let username = "";

if (username) {
    console.log("Welcome");
} else {
    console.log("Please enter username");
}
```

Output:

```text
Please enter username
```

---

# 8. `!` with Truthy and Falsy

The `!` operator reverses the Boolean result.

```javascript
console.log(!true);
```

Output:

```text
false
```

For a truthy value:

```javascript
console.log(!"Hello");
```

Output:

```text
false
```

Because:

```text
"Hello" → truthy
!"Hello" → false
```

For a falsy value:

```javascript
console.log(!0);
```

Output:

```text
true
```

Because:

```text
0 → falsy
!0 → true
```

---

# 9. Double NOT `!!`

`!!` is often used to convert a value into a Boolean.

Example:

```javascript
console.log(!!"Hello");
```

Output:

```text
true
```

```javascript
console.log(!!0);
```

Output:

```text
false
```

Think:

```text
!!value → true or false
```

---

# 10. Empty Array and Object

A common beginner mistake is thinking these are falsy:

```javascript
[]
{}
```

But they are actually **truthy**.

Example:

```javascript
if ([]) {
    console.log("Truthy");
}
```

Output:

```text
Truthy
```

And:

```javascript
if ({}) {
    console.log("Truthy");
}
```

Output:

```text
Truthy
```

Even though they are empty, arrays and objects are truthy.

---

# 11. Truthy/Falsy with Logical OR

Truthy and falsy values are commonly used with `||`.

```javascript
let name = "";

let username = name || "Guest";

console.log(username);
```

Output:

```text
Guest
```

Why?

```text
name → "" → falsy
```

So JavaScript uses:

```text
"Guest"
```

Another example:

```javascript
let name = "Rohit";

let username = name || "Guest";

console.log(username);
```

Output:

```text
Rohit
```

Because `"Rohit"` is truthy.

---

# 12. Truthy/Falsy with `&&`

`&&` can also work with truthy/falsy values.

```javascript
let name = "Rohit";

name && console.log("Welcome");
```

Because `name` is truthy, the second part runs.

Output:

```text
Welcome
```

If:

```javascript
let name = "";

name && console.log("Welcome");
```

The second part will not run because `name` is falsy.

---

# 13. Important Difference: `false` vs Falsy

These are not all actually the Boolean value `false`.

For example:

```javascript
0
""
null
undefined
NaN
```

They are different values, but JavaScript treats them as false in Boolean contexts.

Example:

```javascript
Boolean(0);
```

gives:

```text
false
```

But:

```javascript
0 === false
```

is:

```text
false
```

Because `0` is a Number and `false` is a Boolean.

---

# 14. Quick Truthy/Falsy Table

| Value | Truthy/Falsy |
|---|---|
| `true` | Truthy |
| `false` | Falsy |
| `0` | Falsy |
| `1` | Truthy |
| `-1` | Truthy |
| `""` | Falsy |
| `"Hello"` | Truthy |
| `"0"` | Truthy |
| `null` | Falsy |
| `undefined` | Falsy |
| `NaN` | Falsy |
| `[]` | Truthy |
| `{}` | Truthy |

---

# Important Points

- Truthy values behave like `true` in conditions.
- Falsy values behave like `false` in conditions.
- `0`, `""`, `null`, `undefined`, and `NaN` are common falsy values.
- Non-empty strings are truthy.
- Arrays and objects are truthy, even when empty.
- `Boolean(value)` converts a value to `true` or `false`.
- `!!value` can also be used to convert a value to Boolean.
- Truthy/falsy behavior is very common in `if`, `&&`, and `||`.

---

# Quick Revision

### Falsy Values

```text
false
0
-0
0n
""
null
undefined
NaN
```

### Common Truthy Values

```text
"Hello"
1
-1
true
[]
{}
```

Remember:

```javascript
Boolean(0);        // false
Boolean("Hello"); // true
Boolean("");      // false
Boolean([]);      // true
Boolean({});      // true
```

### Simple Rule

```text
Truthy → treated as true

Falsy → treated as false
```