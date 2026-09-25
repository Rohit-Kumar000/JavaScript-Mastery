# JavaScript Array Iteration Methods

Array iteration methods ka use array ke **har element par operation perform** karne ke liye hota hai.

Example:

```javascript
let numbers = [10, 20, 30, 40];
```

Important methods:

```text
forEach()
map()
filter()
find()
findIndex()
some()
every()
reduce()
```

---

# 1. forEach()

`forEach()` array ke **har element par ek function run** karta hai.

```javascript
let numbers = [10, 20, 30];

numbers.forEach(function(number) {
    console.log(number);
});
```

Output:

```text
10
20
30
```

### Arrow Function

```javascript
numbers.forEach((number) => {
    console.log(number);
});
```

---

# 2. forEach() with Index

`forEach()` mein element ke saath index bhi mil sakta hai.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Mango
2 Banana
```

Basic structure:

```javascript
array.forEach((element, index) => {
    // code
});
```

---

# 3. map()

`map()` array ke **har element ko transform** karke ek **new array** return karta hai.

Example:

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map((number) => {
    return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

Original array:

```javascript
console.log(numbers);
```

Output:

```text
[1, 2, 3, 4]
```

So:

```text
map() → New array
```

---

# 4. map() Short Form

```javascript
let numbers = [1, 2, 3, 4];

let result = numbers.map(number => number * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

---

# 5. forEach vs map

This is very important.

### forEach()

```javascript
let numbers = [1, 2, 3];

numbers.forEach(number => {
    console.log(number * 2);
});
```

Main purpose:

```text
forEach() → Do something with each element
```

### map()

```javascript
let result = numbers.map(number => number * 2);
```

Main purpose:

```text
map() → Create a new array
```

Remember:

```text
forEach → performs action
map     → transforms array
```

---

# 6. filter()

`filter()` condition ke basis par elements select karta hai.

It returns a **new array**.

Example:

```javascript
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(number => number > 20);

console.log(result);
```

Output:

```text
[25, 30]
```

Only values satisfying the condition are included.

---

# 7. filter() Example

Even numbers:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[2, 4, 6]
```

---

# 8. find()

`find()` array mein **first element** return karta hai jo condition satisfy karta hai.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.find(number => number > 20);

console.log(result);
```

Output:

```text
30
```

Important:

```text
find() → Only first matching element
```

---

# 9. find() When Nothing Matches

```javascript
let numbers = [10, 20, 30];

let result = numbers.find(number => number > 100);

console.log(result);
```

Output:

```text
undefined
```

---

# 10. findIndex()

`findIndex()` first matching element ka **index** return karta hai.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.findIndex(number => number > 20);

console.log(result);
```

Output:

```text
2
```

Because:

```text
10 → index 0
20 → index 1
30 → index 2
```

---

# 11. some()

`some()` check karta hai ki **at least one element** condition satisfy karta hai ya nahi.

It returns `true` or `false`.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.some(number => number > 30);

console.log(result);
```

Output:

```text
true
```

Because `40 > 30`.

---

# 12. some() Example

```javascript
let numbers = [1, 3, 5, 8];

let result = numbers.some(number => number % 2 === 0);

console.log(result);
```

Output:

```text
true
```

Because at least one even number exists.

Remember:

```text
some() → At least ONE
```

---

# 13. every()

`every()` check karta hai ki **all elements** condition satisfy karte hain ya nahi.

```javascript
let numbers = [10, 20, 30, 40];

let result = numbers.every(number => number > 5);

console.log(result);
```

Output:

```text
true
```

All numbers are greater than 5.

---

# 14. every() Example

```javascript
let numbers = [2, 4, 6, 8];

let result = numbers.every(number => number % 2 === 0);

console.log(result);
```

Output:

```text
true
```

But:

```javascript
let numbers = [2, 4, 5, 8];

let result = numbers.every(number => number % 2 === 0);

console.log(result);
```

Output:

```text
false
```

Because `5` is not even.

Remember:

```text
every() → ALL
```

---

# 15. reduce()

`reduce()` array ke elements ko process karke **single value** produce karta hai.

Example: Sum

```javascript
let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
100
```

Here:

```text
0 → Initial value
sum → Accumulator
number → Current element
```

---

# 16. How reduce() Works

For:

```javascript
let numbers = [10, 20, 30];
```

With initial value `0`:

```text
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
```

Final result:

```text
60
```

---

# 17. reduce() Example

Find total price:

```javascript
let prices = [100, 200, 300];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
```

Output:

```text
600
```

---

# 18. reduce() for Maximum Value

```javascript
let numbers = [10, 50, 20, 80, 30];

let max = numbers.reduce((maximum, number) => {
    return number > maximum ? number : maximum;
}, numbers[0]);

console.log(max);
```

Output:

```text
80
```

---

# 19. Chaining Methods

Array methods ko ek saath use kar sakte hain.

Example:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(result);
```

Output:

```text
[4, 8, 12]
```

Process:

```text
Original
[1, 2, 3, 4, 5, 6]

      ↓ filter()

[2, 4, 6]

      ↓ map()

[4, 8, 12]
```

---

# 20. Important Difference

| Method | Returns |
|---|---|
| `forEach()` | `undefined` |
| `map()` | New array |
| `filter()` | New array |
| `find()` | First matching value |
| `findIndex()` | First matching index |
| `some()` | `true / false` |
| `every()` | `true / false` |
| `reduce()` | Single value |

---

# 21. Easy Way to Remember

```text
forEach()
→ Do something for every element

map()
→ Change every element and create new array

filter()
→ Select matching elements

find()
→ Find first matching element

findIndex()
→ Find first matching index

some()
→ Is at least one matching?

every()
→ Are all matching?

reduce()
→ Convert many values into one result
```

---

# 22. Practical Example

Suppose:

```javascript
let marks = [45, 80, 32, 90, 65];
```

### Print all marks

```javascript
marks.forEach(mark => {
    console.log(mark);
});
```

### Add 5 marks

```javascript
let updatedMarks = marks.map(mark => mark + 5);
```

### Find passing marks

```javascript
let passed = marks.filter(mark => mark >= 40);
```

### Find first mark above 80

```javascript
let result = marks.find(mark => mark > 80);
```

### Check if any mark is above 90

```javascript
let result = marks.some(mark => mark > 90);
```

### Check if all marks are above 30

```javascript
let result = marks.every(mark => mark > 30);
```

### Calculate total

```javascript
let total = marks.reduce((sum, mark) => sum + mark, 0);
```

---

# Quick Revision

```javascript
let numbers = [1, 2, 3, 4, 5];
```

```javascript
numbers.forEach(number => console.log(number));
```

```javascript
numbers.map(number => number * 2);
```

```javascript
numbers.filter(number => number > 2);
```

```javascript
numbers.find(number => number > 2);
```

```javascript
numbers.findIndex(number => number > 2);
```

```javascript
numbers.some(number => number > 4);
```

```javascript
numbers.every(number => number > 0);
```

```javascript
numbers.reduce((sum, number) => sum + number, 0);
```

### Remember

```text
forEach → Every element par action
map     → New array
filter  → Matching elements
find    → First matching value
findIndex → First matching index
some    → At least one
every   → All
reduce  → Many values → One value
```