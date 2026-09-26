# JavaScript Parameters and Arguments

## 1. What are Parameters?

**Parameters** are variables written inside the function definition.

Example:

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}
```

Here:

```text
name → Parameter
```

The parameter receives a value when the function is called.

---

# 2. What are Arguments?

**Arguments** are the actual values that we pass to a function when calling it.

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Rohit");
```

Here:

```text
name   → Parameter
"Rohit" → Argument
```

Easy way:

```text
Parameter → Function ke andar variable
Argument  → Function call ke time actual value
```

---

# 3. Example

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Here:

```text
a → Parameter
b → Parameter

10 → Argument
20 → Argument
```

Output:

```text
30
```

---

# 4. Multiple Parameters

A function can have multiple parameters.

```javascript
function student(name, age, course) {
    console.log(name);
    console.log(age);
    console.log(course);
}

student("Rohit", 23, "MCA");
```

Output:

```text
Rohit
23
MCA
```

---

# 5. Arguments Follow Parameter Order

Arguments are assigned according to their position.

```javascript
function introduce(name, age) {
    console.log(name);
    console.log(age);
}

introduce("Rohit", 23);
```

Assignment:

```text
name → "Rohit"
age  → 23
```

If order changes:

```javascript
introduce(23, "Rohit");
```

Then:

```text
name → 23
age  → "Rohit"
```

So the order is important.

---

# 6. Function with No Argument

```javascript
function greet(name) {
    console.log(name);
}

greet();
```

Output:

```text
undefined
```

Because no value was passed for `name`.

---

# 7. Default Parameters

You can give a parameter a default value.

```javascript
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
```

Output:

```text
Hello Guest
```

If an argument is provided:

```javascript
greet("Rohit");
```

Output:

```text
Hello Rohit
```

The provided value replaces the default.

---

# 8. Multiple Default Parameters

```javascript
function student(name = "Unknown", age = 0) {
    console.log(name);
    console.log(age);
}

student();
```

Output:

```text
Unknown
0
```

You can also provide only some values:

```javascript
student("Rohit");
```

Output:

```text
Rohit
0
```

---

# 9. Passing Different Data Types

Parameters can receive different types of values.

String:

```javascript
function greet(name) {
    console.log(name);
}

greet("Rohit");
```

Number:

```javascript
function square(number) {
    console.log(number * number);
}

square(5);
```

Boolean:

```javascript
function check(value) {
    console.log(value);
}

check(true);
```

Array:

```javascript
function printArray(items) {
    console.log(items);
}

printArray([10, 20, 30]);
```

Object:

```javascript
function printUser(user) {
    console.log(user.name);
}

printUser({
    name: "Rohit",
    age: 23
});
```

---

# 10. Passing Expression as Argument

You can pass an expression as an argument.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10 + 5, 20);
```

Output:

```text
35
```

JavaScript first evaluates:

```text
10 + 5 = 15
```

Then:

```text
add(15, 20)
```

---

# 11. Passing a Variable as Argument

```javascript
let age = 23;

function checkAge(userAge) {
    console.log(userAge);
}

checkAge(age);
```

Here:

```text
age     → Argument
userAge → Parameter
```

---

# 12. Passing Multiple Variables

```javascript
let name = "Rohit";
let age = 23;

function introduce(name, age) {
    console.log(`My name is ${name}`);
    console.log(`I am ${age} years old`);
}

introduce(name, age);
```

Output:

```text
My name is Rohit
I am 23 years old
```

---

# 13. Extra Arguments

JavaScript allows you to pass more arguments than there are parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20, 30);
```

Output:

```text
30
```

Here:

```text
a → 10
b → 20
30 → not assigned to a named parameter
```

To work with an arbitrary number of arguments, we can use the **rest parameter**, which is covered later.

---

# 14. Rest Parameters

Rest parameters use `...` to collect remaining arguments into an array.

```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);
```

Output:

```text
[10, 20, 30, 40]
```

Here:

```text
...numbers → Rest parameter
```

---

# 15. Rest Parameter with Normal Parameter

You can combine normal parameters with a rest parameter.

```javascript
function student(name, ...subjects) {
    console.log(name);
    console.log(subjects);
}

student("Rohit", "JavaScript", "HTML", "CSS");
```

Output:

```text
Rohit
["JavaScript", "HTML", "CSS"]
```

Important:

> Rest parameter must be the last parameter.

Correct:

```javascript
function test(a, b, ...rest) {}
```

Incorrect:

```javascript
function test(...rest, a) {}
```

---

# 16. Example: Calculate Total

Rest parameters are useful when the number of arguments is unknown.

```javascript
function calculateTotal(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    console.log(total);
}

calculateTotal(10, 20, 30);
```

Output:

```text
60
```

Another call:

```javascript
calculateTotal(10, 20, 30, 40, 50);
```

Output:

```text
150
```

---

# 17. Parameters vs Arguments

| Parameters | Arguments |
|---|---|
| Function definition mein hote hain | Function call mein hote hain |
| Variables hote hain | Actual values hoti hain |
| Example: `a, b` | Example: `10, 20` |

Example:

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

```text
a, b    → Parameters

10, 20  → Arguments
```

---

# 18. Practical Example

```javascript
function calculateBill(price, quantity) {

    let total = price * quantity;

    console.log(`Total: ₹${total}`);
}

calculateBill(500, 3);
```

Output:

```text
Total: ₹1500
```

Here:

```text
price    → Parameter
quantity → Parameter

500      → Argument
3        → Argument
```

---

# Important Points

- Parameters are variables in a function definition.
- Arguments are actual values passed during the function call.
- Parameters receive arguments according to their position.
- You can use default parameters.
- Parameters can accept strings, numbers, booleans, arrays, objects, etc.
- Extra arguments can be collected using rest parameters.
- Rest parameters use `...`.
- Rest parameter must always be the last parameter.

---

# Quick Revision

### Parameter

```javascript
function greet(name) {
    console.log(name);
}
```

`name` is a parameter.

### Argument

```javascript
greet("Rohit");
```

`"Rohit"` is an argument.

### Default Parameter

```javascript
function greet(name = "Guest") {
    console.log(name);
}
```

### Rest Parameter

```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30);
```

### Remember

```text
Parameter → Function definition
Argument  → Function call

Default parameter → Backup/default value

Rest parameter → Collect multiple arguments
```