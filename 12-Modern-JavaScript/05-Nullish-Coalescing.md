# JavaScript Nullish Coalescing

## 1. What is Nullish Coalescing?

Nullish Coalescing Operator `??` ka use **default value provide karne** ke liye hota hai.

Syntax:

```javascript
value ?? defaultValue
```

Agar `value`:

```text
null
undefined
```

hai, to `defaultValue` return hoti hai.

---

# 2. Basic Example

```javascript
let name;

console.log(name ?? "Guest");
```

Output:

```text
Guest
```

Because `name` is `undefined`.

---

# 3. With `null`

```javascript
let name = null;

console.log(name ?? "Guest");
```

Output:

```text
Guest
```

Because `name` is `null`.

---

# 4. With a Normal Value

```javascript
let name = "Rohit";

console.log(name ?? "Guest");
```

Output:

```text
Rohit
```

Because `name` is neither `null` nor `undefined`.

---

# 5. Important: `0` is Not Nullish

```javascript
let score = 0;

console.log(score ?? 100);
```

Output:

```text
0
```

`0` is a valid value, so `100` is not used.

---

# 6. Empty String

```javascript
let name = "";

console.log(name ?? "Guest");
```

Output:

```text
""
```

Empty string is not `null` or `undefined`.

Therefore `??` keeps it.

---

# 7. `false` is Also Valid

```javascript
let isLoggedIn = false;

console.log(isLoggedIn ?? true);
```

Output:

```text
false
```

`false` is not nullish.

---

# 8. Nullish Values

`??` only checks:

```text
null
undefined
```

Example:

```javascript
console.log(null ?? "Default");
```

Output:

```text
Default
```

```javascript
console.log(undefined ?? "Default");
```

Output:

```text
Default
```

But:

```javascript
console.log(0 ?? "Default");
```

Output:

```text
0
```

And:

```javascript
console.log(false ?? "Default");
```

Output:

```text
false
```

---

# 9. `??` vs `||`

This is very important.

### `||`

`||` considers many values as falsy:

```text
false
0
""
null
undefined
NaN
```

Example:

```javascript
let score = 0;

console.log(score || 100);
```

Output:

```text
100
```

Because `0` is falsy.

---

### `??`

`??` only checks:

```text
null
undefined
```

```javascript
let score = 0;

console.log(score ?? 100);
```

Output:

```text
0
```

---

# 10. Comparison

```javascript
let value = 0;

console.log(value || 10);
console.log(value ?? 10);
```

Output:

```text
10
0
```

Why?

```text
|| → 0 is falsy
?? → 0 is a valid value
```

---

# 11. Empty String Example

```javascript
let name = "";

console.log(name || "Guest");
```

Output:

```text
Guest
```

But:

```javascript
console.log(name ?? "Guest");
```

Output:

```text
""
```

---

# 12. Boolean Example

```javascript
let isAdmin = false;

console.log(isAdmin || true);
```

Output:

```text
true
```

But:

```javascript
console.log(isAdmin ?? true);
```

Output:

```text
false
```

This can be important when `false` is a meaningful value.

---

# 13. Optional Chaining + `??`

These two operators are commonly used together.

```javascript
const user = {};

const city = user.address?.city ?? "Unknown";

console.log(city);
```

Output:

```text
Unknown
```

Flow:

```text
user.address?.city
        ↓
    undefined
        ↓
       ??
        ↓
   "Unknown"
```

---

# 14. API Example

Suppose API data contains:

```javascript
const user = {
    name: "Rohit"
};
```

There is no `city`.

We can write:

```javascript
const city = user.city ?? "Not Available";

console.log(city);
```

Output:

```text
Not Available
```

This is useful when working with incomplete API data.

---

# 15. Practical Example

```javascript
function showUser(user) {

    const name = user.name ?? "Guest";
    const city = user.city ?? "Unknown";

    console.log("Name:", name);
    console.log("City:", city);
}

showUser({
    name: "Rohit"
});
```

Output:

```text
Name: Rohit
City: Unknown
```

---

# 16. `??` with Assignment

There is also:

```javascript
??=
```

It assigns a value only when the variable is `null` or `undefined`.

Example:

```javascript
let name;

name ??= "Guest";

console.log(name);
```

Output:

```text
Guest
```

But:

```javascript
let name = "Rohit";

name ??= "Guest";

console.log(name);
```

Output:

```text
Rohit
```

The existing value is kept.

---

# 17. Simple Difference

### `||`

Use when you want a fallback for **any falsy value**.

```javascript
value || "Default"
```

### `??`

Use when you want a fallback only for:

```text
null
undefined
```

```javascript
value ?? "Default"
```

---

# Quick Revision

```text
?? → Nullish Coalescing
```

It checks:

```text
null
undefined
```

Example:

```javascript
let value;

console.log(value ?? "Default");
```

Output:

```text
Default
```

But:

```javascript
let value = 0;

console.log(value ?? "Default");
```

Output:

```text
0
```

---

# `||` vs `??`

```text
        ||                  ??

0       → fallback          → 0
""      → fallback          → ""
false   → fallback          → false
null    → fallback          → fallback
undefined → fallback        → fallback
```

### Easy Rule

```text
Need fallback for null/undefined?
        ↓
       ??

Need fallback for any falsy value?
        ↓
       ||
```

---

# Modern JavaScript Section Complete 🎯

You have completed:

```text
12-Modern-JavaScript
│
├── 01-let-const.md
├── 02-Destructuring.md
├── 03-Spread-Rest.md
├── 04-Optional-Chaining.md
└── 05-Nullish-Coalescing.md
```

## Next Section

```text
13-Advanced-Functions
```

First file:

```text
13-Advanced-Functions/01-Higher-Order-Functions.md
```