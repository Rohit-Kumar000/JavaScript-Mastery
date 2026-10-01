# JavaScript sessionStorage

## 1. What is sessionStorage?

`sessionStorage` browser ka built-in storage mechanism hai jiska use data ko **current browser tab/session** ke liye temporarily store karne ke liye kiya jata hai.

Example:

```javascript
sessionStorage.setItem(
    "name",
    "Rohit"
);
```

---

# 2. Why sessionStorage?

Kabhi-kabhi hume data sirf current tab/session tak rakhna hota hai.

Example:

```text
User opens website
       ↓
Data stored
       ↓
Page refresh
       ↓
Data remains
       ↓
Tab is closed
       ↓
Session data is normally removed
```

---

# 3. sessionStorage vs localStorage

| Feature | localStorage | sessionStorage |
|---|---|---|
| Data storage | Browser | Current tab/session |
| Page refresh | Remains | Remains |
| Tab close | Normally remains | Normally removed |
| API | Same methods | Same methods |
| Values | Strings | Strings |
| `setItem()` | Yes | Yes |
| `getItem()` | Yes | Yes |
| `removeItem()` | Yes | Yes |
| `clear()` | Yes | Yes |

---

# 4. Basic Syntax

```javascript
sessionStorage.setItem(
    "key",
    "value"
);
```

Example:

```javascript
sessionStorage.setItem(
    "username",
    "Rohit"
);
```

---

# 5. getItem()

Stored value retrieve karne ke liye:

```javascript
const username =
    sessionStorage.getItem(
        "username"
    );

console.log(username);
```

Output:

```text
Rohit
```

---

# 6. setItem()

Data save/update karne ke liye:

```javascript
sessionStorage.setItem(
    "city",
    "Mohali"
);
```

---

# 7. removeItem()

Specific item remove karne ke liye:

```javascript
sessionStorage.removeItem(
    "city"
);
```

---

# 8. clear()

Current session storage ke saare items remove karne ke liye:

```javascript
sessionStorage.clear();
```

---

# 9. length

Stored items ki number check kar sakte hain:

```javascript
console.log(
    sessionStorage.length
);
```

---

# 10. key()

Index ke through key retrieve kar sakte hain:

```javascript
const key =
    sessionStorage.key(0);

console.log(key);
```

---

# 11. Example

```javascript
sessionStorage.setItem(
    "name",
    "Rohit"
);

sessionStorage.setItem(
    "course",
    "MCA"
);

console.log(
    sessionStorage.getItem("name")
);

console.log(
    sessionStorage.getItem("course")
);
```

Output:

```text
Rohit
MCA
```

---

# 12. sessionStorage Stores Strings

Jaise `localStorage`, `sessionStorage` bhi values ko strings ke form mein store karta hai.

Example:

```javascript
sessionStorage.setItem(
    "age",
    25
);
```

Retrieve:

```javascript
const age =
    sessionStorage.getItem("age");

console.log(typeof age);
```

Output:

```text
string
```

---

# 13. Number Conversion

```javascript
const age =
    Number(
        sessionStorage.getItem("age")
    );

console.log(age);
```

Ab:

```text
25
```

number hai.

---

# 14. Boolean Storage

```javascript
sessionStorage.setItem(
    "loggedIn",
    true
);
```

Retrieve:

```javascript
const loggedIn =
    sessionStorage.getItem(
        "loggedIn"
    );

console.log(loggedIn);
```

Value string hogi:

```text
"true"
```

Convert:

```javascript
const loggedIn =
    sessionStorage.getItem(
        "loggedIn"
    ) === "true";
```

---

# 15. Objects in sessionStorage

Object directly store nahi karna chahiye.

Wrong:

```javascript
const user = {
    name: "Rohit",
    age: 25
};

sessionStorage.setItem(
    "user",
    user
);
```

Correct:

```javascript
sessionStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

---

# 16. Retrieve Object

```javascript
const user =
    JSON.parse(
        sessionStorage.getItem("user")
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

# 17. Store Array

```javascript
const skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

sessionStorage.setItem(
    "skills",
    JSON.stringify(skills)
);
```

---

# 18. Retrieve Array

```javascript
const skills =
    JSON.parse(
        sessionStorage.getItem("skills")
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

# 19. Add Data to Stored Array

```javascript
const skills =
    JSON.parse(
        sessionStorage.getItem("skills")
    ) || [];

skills.push("React");

sessionStorage.setItem(
    "skills",
    JSON.stringify(skills)
);
```

---

# 20. Page Refresh Behavior

Suppose:

```javascript
sessionStorage.setItem(
    "name",
    "Rohit"
);
```

Page refresh:

```text
sessionStorage
      ↓
Data remains
```

Isliye sessionStorage ko page refresh ke against temporary persistence ke liye use kiya ja sakta hai.

---

# 21. Tab Close Behavior

Normally:

```text
Open Tab
   ↓
sessionStorage
   ↓
Data available
   ↓
Close Tab
   ↓
Session ends
   ↓
Data normally removed
```

Browser behavior private browsing aur implementation details ke according vary kar sakta hai, but standard use-case current page session se tied hota hai.

---

# 22. New Tab

Suppose ek tab mein:

```javascript
sessionStorage.setItem(
    "name",
    "Rohit"
);
```

Dusre tab mein same website open karne par us tab ko automatically same sessionStorage data assume nahi karna chahiye.

`sessionStorage` tab/session scoped hota hai.

---

# 23. localStorage Example

```javascript
localStorage.setItem(
    "theme",
    "dark"
);
```

Browser close/open ke baad normally:

```text
theme → dark
```

---

# 24. sessionStorage Example

```javascript
sessionStorage.setItem(
    "step",
    "2"
);
```

Current tab/session ke andar:

```text
step → 2
```

Tab/session end hone par normally storage clear ho jata hai.

---

# 25. When to Use sessionStorage?

Useful for temporary session data:

```text
✓ Multi-step forms
✓ Temporary filters
✓ Current checkout step
✓ Temporary UI state
✓ Current session preferences
✓ Form progress
✓ Temporary page state
```

---

# 26. Multi-Step Form Example

Suppose form ke 3 steps hain:

```text
Step 1
  ↓
Step 2
  ↓
Step 3
```

Current step save:

```javascript
sessionStorage.setItem(
    "currentStep",
    "2"
);
```

Page refresh hone par:

```javascript
const step =
    sessionStorage.getItem(
        "currentStep"
    );

console.log(step);
```

Output:

```text
2
```

---

# 27. Form Data Example

```javascript
const formData = {
    name: "Rohit",
    city: "Mohali"
};

sessionStorage.setItem(
    "formData",
    JSON.stringify(formData)
);
```

Retrieve:

```javascript
const savedData =
    JSON.parse(
        sessionStorage.getItem(
            "formData"
        )
    );

console.log(savedData.name);
```

---

# 28. Temporary Cart Example

Suppose user current session mein shopping kar raha hai.

```javascript
const cart = [
    {
        name: "Keyboard",
        price: 1500
    },
    {
        name: "Mouse",
        price: 800
    }
];

sessionStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
```

---

# 29. Retrieve Cart

```javascript
const cart =
    JSON.parse(
        sessionStorage.getItem("cart")
    ) || [];

console.log(cart);
```

---

# 30. Current Checkout Step

```javascript
sessionStorage.setItem(
    "checkoutStep",
    "payment"
);
```

Retrieve:

```javascript
const step =
    sessionStorage.getItem(
        "checkoutStep"
    );

console.log(step);
```

Output:

```text
payment
```

---

# 31. Temporary Login UI State

For example:

```javascript
sessionStorage.setItem(
    "loginAttempt",
    "1"
);
```

Ye current tab/session ke temporary UI state ke liye useful ho sakta hai.

**Note:** Actual authentication credentials/tokens ko casually sessionStorage mein store karna automatically secure nahi bana deta.

---

# 32. Storage Methods

sessionStorage ke main methods:

```javascript
sessionStorage.setItem();
sessionStorage.getItem();
sessionStorage.removeItem();
sessionStorage.clear();
sessionStorage.key();
```

Property:

```javascript
sessionStorage.length
```

---

# 33. Method Summary

| Method | Purpose |
|---|---|
| `setItem()` | Save/update data |
| `getItem()` | Retrieve data |
| `removeItem()` | Remove one item |
| `clear()` | Remove all items |
| `key()` | Get key by index |
| `length` | Number of stored items |

---

# 34. localStorage and sessionStorage Same API

Notice:

```javascript
localStorage.setItem(
    "name",
    "Rohit"
);
```

and:

```javascript
sessionStorage.setItem(
    "name",
    "Rohit"
);
```

Methods same hain.

Main difference storage lifetime/scope ka hai.

---

# 35. Reusable Storage Function

```javascript
function saveSessionData(
    key,
    data
) {

    sessionStorage.setItem(
        key,
        JSON.stringify(data)
    );

}
```

Use:

```javascript
saveSessionData(
    "user",
    {
        name: "Rohit",
        age: 25
    }
);
```

---

# 36. Reusable Get Function

```javascript
function getSessionData(key) {

    const data =
        sessionStorage.getItem(key);

    return data
        ? JSON.parse(data)
        : null;

}
```

Use:

```javascript
const user =
    getSessionData("user");

console.log(user);
```

---

# 37. Complete Storage Utility

```javascript
function saveData(key, data) {

    sessionStorage.setItem(
        key,
        JSON.stringify(data)
    );

}

function getData(key) {

    const data =
        sessionStorage.getItem(key);

    return data
        ? JSON.parse(data)
        : null;

}

function removeData(key) {

    sessionStorage.removeItem(key);

}
```

---

# 38. Using Utility

```javascript
saveData(
    "user",
    {
        name: "Rohit",
        course: "MCA"
    }
);
```

Get:

```javascript
const user =
    getData("user");

console.log(user.course);
```

Remove:

```javascript
removeData("user");
```

---

# 39. sessionStorage with DOM

HTML:

```html
<input
    id="name"
    placeholder="Enter name"
>

<button id="save">
    Save
</button>

<h2 id="output"></h2>
```

JavaScript:

```javascript
const input =
    document.getElementById("name");

const save =
    document.getElementById("save");

const output =
    document.getElementById("output");

save.addEventListener(
    "click",
    () => {

        sessionStorage.setItem(
            "name",
            input.value
        );

        output.textContent =
            input.value;

    }
);
```

---

# 40. Restore Data After Refresh

```javascript
const savedName =
    sessionStorage.getItem("name");

if (savedName) {

    input.value = savedName;

    output.textContent =
        savedName;

}
```

---

# 41. Complete Example

```javascript
const input =
    document.getElementById("name");

const save =
    document.getElementById("save");

const output =
    document.getElementById("output");

const savedName =
    sessionStorage.getItem("name");

if (savedName) {

    input.value = savedName;

    output.textContent =
        savedName;

}

save.addEventListener(
    "click",
    () => {

        const name =
            input.value.trim();

        if (!name) {

            return;

        }

        sessionStorage.setItem(
            "name",
            name
        );

        output.textContent =
            name;

    }
);
```

---

# 42. Practical Project — Multi-Step Form

Folder structure:

```text
Multi-Step-Form
│
├── index.html
├── app.js
└── style.css
```

State:

```javascript
const formData = {
    name: "",
    email: "",
    city: ""
};
```

Save:

```javascript
sessionStorage.setItem(
    "formData",
    JSON.stringify(formData)
);
```

---

# 43. Load Form Data

```javascript
const savedData =
    JSON.parse(
        sessionStorage.getItem(
            "formData"
        )
    ) || {};

console.log(savedData);
```

---

# 44. Save Current Step

```javascript
sessionStorage.setItem(
    "step",
    "2"
);
```

Load current step:

```javascript
const step =
    Number(
        sessionStorage.getItem("step")
    ) || 1;

console.log(step);
```

---

# 45. Move to Next Step

```javascript
let step =
    Number(
        sessionStorage.getItem("step")
    ) || 1;

step++;

sessionStorage.setItem(
    "step",
    step
);
```

---

# 46. Reset Form Session

```javascript
sessionStorage.removeItem(
    "formData"
);

sessionStorage.removeItem(
    "step"
);
```

Or:

```javascript
sessionStorage.clear();
```

**Warning:** `clear()` current sessionStorage ke all keys remove kar deta hai.

---

# 47. sessionStorage and JSON

Remember:

```text
Object
   ↓
JSON.stringify()
   ↓
sessionStorage
```

Retrieve:

```text
sessionStorage
   ↓
JSON.parse()
   ↓
Object
```

---

# 48. Important Difference

```text
localStorage
    ↓
Longer-term browser persistence
```

```text
sessionStorage
    ↓
Current tab/session persistence
```

---

# 49. Security

`sessionStorage` ko bhi secure vault nahi samajhna chahiye.

Agar malicious JavaScript application context mein execute ho jaye, accessible sessionStorage data read ho sakta hai.

Therefore:

```text
Never assume:
sessionStorage = secure storage
```

---

# 50. Sensitive Data

Avoid storing:

```text
✗ Passwords
✗ Highly sensitive personal information
✗ Secret keys
✗ Private credentials
```

Application authentication architecture ke according secure server-side/session-cookie mechanisms use kiye ja sakte hain.

---

# 51. sessionStorage vs Cookies

Basic comparison:

| Feature | sessionStorage | Cookies |
|---|---|---|
| JavaScript access | Yes | Depends on `HttpOnly` |
| Sent automatically with HTTP request | No | Applicable cookies can be |
| Storage purpose | Client-side temporary state | Client/server state |
| Lifetime | Session-oriented | Configurable |
| Size | Limited | Smaller per cookie |

---

# 52. sessionStorage vs IndexedDB

For simple temporary data:

```text
sessionStorage
```

For larger structured client-side data:

```text
IndexedDB
```

may be more appropriate.

---

# 53. Common Mistake

Wrong:

```javascript
sessionStorage.setItem(
    "user",
    {
        name: "Rohit"
    }
);
```

Correct:

```javascript
sessionStorage.setItem(
    "user",
    JSON.stringify({
        name: "Rohit"
    })
);
```

---

# 54. Common Mistake

Wrong:

```javascript
const user =
    sessionStorage.getItem("user");

console.log(user.name);
```

Because `user` is a string.

Correct:

```javascript
const user =
    JSON.parse(
        sessionStorage.getItem("user")
    );

console.log(user.name);
```

---

# 55. Common Mistake — No Null Handling

If key doesn't exist:

```javascript
sessionStorage.getItem(
    "user"
);
```

returns:

```text
null
```

For arrays:

```javascript
const users =
    JSON.parse(
        sessionStorage.getItem("users")
    ) || [];
```

---

# 56. Common Mistake — clear()

Avoid blindly using:

```javascript
sessionStorage.clear();
```

if your application has multiple unrelated session values.

Prefer:

```javascript
sessionStorage.removeItem(
    "checkoutStep"
);
```

when only one value needs to be deleted.

---

# 57. Real-World Examples

sessionStorage can be useful for:

```text
✓ Current checkout step
✓ Temporary form progress
✓ Current filter state
✓ Temporary UI settings
✓ Current quiz progress
✓ Temporary navigation state
✓ One-session data
```

---

# 58. Example — Quiz Progress

```javascript
sessionStorage.setItem(
    "question",
    "5"
);

sessionStorage.setItem(
    "score",
    "4"
);
```

Retrieve:

```javascript
const question =
    Number(
        sessionStorage.getItem(
            "question"
        )
    );

const score =
    Number(
        sessionStorage.getItem(
            "score"
        )
    );

console.log(question);
console.log(score);
```

---

# 59. Example — Quiz Object

```javascript
const quizState = {

    question: 5,
    score: 4,
    completed: false

};

sessionStorage.setItem(
    "quizState",
    JSON.stringify(quizState)
);
```

Retrieve:

```javascript
const quizState =
    JSON.parse(
        sessionStorage.getItem(
            "quizState"
        )
    );

console.log(
    quizState.score
);
```

---

# 60. Example — Temporary Search

```javascript
sessionStorage.setItem(
    "search",
    "JavaScript"
);
```

Restore:

```javascript
const search =
    sessionStorage.getItem(
        "search"
    );

console.log(search);
```

---

# 61. Storage Architecture

```text
                 Browser
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
    localStorage        sessionStorage
          │                   │
          ↓                   ↓
 Persistent data        Session data
```

---

# 62. Quick Revision

### Save

```javascript
sessionStorage.setItem(
    "name",
    "Rohit"
);
```

### Get

```javascript
sessionStorage.getItem(
    "name"
);
```

### Remove

```javascript
sessionStorage.removeItem(
    "name"
);
```

### Clear

```javascript
sessionStorage.clear();
```

### Object Save

```javascript
sessionStorage.setItem(
    "user",
    JSON.stringify(user)
);
```

### Object Get

```javascript
const user =
    JSON.parse(
        sessionStorage.getItem("user")
    );
```

---

# 63. Interview Questions

### Q1. What is sessionStorage?

`sessionStorage` is a browser storage API used to store data associated with the current browsing session/tab.

### Q2. Does sessionStorage survive page refresh?

Yes, normally.

### Q3. Does sessionStorage survive tab close?

Normally no; its data is associated with the tab/session and is cleared when that browsing session ends.

### Q4. How is sessionStorage different from localStorage?

`localStorage` is designed for longer-term persistence, while `sessionStorage` is scoped to the current tab/session.

### Q5. Can sessionStorage store objects directly?

No. Objects should generally be converted using `JSON.stringify()`.

### Q6. How do you retrieve a stored object?

Use:

```javascript
JSON.parse(
    sessionStorage.getItem("key")
);
```

### Q7. How do you delete one item?

```javascript
sessionStorage.removeItem("key");
```

### Q8. How do you delete all sessionStorage data?

```javascript
sessionStorage.clear();
```

### Q9. Is sessionStorage secure?

No. It should not be treated as secure secret storage.

### Q10. Is sessionStorage synchronous?

Yes, its standard storage methods are synchronous.

---

# 64. Final Mental Model

```text
              sessionStorage
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
    setItem()   getItem()   removeItem()
        │           │           │
        ↓           ↓           ↓
      Save        Read        Delete
        │
        ↓
   String Data
        │
   JSON.stringify()
        ↑
      Object
```

## One-Line Definition

> **sessionStorage is a browser storage API that stores key-value data for the current browsing session and is commonly used for temporary client-side state.**