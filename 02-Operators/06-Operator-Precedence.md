# JavaScript Operator Precedence

## 1. What is Operator Precedence?

When an expression contains multiple operators, **operator precedence decides which operation is performed first**.

Example:

```javascript
let result = 10 + 5 * 2;

console.log(result);
```

Output:

```text
20
```

Why not `30`?

Because multiplication `*` has higher precedence than addition `+`.

So JavaScript does:

```text
5 * 2 = 10

10 + 10 = 20
```

---

# 2. Basic Order

A simple way to remember the common order is:

```text
()
**
* / %
+ -
comparison
&&
||
? :
=
```

Operations with higher precedence are generally evaluated first.

---

# 3. Parentheses `()`

Parentheses have very high precedence and can be used to **control the order**.

Example:

```javascript
let result = (10 + 5) * 2;

console.log(result);
```

Output:

```text
30
```

Because:

```text
10 + 5 = 15

15 * 2 = 30
```

Compare:

```javascript
10 + 5 * 2
```

Result:

```text
20
```

But:

```javascript
(10 + 5) * 2
```

Result:

```text
30
```

---

# 4. Exponentiation `**`

Exponentiation has higher precedence than multiplication and division.

```javascript
let result = 2 + 3 ** 2;

console.log(result);
```

Output:

```text
11
```

Because:

```text
3 ** 2 = 9

2 + 9 = 11
```

---

# 5. Multiplication, Division and Modulus

These have higher precedence than addition and subtraction.

```javascript
let result = 10 + 20 / 5;

console.log(result);
```

Output:

```text
14
```

Because:

```text
20 / 5 = 4

10 + 4 = 14
```

---

# 6. Addition and Subtraction

Addition and subtraction are evaluated after:

```text
*
/
%
```

Example:

```javascript
let result = 10 + 5 - 2;

console.log(result);
```

Operations with the same precedence are generally evaluated from **left to right**.

```text
10 + 5 = 15
15 - 2 = 13
```

---

# 7. Comparison Operators

Comparison operators are evaluated after arithmetic operations.

Example:

```javascript
let result = 10 + 5 > 12;

console.log(result);
```

First:

```text
10 + 5 = 15
```

Then:

```text
15 > 12
```

Result:

```text
true
```

---

# 8. Logical Operators

Logical operators come after comparison operators.

Example:

```javascript
let result = 10 > 5 && 20 > 10;

console.log(result);
```

First:

```text
10 > 5  → true
20 > 10 → true
```

Then:

```text
true && true
```

Result:

```text
true
```

---

# 9. Assignment Operators

Assignment generally happens after the calculation.

Example:

```javascript
let result = 10 + 5 * 2;
```

First:

```text
5 * 2 = 10
```

Then:

```text
10 + 10 = 20
```

Finally:

```text
result = 20
```

---

# 10. Left-to-Right Evaluation

Operators with the same precedence are often evaluated from **left to right**.

Example:

```javascript
let result = 20 / 5 * 2;

console.log(result);
```

First:

```text
20 / 5 = 4
```

Then:

```text
4 * 2 = 8
```

Result:

```text
8
```

---

# 11. Use Parentheses for Clarity

Even when you know the precedence rules, parentheses can make your code easier to understand.

Instead of:

```javascript
let result = a + b * c;
```

You can write:

```javascript
let result = a + (b * c);
```

Both follow the same order, but the second version makes your intention clearer.

---

# 12. Important Example

Consider:

```javascript
let result = 10 + 2 * 5 - 4;

console.log(result);
```

Step 1:

```text
2 * 5 = 10
```

Expression becomes:

```text
10 + 10 - 4
```

Step 2:

```text
10 + 10 = 20
```

Step 3:

```text
20 - 4 = 16
```

Output:

```text
16
```

---

# 13. Common Precedence Order

For the operators you have learned so far:

| Priority | Operators | Purpose |
|---|---|---|
| High | `()` | Grouping |
| | `**` | Power |
| | `* / %` | Arithmetic |
| | `+ -` | Arithmetic |
| | `> < >= <=` | Comparison |
| | `== === != !==` | Equality |
| | `&&` | AND |
| | `||` | OR |
| | `? :` | Ternary |
| Low | `= += -= *=` | Assignment |

This is a simplified learning order, not the complete JavaScript precedence table.

---

# Important Points

- Operator precedence decides which operation happens first.
- Parentheses can change the order.
- `*`, `/`, `%` generally happen before `+`, `-`.
- Comparison happens after arithmetic.
- Logical operators happen after comparisons.
- Assignment happens later.
- Operators with the same precedence are commonly evaluated left-to-right.
- Parentheses make complex expressions easier to understand.

---

# Quick Revision

Remember this basic order:

```text
()
↓
**
↓
* / %
↓
+ -
↓
Comparison
↓
&&
↓
||
↓
? :
↓
Assignment
```

Example:

```javascript
let result = 10 + 5 * 2;
```

First:

```text
5 * 2 = 10
```

Then:

```text
10 + 10 = 20
```

So:

```text
result = 20
```

### Best Practice

When an expression becomes difficult to understand, use parentheses:

```javascript
let result = (10 + 5) * 2;
```

This makes the intended order clear.