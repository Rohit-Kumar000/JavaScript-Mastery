# JavaScript Comparison Operators

## 1. What are Comparison Operators?

Comparison operators are used to **compare two values**.

The result of a comparison is always a Boolean value:

```text
true
false
```

Example:

```javascript
let a = 10;
let b = 5;

console.log(a > b);
```

Output:

```text
true
```

---

# 2. Comparison Operators

| Operator | Meaning |
|---|---|
| `==` | Equal to |
| `===` | Strictly equal to |
| `!=` | Not equal to |
| `!==` | Strictly not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

---

# 3. Equal `==`

`==` compares values after allowing type conversion.

```javascript
console.log(5 == 5);
```

Output:

```text
true
```

Example:

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

Here, JavaScript converts the types before comparing.

---

# 4. Strict Equal `===`

`===` checks both **value and data type**.

```javascript
console.log(5 === 5);
```

Output:

```text
true
```

But:

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

Because:

```text
5   → Number
"5" → String
```

### Important

In modern JavaScript, prefer `===` when you want a strict comparison.

---

# 5. Not Equal `!=`

Checks whether two values are not equal.

```javascript
console.log(5 != 10);
```

Output:

```text
true
```

It can perform type conversion.

```javascript
console.log(5 != "5");
```

Output:

```text
false
```

---

# 6. Strict Not Equal `!==`

Checks both value and type.

```javascript
console.log(5 !== "5");
```

Output:

```text
true
```

Because their types are different.

```text
5   → Number
"5" → String
```

---

# 7. Greater Than `>`

Checks whether the left value is greater than the right value.

```javascript
console.log(10 > 5);
```

Output:

```text
true
```

---

# 8. Less Than `<`

Checks whether the left value is smaller than the right value.

```javascript
console.log(5 < 10);
```

Output:

```text
true
```

---

# 9. Greater Than or Equal `>=`

Checks whether the value is greater than or equal to another value.

```javascript
console.log(10 >= 10);
```

Output:

```text
true
```

Also:

```javascript
console.log(15 >= 10);
```

Output:

```text
true
```

---

# 10. Less Than or Equal `<=`

Checks whether the value is less than or equal to another value.

```javascript
console.log(10 <= 10);
```

Output:

```text
true
```

Also:

```javascript
console.log(5 <= 10);
```

Output:

```text
true
```

---

# 11. Important Difference: `==` vs `===`

This is very important.

```javascript
5 == "5"
```

Result:

```text
true
```

But:

```javascript
5 === "5"
```

Result:

```text
false
```

Why?

```text
==  → Compares after type conversion
=== → Compares value + type
```

---

# 12. Comparison with Variables

```javascript
let age = 23;

console.log(age >= 18);
```

Output:

```text
true
```

This type of comparison is commonly used in conditions.

Example:

```javascript
if (age >= 18) {
    console.log("Adult");
}
```

---

# 13. Common Mistake

Do not confuse:

```text
= 
```

with:

```text
==
```

or:

```text
===
```

They have different purposes.

```text
=   → Assignment
==  → Loose equality comparison
=== → Strict equality comparison
```

Example:

```javascript
let age = 23;       // Assignment

age == 23;          // Comparison

age === 23;         // Strict comparison
```

---

# Important Points

- Comparison operators return `true` or `false`.
- `==` allows type conversion.
- `===` checks value and type.
- `!=` means not equal.
- `!==` checks strict inequality.
- `>` means greater than.
- `<` means less than.
- `>=` means greater than or equal.
- `<=` means less than or equal.
- Prefer `===` and `!==` in modern JavaScript.

---

# Quick Revision

```text
==   → Equal
===  → Strictly equal
!=   → Not equal
!==  → Strictly not equal
>    → Greater than
<    → Less than
>=   → Greater than or equal
<=   → Less than or equal
```

### Remember

```javascript
5 == "5"    // true
5 === "5"   // false
```

```text
=   → Assign
==  → Compare
=== → Strictly compare
```