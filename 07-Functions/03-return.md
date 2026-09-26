# JavaScript return Statement

## 1. What is return?

`return` ka use function ke andar se **value bahar bhejne** ke liye hota hai.

Example:

```javascript
function add(a, b) {
    return a + b;
}
```

Ab function ko call karke result ko variable mein store kar sakte hain:

```javascript
let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

Simple:

```text
return → Function se value bahar bhejna
```

---

# 2. console.log() vs return

Ye difference bahut important hai.

### console.log()

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Ye sirf result console mein print karta hai.

### return

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

`return` result ko function ke bahar available kar deta hai.

Remember:

```text
console.log() → Display/print
return        → Value send back
```

---

# 3. return Value Store Karna

```javascript
function square(number) {
    return number * number;
}

let result = square(5);

console.log(result);
```

Output:

```text
25
```

Yahan:

```text
square(5)
    ↓
25
    ↓
result
```

---

# 4. return Directly Print Karna

Return ki hui value ko directly bhi use kar sakte hain.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

Output:

```text
30
```

---

# 5. return Stops Function Execution

Jab JavaScript `return` statement tak pahunchta hai, function wahi stop ho jata hai.

```javascript
function test() {

    console.log("First");

    return;

    console.log("Second");
}

test();
```

Output:

```text
First
```

`"Second"` print nahi hoga.

Remember:

```text
return → Function ko stop bhi karta hai
```

---

# 6. return Without Value

Aap sirf `return` bhi likh sakte ho.

```javascript
function test() {

    console.log("Hello");

    return;

    console.log("World");
}

test();
```

Output:

```text
Hello
```

---

# 7. Function Without return

Agar function kuch return nahi karta, to JavaScript normally `undefined` return karta hai.

```javascript
function greet() {
    console.log("Hello");
}

let result = greet();

console.log(result);
```

Output:

```text
Hello
undefined
```

So:

```text
No return → undefined
```

---

# 8. Returning Different Values

Function different types ki values return kar sakta hai.

### Number

```javascript
function getNumber() {
    return 100;
}
```

### String

```javascript
function getName() {
    return "Rohit";
}
```

### Boolean

```javascript
function isAdult() {
    return true;
}
```

### Array

```javascript
function getNumbers() {
    return [10, 20, 30];
}
```

### Object

```javascript
function getUser() {
    return {
        name: "Rohit",
        age: 23
    };
}
```

---

# 9. return with Condition

`return` ko conditions ke saath use karna common hai.

```javascript
function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(checkAge(23));
```

Output:

```text
Adult
```

Another example:

```javascript
console.log(checkAge(15));
```

Output:

```text
Minor
```

---

# 10. Multiple return Statements

Ek function mein multiple `return` statements ho sakte hain.

```javascript
function checkNumber(number) {

    if (number > 0) {
        return "Positive";
    }

    if (number < 0) {
        return "Negative";
    }

    return "Zero";
}
```

Example:

```javascript
console.log(checkNumber(10));
```

Output:

```text
Positive
```

Only one return executes for a particular function call because the first executed `return` ends the function.

---

# 11. return with Calculation

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(500, 3);

console.log(total);
```

Output:

```text
1500
```

---

# 12. Using Returned Value in Another Calculation

Returned value ko kisi aur calculation mein use kar sakte hain.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

let finalResult = result * 2;

console.log(finalResult);
```

Output:

```text
60
```

Flow:

```text
add(10, 20)
     ↓
    30
     ↓
30 × 2
     ↓
    60
```

---

# 13. Function Calling Another Function

Ek function doosre function ki returned value use kar sakta hai.

```javascript
function add(a, b) {
    return a + b;
}

function double(number) {
    return number * 2;
}

let result = double(add(10, 20));

console.log(result);
```

Output:

```text
60
```

Process:

```text
add(10, 20)
     ↓
    30
     ↓
double(30)
     ↓
    60
```

---

# 14. Returning an Array

```javascript
function getColors() {

    return ["Red", "Green", "Blue"];
}

let colors = getColors();

console.log(colors);
```

Output:

```text
["Red", "Green", "Blue"]
```

You can then use array methods:

```javascript
console.log(colors[0]);
```

Output:

```text
Red
```

---

# 15. Returning an Object

```javascript
function getUser() {

    return {
        name: "Rohit",
        age: 23,
        course: "MCA"
    };
}

let user = getUser();

console.log(user.name);
```

Output:

```text
Rohit
```

---

# 16. return with Template Literals

```javascript
function greet(name) {
    return `Hello ${name}`;
}

let message = greet("Rohit");

console.log(message);
```

Output:

```text
Hello Rohit
```

---

# 17. Practical Example

Create a function that calculates a student's result:

```javascript
function calculatePercentage(marks, total) {

    return (marks / total) * 100;
}

let percentage = calculatePercentage(450, 500);

console.log(`Percentage: ${percentage}%`);
```

Output:

```text
Percentage: 90%
```

---

# 18. Another Practical Example

Check whether a number is even or odd:

```javascript
function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEvenOdd(10));
```

Output:

```text
Even
```

---

# Important Points

- `return` sends a value from a function back to where the function was called.
- Returned values can be stored in variables.
- `return` stops the function's execution.
- A function without a return value returns `undefined`.
- A function can return numbers, strings, booleans, arrays, objects, etc.
- A function can have multiple `return` statements.
- Only the first executed `return` ends that particular function call.
- Returned values can be used in other calculations or functions.

---

# Quick Revision

### Basic return

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

### Condition

```javascript
function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}
```

### Array

```javascript
function getNumbers() {
    return [10, 20, 30];
}
```

### Object

```javascript
function getUser() {
    return {
        name: "Rohit",
        age: 23
    };
}
```

### Remember

```text
console.log() → Shows the value

return        → Sends the value back

return        → Also stops the function
```