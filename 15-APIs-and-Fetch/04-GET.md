# GET Requests in JavaScript

## 1. What is a GET Request?

**GET** HTTP method ka use server/API se **data retrieve (read)** karne ke liye hota hai.

Simple words mein:

> GET request ka main purpose server se data lena hai.

Example:

```text id="m4u7qz"
Client
  ↓
GET Request
  ↓
Server
  ↓
Data Response
  ↓
Client
```

---

## 2. Basic GET Request with Fetch

`fetch()` ka default method generally `GET` hota hai.

```javascript id="e3m8cs"
fetch("https://example.com/api/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

Yahan explicitly:

```javascript id="j1h4px"
method: "GET"
```

likhna zaroori nahi hai.

---

## 3. Explicit GET Method

GET ko explicitly bhi specify kar sakte hain:

```javascript id="0qv5db"
fetch("https://example.com/api/users", {
    method: "GET"
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

---

## 4. GET with Async/Await

Modern JavaScript mein `async/await` ke saath:

```javascript id="6f4zqa"
async function getUsers() {

    const response = await fetch(
        "https://example.com/api/users"
    );

    const data = await response.json();

    console.log(data);
}

getUsers();
```

Flow:

```text id="2j8y4r"
getUsers()
    ↓
fetch()
    ↓
GET Request
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

## 5. GET with Error Handling

Real applications mein response check karna important hai.

```javascript id="d7k3xp"
async function getUsers() {

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

getUsers();
```

---

# 6. GET Request with Query Parameters

API mein query parameters ka use specific data filter/search karne ke liye ho sakta hai.

Example URL:

```text id="6uk0gj"
https://example.com/api/users?city=mohali
```

Yahan:

```text id="n1d8pa"
city=mohali
```

query parameter hai.

---

## 7. Multiple Query Parameters

Example:

```text id="j7p2qa"
https://example.com/api/users?city=mohali&age=25
```

Yahan:

```text id="w3k6rs"
city = mohali
age  = 25
```

---

## 8. GET with `URLSearchParams`

JavaScript mein query parameters safely create karne ke liye `URLSearchParams` use kar sakte hain.

```javascript id="7b5n2x"
const params = new URLSearchParams({
    city: "Mohali",
    age: "25"
});

const url = `https://example.com/api/users?${params}`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

Generated URL roughly:

```text id="q4t9mw"
https://example.com/api/users?city=Mohali&age=25
```

---

# 9. GET Request for a Single Resource

Suppose API mein user ID `10` hai:

```text id="r7k3px"
https://example.com/api/users/10
```

Fetch:

```javascript id="h2v6cz"
async function getUser() {

    const response = await fetch(
        "https://example.com/api/users/10"
    );

    const user = await response.json();

    console.log(user);
}

getUser();
```

Yahan specific user ka data request kiya ja raha hai.

---

# 10. GET All Data vs Single Data

### All users

```text id="0k8wqe"
/api/users
```

### Single user

```text id="4t2mnb"
/api/users/10
```

Concept:

```text id="j5x7cz"
GET /users
     ↓
Multiple Users

GET /users/10
     ↓
Specific User
```

Actual behavior API design par depend karta hai.

---

# 11. GET Request with `.then()`

Promise-based approach:

```javascript id="2j0s5h"
fetch("https://example.com/api/users")
    .then((response) => {

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();

    })
    .then((users) => {

        console.log(users);

    })
    .catch((error) => {

        console.log(error.message);

    });
```

Flow:

```text id="7g3qpm"
fetch()
  ↓
response
  ↓
response.json()
  ↓
users
```

---

# 12. GET Request with Async/Await

Same request using `async/await`:

```javascript id="p9d2vy"
async function getUsers() {

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error("Request failed");
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

# 13. Displaying GET Data

API se users ka data milne ke baad webpage par display kar sakte hain.

Example HTML:

```html id="4z7wq8"
<ul id="userList"></ul>
```

JavaScript:

```javascript id="8c2m1v"
async function getUsers() {

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const users = await response.json();

        const userList = document.querySelector("#userList");

        users.forEach((user) => {

            const li = document.createElement("li");

            li.textContent = user.name;

            userList.appendChild(li);

        });

    } catch (error) {

        console.log(error.message);

    }
}

getUsers();
```

Flow:

```text id="q8g4cx"
API
 ↓
GET Request
 ↓
JSON Response
 ↓
JavaScript Array
 ↓
forEach()
 ↓
HTML List
```

---

# 14. GET Request and Request Body

Normally GET request ka purpose data retrieve karna hota hai.

Request body ke through data bhejne ke bajay GET mein commonly:

```text id="5p3h6r"
Query Parameters
```

ya URL path use kiya jata hai.

Example:

```text id="g7m2cx"
/users?id=10
```

or:

```text id="4x9vqa"
/users/10
```

---

# 15. GET Request Characteristics

GET requests generally:

```text id="k3v8qp"
✓ Data retrieve karne ke liye
✓ URL mein query parameters ho sakte hain
✓ Specific resource access kar sakti hain
✓ Commonly read operation ke liye
```

GET ko generally server state modify karne ke liye design nahi kiya jata.

---

# 16. GET vs POST

| GET | POST |
|---|---|
| Data retrieve karne ke liye | Data send/create karne ke liye commonly |
| Query parameters commonly URL mein | Data commonly request body mein |
| Read operation | Create/submit operation |
| `fetch(url)` | `fetch(url, options)` |

Example GET:

```javascript id="wmj1f0"
fetch("/users");
```

Example POST:

```javascript id="3z7qkn"
fetch("/users", {
    method: "POST",
    body: JSON.stringify({
        name: "Rohit"
    })
});
```

POST ko next file mein detail mein dekhenge.

---

# 17. Complete GET Example

```javascript id="7a5m3q"
async function getUser() {

    try {

        const response = await fetch(
            "https://example.com/api/users/10"
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

Complete flow:

```text id="k9r4wp"
getUser()
    ↓
fetch()
    ↓
GET Request
    ↓
API Server
    ↓
HTTP Response
    ↓
response.ok
    ↓
response.json()
    ↓
User Data
```

---

# Quick Revision

### GET

```text id="e5x7wm"
Server se data retrieve/read karne ke liye.
```

### Basic

```javascript id="7r4w2n"
fetch(url);
```

### Explicit GET

```javascript id="1x9q4m"
fetch(url, {
    method: "GET"
});
```

### Query Parameter

```text id="3g7w8p"
/users?city=Mohali
```

### Specific Resource

```text id="0m5k2q"
/users/10
```

### Async/Await

```javascript id="f4q1xb"
const response = await fetch(url);

if (!response.ok) {
    throw new Error("Request failed");
}

const data = await response.json();
```

### Remember

```text id="x8c3mv"
GET
 ↓
Read / Retrieve
 ↓
Server
 ↓
Response
 ↓
JSON Data
```

---

## Next File

```text id="1m7x4q"
15-APIs-and-Fetch/05-POST.md
```