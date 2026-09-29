# API Projects

API concepts ko practically samajhne ke liye small projects banana bahut useful hai.

Is section mein hum `fetch()`, `GET`, `POST`, `JSON`, `async/await` aur error handling ko projects mein use karenge.

---

# 1. Random User Project

## Goal

API se random user ki information fetch karke webpage par display karna.

Display:

```text
Name
Email
Profile Image
Location
```

Basic flow:

```text
Button Click
    ↓
API Request
    ↓
JSON Response
    ↓
User Data
    ↓
HTML Update
```

Example:

```javascript
async function getUser() {

    try {

        const response = await fetch(
            "https://example.com/api/user"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const user = await response.json();

        console.log(user);

    } catch (error) {

        console.log(error.message);

    }
}
```

---

# 2. Weather App

## Goal

User city enter kare aur API se weather information fetch ho.

Example:

```text
Enter City
    ↓
Search
    ↓
Weather API
    ↓
Temperature
Weather
Humidity
Wind
    ↓
Display on Page
```

Possible UI:

```text
-------------------------
        Weather
-------------------------

City: Mohali

Temperature: 28°C
Condition: Clear
Humidity: 60%

-------------------------
```

Concepts:

```text
Input
fetch()
GET
JSON
async/await
DOM Manipulation
Error Handling
```

---

# 3. GitHub User Search

## Goal

GitHub username enter karke user information fetch karna.

Example:

```text
Username:
[Rohit-Kumar000]

[Search]
```

Result:

```text
Name
Username
Profile Image
Followers
Following
Public Repositories
Profile Link
```

Basic flow:

```text
Username
   ↓
GitHub API
   ↓
JSON
   ↓
JavaScript
   ↓
HTML
```

---

# 4. API Search Project

Generic search application:

```text
Search
   ↓
Query Parameter
   ↓
API
   ↓
Results
   ↓
Display Cards
```

Example:

```text
Search: JavaScript

-------------------------
JavaScript Tutorial
Description...
-------------------------

JavaScript Course
Description...
-------------------------
```

Concepts:

```text
Query Parameters
GET
fetch()
JSON
DOM
```

---

# 5. POST Form Project

## Goal

HTML form ka data API ko POST request ke through send karna.

Form:

```text
Name:
[____________]

Email:
[____________]

Age:
[____________]

[Submit]
```

Flow:

```text
User
 ↓
Fill Form
 ↓
Submit
 ↓
JavaScript
 ↓
JSON.stringify()
 ↓
POST Request
 ↓
API
 ↓
Response
```

Example:

```javascript
async function submitForm(user) {

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
            throw new Error("Submission failed");
        }

        const result = await response.json();

        console.log(result);

    } catch (error) {

        console.log(error.message);

    }
}
```

---

# 6. User List Project

API se multiple users fetch karke cards/list mein display karna.

Example:

```text
Users
-------------------------

Rohit Kumar
rohit@example.com

-------------------------

Aman Singh
aman@example.com

-------------------------

Rahul Sharma
rahul@example.com

-------------------------
```

JavaScript:

```javascript
async function getUsers() {

    try {

        const response = await fetch(
            "https://example.com/api/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach((user) => {

            console.log(user.name);

        });

    } catch (error) {

        console.log(error.message);

    }
}
```

---

# 7. Pagination Project

Large API data ko ek saath display karne ke bajay pages mein display karna.

Example:

```text
Users

User 1
User 2
User 3
User 4
User 5

[Previous] [1] [2] [3] [Next]
```

Flow:

```text
Page Number
    ↓
API Request
    ↓
Specific Data
    ↓
Display
```

Example URL:

```text
/api/users?page=1
```

Next page:

```text
/api/users?page=2
```

---

# 8. Loading State

API request complete hone mein time lag sakta hai.

Isliye loading message display kar sakte hain.

```javascript
async function getData() {

    console.log("Loading...");

    try {

        const response = await fetch(
            "https://example.com/api/data"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Something went wrong");

    }

}
```

UI:

```text
Loading...
    ↓
Data Loaded
```

---

# 9. Error State

Agar API request fail ho jaye to user ko proper message show karna chahiye.

```javascript
try {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to fetch data");
    }

    const data = await response.json();

} catch (error) {

    console.log(error.message);

}
```

UI:

```text
❌ Unable to fetch data.
Please try again.
```

---

# 10. Complete API Project Structure

Ek proper API-based project mein:

```text
API Project
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

UI structure.

### `style.css`

Design and styling.

### `script.js`

API request, data processing aur DOM manipulation.

---

# 11. Recommended Project Ideas

Beginner level:

```text
01. Random User Generator
02. Weather App
03. GitHub User Search
04. Quote Generator
05. Joke Generator
```

Intermediate level:

```text
06. Movie Search App
07. News Search App
08. Recipe Finder
09. Country Information App
10. Currency Converter
```

Advanced:

```text
11. E-Commerce Product Explorer
12. Dashboard using Multiple APIs
13. Search + Filter + Pagination App
14. API-based Admin Dashboard
15. Full CRUD Application
```

---

# 12. Skills Used in API Projects

API projects complete karne ke baad tumhe ye concepts practically use karne chahiye:

```text
✓ API
✓ JSON
✓ fetch()
✓ GET
✓ POST
✓ Promise
✓ async/await
✓ try/catch
✓ Error Handling
✓ HTTP Status Codes
✓ Query Parameters
✓ DOM Manipulation
✓ Event Handling
```

---

# 13. API Project Flow

Complete concept:

```text
                 USER
                   │
                   ↓
              User Action
                   │
                   ↓
             JavaScript
                   │
                   ↓
                fetch()
                   │
                   ↓
             API Request
                   │
                   ↓
                SERVER
                   │
                   ↓
              API Response
                   │
                   ↓
                 JSON
                   │
                   ↓
          response.json()
                   │
                   ↓
             JavaScript
                   │
                   ↓
            DOM Manipulation
                   │
                   ↓
               WEB PAGE
```

---

# Quick Revision

### API

```text
Applications ke beech communication.
```

### JSON

```text
Data exchange format.
```

### Fetch

```javascript
fetch(url);
```

Network request ke liye.

### GET

```text
Data retrieve/read.
```

### POST

```text
Data send/create.
```

### JSON.stringify()

```text
Object → JSON String
```

### JSON.parse()

```text
JSON String → JavaScript Object
```

### Async/Await

```text
Asynchronous code ko readable way mein handle karne ke liye.
```

### Error Handling

```javascript
try {
    // API request
} catch (error) {
    // Handle error
}
```

---

# 15-APIs-and-Fetch Complete

```text
15-APIs-and-Fetch
│
├── 01-What-is-API.md
├── 02-JSON.md
├── 03-fetch.md
├── 04-GET.md
├── 05-POST.md
├── 06-API-Projects.md
└── Projects
```

## Next Folder

Ab next folder **16-Error-Handling** hai:

```text
16-Error-Handling
│
├── 01-Errors.md  ← NEXT
├── 02-try-catch.md
├── 03-finally.md
├── 04-throw.md
└── Projects
```