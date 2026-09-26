# JavaScript Destructuring

## 1. What is Destructuring?

**Destructuring** is a convenient way to take values from an array or object and store them in variables.

Simple:

```text
Destructuring = Taking values out of arrays/objects easily
```

There are two main types:

```text
1. Array Destructuring
2. Object Destructuring
```

---

# 2. Object Destructuring

Suppose we have:

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali"
};
```

Normally, we access values like:

```javascript
console.log(user.name);
console.log(user.age);
console.log(user.city);
```

With destructuring:

```javascript
let { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

Output:

```text
Rohit
23
Mohali
```

The object properties are directly stored in variables.

---

# 3. How Object Destructuring Works

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let { name, age } = user;
```

Think of it like:

```text
user.name → name
user.age  → age
```

Important:

> Object destructuring normally matches variables with property names.

---

# 4. Destructuring with Different Variable Names

You can give the extracted value a different variable name.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let { name: userName, age: userAge } = user;

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

Syntax:

```javascript
let { propertyName: variableName } = object;
```

---

# 5. Default Values

You can provide a default value if a property doesn't exist.

```javascript
let user = {
    name: "Rohit"
};

let { name, age = 23 } = user;

console.log(name);
console.log(age);
```

Output:

```text
Rohit
23
```

Because `age` doesn't exist in the object, the default value `23` is used.

---

# 6. Existing Value vs Default Value

If the property already exists, the existing value is used.

```javascript
let user = {
    name: "Rohit",
    age: 25
};

let { age = 23 } = user;

console.log(age);
```

Output:

```text
25
```

The default value is only used when the property value is `undefined`.

---

# 7. Nested Object Destructuring

Objects can contain other objects.

```javascript
let user = {
    name: "Rohit",

    address: {
        city: "Mohali",
        state: "Punjab"
    }
};
```

You can destructure the nested object:

```javascript
let {
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

# 8. Rest with Object Destructuring

You can use `...` to collect the remaining properties.

```javascript
let user = {
    name: "Rohit",
    age: 23,
    city: "Mohali",
    course: "MCA"
};

let { name, ...otherDetails } = user;

console.log(name);
console.log(otherDetails);
```

Output:

```text
Rohit

{
    age: 23,
    city: "Mohali",
    course: "MCA"
}
```

Here:

```text
name         → "Rohit"
otherDetails → remaining properties
```

---

# 9. Array Destructuring

Array destructuring works based on **position**.

Example:

```javascript
let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);
```

Output:

```text
10
20
30
```

Here:

```text
a → numbers[0]
b → numbers[1]
c → numbers[2]
```

---

# 10. Array Destructuring with Fewer Variables

You don't need to take every value.

```javascript
let numbers = [10, 20, 30, 40];

let [a, b] = numbers;

console.log(a);
console.log(b);
```

Output:

```text
10
20
```

The remaining values are ignored.

---

# 11. Skipping Array Values

You can skip values using commas.

```javascript
let numbers = [10, 20, 30];

let [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output:

```text
10
30
```

Here:

```text
first → 10
20    → skipped
third → 30
```

---

# 12. Default Values in Arrays

You can provide default values.

```javascript
let numbers = [10];

let [a, b = 20] = numbers;

console.log(a);
console.log(b);
```

Output:

```text
10
20
```

---

# 13. Rest with Array Destructuring

You can collect remaining values using `...`.

```javascript
let numbers = [10, 20, 30, 40, 50];

let [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);
```

Output:

```text
10
20
[30, 40, 50]
```

Here:

```text
first     → 10
second    → 20
remaining → [30, 40, 50]
```

---

# 14. Swapping Variables

Destructuring makes swapping variables very easy.

Normally:

```javascript
let a = 10;
let b = 20;
```

Swap using destructuring:

```javascript
[a, b] = [b, a];

console.log(a);
console.log(b);
```

Output:

```text
20
10
```

No temporary variable is required.

---

# 15. Destructuring Function Parameters

You can destructure an object directly inside a function parameter.

```javascript
function introduce({ name, age }) {
    console.log(`My name is ${name}`);
    console.log(`My age is ${age}`);
}

let user = {
    name: "Rohit",
    age: 23
};

introduce(user);
```

Output:

```text
My name is Rohit
My age is 23
```

This is very common in modern JavaScript.

---

# 16. Destructuring Array Function Parameters

You can also destructure arrays in function parameters.

```javascript
function show([first, second]) {
    console.log(first);
    console.log(second);
}

show([10, 20]);
```

Output:

```text
10
20
```

---

# 17. Destructuring with Function Return

A function can return an object.

```javascript
function getUser() {
    return {
        name: "Rohit",
        age: 23
    };
}

let { name, age } = getUser();

console.log(name);
console.log(age);
```

Output:

```text
Rohit
23
```

This is useful when a function returns multiple related values.

---

# 18. Object Destructuring vs Array Destructuring

### Object

Object destructuring uses property names:

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let { name, age } = user;
```

### Array

Array destructuring uses position:

```javascript
let numbers = [10, 20];

let [a, b] = numbers;
```

Remember:

```text
Object → Property name matters

Array  → Position matters
```

---

# 19. Practical Example

```javascript
let student = {
    name: "Rohit",
    age: 23,
    course: "MCA",
    skills: ["HTML", "CSS", "JavaScript"]
};

let {
    name,
    age,
    course,
    skills
} = student;

console.log(name);
console.log(age);
console.log(course);
console.log(skills);
```

Output:

```text
Rohit
23
MCA
["HTML", "CSS", "JavaScript"]
```

You can also destructure the skills array:

```javascript
let [skill1, skill2, skill3] = skills;

console.log(skill1);
console.log(skill2);
console.log(skill3);
```

Output:

```text
HTML
CSS
JavaScript
```

---

# Important Points

- Destructuring makes extracting values easier.
- Object destructuring uses `{}`.
- Array destructuring uses `[]`.
- Object destructuring matches property names.
- Array destructuring matches positions.
- You can rename destructured variables.
- You can provide default values.
- You can skip array values.
- Rest `...` can collect remaining values.
- Destructuring can be used in function parameters.
- Destructuring can be used with function return values.
- Variables can be swapped using array destructuring.

---

# Quick Revision

### Object

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let { name, age } = user;
```

### Rename

```javascript
let { name: userName } = user;
```

### Default

```javascript
let { city = "Mohali" } = user;
```

### Object Rest

```javascript
let { name, ...details } = user;
```

### Array

```javascript
let numbers = [10, 20, 30];

let [a, b, c] = numbers;
```

### Skip

```javascript
let [a, , c] = numbers;
```

### Array Rest

```javascript
let [first, ...remaining] = numbers;
```

### Swap

```javascript
[a, b] = [b, a];
```

### Remember

```text
Destructuring
     ↓
Take values out easily

Object:
{ name, age }

Array:
[ first, second ]
```

**Next file:**

```text
08-Objects/05-Object-Methods.md
```

> Note: Tumhare folder structure mein `05-Object-Methods.md` duplicate hai. Since object methods already `02-Object-Methods.md` mein cover ho chuke hain, is file ko baad mein **Object Utilities / Advanced Object Operations** ke liye use karna better rahega.