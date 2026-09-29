# JavaScript Fetch API

## 1. What is Fetch API?

JavaScript ka **Fetch API** server ya API se network requests karne ke liye use hota hai.

Simple words mein:

> `fetch()` ki help se JavaScript kisi URL/API se data request kar sakti hai.

Basic syntax:

```javascript
fetch(url);
```

Example:

```javascript
fetch("https://example.com/data");
```

---

# 2. Basic Fetch Example

```javascript
fetch("https://example.com/data")
    .then((response) => {
        console.log(response);
    });
```

`fetch()` ek **Promise** return karta hai.

Flow:

```text
fetch()
   ↓
Promise
   ↓
Response
```

---

# 3. Fetch Returns a Promise

```javascript
const result = fetch("https://example.com/data");

console.log(result);
```

`result` ek Promise hota hai.

```text
fetch()
  ↓
Promise
```

Isliye hum `.then()` use kar sakte hain:

```javascript
fetch("https://example.com/data")
    .then((response) => {
        console.log(response);
    });
```

---

# 4. Getting JSON Data

API se JSON response ko JavaScript data mein convert karne ke liye:

```javascript
response.json()
```

use karte hain.

Example:

```javascript
fetch("https://example.com/data")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
```

Flow:

```text
fetch()
   ↓
Response
   ↓
response.json()
   ↓
JavaScript Data
```

---

# 5. Shorter Version

Same code ko shorter likh sakte hain:

```javascript
fetch("https://example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

---

# 6. Fetch with Async/Await

Fetch ko `async/await` ke saath bhi use kar sakte hain.

```javascript
async function getData() {

    const response = await fetch(
        "https://example.com/data"
    );

    const data = await response.json();

    console.log(data);
}

getData();
```

Flow:

```text
fetch()
   ↓
await response
   ↓
response.json()
   ↓
await data
   ↓
data
```

---

# 7. Fetch with `try...catch`

Network request mein error aa sakta hai, isliye error handling useful hai.

```javascript
async function getData() {

    try {

        const response = await fetch(
            "https://example.com/data"
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

# 8. Checking `response.ok`

Important point:

`fetch()` HTTP error status jaise `404` ya `500` ko automatically rejected Promise nahi banata.

Isliye response status check karna useful hai:

```javascript
async function getData() {

    try {

        const response = await fetch(
            "https://example.com/data"
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

getData();
```

---

# 9. `response.ok`

`response.ok` ek boolean value provide karta hai.

```text
true
```

Generally successful HTTP response ke liye.

```text
false
```

HTTP response unsuccessful hone par.

Example:

```javascript
if (response.ok) {
    console.log("Request successful");
} else {
    console.log("Request failed");
}
```

---

# 10. `response.status`

Response ka HTTP status code:

```javascript
console.log(response.status);
```

Examples:

```text
200
201
400
401
403
404
500
```

Example:

```javascript
fetch("https://example.com/data")
    .then((response) => {

        console.log(response.status);

    });
```

---

# 11. Fetch Response Object

`fetch()` ke baad jo object milta hai usmein response ki information hoti hai.

Example:

```javascript
fetch("https://example.com/data")
    .then((response) => {

        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers);

    });
```

Common properties/methods:

```text
response.status
response.ok
response.headers
response.json()
response.text()
```

---

# 12. `response.json()`

Agar response JSON format mein hai:

```javascript
const data = await response.json();
```

use kar sakte hain.

Example:

```javascript
async function getUser() {

    const response = await fetch(
        "https://example.com/user"
    );

    const user = await response.json();

    console.log(user);

}
```

---

# 13. `response.text()`

Agar response plain text hai:

```javascript
const text = await response.text();
```

Example:

```javascript
async function getText() {

    const response = await fetch(
        "https://example.com/message"
    );

    const text = await response.text();

    console.log(text);

}
```

---

# 14. Fetch with a Public API

Example structure:

```javascript
fetch("https://api.example.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

Flow:

```text
JavaScript
    ↓
fetch()
    ↓
API Request
    ↓
Server
    ↓
Response
    ↓
JSON
    ↓
JavaScript Data
```

---

# 15. Fetch Using Async/Await

Modern JavaScript mein ye pattern bahut common hai:

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://api.example.com/users"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log(error.message);

    }
}

getUsers();
```

---

# 16. Fetch Request Options

`fetch()` ka second argument options object ho sakta hai.

Basic structure:

```javascript
fetch(url, options);
```

Example:

```javascript
fetch("https://example.com/users", {
    method: "GET"
});
```

Default method generally:

```text
GET
```

hota hai.

POST request ke baare mein hum later `05-POST.md` mein detail mein padhenge.

---

# 17. Fetch and Promises

Remember:

```javascript
fetch(url)
```

Promise return karta hai.

Isliye:

```javascript
fetch(url)
    .then(...)
    .catch(...);
```

possible hai.

Aur:

```javascript
const response = await fetch(url);
```

bhi possible hai.

Flow:

```text
fetch()
  ↓
Promise
  ↓
Response
```

---

# 18. Fetch vs XMLHttpRequest

Older JavaScript applications mein network requests ke liye commonly:

```text
XMLHttpRequest
```

use hota tha.

Modern JavaScript mein:

```text
Fetch API
```

zyada clean aur Promise-based approach provide karta hai.

---

# 19. Complete Example

```javascript
async function getUser() {

    try {

        const response = await fetch(
            "https://example.com/api/user"
        );

        if (!response.ok) {
            throw new Error(
                `Request failed with status ${response.status}`
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
fetch()
    ↓
Response
    ↓
response.ok?
 ├── No → throw Error
 │
 └── Yes
       ↓
 response.json()
       ↓
      User
```

---

# Quick Revision

### Fetch

```javascript
fetch(url);
```

API/network request ke liye use hota hai.

### Promise

```text
fetch()
 ↓
Promise
```

### JSON

```javascript
const data = await response.json();
```

### Status

```javascript
response.status
```

### Success Check

```javascript
response.ok
```

### Error Handling

```javascript
try {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

} catch (error) {

    console.log(error);

}
```

### Complete Flow

```text
┌──────────────┐
│ JavaScript   │
└──────┬───────┘
       │
       ↓
    fetch()
       │
       ↓
   API Request
       │
       ↓
    Server
       │
       ↓
    Response
       │
       ↓
response.json()
       │
       ↓
 JavaScript Data
```

---

## Next File

```text
15-APIs-and-Fetch/04-GET.md
```