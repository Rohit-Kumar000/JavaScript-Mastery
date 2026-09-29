# JavaScript throw

## 1. What is `throw`?

JavaScript mein `throw` ka use **manually error/exception generate karne** ke liye hota hai.

Simple words mein:

> Jab hum khud decide karna chahte hain ki kisi condition par error aana chahiye, tab `throw` use karte hain.

Basic syntax:

```javascript
throw new Error("Something went wrong");
```

---

# 2. Basic Example

```javascript
throw new Error("Something went wrong");
```

Isse JavaScript ek error throw karegi.

Output:

```text
Error: Something went wrong
```

Agar ise `try...catch` mein handle karein:

```javascript
try {

    throw new Error("Something went wrong");

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Something went wrong
```

---

# 3. Why Use `throw`?

JavaScript automatically kuch errors detect kar sakti hai.

Lekin kuch situations mein hume **khud condition check karke error generate** karna hota hai.

Example:

```javascript
const age = 15;

if (age < 18) {
    throw new Error("Age must be 18 or above");
}
```

Yahan JavaScript syntax error detect nahi kar rahi.

Humne khud rule banaya:

```text
Age < 18
   ↓
Throw Error
```

---

# 4. `throw` with `try...catch`

Most common pattern:

```javascript
try {

    throw new Error("Invalid input");

} catch (error) {

    console.log(error.message);

}
```

Flow:

```text
try
 ↓
throw
 ↓
Error
 ↓
catch
 ↓
Handle Error
```

---

# 5. Throwing a Custom Error

```javascript
const username = "";

if (username === "") {

    throw new Error("Username is required");

}
```

Agar `username` empty hai:

```text
Username is required
```

---

# 6. Throw in a Function

`throw` ko function ke andar bhi use kar sakte hain.

```javascript
function checkAge(age) {

    if (age < 18) {
        throw new Error("You must be 18 or older");
    }

    return "Access granted";

}
```

Use:

```javascript
try {

    console.log(checkAge(16));

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
You must be 18 or older
```

---

# 7. Throw with Conditions

Ye `throw` ka very common use hai.

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

    console.log(divide(10, 0));

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Cannot divide by zero
```

---

# 8. Throwing Different Errors

Situation ke according different error types throw kar sakte hain.

### TypeError

```javascript
throw new TypeError("Invalid data type");
```

### RangeError

```javascript
throw new RangeError("Value is out of range");
```

### Error

```javascript
throw new Error("Something went wrong");
```

---

# 9. `throw new Error()` vs `console.error()`

Ye dono same nahi hain.

### `console.error()`

```javascript
console.error("Something went wrong");
```

Sirf console mein message print karta hai.

### `throw`

```javascript
throw new Error("Something went wrong");
```

Actual exception throw karta hai.

Example:

```javascript
console.error("Error");

console.log("Program continues");
```

Output:

```text
Error
Program continues
```

But:

```javascript
throw new Error("Error");

console.log("Program continues");
```

Yahan `throw` ke baad current execution flow interrupt ho sakta hai unless error handle kiya jaye.

---

# 10. Throw and Catch

```javascript
function login(username) {

    if (!username) {
        throw new Error("Username is required");
    }

    return "Login successful";

}

try {

    console.log(login(""));

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Username is required
```

---

# 11. Throwing Based on Multiple Conditions

```javascript
function registerUser(username, age) {

    if (!username) {
        throw new Error("Username is required");
    }

    if (age < 18) {
        throw new Error("User must be 18 or older");
    }

    return "Registration successful";
}
```

Use:

```javascript
try {

    console.log(registerUser("Rohit", 16));

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
User must be 18 or older
```

---

# 12. Throw with Input Validation

Form validation mein `throw` useful ho sakta hai.

```javascript
function validateUser(name, email) {

    if (!name) {
        throw new Error("Name is required");
    }

    if (!email) {
        throw new Error("Email is required");
    }

    return true;
}

try {

    validateUser("", "rohit@example.com");

    console.log("Valid user");

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Name is required
```

---

# 13. Throw with JSON

Invalid JSON ko manually handle karne ke liye:

```javascript
function parseUser(json) {

    try {

        return JSON.parse(json);

    } catch (error) {

        throw new Error("Invalid JSON data");

    }

}
```

Use:

```javascript
try {

    const user = parseUser('{"name":');

    console.log(user);

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Invalid JSON data
```

Yahan ek error ko catch karke custom error throw kiya gaya hai.

---

# 14. Re-throwing an Error

Kabhi-kabhi hum error ko catch karte hain aur phir same error ko dobara throw kar dete hain.

```javascript
try {

    console.log(undefinedVariable);

} catch (error) {

    console.log("Logging error");

    throw error;

}
```

Is concept ko **re-throwing** kaha ja sakta hai.

---

# 15. Throw with API Requests

API response unsuccessful ho to manually error throw kar sakte hain.

```javascript
async function getData() {

    try {

        const response = await fetch(
            "https://example.com/api/data"
        );

        if (!response.ok) {

            throw new Error(
                `Request failed: ${response.status}`
            );

        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getData();
```

Flow:

```text
fetch()
  ↓
Response
  ↓
response.ok?
  ├── Yes → Continue
  │
  └── No
       ↓
     throw
       ↓
     catch
```

---

# 16. Throw in Async Functions

`async` function ke andar bhi `throw` use kar sakte hain.

```javascript
async function getUser() {

    const user = null;

    if (!user) {
        throw new Error("User not found");
    }

    return user;
}
```

Is error ko caller handle kar sakta hai:

```javascript
getUser()
    .catch((error) => {

        console.log(error.message);

    });
```

Output:

```text
User not found
```

---

# 17. Throw and Promise

Async function mein:

```javascript
async function test() {

    throw new Error("Something went wrong");

}
```

`async` function rejected Promise return karega.

Handle:

```javascript
test()
    .catch((error) => {

        console.log(error.message);

    });
```

---

# 18. Throwing Different Error Types

```javascript
function checkNumber(number) {

    if (typeof number !== "number") {
        throw new TypeError("Expected a number");
    }

    if (number < 0) {
        throw new RangeError("Number cannot be negative");
    }

    return number;
}
```

Use:

```javascript
try {

    console.log(checkNumber("10"));

} catch (error) {

    console.log(error.name);
    console.log(error.message);

}
```

Output:

```text
TypeError
Expected a number
```

---

# 19. Custom Validation Function

```javascript
function validatePassword(password) {

    if (password.length < 8) {
        throw new Error(
            "Password must contain at least 8 characters"
        );
    }

    return true;
}

try {

    validatePassword("12345");

    console.log("Password is valid");

} catch (error) {

    console.log(error.message);

}
```

Output:

```text
Password must contain at least 8 characters
```

---

# 20. Complete Example

```javascript
function createAccount(username, age) {

    if (!username) {
        throw new Error("Username is required");
    }

    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }

    return {
        username,
        age
    };
}

try {

    const user = createAccount("Rohit", 20);

    console.log("Account created:", user);

} catch (error) {

    console.log("Account creation failed:");
    console.log(error.message);

}
```

Successful output:

```text
Account created: { username: "Rohit", age: 20 }
```

Agar age `16` hoti:

```text
Account creation failed:
Age must be 18 or above
```

---

# 21. Complete Error Handling Flow

```text
┌─────────────────────┐
│     JavaScript      │
│       Function      │
└──────────┬──────────┘
           ↓
      Validate Data
           ↓
       Valid?
       /     \
     Yes      No
      ↓        ↓
 Continue    throw
                ↓
              Error
                ↓
             catch
                ↓
         Handle Error
```

---

# 22. Important Difference

### `throw`

```javascript
throw new Error("Invalid data");
```

Manually error generate karta hai.

### `try`

```javascript
try {
    // Risky code
}
```

Error-prone code ko monitor karta hai.

### `catch`

```javascript
catch (error) {
    // Handle error
}
```

Error ko handle karta hai.

### `finally`

```javascript
finally {
    // Cleanup
}
```

Cleanup/final code ke liye use hota hai.

---

# Quick Revision

### Basic

```javascript
throw new Error("Something went wrong");
```

### Validation

```javascript
if (!username) {
    throw new Error("Username is required");
}
```

### Function

```javascript
function divide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}
```

### Handle

```javascript
try {

    divide(10, 0);

} catch (error) {

    console.log(error.message);

}
```

### Different Error Types

```javascript
throw new TypeError("Invalid type");

throw new RangeError("Invalid range");

throw new Error("Something went wrong");
```

### Main Concept

```text
throw
  ↓
Create/raise an exception
  ↓
catch
  ↓
Handle the exception
```

---

# 16-Error-Handling Complete

```text
16-Error-Handling
│
├── 01-Errors.md
├── 02-try-catch.md
├── 03-finally.md
├── 04-throw.md
└── Projects
```

## Next Folder

Ab next **17-OOP** hai:

```text
17-OOP
│
├── 01-OOP-Basics.md  ← NEXT
├── 02-Classes.md
├── 03-Constructor.md
├── 04-Inheritance.md
├── 05-Encapsulation.md
├── 06-Polymorphism.md
└── Projects
```