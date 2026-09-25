# JavaScript break and continue

`break` aur `continue` ka use loops ke flow ko control karne ke liye hota hai.

```text
break    → Loop ko completely stop karta hai
continue → Current iteration ko skip karta hai
```

---

# 1. break

`break` loop ko turant stop kar deta hai.

Example:

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

Jab:

```javascript
i === 5
```

true hua, `break` ne loop ko stop kar diya.

---

# 2. How break Works

```text
i = 1 → print
i = 2 → print
i = 3 → print
i = 4 → print
i = 5 → break
         ↓
       STOP
```

Loop ke remaining iterations execute nahi hote.

---

# 3. break with while

`break` sirf `for` loop mein nahi, `while` mein bhi use hota hai.

```javascript
let i = 1;

while (i <= 10) {

    if (i === 5) {
        break;
    }

    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
```

---

# 4. continue

`continue` current iteration ko skip karta hai.

Loop completely stop nahi hota.

Example:

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

`3` skip ho gaya, lekin loop continue karta raha.

---

# 5. How continue Works

```text
i = 1 → print
i = 2 → print
i = 3 → continue
         ↓
      skip 3
         ↓
i = 4 → print
i = 5 → print
```

---

# 6. break vs continue

| `break` | `continue` |
|---|---|
| Loop stop karta hai | Current iteration skip karta hai |
| Loop ke bahar aa jata hai | Next iteration par chala jata hai |
| Further iterations nahi hoti | Further iterations continue hoti hain |

Simple:

```text
break
↓
STOP LOOP
```

```text
continue
↓
SKIP CURRENT ITERATION
↓
NEXT ITERATION
```

---

# 7. Skip Even Numbers

`continue` ka use karke even numbers skip kar sakte hain.

```javascript
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
3
5
7
9
```

---

# 8. Skip Odd Numbers

```javascript
for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

---

# 9. Find a Number

Suppose array mein `30` find karna hai.

```javascript
let numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {

    if (number === 30) {
        console.log("Number found");
        break;
    }
}
```

Output:

```text
Number found
```

`30` milne ke baad loop ki zarurat nahi thi, isliye `break` use kiya.

---

# 10. continue with Array

Suppose hume `30` ko skip karna hai:

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

---

# 11. break in Nested Loops

Nested loop mein `break` jis loop ke andar likha hota hai, normally usi loop ko stop karta hai.

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (j === 2) {
            break;
        }

        console.log(i, j);
    }
}
```

Yahan `break` inner loop ko stop karta hai.

---

# 12. Important: continue and Update

`while` loop mein `continue` use karte waqt carefully update karna chahiye.

Correct:

```javascript
let i = 0;

while (i < 5) {

    i++;

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

Agar update galat jagah ho, to infinite loop ban sakta hai.

---

# 13. break and continue with for...of

`for...of` mein bhi use kar sakte hain.

### break

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {

    if (fruit === "Mango") {
        break;
    }

    console.log(fruit);
}
```

Output:

```text
Apple
```

### continue

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {

    if (fruit === "Mango") {
        continue;
    }

    console.log(fruit);
}
```

Output:

```text
Apple
Banana
```

---

# 14. Real-Life Example

Imagine a queue:

```text
Person 1
Person 2
Person 3
Person 4
Person 5
```

If we find the person we are looking for:

```text
break
↓
Stop searching
```

If we want to ignore one person:

```text
continue
↓
Skip this person
↓
Check next person
```

---

# Important Points

- `break` completely stops the loop.
- `continue` skips only the current iteration.
- `break` is useful when required value is found.
- `continue` is useful when certain values should be ignored.
- Both can be used with `for`, `while`, `do...while`, and `for...of`.
- Be careful with `continue` inside `while` loops so the loop variable still gets updated.

---

# Quick Revision

### break

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

### continue

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

### Remember

```text
break
→ Stop the entire loop

continue
→ Skip current iteration
→ Continue with next iteration
```

**Easy trick:**

```text
break    = "Bas, loop band karo."

continue = "Isko chhodo, next par jao."
```