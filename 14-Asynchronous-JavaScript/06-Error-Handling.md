# JavaScript Error Handling

## 1. What is Error Handling?

Program execute karte waqt agar koi unexpected problem aaye, to us problem ko properly handle karna **Error Handling** kehlata hai.

Example:

```javascript
console.log(undefinedVariable);
```

Yahan `undefinedVariable` defined nahi hai, isliye JavaScript error generate karega.

---

## 2. Why Do We Need Error Handling?

Error handling ki help se hum:

```text
✓ Errors ko identify kar sakte hain
✓ Error ko handle kar sakte hain
✓ Program ko unexpectedly stop hone se prevent kar sakte hain
✓ User ko useful message de sakte hain
✓ Debugging easier bana sakte hain
```

---

# 3. `try...catch`

JavaScript mein errors handle karne ka common method:

```javascript
try {
    // Code
} catch (error) {
    // Error handling
}
```

Example:

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Something went wrong");

}
```

Output:

```text
Something went wrong
```

---

# 4. How `try...catch` Works

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

# 5. Error Object

`catch` ke andar hume error object milta hai.

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log(error);

}
```

Error object ke andar error ke baare mein information hoti hai.

---

# 6. `error.message`

Sirf error ka message dekhne ke liye:

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

# 7. `error.name`

Error ka naam/type dekh sakte hain:

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

# 8. `error.stack`

Debugging ke time stack information useful hoti hai:

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log(error.stack);

}
```

`error.stack` error ke saath stack trace provide kar sakta hai.

---

# 9. Handling JSON Error

Invalid JSON parse karne par error aa sakta hai.

```javascript
try {

    const data = JSON.parse("Hello");

    console.log(data);

} catch (error) {

    console.log("Invalid JSON");

}
```

Output:

```text
Invalid JSON
```

Valid JSON:

```javascript
try {

    const data = JSON.parse('{"name":"Rohit"}');

    console.log(data);

} catch (error) {

    console.log("Invalid JSON");

}
```

Output:

```text
{ name: "Rohit" }
```

---

# 10. `throw`

Hum khud bhi custom error create kar sakte hain using `throw`.

```javascript
const age = 15;

if (age < 18) {

    throw new Error("Age must be 18 or above");

}
```

Yahan:

```text
throw
 ↓
Error generate
```

---

# 11. `throw` with `try...catch`

```javascript
try {

    const age = 15;

    if (age < 18) {
        throw new Error("You must be 18 or above");
    }

    console.log("Allowed");

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
You must be 18 or above
```

---

# 12. `finally`

`finally` block success ya error dono situations mein execute hota hai.

```javascript
try {

    console.log("Try block");

} catch (error) {

    console.log("Error");

} finally {

    console.log("Finally block");

}
```

Output:

```text
Try block
Finally block
```

Agar error aaye:

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Error handled");

} finally {

    console.log("Finally block");

}
```

Output:

```text
Error handled
Finally block
```

---

# 13. Async/Await Error Handling

`async/await` ke saath `try...catch` commonly use hota hai.

```javascript
async function getData() {

    try {

        const data = await Promise.reject(
            "Something went wrong"
        );

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getData();
```

Output:

```text
Something went wrong
```

---

# 14. Fetch Error Handling

Fetch ke saath error handling:

```javascript
async function getData() {

    try {

        const response = await fetch(
            "https://example.com/data"
        );

        if (!response.ok) {
            throw new Error(
                "Request failed: " + response.status
            );
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }
}

getData();
```

Important:

`fetch()` HTTP status `404` ya `500` ko automatically JavaScript exception nahi banata.

Isliye:

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

jaisa check useful hota hai.

---

# 15. Error Handling in a Function

```javascript
function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}
```

Use:

```javascript
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

# 16. `try...catch` with User Input

```javascript
function checkAge(age) {

    if (age < 18) {
        throw new Error("You are not eligible");
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
You are not eligible
```

---

# 17. Important Difference

### `try...catch`

Error ko handle karta hai:

```javascript
try {
    // risky code
} catch (error) {
    // handle error
}
```

### `throw`

Khud error generate karta hai:

```javascript
throw new Error("Something went wrong");
```

### `finally`

Cleanup/final code run karta hai:

```javascript
finally {
    // always runs after try/catch completion
}
```

---

# 18. Complete Example

```javascript
function withdraw(balance, amount) {

    if (amount <= 0) {
        throw new Error("Invalid amount");
    }

    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}

try {

    const remainingBalance = withdraw(5000, 6000);

    console.log(
        "Remaining Balance:",
        remainingBalance
    );

} catch (error) {

    console.log("Error:", error.message);

} finally {

    console.log("Transaction process completed");

}
```

Output:

```text
Error: Insufficient balance
Transaction process completed
```

---

# Quick Revision

## `try`

```text
Potentially problematic code
```

## `catch`

```text
Error handle karta hai
```

## `throw`

```text
Custom error generate karta hai
```

## `finally`

```text
Final/cleanup code
```

Basic structure:

```javascript
try {

    // Code

} catch (error) {

    // Handle error

} finally {

    // Final code

}
```

Async/await:

```javascript
async function example() {

    try {

        const data = await somePromise;

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }

}
```

Remember:

```text
try
 ↓
Error?
 ├── No → Continue
 │
 └── Yes → catch
              ↓
          Handle Error
              ↓
           finally
```

---

# 14-Asynchronous-JavaScript Complete

```text
14-Asynchronous-JavaScript
│
├── 01-Synchronous-vs-Asynchronous.md
├── 02-Call-Stack.md
├── 03-Callbacks.md
├── 04-Promises.md
├── 05-async-await.md
├── 06-Error-Handling.md
└── Projects
```

## Next Folder

Ab hum **15-APIs-and-Fetch** par jayenge:

```text
15-APIs-and-Fetch
│
├── 01-What-is-API.md  ← NEXT
├── 02-JSON.md
├── 03-fetch.md
├── 04-GET.md
├── 05-POST.md
├── 06-API-Projects.md
└── Projects
```