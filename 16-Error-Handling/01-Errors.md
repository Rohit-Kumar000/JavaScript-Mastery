# JavaScript Errors

## 1. What is an Error?

Program execute karte waqt agar JavaScript ko koi problem milti hai, to **Error** generate ho sakta hai.

Example:

```javascript
console.log(username);
```

Agar `username` define nahi hai, to JavaScript error dega.

Output:

```text
ReferenceError: username is not defined
```

---

## 2. Why Do Errors Occur?

Errors different reasons ki wajah se aa sakte hain:

```text
✓ Variable define na hona
✓ Invalid syntax
✓ Wrong data type
✓ Invalid function usage
✓ Invalid JSON
✓ Network/API problems
✓ Invalid operation
```

---

# 3. Syntax Error

Jab JavaScript ka syntax galat ho, to **SyntaxError** aa sakta hai.

Example:

```javascript
if (true {
    console.log("Hello");
}
```

Yahan `)` missing hai.

Correct:

```javascript
if (true) {
    console.log("Hello");
}
```

---

# 4. ReferenceError

Jab kisi variable ya function ko access kiya jaye jo exist nahi karta.

Example:

```javascript
console.log(username);
```

Agar `username` defined nahi hai:

```text
ReferenceError
```

Example:

```javascript
function test() {

    console.log(userName);

}

test();
```

---

# 5. TypeError

Jab kisi value par invalid operation perform kiya jaye.

Example:

```javascript
const number = 10;

number.toUpperCase();
```

`toUpperCase()` strings ke liye hota hai, number ke liye nahi.

Is situation mein `TypeError` aa sakta hai.

Another example:

```javascript
const user = null;

console.log(user.name);
```

---

# 6. RangeError

Jab koi value allowed range ke bahar ho, to `RangeError` aa sakta hai.

Example:

```javascript
const number = 10;

console.log(number.toFixed(200));
```

`toFixed()` ke liye digits ki allowed range limited hoti hai.

---

# 7. URIError

Invalid URI handling se related error:

```javascript
decodeURIComponent("%");
```

Ye invalid encoded URI ko decode karne ki wajah se `URIError` generate kar sakta hai.

---

# 8. Error Object

JavaScript mein `Error` object error information represent karta hai.

Example:

```javascript
const error = new Error("Something went wrong");

console.log(error);
```

Basic structure:

```text
Error
├── name
├── message
└── stack
```

---

# 9. `error.name`

Error ka type/name dekhne ke liye:

```javascript
try {

    console.log(username);

} catch (error) {

    console.log(error.name);

}
```

Output:

```text
ReferenceError
```

---

# 10. `error.message`

Error ka message:

```javascript
try {

    console.log(username);

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
username is not defined
```

---

# 11. `error.stack`

Debugging ke liye stack information useful hoti hai.

```javascript
try {

    console.log(username);

} catch (error) {

    console.log(error.stack);

}
```

Stack trace mein error ke location/call information ho sakti hai.

---

# 12. Creating an Error

Hum manually bhi Error object create kar sakte hain:

```javascript
const error = new Error("Invalid user");

console.log(error.message);
```

Output:

```text
Invalid user
```

---

# 13. Common JavaScript Errors

JavaScript mein commonly ye error types dekhne ko milte hain:

```text
SyntaxError
ReferenceError
TypeError
RangeError
URIError
```

---

# 14. SyntaxError Example

```javascript
const = 10;
```

Ye invalid JavaScript syntax hai.

---

# 15. ReferenceError Example

```javascript
console.log(myVariable);
```

Agar `myVariable` exist nahi karta:

```text
ReferenceError
```

---

# 16. TypeError Example

```javascript
const user = null;

console.log(user.name);
```

`null` par `.name` access karna invalid hai.

---

# 17. RangeError Example

```javascript
const number = 10;

number.toFixed(200);
```

Invalid range ki wajah se `RangeError` aa sakta hai.

---

# 18. Error vs Warning

Error:

```text
❌ Error
```

Program execution ko affect kar sakta hai.

Warning:

```text
⚠️ Warning
```

Warning generally developer ko potential issue ke baare mein inform karti hai.

Example:

```javascript
console.warn("This is a warning");
```

---

# 19. Console Error

Developer console mein error message manually bhi show kar sakte hain:

```javascript
console.error("Something went wrong");
```

Ye actual JavaScript exception throw nahi karta.

Difference:

```javascript
console.error("Error");
```

vs

```javascript
throw new Error("Error");
```

`console.error()` sirf console mein message log karta hai.

`throw` actual exception generate karta hai.

---

# 20. Error Handling Connection

Errors ko handle karne ke liye hum `try...catch` use kar sakte hain.

```javascript
try {

    console.log(username);

} catch (error) {

    console.log("Error handled");

}
```

Flow:

```text
Code
 ↓
Error
 ↓
catch
 ↓
Handle Error
```

Iska detailed concept next file mein:

```text
02-try-catch.md
```

---

# Quick Revision

### SyntaxError

```text
Invalid JavaScript syntax
```

### ReferenceError

```text
Variable/function reference not found
```

### TypeError

```text
Invalid operation on a value
```

### RangeError

```text
Value allowed range ke bahar
```

### URIError

```text
Invalid URI operation
```

### Error Object

```javascript
const error = new Error("Something went wrong");
```

### Important Properties

```javascript
error.name
error.message
error.stack
```

### Console Error

```javascript
console.error("Something went wrong");
```

### Actual Exception

```javascript
throw new Error("Something went wrong");
```

---

# Error Flow

```text
┌──────────────┐
│ JavaScript   │
│    Code      │
└──────┬───────┘
       ↓
    Error?
       │
   ┌───┴───┐
   │       │
  No      Yes
   │       │
   ↓       ↓
Continue  Error
           │
           ↓
       Handle using
       try/catch
```

---

## Next File

```text
16-Error-Handling/02-try-catch.md
```