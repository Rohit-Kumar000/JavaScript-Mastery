# JavaScript Type Conversion

## 1. What is Type Conversion?

Type conversion means **changing a value from one data type to another**.

Example:

```javascript
let age = "23";

let numberAge = Number(age);

console.log(numberAge);
```

Here:

```text
"23" → String
23   → Number
```

---

# 2. Two Types of Conversion

JavaScript has two main types:

```text
1. Explicit Conversion
2. Implicit Conversion
```

---

# 3. Explicit Conversion

When we manually convert a value from one type to another, it is called **explicit conversion**.

Common methods:

```javascript
Number()
String()
Boolean()
```

---

# 4. String to Number

Use `Number()`:

```javascript
let age = "23";

let result = Number(age);

console.log(result);
console.log(typeof result);
```

Output:

```text
23
number
```

---

# 5. Number to String

Use `String()`:

```javascript
let age = 23;

let result = String(age);

console.log(result);
console.log(typeof result);
```

Output:

```text
23
string
```

---

# 6. Convert to Boolean

Use `Boolean()`:

```javascript
let value = 1;

console.log(Boolean(value));
```

Output:

```text
true
```

Another example:

```javascript
console.log(Boolean(0));
```

Output:

```text
false
```

---

# 7. Truthy and Falsy Values

When JavaScript converts a value to Boolean, some values become `false`.

### Common Falsy Values

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

Almost every other value is **truthy**.

Examples:

```javascript
Boolean(1);       // true
Boolean("Hello"); // true
Boolean([]);      // true
Boolean({});      // true
```

---

# 8. Implicit Conversion

Sometimes JavaScript automatically converts one type into another.

This is called **implicit type conversion** or **type coercion**.

Example:

```javascript
let result = "10" + 5;

console.log(result);
```

Output:

```text
105
```

Why?

Because `+` with a string causes the number to be converted to a string.

```text
"10" + 5
   ↓
"10" + "5"
   ↓
"105"
```

---

# 9. String and Number with `+`

```javascript
console.log("10" + 5);
```

Output:

```text
105
```

But:

```javascript
console.log("10" - 5);
```

Output:

```text
5
```

JavaScript converts `"10"` to a number for `-`.

---

# 10. Common Conversion Examples

```javascript
"10" + 5   // "105"
"10" - 5   // 5
"10" * 2   // 20
"10" / 2   // 5
```

This behavior is called **type coercion**.

---

# 11. Number()

`Number()` converts a value to a number.

```javascript
Number("25");      // 25
Number("25.5");    // 25.5
Number(true);      // 1
Number(false);     // 0
Number(null);      // 0
Number("Hello");   // NaN
```

---

# 12. String()

`String()` converts a value to a string.

```javascript
String(25);        // "25"
String(true);      // "true"
String(false);     // "false"
String(null);      // "null"
```

---

# 13. Boolean()

`Boolean()` converts a value to `true` or `false`.

```javascript
Boolean(1);        // true
Boolean(0);        // false
Boolean("Hello");  // true
Boolean("");       // false
Boolean(null);     // false
```

---

# 14. parseInt()

`parseInt()` converts a string into an integer.

```javascript
let value = "25px";

console.log(parseInt(value));
```

Output:

```text
25
```

It reads the integer part from the beginning of the string.

---

# 15. parseFloat()

`parseFloat()` reads a decimal number from the beginning of a string.

```javascript
let value = "25.50px";

console.log(parseFloat(value));
```

Output:

```text
25.5
```

---

# 16. NaN

`NaN` means:

```text
Not a Number
```

Example:

```javascript
let result = Number("Hello");

console.log(result);
```

Output:

```text
NaN
```

You can check it using:

```javascript
Number.isNaN(result);
```

---

# 17. Important Difference

```javascript
Number("25px");
```

Result:

```text
NaN
```

But:

```javascript
parseInt("25px");
```

Result:

```text
25
```

Because `Number()` expects the complete value to represent a valid number, while `parseInt()` can read the integer portion from the beginning.

---

# 18. Important Points

- Type conversion means changing one data type into another.
- `Number()` converts to Number.
- `String()` converts to String.
- `Boolean()` converts to Boolean.
- `parseInt()` reads an integer.
- `parseFloat()` reads a decimal number.
- `NaN` means Not a Number.
- JavaScript can also automatically convert types.
- Automatic conversion is called type coercion.

---

# Common Mistakes

### Mistake 1

```javascript
let age = "23";

console.log(age + 1);
```

Output:

```text
231
```

Because `age` is a string.

Correct if you want addition:

```javascript
console.log(Number(age) + 1);
```

Output:

```text
24
```

---

### Mistake 2

Don't confuse:

```javascript
"25"
```

with:

```javascript
25
```

```text
"25" → String
25   → Number
```

---

# Quick Revision

```text
Number()   → Convert to Number
String()   → Convert to String
Boolean()  → Convert to Boolean
parseInt() → Integer
parseFloat() → Decimal
```

### Remember:

```javascript
Number("10");      // 10
String(10);        // "10"
Boolean(1);        // true

"10" + 5;          // "105"
"10" - 5;          // 5
```

```text
Manual conversion → Explicit Conversion
Automatic conversion → Implicit Conversion / Type Coercion
```