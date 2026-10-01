# JavaScript localStorage

## 1. What is localStorage?

`localStorage` browser ka ek built-in storage mechanism hai jiska use data ko browser mein save karne ke liye kiya jata hai.

Iska data browser close hone ke baad bhi normally available rehta hai.

Example:

```javascript
localStorage.setItem("name", "Rohit");
```

Browser close karne ke baad bhi `"Rohit"` stored reh sakta hai.

---

# 2. Why localStorage?

Normally JavaScript variables ka data page refresh ke baad lost ho sakta hai.

Example:

```javascript
let name = "Rohit";
```

Page refresh:

```text
name → lost
```

But:

```javascript
localStorage.setItem("name", "Rohit");
```

Page refresh:

```text
name → remains stored
```

---

# 3. localStorage is Browser Storage

```text
JavaScript
    ↓
localStorage
    ↓
Browser
    ↓
Stored Data
```

Data user's browser mein store hota hai.

---

# 4. localStorage Syntax

Basic syntax:

```javascript
localStorage.setItem("key", "value");
```

Example:

```javascript
localStorage.setItem(
    "username",
    "Rohit"
);
```

---

# 5. Key and Value

localStorage mein data:

```text
key → value
```

format mein store hota hai.

Example:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);
```

Here:

```text
key   = "name"
value = "Rohit"
```

---

# 6. Get Data

Stored value ko retrieve karne ke liye:

```javascript
localStorage.getItem("name");
```

Example:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);

const name =
    localStorage.getItem("name");

console.log(name);
```

Output:

```text
Rohit
```

---

# 7. setItem()

`setItem()` data save karta hai.

Syntax:

```javascript
localStorage.setItem(
    key,
    value
);
```

Example:

```javascript
localStorage.setItem(
    "city",
    "Mohali"
);
```

---

# 8. getItem()

`getItem()` stored data retrieve karta hai.

```javascript
const city =
    localStorage.getItem("city");

console.log(city);
```

Output:

```text
Mohali
```

---

# 9. Remove One Item

Specific item remove karne ke liye:

```javascript
localStorage.removeItem("city");
```

Example:

```javascript
localStorage.setItem(
    "city",
    "Mohali"
);

localStorage.removeItem("city");
```

Ab:

```javascript
console.log(
    localStorage.getItem("city")
);
```

Output:

```text
null
```

---

# 10. Clear All Data

localStorage ke saare stored items remove karne ke liye:

```javascript
localStorage.clear();
```

Example:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);

localStorage.setItem(
    "city",
    "Mohali"
);

localStorage.clear();
```

Ab dono remove ho gaye.

---

# 11. Check Data

Example:

```javascript
const name =
    localStorage.getItem("name");

if (name) {

    console.log("Name found");

} else {

    console.log("Name not found");

}
```

---

# 12. localStorage Stores Strings

Important:

`localStorage` values ko strings ke form mein store karta hai.

Example:

```javascript
localStorage.setItem(
    "age",
    25
);
```

Retrieve:

```javascript
const age =
    localStorage.getItem("age");

console.log(typeof age);
```

Output:

```text
string
```

Not:

```text
number
```

---

# 13. Number Conversion

Agar number store kiya hai:

```javascript
localStorage.setItem(
    "age",
    25
);
```

Retrieve:

```javascript
const age =
    localStorage.getItem("age");

console.log(Number(age));
```

Now:

```text
25
```

number ban jayega.

---

# 14. Boolean Storage

Example:

```javascript
localStorage.setItem(
    "isLoggedIn",
    true
);
```

Retrieve:

```javascript
const value =
    localStorage.getItem("isLoggedIn");

console.log(value);
```

Output:

```text
"true"
```

Ye string hai.

---

# 15. Boolean Conversion

Use:

```javascript
const isLoggedIn =
    localStorage.getItem(
        "isLoggedIn"
    ) === "true";
```

Now:

```text
true
```

boolean value milegi.

---

# 16. Objects Cannot Be Stored Directly

Suppose:

```javascript
const user = {

    name: "Rohit",
    age: 25

};
```

Agar directly:

```javascript
localStorage.setItem(
    "user",
    user
);
```

kiya to object properly preserve nahi hoga.

JavaScript object ko string mein convert karega.

---

# 17. JSON.stringify()

Object ko localStorage mein store karne ke liye:

```javascript
const user = {

    name: "Rohit",
    age: 25

};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

---

# 18. JSON.parse()

Stored JSON string ko object mein convert karne ke liye:

```javascript
const user =
    JSON.parse(
        localStorage.getItem("user")
    );

console.log(user);
```

Output:

```text
{
    name: "Rohit",
    age: 25
}
```

---

# 19. Object Storage Flow

```text
Object
   ↓
JSON.stringify()
   ↓
String
   ↓
localStorage
```

Retrieve:

```text
localStorage
   ↓
String
   ↓
JSON.parse()
   ↓
Object
```

---

# 20. Complete Object Example

```javascript
const user = {

    name: "Rohit",
    age: 25,
    course: "MCA"

};

localStorage.setItem(
    "user",
    JSON.stringify(user)
);

const savedUser =
    JSON.parse(
        localStorage.getItem("user")
    );

console.log(savedUser.name);
console.log(savedUser.course);
```

Output:

```text
Rohit
MCA
```

---

# 21. Store Array

Array bhi JSON ke through store kar sakte hain.

```javascript
const skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

localStorage.setItem(
    "skills",
    JSON.stringify(skills)
);
```

---

# 22. Retrieve Array

```javascript
const skills =
    JSON.parse(
        localStorage.getItem("skills")
    );

console.log(skills);
```

Output:

```text
[
    "HTML",
    "CSS",
    "JavaScript"
]
```

---

# 23. Add Item to Stored Array

Suppose:

```javascript
const skills = [
    "HTML",
    "CSS"
];

localStorage.setItem(
    "skills",
    JSON.stringify(skills)
);
```

Retrieve:

```javascript
const savedSkills =
    JSON.parse(
        localStorage.getItem("skills")
    );
```

Add:

```javascript
savedSkills.push("JavaScript");
```

Save again:

```javascript
localStorage.setItem(
    "skills",
    JSON.stringify(savedSkills)
);
```

---

# 24. localStorage Length

Kitne items stored hain:

```javascript
console.log(
    localStorage.length
);
```

Example:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);

localStorage.setItem(
    "city",
    "Mohali"
);

console.log(localStorage.length);
```

Output:

```text
2
```

---

# 25. key()

Stored item ki key retrieve karne ke liye:

```javascript
localStorage.key(index);
```

Example:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);

localStorage.setItem(
    "city",
    "Mohali"
);

console.log(
    localStorage.key(0)
);
```

Index order implementation/storage state par depend kar sakta hai.

---

# 26. Loop Through localStorage

```javascript
for (
    let i = 0;
    i < localStorage.length;
    i++
) {

    const key =
        localStorage.key(i);

    const value =
        localStorage.getItem(key);

    console.log(key, value);

}
```

---

# 27. Update Existing Data

Agar same key par new value save karo:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);

localStorage.setItem(
    "name",
    "Rahul"
);
```

Second value first value ko replace kar degi.

Now:

```javascript
console.log(
    localStorage.getItem("name")
);
```

Output:

```text
Rahul
```

---

# 28. localStorage as Key-Value Store

Conceptually:

```text
localStorage

name → Rohit
city → Mohali
age  → 25
```

---

# 29. Practical Example — Save Username

HTML:

```html
<input
    id="username"
    type="text"
>

<button id="save">
    Save
</button>
```

JavaScript:

```javascript
const input =
    document.getElementById(
        "username"
    );

const button =
    document.getElementById(
        "save"
    );

button.addEventListener(
    "click",
    () => {

        localStorage.setItem(
            "username",
            input.value
        );

    }
);
```

---

# 30. Load Username

```javascript
const savedName =
    localStorage.getItem(
        "username"
    );

if (savedName) {

    input.value = savedName;

}
```

Page reload karne ke baad saved username input mein aa sakta hai.

---

# 31. Save and Load Example

```javascript
const input =
    document.getElementById(
        "username"
    );

const saveButton =
    document.getElementById(
        "save"
    );

saveButton.addEventListener(
    "click",
    () => {

        localStorage.setItem(
            "username",
            input.value
        );

    }
);

const savedName =
    localStorage.getItem(
        "username"
    );

if (savedName) {

    input.value = savedName;

}
```

---

# 32. Practical Example — Theme

Dark mode preference save kar sakte hain.

```javascript
localStorage.setItem(
    "theme",
    "dark"
);
```

Page load:

```javascript
const theme =
    localStorage.getItem(
        "theme"
    );

if (theme === "dark") {

    document.body.classList.add(
        "dark"
    );

}
```

---

# 33. Save Theme Function

```javascript
function saveTheme(theme) {

    localStorage.setItem(
        "theme",
        theme
    );

}
```

Use:

```javascript
saveTheme("dark");
```

---

# 34. Get Theme Function

```javascript
function getTheme() {

    return localStorage.getItem(
        "theme"
    );

}
```

---

# 35. Remove Theme

```javascript
localStorage.removeItem(
    "theme"
);
```

---

# 36. Practical Example — Counter

```javascript
let count =
    Number(
        localStorage.getItem("count")
    ) || 0;

console.log(count);

count++;

localStorage.setItem(
    "count",
    count
);
```

Page refresh ke baad counter previous value se continue kar sakta hai.

---

# 37. localStorage with JSON

Complex data ke liye common pattern:

```javascript
function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}

function getData(key) {

    const data =
        localStorage.getItem(key);

    return data
        ? JSON.parse(data)
        : null;

}
```

Use:

```javascript
saveData(
    "user",
    {
        name: "Rohit",
        age: 25
    }
);
```

Retrieve:

```javascript
const user =
    getData("user");

console.log(user.name);
```

---

# 38. Reusable Storage Utility

A better structure:

```text
storage.js
```

```javascript
export function saveData(
    key,
    data
) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}

export function getData(key) {

    const data =
        localStorage.getItem(key);

    return data
        ? JSON.parse(data)
        : null;

}

export function removeData(key) {

    localStorage.removeItem(key);

}
```

---

# 39. Using Storage Module

```javascript
import {
    saveData,
    getData,
    removeData
} from "./storage.js";
```

Save:

```javascript
saveData(
    "user",
    {
        name: "Rohit"
    }
);
```

Get:

```javascript
const user =
    getData("user");
```

Remove:

```javascript
removeData("user");
```

---

# 40. localStorage and Page Refresh

Example:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);
```

Page refresh:

```text
Stored data → remains
```

---

# 41. localStorage and Browser Close

Normally:

```text
Browser close
      ↓
localStorage
      ↓
Data remains
```

Unlike temporary in-memory JavaScript variables.

---

# 42. localStorage and Incognito/Private Browsing

Private browsing modes can have different storage behavior and lifetime.

Do not assume private-session storage behaves exactly like normal browsing.

---

# 43. localStorage is Origin-Based

Storage browser origin ke according associated hota hai.

Conceptually:

```text
protocol + domain + port
```

Example:

```text
https://example.com
```

ka localStorage:

```text
≠
```

another origin ka localStorage.

---

# 44. Same Origin

Same origin ke pages generally same localStorage area access kar sakte hain.

Example:

```text
https://example.com/page1
https://example.com/page2
```

Both same origin hain.

---

# 45. Different Origin

Example:

```text
https://example.com
```

and:

```text
https://another.com
```

different origins hain.

Their localStorage data separate hota hai.

---

# 46. Protocol Matters

These are different origins:

```text
http://example.com
https://example.com
```

Protocol different hai.

Therefore storage context bhi different ho sakta hai.

---

# 47. localStorage is Synchronous

Methods such as:

```javascript
localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();
```

synchronous APIs hain.

Matlab operation complete hone tak JavaScript execution wait kar sakta hai.

---

# 48. Don't Store Large Data

localStorage small client-side data ke liye useful hai.

Suitable:

```text
✓ Theme preference
✓ Language preference
✓ Small settings
✓ Simple user preferences
✓ Small cached data
✓ Todo list
```

Not ideal for:

```text
✗ Large files
✗ Images as large datasets
✗ Videos
✗ Sensitive secrets
✗ Large application databases
```

---

# 49. Security Warning

localStorage ko secure secret storage mat samjho.

Example:

```javascript
localStorage.setItem(
    "password",
    "mypassword123"
);
```

Aisa sensitive data store karna unsafe ho sakta hai.

Similarly authentication tokens ko localStorage mein store karne se security risks ho sakte hain depending on application architecture.

---

# 50. XSS Risk

Agar malicious script application mein execute ho jaye, wo accessible localStorage data read kar sakti hai.

Therefore:

```text
localStorage
      ↓
not a secure vault
```

---

# 51. localStorage vs Cookies

Basic difference:

```text
localStorage
→ Browser-side storage
→ Automatically request ke saath server ko send nahi hota

Cookies
→ Browser storage
→ Certain cookies HTTP requests ke saath automatically send ho sakti hain
```

Authentication ke context mein cookies aur localStorage ke security trade-offs alag hote hain.

---

# 52. localStorage vs sessionStorage

```text
localStorage
→ Usually persists after browser close

sessionStorage
→ Tab/session lifetime ke around temporary
```

SessionStorage next file mein detail mein cover karenge.

---

# 53. localStorage Methods

Main methods:

```javascript
localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();
localStorage.clear();
localStorage.key();
```

Property:

```javascript
localStorage.length
```

---

# 54. Method Summary

| Method | Purpose |
|---|---|
| `setItem()` | Data save/update |
| `getItem()` | Data retrieve |
| `removeItem()` | One item remove |
| `clear()` | All items remove |
| `key()` | Key by index |
| `length` | Number of stored items |

---

# 55. Practical Mini Project — Remember Name

HTML:

```html
<input
    id="name"
    placeholder="Enter name"
>

<button id="save">
    Save Name
</button>

<h2 id="output"></h2>
```

JavaScript:

```javascript
const input =
    document.getElementById("name");

const button =
    document.getElementById("save");

const output =
    document.getElementById("output");

button.addEventListener(
    "click",
    () => {

        const name =
            input.value.trim();

        if (!name) {

            return;

        }

        localStorage.setItem(
            "name",
            name
        );

        output.textContent =
            `Hello ${name}`;

    }
);
```

---

# 56. Load Saved Name

```javascript
const savedName =
    localStorage.getItem("name");

if (savedName) {

    output.textContent =
        `Welcome back ${savedName}`;

}
```

---

# 57. Complete Example

```javascript
const input =
    document.getElementById("name");

const button =
    document.getElementById("save");

const output =
    document.getElementById("output");

const savedName =
    localStorage.getItem("name");

if (savedName) {

    input.value = savedName;

    output.textContent =
        `Welcome back ${savedName}`;

}

button.addEventListener(
    "click",
    () => {

        const name =
            input.value.trim();

        if (!name) {

            return;

        }

        localStorage.setItem(
            "name",
            name
        );

        output.textContent =
            `Hello ${name}`;

    }
);
```

---

# 58. Practical Mini Project — Save Todo List

```javascript
let todos = [
    "Learn JavaScript",
    "Practice DOM"
];

localStorage.setItem(
    "todos",
    JSON.stringify(todos)
);
```

Retrieve:

```javascript
const savedTodos =
    JSON.parse(
        localStorage.getItem("todos")
    ) || [];

console.log(savedTodos);
```

---

# 59. Add New Todo

```javascript
const todos =
    JSON.parse(
        localStorage.getItem("todos")
    ) || [];

todos.push("Learn Modules");

localStorage.setItem(
    "todos",
    JSON.stringify(todos)
);
```

---

# 60. Delete Todo

```javascript
const todos =
    JSON.parse(
        localStorage.getItem("todos")
    ) || [];

const updatedTodos =
    todos.filter(
        todo => todo !== "Learn Modules"
    );

localStorage.setItem(
    "todos",
    JSON.stringify(updatedTodos)
);
```

---

# 61. Common Mistake — Forgetting JSON.stringify()

Wrong:

```javascript
localStorage.setItem(
    "user",
    {
        name: "Rohit"
    }
);
```

Better:

```javascript
localStorage.setItem(
    "user",
    JSON.stringify({
        name: "Rohit"
    })
);
```

---

# 62. Common Mistake — Forgetting JSON.parse()

If object stored as JSON:

```javascript
const user =
    localStorage.getItem("user");
```

Then `user` is a string.

Correct:

```javascript
const user =
    JSON.parse(
        localStorage.getItem("user")
    );
```

---

# 63. Common Mistake — Missing Null Handling

If key doesn't exist:

```javascript
localStorage.getItem(
    "something"
);
```

result:

```text
null
```

For arrays:

```javascript
const todos =
    JSON.parse(
        localStorage.getItem("todos")
    ) || [];
```

This safely gives an empty array if nothing is stored.

---

# 64. localStorage Data Flow

```text
          JavaScript
               │
       ┌───────┴───────┐
       ↓               ↓
   setItem()        getItem()
       │               │
       ↓               ↓
    Storage          String
       │               │
       │          JSON.parse()
       │               ↓
       │            Object
       │
 JSON.stringify()
       ↑
     Object
```

---

# 65. Real-World Uses

localStorage commonly useful for:

```text
✓ Theme preference
✓ Language preference
✓ Todo lists
✓ Draft data
✓ Small settings
✓ UI preferences
✓ Recently selected options
✓ Small client-side cache
```

---

# 66. Important Limitations

```text
localStorage
│
├── String values
├── Synchronous API
├── Limited storage capacity
├── Origin-specific
├── Client-side only
└── Not a secure secret vault
```

Exact storage quota browser/environment ke according vary kar sakta hai.

---

# 67. Quick Revision

### Save

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);
```

### Get

```javascript
localStorage.getItem("name");
```

### Remove

```javascript
localStorage.removeItem("name");
```

### Clear

```javascript
localStorage.clear();
```

### Object Save

```javascript
localStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

### Object Get

```javascript
const user =
    JSON.parse(
        localStorage.getItem("user")
    );
```

---

# 68. Interview Questions

### Q1. What is localStorage?

`localStorage` is a browser storage API used to persist key-value data for an origin.

### Q2. Does localStorage survive page refresh?

Yes, normally stored data remains after page refresh.

### Q3. Does localStorage survive browser close?

Normally yes, unlike session-based storage.

### Q4. What type of data does localStorage store?

Its values are stored as strings.

### Q5. How do you store an object?

Using:

```javascript
JSON.stringify(object)
```

### Q6. How do you retrieve an object?

Using:

```javascript
JSON.parse(value)
```

### Q7. How do you delete one item?

```javascript
localStorage.removeItem("key");
```

### Q8. How do you delete everything?

```javascript
localStorage.clear();
```

### Q9. Is localStorage secure for passwords?

No. Sensitive secrets/passwords should not be stored in localStorage.

### Q10. Is localStorage asynchronous?

No. Its standard methods are synchronous.

---

# 69. Final Mental Model

```text
                    localStorage
                         │
              ┌──────────┼──────────┐
              ↓          ↓          ↓
          setItem     getItem    removeItem
              │          │          │
              ↓          ↓          ↓
            Save       Read       Delete
              │
              ↓
         String Data
              │
       ┌──────┴──────┐
       ↓             ↓
JSON.stringify()  JSON.parse()
       ↓             ↑
     Object ───────→ String
```

## One-Line Definition

> **localStorage is a browser-based key-value storage API that allows small amounts of string data to persist across page reloads and normally across browser sessions.**