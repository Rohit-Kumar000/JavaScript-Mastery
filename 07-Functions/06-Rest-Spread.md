# JavaScript Rest and Spread Operator

The `...` syntax is used for both **Rest** and **Spread**.

They look the same, but their purpose is different.

```text
Rest   → Collect values
Spread → Expand values
```

---

# 1. Rest Operator

Rest operator `...` is used to **collect multiple values into one array**.

Example:

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

It collects all remaining arguments into an array.

---

# 2. Rest with Normal Parameters

You can use normal parameters before the rest parameter.

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

Here:

```text
name     → "Rohit"
subjects → ["JavaScript", "HTML", "CSS"]
```

Important:

> Rest parameter must always be the last parameter.

Correct:

```javascript
function test(a, b, ...rest) {}
```

Incorrect:

```javascript
function test(...rest, a) {}
```

---

# 3. Rest Example: Sum of Numbers

Rest is useful when the number of arguments is unknown.

```javascript
function calculateTotal(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(calculateTotal(10, 20, 30));
```

Output:

```text
60
```

Another example:

```javascript
console.log(calculateTotal(10, 20, 30, 40, 50));
```

Output:

```text
150
```

---

# 4. Rest with Destructuring

Rest can also be used with array destructuring.

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

# 5. Spread Operator

Spread operator is used to **expand** the values of an array, object, or other iterable into another place.

Example:

```javascript
let numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```text
10 20 30
```

The array:

```text
[10, 20, 30]
```

is expanded into:

```text
10 20 30
```

---

# 6. Spread with Array

You can copy an array using spread.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let newFruits = [...fruits];

console.log(newFruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

Now `newFruits` is a new array.

---

# 7. Combining Arrays

Spread makes it easy to combine arrays.

```javascript
let fruits = ["Apple", "Mango"];
let vegetables = ["Potato", "Tomato"];

let food = [...fruits, ...vegetables];

console.log(food);
```

Output:

```text
["Apple", "Mango", "Potato", "Tomato"]
```

---

# 8. Adding Values While Using Spread

```javascript
let numbers = [20, 30, 40];

let newNumbers = [10, ...numbers, 50];

console.log(newNumbers);
```

Output:

```text
[10, 20, 30, 40, 50]
```

You can add values before or after the spread values.

---

# 9. Spread with Function Arguments

Suppose we have:

```javascript
function add(a, b, c) {
    return a + b + c;
}
```

And an array:

```javascript
let numbers = [10, 20, 30];
```

Without spread:

```javascript
add(numbers[0], numbers[1], numbers[2]);
```

With spread:

```javascript
add(...numbers);
```

Output:

```text
60
```

The array:

```text
[10, 20, 30]
```

becomes:

```text
10, 20, 30
```

as function arguments.

---

# 10. Spread with Objects

Spread can also be used with objects.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let newUser = {
    ...user
};

console.log(newUser);
```

Output:

```text
{
    name: "Rohit",
    age: 23
}
```

---

# 11. Combining Objects

```javascript
let user = {
    name: "Rohit"
};

let details = {
    age: 23,
    course: "MCA"
};

let student = {
    ...user,
    ...details
};

console.log(student);
```

Output:

```text
{
    name: "Rohit",
    age: 23,
    course: "MCA"
}
```

---

# 12. Updating Object Values with Spread

If the same property appears more than once, the later value generally overwrites the earlier value.

```javascript
let user = {
    name: "Rohit",
    age: 23
};

let updatedUser = {
    ...user,
    age: 24
};

console.log(updatedUser);
```

Output:

```text
{
    name: "Rohit",
    age: 24
}
```

The later `age: 24` replaces `age: 23`.

---

# 13. Rest vs Spread

This is very important.

### Rest

Rest **collects** values.

```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30);
```

Result:

```text
[10, 20, 30]
```

### Spread

Spread **expands** values.

```javascript
let numbers = [10, 20, 30];

console.log(...numbers);
```

Result:

```text
10 20 30
```

Remember:

```text
Rest   → Collect
Spread → Expand
```

---

# 14. Same `...` but Different Purpose

Rest:

```javascript
function test(...values) {
    console.log(values);
}
```

Here values are being **collected**.

Spread:

```javascript
let values = [10, 20, 30];

console.log(...values);
```

Here values are being **expanded**.

So the position/context tells you whether `...` is Rest or Spread.

---

# 15. Rest with Arrow Function

Rest works with arrow functions too.

```javascript
const add = (...numbers) => {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
};

console.log(add(10, 20, 30));
```

Output:

```text
60
```

---

# 16. Spread and Strings

Spread can expand a string into individual characters.

```javascript
let name = "Rohit";

console.log(...name);
```

Output:

```text
R o h i t
```

You can also create an array:

```javascript
let letters = [...name];

console.log(letters);
```

Output:

```text
["R", "o", "h", "i", "t"]
```

---

# 17. Practical Example

Suppose two students have different subjects:

```javascript
let student1 = ["JavaScript", "HTML"];
let student2 = ["CSS", "React"];

let allSubjects = [...student1, ...student2];

console.log(allSubjects);
```

Output:

```text
["JavaScript", "HTML", "CSS", "React"]
```

---

# 18. Practical Example with Object

```javascript
let basicInfo = {
    name: "Rohit",
    age: 23
};

let education = {
    course: "MCA",
    skill: "JavaScript"
};

let student = {
    ...basicInfo,
    ...education
};

console.log(student);
```

Output:

```text
{
    name: "Rohit",
    age: 23,
    course: "MCA",
    skill: "JavaScript"
}
```

---

# Important Points

- Both Rest and Spread use `...`.
- Rest collects multiple values.
- Spread expands values.
- Rest is commonly used in function parameters.
- Rest parameter must be the last parameter.
- Spread can copy arrays.
- Spread can combine arrays.
- Spread can pass array values as function arguments.
- Spread can copy and combine objects.
- If duplicate object properties exist, the later property value wins.

---

# Quick Revision

### Rest

```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30);
```

```text
[10, 20, 30]
```

### Array Spread

```javascript
let a = [10, 20];
let b = [...a, 30];

console.log(b);
```

```text
[10, 20, 30]
```

### Combine Arrays

```javascript
let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];
```

```text
[1, 2, 3, 4]
```

### Object Spread

```javascript
let user = {
    name: "Rohit"
};

let newUser = {
    ...user,
    age: 23
};
```

### Remember

```text
... in function parameters → Rest

... while expanding an array/object → Spread

Rest   = Collect
Spread = Expand
```

**07-Functions complete ✅**

Next folder:

```text
08-Objects
```

First file:

```text
01-Object-Basics.md
```