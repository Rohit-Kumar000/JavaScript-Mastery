# POST Requests in JavaScript

## 1. What is a POST Request?

**POST** HTTP method ka use server ko data **send** karne ke liye commonly kiya jata hai.

Simple words mein:

> POST request ka use data submit ya create karne ke liye commonly hota hai.

Examples:

```text
User Registration
Login
Create Account
Submit Form
Create Product
Send Message
```

Basic flow:

```text
Client
  ↓
POST Request + Data
  ↓
Server
  ↓
Response
  ↓
Client
```

---

# 2. GET vs POST

### GET

Server se data lene ke liye:

```text
GET /users
```

### POST

Server ko data bhejne/create karne ke liye:

```text
POST /users
```

Simple:

```text
GET  → Data lena
POST → Data bhejna
```

---

# 3. Basic POST Request

`fetch()` mein POST request ke liye options object use karte hain.

```javascript
fetch("https://example.com/api/users", {
    method: "POST"
});
```

Yahan:

```javascript
method: "POST"
```

request ka HTTP method define karta hai.

---

# 4. Sending Data with POST

POST request mein data commonly `body` ke andar bheja jata hai.

```javascript
fetch("https://example.com/api/users", {
    method: "POST",
    body: JSON.stringify({
        name: "Rohit",
        age: 25
    })
});
```

Flow:

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
Request Body
      ↓
POST Request
      ↓
Server
```

---

# 5. Setting Content-Type

JSON data send karte waqt commonly `Content-Type` header set kiya jata hai.

```javascript
fetch("https://example.com/api/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Rohit",
        age: 25
    })

});
```

Yahan:

```text
Content-Type
      ↓
Server ko batata hai
request body kis format mein hai
```

---

# 6. POST with Async/Await

Modern JavaScript mein:

```javascript
async function createUser() {

    const response = await fetch(
        "https://example.com/api/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Rohit",
                age: 25
            })
        }
    );

    const data = await response.json();

    console.log(data);
}

createUser();
```

---

# 7. POST with Error Handling

Real application mein error handling zaroori hai.

```javascript
async function createUser() {

    try {

        const response = await fetch(
            "https://example.com/api/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Rohit",
                    age: 25
                })
            }
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const data = await response.json();

        console.log("Success:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

createUser();
```

---

# 8. POST Body

Request body mein hum data send kar sakte hain.

Example:

```javascript
body: JSON.stringify({
    name: "Rohit",
    email: "rohit@example.com"
})
```

Server ko JSON data milega:

```json
{
    "name": "Rohit",
    "email": "rohit@example.com"
}
```

---

# 9. Why `JSON.stringify()`?

JavaScript object:

```javascript
const user = {
    name: "Rohit",
    age: 25
};
```

Request body mein JSON text bhejne ke liye:

```javascript
JSON.stringify(user);
```

Result:

```text
{"name":"Rohit","age":25}
```

Flow:

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
HTTP Request Body
```

---

# 10. Receiving POST Response

Server POST request process karne ke baad response return kar sakta hai.

```javascript
async function createUser() {

    const response = await fetch(
        "https://example.com/api/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Rohit"
            })
        }
    );

    const data = await response.json();

    console.log(data);
}
```

Flow:

```text
Client
  ↓
POST + JSON
  ↓
Server
  ↓
Process Data
  ↓
Response
  ↓
Client
```

---

# 11. POST with Form Data

HTML form:

```html
<form id="userForm">

    <input
        type="text"
        id="name"
        placeholder="Enter name"
    >

    <input
        type="email"
        id="email"
        placeholder="Enter email"
    >

    <button type="submit">
        Submit
    </button>

</form>
```

JavaScript:

```javascript
const form = document.querySelector("#userForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    try {

        const response = await fetch(
            "https://example.com/api/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to submit form");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }

});
```

---

# 12. Short Object Property Syntax

Agar variable aur property ka naam same ho:

```javascript
const name = "Rohit";
const email = "rohit@example.com";
```

To:

```javascript
{
    name: name,
    email: email
}
```

ko short mein:

```javascript
{
    name,
    email
}
```

likh sakte hain.

---

# 13. POST with `.then()`

POST request Promise chaining ke saath:

```javascript
fetch("https://example.com/api/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Rohit",
        age: 25
    })

})
.then((response) => {

    if (!response.ok) {
        throw new Error("Request failed");
    }

    return response.json();

})
.then((data) => {

    console.log("Success:", data);

})
.catch((error) => {

    console.log("Error:", error.message);

});
```

---

# 14. POST with Async/Await

Same example:

```javascript
async function createUser() {

    try {

        const response = await fetch(
            "https://example.com/api/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Rohit",
                    age: 25
                })
            }
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log("Success:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }
}

createUser();
```

---

# 15. Common POST Headers

JSON API ke saath commonly:

```javascript
headers: {
    "Content-Type": "application/json"
}
```

use hota hai.

Iska meaning:

```text
Request body
      ↓
JSON format mein hai
```

Authentication wale APIs mein additional headers bhi ho sakte hain.

Example:

```javascript
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer TOKEN"
}
```

**Real API tokens/secrets ko public GitHub repositories mein directly commit nahi karna chahiye.**

---

# 16. POST Response Status

Successful POST ke baad commonly:

```text
201 → Created
```

mil sakta hai, although exact status API design par depend karta hai.

Example:

```javascript
if (response.status === 201) {

    console.log("User created successfully");

}
```

---

# 17. GET vs POST Example

### GET

```javascript
fetch("/users");
```

Meaning:

```text
Users ka data retrieve karo.
```

### POST

```javascript
fetch("/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Rohit"
    })

});
```

Meaning:

```text
New user data server ko send karo.
```

---

# 18. Complete Example

```javascript
async function createUser(user) {

    try {

        const response = await fetch(
            "https://example.com/api/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)
            }
        );

        if (!response.ok) {
            throw new Error(
                `Request failed: ${response.status}`
            );
        }

        const result = await response.json();

        console.log("User created:", result);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

createUser({
    name: "Rohit",
    age: 25,
    city: "Mohali"
});
```

Flow:

```text
createUser()
      ↓
JavaScript Object
      ↓
JSON.stringify()
      ↓
POST Request
      ↓
API Server
      ↓
Response
      ↓
response.json()
      ↓
Result
```

---

# Quick Revision

### POST

```text
Server ko data send/submit/create karne ke liye commonly use hota hai.
```

### Basic Structure

```javascript
fetch(url, {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
});
```

### Important

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
Request Body
       ↓
POST
       ↓
Server
       ↓
Response
       ↓
response.json()
```

### GET vs POST

```text
GET
 ↓
Retrieve data

POST
 ↓
Send/Create data
```

---

## Next File

Ab **15-APIs-and-Fetch** ki last theory file:

```text
15-APIs-and-Fetch/06-API-Projects.md
```