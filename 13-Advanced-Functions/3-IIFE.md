# JavaScript IIFE

## 1. What is IIFE?

IIFE ka full form hai:

> **Immediately Invoked Function Expression**

Aisi function jo **create hote hi immediately execute** ho jaye, use IIFE kehte hain.

Normal function:

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

IIFE:

```javascript
(function() {
    console.log("Hello");
})();
```

Output:

```text
Hello
```

Yahan function ko separately call nahi kiya. Ye create hote hi execute ho gaya.

---

# 2. IIFE Syntax

Basic syntax:

```javascript
(function() {

    // code

})();
```

Isko aise bhi likh sakte hain:

```javascript
(function() {

    // code

}());
```

Dono valid hain.

---

# 3. Why Do We Use IIFE?

IIFE ka main purpose hai:

```text
Private Scope
+
Immediately Execute Code
```

Example:

```javascript
(function() {

    let message = "Hello";

    console.log(message);

})();
```

Output:

```text
Hello
```

But outside:

```javascript
console.log(message);
```

❌ Error

Because `message` IIFE ke andar hai.

---

# 4. IIFE with Parameters

IIFE ko arguments bhi de sakte hain.

```javascript
(function(name) {

    console.log("Hello " + name);

})("Rohit");
```

Output:

```text
Hello Rohit
```

Here:

```text
name
↓
"Rohit"
```

---

# 5. IIFE with Multiple Parameters

```javascript
(function(a, b) {

    console.log(a + b);

})(10, 20);
```

Output:

```text
30
```

---

# 6. Arrow Function IIFE

IIFE arrow function ke saath bhi bana sakte hain.

```javascript
(() => {
    console.log("Hello");
})();
```

Output:

```text
Hello
```

---

# 7. IIFE with Return Value

IIFE value return bhi kar sakta hai.

```javascript
const result = (function() {

    return 10 + 20;

})();

console.log(result);
```

Output:

```text
30
```

---

# 8. IIFE and Private Variables

IIFE ka ek important use private variables banana tha.

```javascript
const result = (function() {

    let secret = "My Secret";

    return {
        getSecret() {
            return secret;
        }
    };

})();

console.log(result.getSecret());
```

Output:

```text
My Secret
```

But:

```javascript
console.log(result.secret);
```

Output:

```text
undefined
```

Because `secret` directly accessible nahi hai.

---

# 9. IIFE and Scope

Example:

```javascript
(function() {

    let x = 10;

    console.log(x);

})();

console.log(x);
```

Inside:

```text
10
```

Outside:

```text
Error
```

IIFE apna separate scope create karta hai.

---

# 10. Real-World Idea

Suppose kisi script mein initialization code sirf ek baar run karna hai:

```javascript
(function() {

    console.log("Application started");

    // initialization code

})();
```

Page load hone par code immediately execute ho jayega.

---

# 11. IIFE vs Normal Function

### Normal Function

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

Flow:

```text
Function create
     ↓
Function call
     ↓
Execute
```

### IIFE

```javascript
(function() {
    console.log("Hello");
})();
```

Flow:

```text
Function create
     ↓
Immediately execute
```

---

# 12. Why the Extra Parentheses?

Ye:

```javascript
function() {
    console.log("Hello");
}
```

alone JavaScript mein normal function declaration ke form mein interpret ho sakta hai.

Isliye function ko parentheses mein wrap karte hain:

```javascript
(function() {
    console.log("Hello");
})();
```

Ab ye **Function Expression** ban jata hai aur immediately call kiya ja sakta hai.

---

# 13. Common Syntax

You may see these forms:

```javascript
(function() {
    console.log("Hello");
})();
```

```javascript
(function() {
    console.log("Hello");
}());
```

```javascript
(() => {
    console.log("Hello");
})();
```

All are IIFE patterns.

---

# Quick Revision

```text
IIFE
↓
Immediately Invoked Function Expression
```

Basic:

```javascript
(function() {
    console.log("Hello");
})();
```

With parameter:

```javascript
(function(name) {
    console.log(name);
})("Rohit");
```

Arrow IIFE:

```javascript
(() => {
    console.log("Hello");
})();
```

---

# Remember

IIFE is mainly useful when you want:

```text
✓ Code to execute immediately
✓ A separate scope
✓ Temporary variables
✓ Encapsulated/private data
```

Simple trick:

```text
IIFE
↓
Create Function
↓
Immediately Call Function
```

---

## Next File

```text
13-Advanced-Functions/04-Recursion.md
```

Next topic: **Recursion** — jab ek function khud ko hi call karta hai.