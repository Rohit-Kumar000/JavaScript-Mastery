# JavaScript try...catch

## 1. What is `try...catch`?

`try...catch` ka use JavaScript mein **errors ko handle** karne ke liye hota hai.

Basic syntax:

```javascript
try {
    // Code that may cause an error
} catch (error) {
    // Handle the error
}
```

---

# 2. Basic Example

```javascript
try {

    console.log(username);

} catch (error) {

    console.log("An error occurred");

}
```

Agar `username` defined nahi hai, error `catch` block mein handle ho jayega.

Output:

```text
An error occurred
```

---

# 3. How `try...catch` Works

Flow:

```text
try
 ↓
Code execute
 ↓
Error?
 ├── No → Continue
 │
 └── Yes
      ↓
    catch
      ↓
 Handle Error
```

---

# 4. `try` Block

`try` block mein wo code likhte hain jisme error aane ka possibility ho.

```javascript
try {

    const result = 10 / 2;

    console.log(result);

} catch (error) {

    console.log("Error occurred");

}
```

Output:

```text
5
```

Error nahi aaya, isliye `catch` execute nahi hua.

---

# 5. `catch` Block

Agar `try` ke andar error aata hai, execution `catch` block mein chala jata hai.

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Error handled");

}
```

Output:

```text
Error handled
```

---

# 6. Catch Error Object

`catch` ke andar error object receive kar sakte hain.

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log(error);

}
```

---

# 7. `error.name`

Error ka type:

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log(error.name);

}
```

Output:

```text
ReferenceError
```

---

# 8. `error.message`

Error ka message:

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log(error.message);

}
```

Example output:

```text
undefinedVariable is not defined
```

---

# 9. `error.stack`

Debugging ke liye:

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log(error.stack);

}
```

`stack` error ki location aur call information provide kar sakta hai.

---

# 10. Code After `try...catch`

Error handle hone ke baad program aage continue kar sakta hai.

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Error handled");

}

console.log("Program continues");
```

Output:

```text
Error handled
Program continues
```

---

# 11. Without `try...catch`

Agar error ko handle nahi kiya:

```javascript
console.log(undefinedVariable);

console.log("Hello");
```

Error ki wajah se normal execution interrupt ho sakta hai aur `"Hello"` expected flow mein execute nahi hoga.

---

# 12. With `try...catch`

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Error handled");

}

console.log("Hello");
```

Output:

```text
Error handled
Hello
```

---

# 13. Multiple Statements in `try`

```javascript
try {

    const a = 10;
    const b = 20;

    console.log(a + b);

    console.log(undefinedVariable);

    console.log("This will not run");

} catch (error) {

    console.log("Error:", error.message);

}
```

Output:

```text
30
Error: undefinedVariable is not defined
```

Important:

Error aane ke baad `try` block ke remaining statements execute nahi hote.

---

# 14. `try...catch` with Functions

```javascript
function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {

    const result = divide(10, 0);

    console.log(result);

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Cannot divide by zero
```

---

# 15. Nested `try...catch`

Ek `try...catch` ke andar another `try...catch` bhi ho sakta hai.

```javascript
try {

    try {

        console.log(undefinedVariable);

    } catch (error) {

        console.log("Inner error handled");

    }

} catch (error) {

    console.log("Outer error handled");

}
```

Output:

```text
Inner error handled
```

Inner `catch` ne error handle kar diya.

---

# 16. JSON Parsing with `try...catch`

Invalid JSON parse karte waqt error handle kar sakte hain:

```javascript
const jsonData = '{"name":"Rohit"';

try {

    const user = JSON.parse(jsonData);

    console.log(user);

} catch (error) {

    console.log("Invalid JSON");

}
```

Output:

```text
Invalid JSON
```

---

# 17. `try...catch` with Async/Await

API requests ke saath `try...catch` bahut useful hai.

```javascript
async function getData() {

    try {

        const response = await fetch(
            "https://example.com/api/data"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Request failed");

    }
}

getData();
```

---

# 18. Checking `response.ok`

HTTP errors ko explicitly handle karna useful hai:

```javascript
async function getData() {

    try {

        const response = await fetch(
            "https://example.com/api/data"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }
}
```

---

# 19. `try...catch` with User Input

```javascript
function checkAge(age) {

    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    return "Eligible";

}

try {

    console.log(checkAge(16));

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Age must be 18 or above
```

---

# 20. `try...catch` Does Not Catch Every Async Error Automatically

Important concept:

A normal `try...catch` only catches errors from code that executes within its relevant synchronous flow.

For Promise-based asynchronous code, use `.catch()` or `async/await` with `try...catch`.

Example:

```javascript
async function example() {

    try {

        const data = await Promise.reject(
            "Something went wrong"
        );

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

example();
```

---

# 21. `try...catch` vs `.catch()`

### Promise

```javascript
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
```

### Async/Await

```javascript
async function getData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}
```

Dono approaches errors handle kar sakti hain.

---

# 22. Complete Example

```javascript
async function getUser() {

    try {

        const response = await fetch(
            "https://example.com/api/user/1"
        );

        if (!response.ok) {
            throw new Error(
                `Request failed: ${response.status}`
            );
        }

        const user = await response.json();

        console.log("User:", user);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getUser();
```

Flow:

```text
getUser()
    ↓
try
    ↓
fetch()
    ↓
Response
    ↓
response.ok?
 ├── Yes → response.json()
 │            ↓
 │         User Data
 │
 └── No → Error
            ↓
          catch
```

---

# Quick Revision

### Basic Syntax

```javascript
try {

    // Risky code

} catch (error) {

    // Handle error

}
```

### Error Object

```javascript
error.name
error.message
error.stack
```

### Important

```text
try
 ↓
Code execute
 ↓
Error?
 ├── No → Continue
 │
 └── Yes → catch
```

### JSON

```javascript
try {

    const data = JSON.parse(jsonString);

} catch (error) {

    console.log("Invalid JSON");

}
```

### Async/Await

```javascript
async function getData() {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

    } catch (error) {

        console.log(error.message);

    }

}
```

---

## Next File

```text
16-Error-Handling/03-finally.md
```