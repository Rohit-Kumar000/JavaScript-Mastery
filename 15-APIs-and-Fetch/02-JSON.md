# JSON in JavaScript

## 1. What is JSON?

**JSON** ka full form hai:

> **JavaScript Object Notation**

JSON ek lightweight data format hai jo applications ke beech data exchange karne ke liye commonly use hota hai.

Simple words mein:

> JSON ek standard format hai jisme data ko store aur transfer kiya ja sakta hai.

Example:

```json
{
    "name": "Rohit",
    "age": 25,
    "city": "Mohali"
}
```

---

## 2. Why is JSON Used?

APIs ke through server aur client ke beech data exchange karna hota hai.

Example:

```text
Client
   ↓
API Request
   ↓
Server
   ↓
JSON Response
   ↓
Client
```

Example response:

```json
{
    "name": "Rohit",
    "age": 25
}
```

JavaScript application is data ko read karke webpage par display kar sakti hai.

---

## 3. JSON Syntax

JSON object:

```json
{
    "name": "Rohit",
    "age": 25,
    "city": "Mohali"
}
```

JSON mein:

```text
"key": value
```

format use hota hai.

Example:

```json
{
    "name": "Rohit"
}
```

Yahan:

```text
key   → "name"
value → "Rohit"
```

---

## 4. JSON Data Types

JSON mein commonly ye data types use hote hain:

```text
String
Number
Boolean
Object
Array
null
```

Example:

```json
{
    "name": "Rohit",
    "age": 25,
    "isStudent": true,
    "skills": ["HTML", "CSS", "JavaScript"],
    "address": {
        "city": "Mohali"
    },
    "middleName": null
}
```

---

## 5. JSON Strings

JSON mein strings ko **double quotes** mein likhna hota hai.

Correct:

```json
{
    "name": "Rohit"
}
```

Incorrect:

```json
{
    "name": 'Rohit'
}
```

JSON standard mein string values aur property names ke liye double quotes use hote hain.

---

## 6. JSON Numbers

Numbers ko quotes ke andar nahi likhte.

Correct:

```json
{
    "age": 25
}
```

Incorrect:

```json
{
    "age": "25"
}
```

Difference:

```text
25    → Number
"25"  → String
```

---

## 7. JSON Boolean

Boolean values:

```text
true
false
```

Example:

```json
{
    "isStudent": true,
    "isLoggedIn": false
}
```

Boolean ko quotes mein nahi likhna chahiye.

---

## 8. JSON Array

Multiple values ke liye array use kar sakte hain.

```json
{
    "skills": [
        "HTML",
        "CSS",
        "JavaScript"
    ]
}
```

JavaScript ki tarah JSON arrays mein bhi:

```text
[ ]
```

use hota hai.

---

## 9. JSON Object

JSON ke andar nested object bhi ho sakta hai.

```json
{
    "name": "Rohit",
    "address": {
        "city": "Mohali",
        "country": "India"
    }
}
```

Yahan `address` ek nested object hai.

---

## 10. JSON vs JavaScript Object

JavaScript object:

```javascript
const user = {
    name: "Rohit",
    age: 25
};
```

JSON:

```json
{
    "name": "Rohit",
    "age": 25
}
```

Main difference:

```text
JavaScript Object
→ JavaScript code ka data structure

JSON
→ Data exchange format
```

JSON property names normally double quotes mein hoti hain.

---

# 11. `JSON.stringify()`

JavaScript object ko JSON string mein convert karne ke liye:

```javascript
JSON.stringify()
```

use hota hai.

Example:

```javascript
const user = {
    name: "Rohit",
    age: 25
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
```

Output:

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
```

---

## 12. Checking the Type

```javascript
const user = {
    name: "Rohit"
};

const jsonData = JSON.stringify(user);

console.log(typeof user);
console.log(typeof jsonData);
```

Output:

```text
object
string
```

Important:

> `JSON.stringify()` JSON text/string return karta hai.

---

# 13. `JSON.parse()`

JSON string ko JavaScript object mein convert karne ke liye:

```javascript
JSON.parse()
```

use hota hai.

Example:

```javascript
const jsonData = '{"name":"Rohit","age":25}';

const user = JSON.parse(jsonData);

console.log(user);
```

Output:

```text
{ name: "Rohit", age: 25 }
```

Flow:

```text
JSON String
    ↓
JSON.parse()
    ↓
JavaScript Object
```

---

## 14. Accessing Parsed Data

```javascript
const jsonData = '{"name":"Rohit","age":25}';

const user = JSON.parse(jsonData);

console.log(user.name);
console.log(user.age);
```

Output:

```text
Rohit
25
```

---

## 15. `stringify()` vs `parse()`

### Object → JSON String

```javascript
JSON.stringify(object);
```

### JSON String → Object

```javascript
JSON.parse(jsonString);
```

Remember:

```text
Object
  ↓
stringify()
  ↓
JSON String
```

and:

```text
JSON String
  ↓
parse()
  ↓
Object
```

---

# 16. JSON with Arrays

JavaScript array:

```javascript
const skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

const jsonSkills = JSON.stringify(skills);

console.log(jsonSkills);
```

Output:

```text
["HTML","CSS","JavaScript"]
```

Parse:

```javascript
const data = JSON.parse(jsonSkills);

console.log(data[0]);
```

Output:

```text
HTML
```

---

# 17. Nested JSON

Example:

```json
{
    "name": "Rohit",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "address": {
        "city": "Mohali",
        "country": "India"
    }
}
```

JavaScript mein access:

```javascript
console.log(user.name);

console.log(user.skills[0]);

console.log(user.address.city);
```

Output:

```text
Rohit
HTML
Mohali
```

---

# 18. JSON from an API

API se commonly JSON response mil sakta hai.

Example:

```javascript
fetch("https://example.com/api/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

Yahan:

```javascript
response.json()
```

response body ko parse karke JavaScript data provide karta hai.

Flow:

```text
API
 ↓
JSON Response
 ↓
response.json()
 ↓
JavaScript Data
```

---

# 19. Invalid JSON

Invalid JSON ko parse karne par error aa sakta hai.

```javascript
const data = '{"name":"Rohit"';

const user = JSON.parse(data);
```

Ye invalid JSON hai, isliye parsing error generate ho sakta hai.

Error handle karne ke liye:

```javascript
try {

    const user = JSON.parse(data);

    console.log(user);

} catch (error) {

    console.log("Invalid JSON");

}
```

---

# 20. JSON Important Rules

JSON likhte waqt:

```text
✓ Property names double quotes mein
✓ String values double quotes mein
✓ Data comma se separate
✓ Objects { } mein
✓ Arrays [ ] mein
✓ Boolean true/false
✓ null allowed
✓ Trailing comma avoid karo
```

Example:

```json
{
    "name": "Rohit",
    "age": 25,
    "skills": [
        "JavaScript",
        "HTML"
    ],
    "active": true
}
```

---

# Quick Revision

### JSON

```text
JavaScript Object Notation
```

### Purpose

```text
Data exchange between applications
```

### Convert Object → JSON

```javascript
JSON.stringify(object);
```

### Convert JSON → Object

```javascript
JSON.parse(jsonString);
```

### Example

```javascript
const user = {
    name: "Rohit",
    age: 25
};

const json = JSON.stringify(user);

const object = JSON.parse(json);
```

Flow:

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
JSON.parse()
       ↓
JavaScript Object
```

### API Connection

```text
Client
  ↓
API
  ↓
JSON Response
  ↓
response.json()
  ↓
JavaScript Object/Data
```

---

## Next File

```text
15-APIs-and-Fetch/03-fetch.md
```