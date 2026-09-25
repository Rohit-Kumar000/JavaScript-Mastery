# JavaScript for...of Loop

## 1. What is for...of?

`for...of` loop ka use kisi **iterable** ke values ko one by one access karne ke liye hota hai.

Common iterables:

- Arrays
- Strings
- Sets
- Maps

Beginner level par sabse zyada `Array` aur `String` ke saath use hoga.

---

# 2. Basic Syntax

```javascript
for (let value of iterable) {
    // code
}
```

Example:

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

Yahan:

```text
fruit → current value
fruits → iterable
```

---

# 3. How for...of Works

Array:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

`for...of` automatically values ko one by one leta hai:

```text
Apple
↓
Mango
↓
Banana
```

Isliye hume manually:

```javascript
fruits[i]
```

use karne ki zarurat nahi padti.

---

# 4. for Loop vs for...of

### Normal for loop

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### for...of

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

`for...of` simpler aur readable hai jab hume directly **values** chahiye.

---

# 5. for...of with String

String bhi iterable hoti hai.

```javascript
let name = "Rohit";

for (let character of name) {
    console.log(character);
}
```

Output:

```text
R
o
h
i
t
```

Har iteration mein ek character milta hai.

---

# 6. for...of with Array

```javascript
let numbers = [10, 20, 30, 40];

for (let number of numbers) {
    console.log(number);
}
```

Output:

```text
10
20
30
40
```

---

# 7. for...of with Calculations

```javascript
let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number * 2);
}
```

Output:

```text
20
40
60
```

---

# 8. Sum of Array Values

```javascript
let numbers = [10, 20, 30, 40];

let sum = 0;

for (let number of numbers) {
    sum = sum + number;
}

console.log(sum);
```

Output:

```text
100
```

Calculation:

```text
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100
```

---

# 9. for...of with break

`break` loop ko completely stop kar deta hai.

```javascript
let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {

    if (number === 30) {
        break;
    }

    console.log(number);
}
```

Output:

```text
10
20
```

Jab `number` `30` hua, loop stop ho gaya.

---

# 10. for...of with continue

`continue` current iteration ko skip karta hai.

```javascript
let numbers = [10, 20, 30, 40];

for (let number of numbers) {

    if (number === 30) {
        continue;
    }

    console.log(number);
}
```

Output:

```text
10
20
40
```

`30` skip ho gaya.

---

# 11. for...of with Index

Normally `for...of` direct value deta hai, index nahi.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Agar index bhi chahiye, `entries()` use kar sakte hain:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
```

Output:

```text
0 Apple
1 Mango
2 Banana
```

---

# 12. for...of with Set

`Set` ke values bhi iterate kar sakte hain.

```javascript
let numbers = new Set([10, 20, 30]);

for (let number of numbers) {
    console.log(number);
}
```

Output:

```text
10
20
30
```

---

# 13. Important: Object with for...of

Normal object directly `for...of` ke saath iterable nahi hota.

Example:

```javascript
let user = {
    name: "Rohit",
    age: 23
};

for (let value of user) {
    console.log(value);
}
```

❌ Error

Objects ke liye commonly:

```javascript
Object.keys()
Object.values()
Object.entries()
```

use kiye jaate hain.

Example:

```javascript
let user = {
    name: "Rohit",
    age: 23
};

for (let value of Object.values(user)) {
    console.log(value);
}
```

Output:

```text
Rohit
23
```

Is topic ko hum Objects ke section mein detail mein padhenge.

---

# 14. for...of vs for...in

Ye difference important hai.

### for...of

Values deta hai:

```javascript
let fruits = ["Apple", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
```

### for...in

Keys/indexes deta hai:

```javascript
let fruits = ["Apple", "Mango"];

for (let index in fruits) {
    console.log(index);
}
```

Output:

```text
0
1
```

Remember:

```text
for...of → values
for...in → keys/indexes
```

---

# 15. Common Mistake

`for...of` mein variable ko manually array index samajhne ki mistake mat karo.

Example:

```javascript
let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}
```

Yahan:

```text
number = 10
number = 20
number = 30
```

`number` mein index nahi aa raha.

---

# Important Points

- `for...of` iterable values ko one by one access karta hai.
- Arrays aur strings ke saath commonly use hota hai.
- Direct values milti hain.
- Index automatically nahi milta.
- `entries()` se index + value dono mil sakte hain.
- `break` loop stop karta hai.
- `continue` current iteration skip karta hai.
- Normal objects directly `for...of` se iterate nahi hote.

---

# Quick Revision

### Array

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

### String

```javascript
let name = "Rohit";

for (let character of name) {
    console.log(character);
}
```

### Remember

```text
for...of → Value
```

Example:

```text
Array → ["A", "B", "C"]

for...of
   ↓
"A"
"B"
"C"
```

`for...of` ka main purpose hai:

> **Iterable ke values ko easily one by one access karna.**