# ES Modules (ESM)

## 1. What are ES Modules?

ES Modules, jise **ESM** bhi kaha jata hai, JavaScript ka standard module system hai.

ES Modules ka use JavaScript code ko separate files mein divide karne aur unke beech functionality share karne ke liye hota hai.

Main keywords:

```text
export
import
```

---

# 2. Why ES Modules?

Large applications mein ek hi JavaScript file maintain karna difficult ho sakta hai.

ES Modules code ko logical parts mein divide karte hain.

Example:

```text
project
│
├── app.js
├── math.js
├── user.js
├── api.js
└── utils.js
```

Har file ka specific responsibility ho sakta hai.

---

# 3. ES Modules Are Standard JavaScript

ES Modules JavaScript language ka standard module system hai.

Iska syntax modern JavaScript ka part hai:

```javascript
export const name = "Rohit";
```

and:

```javascript
import { name } from "./user.js";
```

---

# 4. ESM vs CommonJS

JavaScript ecosystem mein do popular module systems milte hain:

```text
ES Modules
CommonJS
```

ES Modules:

```javascript
import { add } from "./math.js";
```

CommonJS:

```javascript
const { add } = require("./math");
```

Modern JavaScript applications mein ESM widely used hai.

---

# 5. ES Module Syntax

Basic named export:

```javascript
export const username = "Rohit";
```

Import:

```javascript
import { username } from "./user.js";
```

---

# 6. ES Module File

Suppose:

```text
math.js
```

contains:

```javascript
export function add(a, b) {

    return a + b;

}
```

Then:

```text
app.js
```

contains:

```javascript
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:

```text
30
```

---

# 7. Browser Support

Modern browsers ES Modules support karte hain.

HTML:

```html
<script type="module" src="./app.js"></script>
```

`type="module"` browser ko indicate karta hai ki script ES module hai.

---

# 8. Basic Browser Structure

```text
project
│
├── index.html
├── app.js
└── math.js
```

`index.html`:

```html
<script type="module" src="./app.js"></script>
```

`math.js`:

```javascript
export function add(a, b) {

    return a + b;

}
```

`app.js`:

```javascript
import { add } from "./math.js";

console.log(add(5, 10));
```

---

# 9. Module Scope

ES Modules ka apna scope hota hai.

Example:

`user.js`

```javascript
const name = "Rohit";
```

`app.js`:

```javascript
console.log(name);
```

Ye directly kaam nahi karega.

Reason:

```text
user.js scope
       ≠
app.js scope
```

Explicit export/import required hai.

---

# 10. Module Scope Example

`user.js`:

```javascript
const name = "Rohit";

export {
    name
};
```

`app.js`:

```javascript
import { name } from "./user.js";

console.log(name);
```

Now it works.

---

# 11. Automatic Strict Mode

ES Modules automatically strict mode mein execute hote hain.

Isliye:

```javascript
"use strict";
```

normally module ke andar manually likhne ki zaroorat nahi hoti.

Example:

```javascript
const x = 10;
```

Module strict mode rules ke according execute hoga.

---

# 12. Top-Level `this`

ES Module ke top-level par:

```javascript
console.log(this);
```

browser module context mein generally:

```text
undefined
```

milta hai.

Ye classic browser script ke behavior se different hai.

---

# 13. Classic Script vs Module

### Classic Script

```html
<script src="app.js"></script>
```

### ES Module

```html
<script type="module" src="app.js"></script>
```

Module:

```text
own module scope
strict mode
import/export support
```

---

# 14. Deferred Execution

Module scripts deferred behavior ke saath execute hote hain.

Example:

```html
<script type="module" src="app.js"></script>
```

Browser generally HTML parsing ko unnecessarily block nahi karta.

Conceptually:

```text
HTML parsing
     ↓
Module fetched
     ↓
Module dependencies resolved
     ↓
Module executed
```

---

# 15. Module Dependency

Suppose:

```text
app.js
  ↓
math.js
  ↓
helper.js
```

`app.js` indirectly `helper.js` par depend kar sakta hai.

Example:

```javascript
import { add } from "./math.js";
```

and `math.js`:

```javascript
import { validate } from "./helper.js";
```

Dependency chain:

```text
app.js
  ↓
math.js
  ↓
helper.js
```

---

# 16. Module Graph

Multiple modules milkar module graph create karte hain.

Example:

```text
                 app.js
                /     \
               ↓       ↓
           math.js   user.js
               ↓
           helper.js
```

Browser/runtime dependencies ko resolve karke required modules load karta hai.

---

# 17. Named Exports

Example:

```javascript
export const PI = 3.14;

export function square(n) {

    return n * n;

}
```

Import:

```javascript
import {
    PI,
    square
} from "./math.js";
```

---

# 18. Default Export

Example:

```javascript
export default function greet() {

    console.log("Hello");

}
```

Import:

```javascript
import greet from "./greet.js";
```

---

# 19. Named + Default Exports

Same module mein named exports aur one default export ho sakta hai.

```javascript
export const PI = 3.14;

export function add(a, b) {

    return a + b;

}

export default function greet() {

    console.log("Hello");

}
```

Import:

```javascript
import greet, {
    PI,
    add
} from "./math.js";
```

---

# 20. Import Aliases

Agar naam change karna ho:

```javascript
import {
    add as sum
} from "./math.js";
```

Now:

```javascript
console.log(sum(10, 20));
```

---

# 21. Namespace Import

All named exports ko namespace ke through access kar sakte hain:

```javascript
import * as math from "./math.js";
```

Then:

```javascript
console.log(math.PI);
console.log(math.add(10, 20));
console.log(math.square(5));
```

---

# 22. Re-export

Ek module doosre module ke exports ko forward kar sakta hai.

Example:

```javascript
export {
    add
} from "./math.js";
```

Then:

```javascript
import { add } from "./index.js";
```

---

# 23. Barrel File

Multiple modules ke exports ko ek central file se expose karna common pattern hai.

Example:

```text
components
│
├── Button.js
├── Card.js
├── Modal.js
└── index.js
```

`index.js`:

```javascript
export { Button } from "./Button.js";
export { Card } from "./Card.js";
export { Modal } from "./Modal.js";
```

Now:

```javascript
import {
    Button,
    Card,
    Modal
} from "./components/index.js";
```

This central file ko commonly **barrel file** kaha jata hai.

---

# 24. Static Imports

Normal import:

```javascript
import { add } from "./math.js";
```

Static import hai.

Ye module structure ka part hota hai aur normally top-level par use kiya jata hai.

---

# 25. Dynamic Import

ES Modules dynamic import bhi support karte hain:

```javascript
const module = await import("./math.js");
```

Ye runtime par module load kar sakta hai.

Dynamic imports useful ho sakte hain jab kisi feature ki zaroorat immediately na ho.

---

# 26. Dynamic Import Returns Promise

Example:

```javascript
import("./math.js")
    .then(module => {

        console.log(module);

    });
```

`import()` ek Promise return karta hai.

---

# 27. Dynamic Import Example

```javascript
button.addEventListener("click", async () => {

    const math = await import("./math.js");

    console.log(math.add(10, 20));

});
```

Module button click ke baad load kiya ja sakta hai.

---

# 28. Static vs Dynamic Import

### Static

```javascript
import { add } from "./math.js";
```

Generally:

```text
Module load/analysis time
```

### Dynamic

```javascript
const module = await import("./math.js");
```

Generally:

```text
Runtime
```

---

# 29. File Extensions

Browser-based ES Modules mein relative imports mein file extension specify karna common aur important hai.

Example:

```javascript
import { add } from "./math.js";
```

Instead of:

```javascript
import { add } from "./math";
```

Browser module resolution generally exact URL/path based hoti hai.

---

# 30. Absolute vs Relative Paths

Relative:

```javascript
import { add } from "./math.js";
```

Parent:

```javascript
import { add } from "../math.js";
```

Absolute-style URL:

```javascript
import { add } from "/js/math.js";
```

Path ka meaning environment aur module resolution rules par depend karta hai.

---

# 31. Module URL

Browser ES Modules URLs se load hote hain.

Example:

```javascript
import { add } from "./math.js";
```

Browser current module location ke relative `math.js` locate karega.

---

# 32. Importing JSON

Environment ke according JSON modules ka support/configuration different ho sakta hai.

Browser applications mein JSON data fetch karna common approach hai:

```javascript
const response = await fetch("./data.json");

const data = await response.json();
```

Isliye JSON ko normal JavaScript module ki tarah assume nahi karna chahiye.

---

# 33. ES Modules in Node.js

Node.js bhi ES Modules support karta hai.

Example:

```javascript
import { add } from "./math.js";
```

Node.js project configuration mein ESM enable karne ke common ways hain, such as:

```json
{
    "type": "module"
}
```

or `.mjs` files use karna.

---

# 34. `.mjs`

Node.js mein:

```text
math.mjs
```

file extension explicitly ES Module indicate kar sakti hai.

Example:

```javascript
export function add(a, b) {

    return a + b;

}
```

Import:

```javascript
import { add } from "./math.mjs";
```

---

# 35. `.cjs`

Node.js mein:

```text
.cjs
```

CommonJS module ko explicitly indicate karne ke liye use kiya ja sakta hai.

Example:

```javascript
const math = require("./math.cjs");
```

So:

```text
.mjs → ES Module
.cjs → CommonJS
```

---

# 36. `package.json` and ESM

Node.js project mein:

```json
{
    "type": "module"
}
```

set karne par `.js` files ko generally ES Modules ke roop mein treat kiya jata hai.

Example structure:

```text
project
│
├── package.json
├── app.js
└── math.js
```

`package.json`:

```json
{
    "type": "module"
}
```

Now `app.js`:

```javascript
import { add } from "./math.js";
```

---

# 37. ESM vs CommonJS Syntax

## ES Modules

```javascript
import { add } from "./math.js";

export function multiply(a, b) {

    return a * b;

}
```

## CommonJS

```javascript
const {
    add
} = require("./math");

module.exports = {
    multiply
};
```

---

# 38. ESM `export`

ESM:

```javascript
export const name = "Rohit";
```

CommonJS:

```javascript
module.exports = {
    name: "Rohit"
};
```

---

# 39. ESM `import`

ESM:

```javascript
import { name } from "./user.js";
```

CommonJS:

```javascript
const {
    name
} = require("./user");
```

---

# 40. ESM is Static

ES Module imports are statically analyzable.

Example:

```javascript
import {
    add
} from "./math.js";
```

Import statement ka module path literal hota hai.

Dynamic behavior ke liye:

```javascript
import("./math.js");
```

use kiya jata hai.

---

# 41. Conditional Dynamic Import

Dynamic imports conditions ke andar useful ho sakte hain.

```javascript
if (userIsAdmin) {

    const adminModule = await import("./admin.js");

    adminModule.openDashboard();

}
```

Isse feature ko condition ke according load kiya ja sakta hai.

---

# 42. Lazy Loading

Jab kisi module ko immediately load karne ki zaroorat nahi ho aur baad mein load kiya jaye, ise commonly **lazy loading** kaha jata hai.

Example:

```javascript
button.addEventListener("click", async () => {

    const module = await import("./heavyFeature.js");

    module.start();

});
```

---

# 43. Code Splitting

Large applications mein code ko smaller chunks/modules mein divide kiya ja sakta hai.

Concept:

```text
Main Application
       │
       ├── Core
       │
       ├── Dashboard
       │
       ├── Profile
       │
       └── Reports
```

Har feature ko zaroorat ke according load kiya ja sakta hai.

Bundlers is process ko optimize kar sakte hain.

---

# 44. Tree Shaking

Modern build tools unused exports ko final bundle se remove kar sakte hain.

Example:

```javascript
export function add() {}
export function subtract() {}
export function multiply() {}
```

Agar application sirf:

```javascript
import { add } from "./math.js";
```

use karti hai, bundler potentially unused code ko remove kar sakta hai.

Is process ko **tree shaking** kaha jata hai.

---

# 45. Why Named Exports Can Help

Named exports:

```javascript
export {
    add,
    subtract,
    multiply
};
```

Build tools ko individual exports identify karne mein help karte hain.

However, actual optimization bundler aur project configuration par depend karti hai.

---

# 46. Live Bindings

ES Modules imported values ko simple copied snapshots ki tarah treat nahi karte.

Imports module ke exported bindings se connected hote hain.

Example:

`counter.js`

```javascript
export let count = 0;

export function increment() {

    count++;

}
```

`app.js`:

```javascript
import {
    count,
    increment
} from "./counter.js";

console.log(count);

increment();

console.log(count);
```

Output:

```text
0
1
```

Imported binding module ke exported binding ke saath connected hai.

---

# 47. Imported Binding Cannot Be Reassigned

Example:

```javascript
import { count } from "./counter.js";

count = 10;
```

Ye allowed nahi hai.

Import binding ko receiving module se directly reassign nahi kar sakte.

Modification exporting module se honi chahiye.

---

# 48. Exported Mutable Variable

Example:

```javascript
export let count = 0;

export function increment() {

    count++;

}
```

`count` ko exporting module modify kar sakta hai.

Importing module:

```javascript
import {
    count,
    increment
} from "./counter.js";
```

`increment()` call karne ke baad updated binding observe kar sakta hai.

---

# 49. Circular Dependencies

Kabhi-kabhi:

```text
a.js → b.js
b.js → a.js
```

dependency cycle create ho sakta hai.

Example:

```javascript
// a.js
import { b } from "./b.js";
```

and:

```javascript
// b.js
import { a } from "./a.js";
```

ES Modules circular dependencies ko support kar sakte hain, but initialization order ko carefully understand karna important hai.

Unnecessarily circular dependencies avoid karna code ko simpler rakhta hai.

---

# 50. Module Initialization

Jab module load hota hai:

```text
1. Dependencies identify
2. Dependencies load
3. Module dependencies link
4. Module code execute
```

Complex module graphs mein dependency order important hota hai.

---

# 51. Side Effects

Module import karne par module ka top-level code execute ho sakta hai.

Example:

```javascript
console.log("Module loaded");

export const name = "Rohit";
```

Agar:

```javascript
import { name } from "./user.js";
```

kiya gaya, module initialization ke time:

```text
Module loaded
```

print ho sakta hai.

---

# 52. Side-Effect Import

Agar kisi module ka exported value use nahi karna aur sirf uska side effect chahiye:

```javascript
import "./setup.js";
```

Example:

`setup.js`:

```javascript
console.log("Application initialized");
```

Then:

```javascript
import "./setup.js";
```

---

# 53. Module Initialization Example

`config.js`:

```javascript
console.log("Config loaded");

export const API_URL = "https://example.com";
```

`app.js`:

```javascript
import { API_URL } from "./config.js";

console.log(API_URL);
```

Output:

```text
Config loaded
https://example.com
```

---

# 54. Module Execution Once

A module generally ek module graph mein once initialize hota hai.

Agar multiple files same module import karte hain:

```text
app.js ─────┐
            ↓
         math.js
            ↑
user.js ────┘
```

`math.js` ki module instance shared hoti hai.

---

# 55. Shared Module State

`counter.js`:

```javascript
export let count = 0;

export function increment() {

    count++;

}
```

Multiple modules same exported state observe kar sakte hain.

```text
app.js
  ↓
counter.js
  ↑
dashboard.js
```

---

# 56. Module Pattern

A common structure:

```text
src
│
├── app.js
│
├── components
│   ├── Button.js
│   └── Card.js
│
├── services
│   └── api.js
│
├── utils
│   └── helpers.js
│
└── data
    └── users.js
```

Har folder related functionality contain karta hai.

---

# 57. Good Module Design

Ek module ka clear responsibility hona useful hota hai.

Bad:

```text
everything.js
```

Better:

```text
math.js
api.js
auth.js
storage.js
utils.js
```

---

# 58. Avoid Giant Modules

Agar ek module mein:

```text
5000+ lines
```

aur unrelated functionality ho, maintenance difficult ho sakti hai.

Better:

```text
authentication.js
user.js
products.js
cart.js
payment.js
```

---

# 59. Module Naming

Common conventions:

```text
math.js
user.js
api.js
storage.js
utils.js
```

Classes ke liye projects mein commonly:

```text
User.js
Product.js
Student.js
```

Naming convention project ke standards par depend karta hai.

---

# 60. Practical Mini Project Structure

```text
module-demo
│
├── index.html
│
├── js
│   ├── app.js
│   ├── math.js
│   └── user.js
│
└── css
    └── style.css
```

---

# 61. `math.js`

```javascript
export function add(a, b) {

    return a + b;

}

export function multiply(a, b) {

    return a * b;

}
```

---

# 62. `user.js`

```javascript
export const user = {

    name: "Rohit",
    course: "MCA"

};

export function showUser() {

    console.log(
        `${user.name} - ${user.course}`
    );

}
```

---

# 63. `app.js`

```javascript
import {
    add,
    multiply
} from "./math.js";

import {
    showUser
} from "./user.js";

console.log(add(10, 20));
console.log(multiply(5, 5));

showUser();
```

---

# 64. `index.html`

```html
<!DOCTYPE html>
<html>

<head>

    <title>ES Modules</title>

</head>

<body>

    <h1>JavaScript ES Modules</h1>

    <script type="module" src="./js/app.js"></script>

</body>

</html>
```

---

# 65. Important Browser Note

Agar browser module files ko directly `file://` se open karte waqt import problems aayein, local development server use karna better hota hai.

Example development tools:

```text
VS Code Live Server
Node.js local server
Vite
```

---

# 66. Module Loading Flow

```text
index.html
     ↓
app.js
     ↓
┌────┴────┐
↓         ↓
math.js  user.js
↓
helpers.js
```

Browser dependencies ko resolve karta hai aur modules execute karta hai.

---

# 67. Common Mistake — Missing `type="module"`

Wrong:

```html
<script src="./app.js"></script>
```

If `app.js` contains:

```javascript
import { add } from "./math.js";
```

browser error de sakta hai.

Correct:

```html
<script type="module" src="./app.js"></script>
```

---

# 68. Common Mistake — Wrong Path

Wrong:

```javascript
import { add } from "math.js";
```

For a local relative file, usually:

```javascript
import { add } from "./math.js";
```

---

# 69. Common Mistake — Wrong Export Type

If:

```javascript
export default function add() {}
```

then:

```javascript
import { add } from "./math.js";
```

wrong hai.

Correct:

```javascript
import add from "./math.js";
```

---

# 70. Common Mistake — Wrong Named Export

If:

```javascript
export function calculate() {}
```

then:

```javascript
import { calculate } from "./math.js";
```

correct hai.

But:

```javascript
import { calc } from "./math.js";
```

without alias/export matching invalid hai.

---

# 71. Common Mistake — Missing Extension

Browser ESM:

```javascript
import { add } from "./math";
```

may fail.

Prefer:

```javascript
import { add } from "./math.js";
```

---

# 72. Common Mistake — Using `require()`

ESM code:

```javascript
import { add } from "./math.js";
```

CommonJS:

```javascript
const { add } = require("./math");
```

Dono module systems ko blindly mix nahi karna chahiye.

---

# 73. ESM Cheat Sheet

### Named Export

```javascript
export const name = "Rohit";
```

### Named Import

```javascript
import { name } from "./user.js";
```

### Default Export

```javascript
export default function greet() {}
```

### Default Import

```javascript
import greet from "./greet.js";
```

### Rename

```javascript
import { add as sum } from "./math.js";
```

### Namespace

```javascript
import * as math from "./math.js";
```

### Side Effect

```javascript
import "./setup.js";
```

### Dynamic Import

```javascript
const module = await import("./math.js");
```

### Re-export

```javascript
export { add } from "./math.js";
```

---

# 74. ES Modules vs CommonJS

| Feature | ES Modules | CommonJS |
|---|---|---|
| Import | `import` | `require()` |
| Export | `export` | `module.exports` |
| Standard | JavaScript standard | Node.js ecosystem |
| Static imports | Yes | No |
| Dynamic loading | `import()` | `require()` |
| Browser support | Native modern browser support | Not native browser module syntax |
| File style | `.js` / `.mjs` depending environment | `.js` / `.cjs` depending environment |

---

# 75. Interview Questions

### Q1. What are ES Modules?

ES Modules are JavaScript's standard module system that allows code to be split into files and shared using `import` and `export`.

### Q2. What is `type="module"`?

It tells the browser that a script should be treated as an ES Module.

### Q3. Are ES Modules automatically strict mode?

Yes. ES Modules automatically run in strict mode.

### Q4. What is the difference between static and dynamic import?

```text
Static:
import { add } from "./math.js";

Dynamic:
import("./math.js");
```

Static imports are part of the module structure; dynamic imports load a module at runtime and return a Promise.

### Q5. What is a barrel file?

A central module that re-exports functionality from multiple modules.

### Q6. What is tree shaking?

A build optimization where unused module exports can be removed from the final bundle.

### Q7. What is a side-effect import?

```javascript
import "./setup.js";
```

It imports the module mainly for its initialization/side effects rather than named exports.

---

# 76. Final Mental Model

```text
                 ES MODULES
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
     EXPORT       IMPORT       SCOPE
        │            │            │
        ↓            ↓            ↓
   Share code     Use code    Own module scope
        │            │            │
        └────────────┼────────────┘
                     ↓
              Module Graph
                     │
        ┌────────────┴────────────┐
        ↓                         ↓
   Static Import            Dynamic Import
        │                         │
   import {...}              import(...)
```

## One-Line Definition

> **ES Modules are JavaScript's standard way of organizing code into separate modules using `import` and `export`, with each module having its own scope and dependency structure.**