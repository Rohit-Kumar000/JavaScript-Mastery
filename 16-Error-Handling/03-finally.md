# JavaScript finally

## 1. What is `finally`?

`finally` block ka code **normally har situation mein execute hota hai**, chahe error aaye ya na aaye.

Basic syntax:

```javascript
try {

    // Code

} catch (error) {

    // Error handling

} finally {

    // Always execute

}
```

---

# 2. Basic Example

```javascript
try {

    console.log("Try block");

} catch (error) {

    console.log("Catch block");

} finally {

    console.log("Finally block");

}
```

Output:

```text
Try block
Finally block
```

Kyuki `try` mein koi error nahi aaya, `catch` execute nahi hua.

---

# 3. When Error Occurs

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Error handled");

} finally {

    console.log("Finally executed");

}
```

Output:

```text
Error handled
Finally executed
```

Flow:

```text
try
 ↓
Error
 ↓
catch
 ↓
finally
```

---

# 4. When No Error Occurs

```javascript
try {

    console.log("Everything is fine");

} catch (error) {

    console.log("Error");

} finally {

    console.log("Cleanup completed");

}
```

Output:

```text
Everything is fine
Cleanup completed
```

Flow:

```text
try
 ↓
No Error
 ↓
finally
```

---

# 5. `finally` Without `catch`

`finally` ko `try` ke saath directly bhi use kar sakte hain.

```javascript
try {

    console.log("Hello");

} finally {

    console.log("Done");

}
```

Output:

```text
Hello
Done
```

---

# 6. `try...catch...finally`

Complete structure:

```javascript
try {

    // Risky code

} catch (error) {

    // Handle error

} finally {

    // Cleanup code

}
```

Example:

```javascript
try {

    const result = 10 / 2;

    console.log(result);

} catch (error) {

    console.log("Error:", error.message);

} finally {

    console.log("Operation completed");

}
```

Output:

```text
5
Operation completed
```

---

# 7. Why Use `finally`?

`finally` ka common use **cleanup operations** ke liye hota hai.

Examples:

```text
✓ Loading indicator hide karna
✓ Connection close karna
✓ Temporary resources clean karna
✓ UI state reset karna
✓ File/resource cleanup
```

---

# 8. Loading Example

Suppose API request ke time:

```text
Loading...
```

show karna hai.

Request successful ho ya fail, loading ko hide karna hai.

```javascript
async function getData() {

    console.log("Loading...");

    try {

        const response = await fetch(
            "https://example.com/api/data"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("Loading finished");

    }
}

getData();
```

Flow:

```text
Start
 ↓
Loading...
 ↓
try
 ↓
API Request
 ↓
 ┌──────────────┐
 │              │
Success       Error
 │              │
 ↓              ↓
Data          catch
 │              │
 └──────┬───────┘
        ↓
     finally
        ↓
Loading finished
```

---

# 9. `finally` with Return

Important point:

`finally` return statement ke saath bhi execute ho sakta hai.

```javascript
function test() {

    try {

        return "Try";

    } finally {

        console.log("Finally");

    }

}

console.log(test());
```

Output:

```text
Finally
Try
```

`finally` pehle execute hua, uske baad function ka return value mila.

---

# 10. `finally` with `catch`

```javascript
function test() {

    try {

        throw new Error("Something went wrong");

    } catch (error) {

        console.log(error.message);

    } finally {

        console.log("Cleanup");

    }

}

test();
```

Output:

```text
Something went wrong
Cleanup
```

---

# 11. `finally` Always Runs

Example:

```javascript
function test() {

    try {

        console.log("Start");

        return;

    } finally {

        console.log("Finally");

    }

}

test();
```

Output:

```text
Start
Finally
```

`return` hone ke baad bhi `finally` execute hua.

---

# 12. `finally` with API Request

API projects mein `finally` useful hai:

```javascript
async function getUsers() {

    console.log("Loading users...");

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("Request completed");

    }
}

getUsers();
```

---

# 13. Real UI Example

Suppose HTML:

```html
<button id="btn">Load Users</button>

<p id="status"></p>
```

JavaScript:

```javascript
const button = document.querySelector("#btn");
const status = document.querySelector("#status");

async function getUsers() {

    status.textContent = "Loading...";

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error("Unable to load users");
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        status.textContent = error.message;

    } finally {

        button.disabled = false;

    }
}

button.addEventListener("click", () => {

    button.disabled = true;

    getUsers();

});
```

Yahan request successful ho ya fail:

```javascript
button.disabled = false;
```

finally mein execute hoga.

---

# 14. `finally` vs `catch`

### `catch`

Sirf error hone par execute hota hai:

```javascript
try {

} catch (error) {

    // Error hone par

}
```

### `finally`

Normally try/catch processing ke baad execute hota hai:

```javascript
try {

} catch (error) {

} finally {

    // Cleanup

}
```

---

# 15. Complete Example

```javascript
async function fetchUser() {

    console.log("Loading...");

    try {

        const response = await fetch(
            "https://example.com/api/user/1"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const user = await response.json();

        console.log("User:", user);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("Request completed.");

    }
}

fetchUser();
```

Flow:

```text
fetchUser()
     ↓
Loading...
     ↓
   try
     ↓
API Request
     ↓
 ┌───┴────┐
 ↓        ↓
Success  Error
 ↓        ↓
Data    catch
 └───┬────┘
     ↓
  finally
     ↓
Completed
```

---

# 16. Important Rules

### Rule 1

`finally` generally execute hota hai whether error occurs or not.

### Rule 2

`finally` cleanup operations ke liye useful hai.

### Rule 3

`finally` `return` se pehle execute ho sakta hai.

### Rule 4

`finally` ke andar `return` likhne se previous return value override ho sakti hai, isliye generally avoid karna better hai unless intentionally needed.

Example:

```javascript
function test() {

    try {

        return "Hello";

    } finally {

        return "Goodbye";

    }

}

console.log(test());
```

Output:

```text
Goodbye
```

---

# Quick Revision

### Basic Syntax

```javascript
try {

    // Code

} catch (error) {

    // Handle error

} finally {

    // Cleanup

}
```

### No Error

```text
try
 ↓
finally
```

### Error

```text
try
 ↓
catch
 ↓
finally
```

### Common Uses

```text
Loading state
Cleanup
Reset UI
Close resources
Final status update
```

---

## Next File

```text
16-Error-Handling/04-throw.md
```