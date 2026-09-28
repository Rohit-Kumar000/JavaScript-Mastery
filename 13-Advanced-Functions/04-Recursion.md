# JavaScript Recursion

## 1. What is Recursion?

Jab koi function **khud ko hi call karta hai**, use **Recursion** kehte hain.

Example:

```javascript
function count() {
    console.log("Hello");

    count();
}
```

Yahan `count()` function khud ko call kar raha hai.

⚠️ Lekin ye continuously chalega, isliye recursion mein **stopping condition** zaroori hoti hai.

---

# 2. Base Case

Recursion ko stop karne ke liye **Base Case** use hota hai.

Example:

```javascript
function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1);
}

count(5);
```

Output:

```text
5
4
3
2
1
```

Flow:

```text
count(5)
   ↓
count(4)
   ↓
count(3)
   ↓
count(2)
   ↓
count(1)
   ↓
count(0)
   ↓
Stop
```

---

# 3. Two Important Parts

Every useful recursive function usually has:

```text
1. Base Case
2. Recursive Case
```

Example:

```javascript
function count(n) {

    // Base Case
    if (n === 0) {
        return;
    }

    // Recursive Case
    count(n - 1);
}
```

---

# 4. Print Numbers 1 to 5

```javascript
function printNumbers(n) {

    if (n > 5) {
        return;
    }

    console.log(n);

    printNumbers(n + 1);
}

printNumbers(1);
```

Output:

```text
1
2
3
4
5
```

---

# 5. Factorial Using Recursion

Factorial:

```text
5! = 5 × 4 × 3 × 2 × 1
```

JavaScript:

```javascript
function factorial(n) {

    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
```

Output:

```text
120
```

Flow:

```text
factorial(5)
5 × factorial(4)

factorial(4)
4 × factorial(3)

factorial(3)
3 × factorial(2)

factorial(2)
2 × factorial(1)

factorial(1)
1
```

Then values return back:

```text
2 × 1 = 2
3 × 2 = 6
4 × 6 = 24
5 × 24 = 120
```

---

# 6. Sum of Numbers

Find:

```text
1 + 2 + 3 + 4 + 5
```

Using recursion:

```javascript
function sum(n) {

    if (n === 0) {
        return 0;
    }

    return n + sum(n - 1);
}

console.log(sum(5));
```

Output:

```text
15
```

---

# 7. Countdown

```javascript
function countdown(n) {

    if (n === 0) {
        console.log("Done!");
        return;
    }

    console.log(n);

    countdown(n - 1);
}

countdown(5);
```

Output:

```text
5
4
3
2
1
Done!
```

---

# 8. Recursion with Arrays

We can also use recursion with arrays.

```javascript
function printArray(arr, index = 0) {

    if (index === arr.length) {
        return;
    }

    console.log(arr[index]);

    printArray(arr, index + 1);
}

printArray(["HTML", "CSS", "JavaScript"]);
```

Output:

```text
HTML
CSS
JavaScript
```

---

# 9. Recursion vs Loop

The same problem can often be solved using a loop.

### Loop

```javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
```

### Recursion

```javascript
function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1);
}

count(5);
```

Both produce:

```text
5
4
3
2
1
```

---

# 10. When is Recursion Useful?

Recursion is especially useful for problems involving:

```text
✓ Nested data
✓ Trees
✓ File/folder structures
✓ Searching
✓ Mathematical problems
✓ Divide-and-conquer algorithms
```

For simple counting, a loop is often easier.

---

# 11. Infinite Recursion

This is dangerous:

```javascript
function test() {
    test();
}

test();
```

There is no base case.

Eventually JavaScript will give:

```text
Maximum call stack size exceeded
```

So always make sure recursion has a stopping condition.

---

# 12. Easy Recursion Pattern

Most recursive functions follow this structure:

```javascript
function example(value) {

    if (stoppingCondition) {
        return;
    }

    // Work

    example(smallerOrNextValue);
}
```

Remember:

```text
Base Case
   ↓
Stop

Recursive Case
   ↓
Function calls itself
```

---

# Quick Revision

### Recursion

```text
Function
   ↓
Calls itself
   ↓
Again
   ↓
Again
   ↓
Base Case
   ↓
Stop
```

Example:

```javascript
function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1);
}
```

Important terms:

```text
Base Case
→ Recursion ko stop karta hai

Recursive Case
→ Function ko dobara call karta hai
```

---

## Next File

```text
13-Advanced-Functions/05-Callbacks.md
```

Next topic: **Callback Functions** — ye Higher-Order Functions ke concept ko aur clear karega aur aage **Asynchronous JavaScript** mein bahut important hoga.