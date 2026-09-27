# JavaScript Destructuring

## 1. What is Destructuring?

Destructuring ka matlab hai:

> Array ya Object se values ko easily variables mein extract karna.

Instead of writing multiple lines, we can extract values in a clean way.

---

# 2. Array Destructuring

Normal way:

```javascript
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
const third = numbers[2];
```

Using destructuring:

```javascript
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
10
20
30
```

---

# 3. Skipping Values

You can skip an array value using a comma.

```javascript
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output:

```text
10
30
```

Here the second value was skipped.

---

# 4. Default Values

You can provide a default value.

```javascript
const numbers = [10, 20];

const [a, b, c = 30] = numbers;

console.log(c);
```

Output:

```text
30
```

If the array does not provide a value, the default value is used.

---

# 5. Swapping Variables

Destructuring makes swapping values very easy.

Normal way:

```javascript
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;
```

Using destructuring:

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
```

Output:

```text
20
10
```

---

# 6. Object Destructuring

Objects contain key-value pairs.

```javascript
const user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};
```

Normal way:

```javascript
const name = user.name;
const age = user.age;
const city = user.city;
```

Using destructuring:

```javascript
const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

---

# 7. Object Destructuring Uses Property Names

Important:

```javascript
const user = {
    name: "Rohit",
    age: 23
};

const { name, age } = user;
```

Here:

```text
name → user.name
age  → user.age
```

Unlike arrays, object destructuring uses **property names**, not positions.

---

# 8. Changing Variable Names

Suppose object has:

```javascript
const user = {
    name: "Rohit",
    age: 23
};
```

You want a different variable name.

Use:

```javascript
const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
```

Output:

```text
Rohit
23
```

Here:

```text
name → userName
age  → userAge
```

---

# 9. Default Values in Objects

```javascript
const user = {
    name: "Rohit"
};

const { name, city = "Mohali" } = user;

console.log(name);
console.log(city);
```

Output:

```text
Rohit
Mohali
```

Because `city` was not present in the object.

---

# 10. Nested Destructuring

Objects can contain other objects.

```javascript
const user = {
    name: "Rohit",
    address: {
        city: "Mohali",
        state: "Punjab"
    }
};
```

We can destructure:

```javascript
const {
    address: { city, state }
} = user;

console.log(city);
console.log(state);
```

Output:

```text
Mohali
Punjab
```

---

# 11. Destructuring in Function Parameters

Destructuring is commonly used in functions.

```javascript
function showUser({ name, age }) {
    console.log(name);
    console.log(age);
}

const user = {
    name: "Rohit",
    age: 23
};

showUser(user);
```

Output:

```text
Rohit
23
```

This is very common in modern JavaScript.

---

# 12. Array Destructuring in Functions

```javascript
function showNumbers([a, b]) {
    console.log(a);
    console.log(b);
}

showNumbers([10, 20]);
```

Output:

```text
10
20
```

---

# 13. Destructuring with `const`

Most of the time:

```javascript
const [a, b] = [10, 20];
```

or:

```javascript
const { name, age } = user;
```

is used when the extracted variables will not be reassigned.

---

# 14. Destructuring with `let`

Use `let` if the variables need to change later.

```javascript
let [a, b] = [10, 20];

a = 50;

console.log(a);
```

Output:

```text
50
```

---

# 15. Array vs Object Destructuring

### Array

```javascript
const [a, b] = [10, 20];
```

Works based on **position**:

```text
1st value → a
2nd value → b
```

### Object

```javascript
const { name, age } = user;
```

Works based on **property name**:

```text
name property → name
age property  → age
```

---

# Quick Revision

### Array Destructuring

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
```

### Skip Value

```javascript
const [a, , c] = numbers;
```

### Default Value

```javascript
const [a, b, c = 30] = numbers;
```

### Object Destructuring

```javascript
const user = {
    name: "Rohit",
    age: 23
};

const { name, age } = user;
```

### Rename

```javascript
const { name: userName } = user;
```

### Function

```javascript
function showUser({ name, age }) {
    console.log(name, age);
}
```

---

# Remember

```text
Array
→ [ ]

Object
→ { }

Array destructuring
→ Position based

Object destructuring
→ Property-name based
```

Destructuring is mainly used to make code:

```text
Shorter
Cleaner
Easier to read
```

---

## Next File

```text
12-Modern-JavaScript/03-Spread-Rest.md
```

Next we will learn **Spread (`...`) and Rest (`...`) operators**.