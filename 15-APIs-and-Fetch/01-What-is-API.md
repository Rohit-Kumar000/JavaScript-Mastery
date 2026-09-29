# What is an API?

## 1. What is an API?

**API** ka full form hai:

> **Application Programming Interface**

API ek mechanism hai jiske through ek application doosre application ya service ke saath **data exchange** kar sakti hai.

Simple words mein:

> API do different software systems ke beech communication ka medium hai.

---

## 2. Real-Life Example

Suppose tum ek food delivery app use kar rahe ho.

```text
User
 ↓
Food App
 ↓
API
 ↓
Restaurant Server
 ↓
API
 ↓
Food App
 ↓
User
```

Tum app mein restaurant search karte ho.

App API ke through server se data request karti hai.

Server response bhejta hai:

```text
Restaurant Name
Food Items
Price
Availability
```

---

## 3. API as a Middleman

API ko simple example se samjho:

```text
You
 ↓
Waiter
 ↓
Kitchen
 ↓
Waiter
 ↓
You
```

Yahan:

```text
You       = Client
Waiter    = API
Kitchen   = Server
Food      = Response
```

API client aur server ke beech communication handle karne mein help karta hai.

---

## 4. Client and Server

API samajhne ke liye **Client** aur **Server** samajhna important hai.

### Client

Client wo application/device hota hai jo request karta hai.

Examples:

```text
Web Browser
Mobile App
Desktop App
Frontend Application
```

### Server

Server request receive karta hai aur required data/process provide karta hai.

```text
Client
  ↓
Request
  ↓
Server
  ↓
Response
  ↓
Client
```

---

## 5. API Request

Client jab server se data ya koi action request karta hai, use **API Request** kaha ja sakta hai.

Example:

```text
Client
  ↓
GET /users
  ↓
Server
```

Server request process karta hai.

---

## 6. API Response

Server request ka result client ko return karta hai.

Example:

```text
Request:
GET /users

Response:
[
    {
        "name": "Rohit"
    }
]
```

---

## 7. API Endpoint

API mein specific resource ko access karne ke liye ek URL/address hota hai, jise **endpoint** kaha jata hai.

Example:

```text
https://example.com/api/users
```

Yahan:

```text
/api/users
```

ek API endpoint ho sakta hai.

Different endpoints different resources represent kar sakte hain:

```text
/api/users
/api/products
/api/orders
/api/posts
```

---

## 8. HTTP Methods

APIs mein commonly HTTP methods use hote hain.

### GET

Data retrieve karne ke liye.

```text
GET /users
```

### POST

New data create/send karne ke liye.

```text
POST /users
```

### PUT

Existing resource ko update/replace karne ke liye.

```text
PUT /users/1
```

### PATCH

Existing resource ke kuch part ko update karne ke liye.

```text
PATCH /users/1
```

### DELETE

Data/resource delete karne ke liye.

```text
DELETE /users/1
```

Tumhare current roadmap mein mainly:

```text
GET
POST
```

par focus rahega.

---

## 9. API Data Format

API response different formats mein aa sakta hai.

Common formats:

```text
JSON
XML
```

Modern web APIs mein **JSON** bahut commonly use hota hai.

Example:

```json
{
    "name": "Rohit",
    "age": 25,
    "city": "Mohali"
}
```

---

## 10. API Response Status

Server response ke saath HTTP status code bhi provide kar sakta hai.

Common examples:

```text
200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Internal Server Error
```

Example:

```text
GET /users/1

200 OK
```

Matlab request successfully process hui.

---

## 11. Public API

Kuch APIs publicly available hoti hain aur developers unhe applications mein use kar sakte hain.

Example use cases:

```text
Weather API
Payment API
Maps API
News API
Currency API
GitHub API
```

---

## 12. API Key

Kuch APIs use karne ke liye **API key** required hoti hai.

Example:

```text
Client
  ↓
API Request + API Key
  ↓
API Server
  ↓
Response
```

API key identify/authenticate karne aur usage control karne mein help kar sakti hai.

**API keys ko public GitHub repositories mein directly expose nahi karna chahiye.**

---

## 13. REST API

Web development mein **REST API** ek commonly used API architectural style hai.

Example:

```text
GET    /users
POST   /users
GET    /users/10
PUT    /users/10
DELETE /users/10
```

Resources ko URLs se represent kiya jata hai aur HTTP methods operations ko describe karte hain.

---

## 14. API Flow

Complete basic flow:

```text
┌──────────────┐
│    Client    │
└──────┬───────┘
       │
       │ Request
       ↓
┌──────────────┐
│      API     │
└──────┬───────┘
       │
       │ Process
       ↓
┌──────────────┐
│    Server    │
└──────┬───────┘
       │
       │ Response
       ↓
┌──────────────┐
│    Client    │
└──────────────┘
```

---

## 15. JavaScript and APIs

JavaScript applications APIs ke saath communicate kar sakti hain.

For example:

```javascript
fetch("https://example.com/api/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

Yahan:

```text
fetch()
   ↓
API Request
   ↓
Server
   ↓
Response
   ↓
JSON Data
   ↓
JavaScript
```

`fetch()` ke baare mein next files mein detail mein padhenge.

---

# Quick Revision

### API

```text
Application Programming Interface
```

### Main Concept

```text
Client
  ↓
Request
  ↓
API / Server
  ↓
Response
  ↓
Client
```

### Common Methods

```text
GET
POST
PUT
PATCH
DELETE
```

### Common Response Format

```text
JSON
```

### Common Status Codes

```text
200 → Success
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Server Error
```

### Remember

> **API client aur server ke beech communication ka interface hai.**

---

## Next File

```text
15-APIs-and-Fetch/02-JSON.md
```