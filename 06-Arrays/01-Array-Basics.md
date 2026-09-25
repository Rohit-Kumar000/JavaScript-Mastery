# JavaScript Array Basics

## 1. What is an Array?

An **Array** is a special data structure used to store **multiple values in a single variable**.

Without an array:

```javascript
let fruit1 = "Apple";
let fruit2 = "Mango";
let fruit3 = "Banana";
```

With an array:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

So:

```text
Array = Collection of multiple values
```

---

# 2. Creating an Array

Use square brackets `[]`.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

An array can contain different types of values:

```javascript
let data = ["Rohit", 23, true];
```

Although this is possible, normally it is better to keep related data together.

---

# 3. Array Index

Array indexing starts from **0**.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

Index:

```text
Apple   → 0
Mango   → 1
Banana  → 2
```

So:

```javascript
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Banana
```

---

# 4. Accessing Array Elements

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers[0]);
console.log(numbers[2]);
```

Output:

```text
10
30
```

---

# 5. Changing an Array Element

Arrays are mutable, so their elements can be changed.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```text
["Apple", "Orange", "Banana"]
```

---

# 6. Array Length

`.length` tells us how many elements are present.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length);
```

Output:

```text
3
```

Important:

```text
length = Number of elements
```

---

# 7. Last Element

To access the last element:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[fruits.length - 1]);
```

Output:

```text
Banana
```

Why?

```text
length = 3
last index = 3 - 1 = 2
```

---

# 8. Empty Array

An array can also be created empty.

```javascript
let fruits = [];
```

Later we can add elements:

```javascript
fruits[0] = "Apple";
fruits[1] = "Mango";

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

---

# 9. Adding Elements Using Index

You can directly add an element at an index.

```javascript
let fruits = [];

fruits[0] = "Apple";
fruits[1] = "Mango";
fruits[2] = "Banana";
```

---

# 10. Array Can Store Different Data Types

JavaScript arrays can contain different types:

```javascript
let data = [
    "Rohit",
    23,
    true,
    null
];
```

Access:

```javascript
console.log(data[0]); // Rohit
console.log(data[1]); // 23
console.log(data[2]); // true
console.log(data[3]); // null
```

---

# 11. Array Inside Array

An array can contain another array.

This is called a **nested array**.

```javascript
let numbers = [
    [1, 2, 3],
    [4, 5, 6]
];
```

Access:

```javascript
console.log(numbers[0]);
```

Output:

```text
[1, 2, 3]
```

To access `2`:

```javascript
console.log(numbers[0][1]);
```

Output:

```text
2
```

---

# 12. Checking Array

`typeof` se array ko identify karna confusing ho sakta hai:

```javascript
let fruits = ["Apple", "Mango"];

console.log(typeof fruits);
```

Output:

```text
object
```

Arrays are technically objects in JavaScript.

To properly check whether something is an array, use:

```javascript
Array.isArray(fruits);
```

Output:

```text
true
```

Example:

```javascript
console.log(Array.isArray("Rohit"));
```

Output:

```text
false
```

---

# 13. Array with Strings

```javascript
let names = ["Rohit", "Aman", "Rahul"];

console.log(names[0]);
```

Output:

```text
Rohit
```

---

# 14. Array with Numbers

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers[2]);
```

Output:

```text
30
```

---

# 15. Array with Boolean Values

```javascript
let values = [true, false, true];

console.log(values[1]);
```

Output:

```text
false
```

---

# 16. Loop Through an Array

### Using for loop

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Output:

```text
Apple
Mango
Banana
```

---

# 17. Using for...of

Arrays are iterable, so `for...of` can be used.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
Banana
```

Remember:

```text
for...of → values
```

---

# 18. Array and Memory

When you create:

```javascript
let fruits = ["Apple", "Mango"];
```

The variable `fruits` refers to the array.

This is why:

```javascript
let a = [1, 2, 3];
let b = a;

b[0] = 100;

console.log(a);
```

Output:

```text
[100, 2, 3]
```

Both variables refer to the same array.

This concept becomes important later when learning objects and references.

---

# 19. Array Comparison

Two separate arrays are not equal just because their contents look the same.

```javascript
console.log([1, 2, 3] === [1, 2, 3]);
```

Output:

```text
false
```

Because these are two different array objects.

---

# 20. Common Mistake

Remember that indexing starts from `0`.

Wrong assumption:

```text
First element → 1
```

Correct:

```text
First element → 0
Second element → 1
Third element → 2
```

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
```

---

# Important Points

- Array stores multiple values.
- Arrays use square brackets `[]`.
- Array indexing starts from `0`.
- `.length` gives the number of elements.
- Array elements can be changed.
- Arrays can contain different data types.
- Arrays can contain other arrays.
- `Array.isArray()` checks whether a value is an array.
- `for` and `for...of` can be used to loop through arrays.
- The last index is always `length - 1`.

---

# Quick Revision

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

```text
Index:
0 → Apple
1 → Mango
2 → Banana
```

```javascript
fruits[0];                  // Apple
fruits[1];                  // Mango
fruits.length;              // 3
fruits[fruits.length - 1];  // Banana
```

Change value:

```javascript
fruits[1] = "Orange";
```

Check array:

```javascript
Array.isArray(fruits); // true
```

Loop:

```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```

### Remember

```text
Array = Multiple values in one variable

Index starts from 0

length = Number of elements

Last index = length - 1

[index] = Access an element
```