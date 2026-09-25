# JavaScript Array Methods

Array methods are built-in methods that help us **add, remove, search, copy, and modify array elements**.

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

---

# 1. push()

`push()` array ke **end mein element add** karta hai.

```javascript
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

Multiple elements bhi add kar sakte hain:

```javascript
fruits.push("Orange", "Grapes");
```

---

# 2. pop()

`pop()` array ke **last element ko remove** karta hai.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.pop();

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

`pop()` removed element ko return bhi karta hai:

```javascript
let removed = fruits.pop();

console.log(removed);
```

---

# 3. unshift()

`unshift()` array ke **beginning mein element add** karta hai.

```javascript
let fruits = ["Mango", "Banana"];

fruits.unshift("Apple");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

---

# 4. shift()

`shift()` array ke **first element ko remove** karta hai.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.shift();

console.log(fruits);
```

Output:

```text
["Mango", "Banana"]
```

---

# 5. push vs pop vs unshift vs shift

Remember this:

```text
push()
→ Add at END

pop()
→ Remove from END

unshift()
→ Add at START

shift()
→ Remove from START
```

Easy diagram:

```text
START                         END
  ↓                            ↓
[ Apple | Mango | Banana ]
  ↑                            ↑
shift() removes              pop() removes

unshift() adds → START
push() adds    → END
```

---

# 6. splice()

`splice()` array ke elements ko **add, remove, ya replace** kar sakta hai.

Syntax:

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

Example:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 1);

console.log(fruits);
```

Output:

```text
["Apple", "Banana"]
```

Yahan:

```text
1 → start index
1 → number of elements to remove
```

---

# 7. splice() Add Element

```javascript
let fruits = ["Apple", "Banana"];

fruits.splice(1, 0, "Mango");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

Yahan:

```text
1 → position
0 → remove nothing
"Mango" → add
```

---

# 8. splice() Replace Element

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.splice(1, 1, "Orange");

console.log(fruits);
```

Output:

```text
["Apple", "Orange", "Banana"]
```

---

# 9. slice()

`slice()` array ke ek portion ki **copy** banata hai.

```javascript
let fruits = ["Apple", "Mango", "Banana", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
```

Output:

```text
["Mango", "Banana"]
```

Important:

```text
Start index → included
End index   → not included
```

---

# 10. splice vs slice

Very important difference:

```text
splice()
→ Original array ko change karta hai

slice()
→ Original array ko change nahi karta
→ New array return karta hai
```

Example:

```javascript
let numbers = [10, 20, 30];

let result = numbers.slice(0, 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[10, 20, 30]
[10, 20]
```

---

# 11. concat()

`concat()` arrays ko combine karta hai.

```javascript
let fruits1 = ["Apple", "Mango"];
let fruits2 = ["Banana", "Orange"];

let fruits = fruits1.concat(fruits2);

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana", "Orange"]
```

Original arrays remain unchanged.

---

# 12. includes()

Checks whether an array contains a value.

Returns `true` or `false`.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

```javascript
console.log(fruits.includes("Orange"));
```

Output:

```text
false
```

---

# 13. indexOf()

Returns the index of the first matching element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));
```

Output:

```text
1
```

If not found:

```javascript
console.log(fruits.indexOf("Orange"));
```

Output:

```text
-1
```

Remember:

```text
Found     → index
Not found → -1
```

---

# 14. lastIndexOf()

Returns the index of the last occurrence.

```javascript
let numbers = [10, 20, 10, 30];

console.log(numbers.lastIndexOf(10));
```

Output:

```text
2
```

Difference:

```text
indexOf()       → first occurrence
lastIndexOf()   → last occurrence
```

---

# 15. reverse()

`reverse()` array ke order ko reverse karta hai.

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[5, 4, 3, 2, 1]
```

Important:

`reverse()` original array ko change karta hai.

---

# 16. join()

`join()` array ke elements ko ek string mein convert karta hai.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

let result = fruits.join(", ");

console.log(result);
```

Output:

```text
Apple, Mango, Banana
```

Another example:

```javascript
let numbers = [1, 2, 3];

console.log(numbers.join("-"));
```

Output:

```text
1-2-3
```

---

# 17. sort()

`sort()` array ko sort karta hai.

Strings:

```javascript
let fruits = ["Banana", "Apple", "Mango"];

fruits.sort();

console.log(fruits);
```

Output:

```text
["Apple", "Banana", "Mango"]
```

### Numbers ke saath Important

Simple:

```javascript
let numbers = [10, 2, 30, 5];

numbers.sort();

console.log(numbers);
```

Unexpected result aa sakta hai because default `sort()` values ko strings ki tarah compare karta hai.

Numbers ko correctly sort karne ke liye:

```javascript
numbers.sort((a, b) => a - b);
```

Ascending:

```text
2, 5, 10, 30
```

Descending:

```javascript
numbers.sort((a, b) => b - a);
```

---

# 18. flat()

Nested arrays ko flatten karne ke liye `flat()` use hota hai.

```javascript
let numbers = [1, 2, [3, 4]];

console.log(numbers.flat());
```

Output:

```text
[1, 2, 3, 4]
```

---

# 19. flat() with Multiple Levels

```javascript
let numbers = [1, [2, [3, 4]]];

console.log(numbers.flat(2));
```

Output:

```text
[1, 2, 3, 4]
```

---

# 20. at()

`at()` index se element access karta hai.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.at(1));
```

Output:

```text
Mango
```

Negative index bhi use kar sakte hain:

```javascript
console.log(fruits.at(-1));
```

Output:

```text
Banana
```

So:

```text
at(-1) → Last element
at(-2) → Second last element
```

---

# 21. Array Method Categories

### Add / Remove

```text
push()
pop()
unshift()
shift()
splice()
```

### Search

```text
includes()
indexOf()
lastIndexOf()
```

### Copy / Combine

```text
slice()
concat()
```

### Change Order

```text
reverse()
sort()
```

### Convert

```text
join()
```

### Nested Arrays

```text
flat()
```

---

# 22. Important: Mutating Methods

Some methods original array ko change karte hain.

Common examples:

```text
push()
pop()
shift()
unshift()
splice()
reverse()
sort()
```

Example:

```javascript
let numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);
```

Original array changed.

---

# 23. Non-Mutating Methods

Some methods new result return karte hain without changing the original array.

Examples:

```text
slice()
concat()
includes()
indexOf()
join()
```

Example:

```javascript
let numbers = [1, 2, 3];

let result = numbers.slice(0, 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3]
[1, 2]
```

---

# Important Points

- `push()` → end mein add
- `pop()` → end se remove
- `unshift()` → start mein add
- `shift()` → start se remove
- `splice()` → add/remove/replace
- `slice()` → portion ki copy
- `concat()` → arrays combine
- `includes()` → value exists?
- `indexOf()` → first index
- `lastIndexOf()` → last index
- `reverse()` → reverse order
- `sort()` → sort array
- `join()` → array → string
- `flat()` → nested array flatten
- `at()` → index se element

---

# Quick Revision

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

```javascript
fruits.push("Orange");       // Add at end
fruits.pop();                // Remove from end

fruits.unshift("Grapes");    // Add at start
fruits.shift();              // Remove from start

fruits.includes("Mango");    // true

fruits.indexOf("Mango");     // 1

fruits.slice(0, 2);          // Copy portion

fruits.join(", ");           // Array → String
```

### Easy Trick

```text
push     → End + Add
pop      → End - Remove

unshift  → Start + Add
shift    → Start - Remove
```

And remember:

```text
slice  → Copy
splice → Change original
```