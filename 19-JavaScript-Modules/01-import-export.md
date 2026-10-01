# JavaScript Import & Export

## 1. What are Modules?

JavaScript modules ka use code ko **multiple files mein divide** karne ke liye kiya jata hai.

Large project mein saara code ek hi file mein likhna difficult ho sakta hai.

Instead:

```text
project
│
├── math.js
├── user.js
├── app.js
└── index.html
```

Har file ka apna code ho sakta hai.

Ek module apne variables, functions, classes ko doosre module ke saath `export` aur `import` ke through share kar sakta hai.

---

# 2. Why Use Modules?

Modules ke main benefits:

```text
✓ Code organization
✓ Code reusability
✓ Maintainability
✓ Better project structure
✓ Namespace separation
✓ Dependency management
```

Example:

```text
math.js
   ↓
Math functions

user.js
   ↓
User functions

app.js
   ↓
Application logic
```

---

# 3. Basic Export

Suppose `math.js`:

```javascript id="h8f3qv"
export const pi = 3.14;
```

Ab `pi` doosre module mein available ho sakta hai.

---

# 4. Basic Import

`app.js`:

```javascript id="4d6p1z"
import { pi } from "./math.js";

console.log(pi);
```

Output:

```text id="5g7n1m"
3.14
```

---

# 5. Export and Import Flow

```text id="z4t8q2"
math.js
   │
   │ export
   ↓
   pi
   │
   │ import
   ↓
app.js
```

---

# 6. Export a Function

`math.js`:

```javascript id="q9w2ke"
export function add(a, b) {

    return a + b;

}
```

`app.js`:

```javascript id="r6t1vx"
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:

```text id="8k3p1a"
30
```

---

# 7. Export Multiple Values

Ek hi file se multiple things export kar sakte hain.

`math.js`:

```javascript id="u7c5nd"
export const pi = 3.14;

export function add(a, b) {

    return a + b;

}

export function subtract(a, b) {

    return a - b;

}
```

Import:

```javascript id="b4m9xs"
import {
    pi,
    add,
    subtract
} from "./math.js";

console.log(pi);
console.log(add(10, 5));
console.log(subtract(10, 5));
```

Output:

```text id="j2v7qa"
3.14
15
5
```

---

# 8. Named Export

Jab specific name ke saath export karte hain:

```javascript id="k1r8pz"
export const name = "Rohit";
```

Isko **named export** kehte hain.

Import:

```javascript id="m5d2xy"
import { name } from "./user.js";
```

Curly braces `{}` named exports ke liye use hoti hain.

---

# 9. Export at Bottom

Export directly declaration ke saath karna compulsory nahi hai.

Example:

```javascript id="x8v4lc"
const name = "Rohit";

function greet() {

    console.log("Hello");

}

export {
    name,
    greet
};
```

Ye bhi named export hai.

---

# 10. Multiple Named Exports

```javascript id="p6n1wd"
const name = "Rohit";
const age = 25;

function greet() {

    console.log("Hello");

}

export {
    name,
    age,
    greet
};
```

Import:

```javascript id="e3k9rf"
import {
    name,
    age,
    greet
} from "./user.js";
```

---

# 11. Import Specific Values

Agar module mein 5 exports hain but hume sirf 2 chahiye:

```javascript id="s7q2hm"
import {
    add,
    subtract
} from "./math.js";
```

Baaki exports import nahi honge.

---

# 12. Import All

Aap module ke saare named exports ko namespace object ke andar import kar sakte ho.

```javascript id="c5m8vz"
import * as math from "./math.js";
```

Then:

```javascript id="f2q7nb"
console.log(math.add(10, 20));
console.log(math.subtract(20, 10));
```

Output:

```text id="n6x3ra"
30
10
```

---

# 13. Namespace Import

```javascript id="a8w4kp"
import * as math from "./math.js";
```

Yahan:

```text id="z9v1cd"
math
```

ek namespace object ki tarah kaam karta hai.

Uske andar:

```text id="r3m7qx"
math.add
math.subtract
math.pi
```

available honge.

---

# 14. Rename Import

Agar exported name `add` hai but hume apne code mein `sum` naam use karna hai:

```javascript id="w6p2yk"
import { add as sum } from "./math.js";

console.log(sum(10, 20));
```

Output:

```text id="v4q8hs"
30
```

---

# 15. Rename Multiple Imports

```javascript id="j8c3lm"
import {
    add as sum,
    subtract as difference
} from "./math.js";

console.log(sum(10, 5));
console.log(difference(10, 5));
```

---

# 16. Rename During Export

Export ke time bhi rename kar sakte hain.

```javascript id="n5v9dx"
const add = (a, b) => a + b;

export {
    add as sum
};
```

Ab import:

```javascript id="k7m2pq"
import { sum } from "./math.js";
```

---

# 17. Default Export

Ek module mein **one default export** hota hai.

Example:

```javascript id="q4x8la"
export default function greet() {

    console.log("Hello Rohit");

}
```

Import:

```javascript id="s3n6we"
import greet from "./greet.js";

greet();
```

Notice:

```text id="d1f5zr"
No curly braces
```

---

# 18. Default Export Function

```javascript id="y7k2mc"
export default function add(a, b) {

    return a + b;

}
```

Import:

```javascript id="p8v4qx"
import add from "./math.js";

console.log(add(10, 20));
```

---

# 19. Default Export Name Can Change

Default export import karte time imported name aap choose kar sakte ho.

Export:

```javascript id="u3m8kd"
export default function greet() {

    console.log("Hello");

}
```

Import:

```javascript id="r5q1vn"
import hello from "./greet.js";

hello();
```

Ye valid hai.

Because default import ka local name flexible hota hai.

---

# 20. Named vs Default Export

### Named Export

```javascript id="h2c7xm"
export const name = "Rohit";
```

Import:

```javascript id="w4p9sa"
import { name } from "./user.js";
```

### Default Export

```javascript id="b8n3kf"
export default name;
```

Import:

```javascript id="m6v1qd"
import name from "./user.js";
```

---

# 21. Main Difference

```text id="z7c4vp"
Named Export
→ { }

Default Export
→ no { }
```

Example:

```javascript id="n1q5xa"
import { add } from "./math.js";
```

vs

```javascript id="t8m3kd"
import add from "./math.js";
```

---

# 22. Multiple Named + One Default

Ek module mein:

```javascript id="r2y7hc"
export const pi = 3.14;

export function add(a, b) {

    return a + b;

}

export default function greet() {

    console.log("Hello");

}
```

Import:

```javascript id="v9k4px"
import greet, {
    pi,
    add
} from "./math.js";
```

---

# 23. Default Export Rule

Ek module mein:

```text id="c6m2ws"
Maximum one default export
```

Valid:

```javascript id="f8q1vn"
export default function one() {}
```

But same module mein:

```javascript id="e5r7ka"
export default function two() {}
```

second default export valid nahi hoga.

---

# 24. Named Export Count

Named exports multiple ho sakte hain.

```javascript id="p3x9md"
export const a = 1;
export const b = 2;
export const c = 3;
export function test() {}
```

Ye valid hai.

---

# 25. Import File Path

Usually relative module path:

```javascript id="k7w2qn"
import { add } from "./math.js";
```

Same folder:

```text id="d8r4pv"
./math.js
```

Parent folder:

```javascript id="x5m9la"
import { add } from "../math.js";
```

---

# 26. `./` Meaning

```text id="a3v7kc"
./
```

means:

> Current folder

Example:

```javascript id="q9n2we"
import { add } from "./math.js";
```

Means:

```text id="f4c8ys"
Current Folder
   ↓
math.js
```

---

# 27. `../` Meaning

```text id="z1m6rx"
../
```

means:

> Parent folder

Example:

```javascript id="v8p3kd"
import { add } from "../math.js";
```

Structure:

```text id="r2c7wa"
project
│
├── math.js
│
└── src
    └── app.js
```

From `app.js`:

```text id="s4k9nx"
../math.js
```

means project folder ke `math.js`.

---

# 28. Export Object

Objects bhi export kar sakte hain.

```javascript id="j5q8wm"
export const user = {

    name: "Rohit",
    age: 25

};
```

Import:

```javascript id="b3v7qa"
import { user } from "./user.js";

console.log(user.name);
```

---

# 29. Export Array

```javascript id="m8c2yr"
export const numbers = [10, 20, 30, 40];
```

Import:

```javascript id="q6p9kd"
import { numbers } from "./data.js";

console.log(numbers);
```

---

# 30. Export Class

```javascript id="t4x7vn"
export class User {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(`Hello ${this.name}`);

    }

}
```

Import:

```javascript id="w2m5qa"
import { User } from "./User.js";

const user = new User("Rohit");

user.greet();
```

---

# 31. Export Variables

```javascript id="c9k3xp"
export const name = "Rohit";

export const age = 25;

export const city = "Mohali";
```

---

# 32. Export Function

```javascript id="n7q4zm"
export function square(number) {

    return number * number;

}
```

Import:

```javascript id="y5p8kd"
import { square } from "./math.js";

console.log(square(5));
```

Output:

```text id="x3m6qa"
25
```

---

# 33. Export Class

```javascript id="r8v2lc"
export class Student {

    constructor(name) {

        this.name = name;

    }

}
```

Import:

```javascript id="f4n7xp"
import { Student } from "./Student.js";
```

---

# 34. Re-export

Ek module doosre module ke exports ko re-export kar sakta hai.

Example:

```javascript id="k2w9md"
export { add } from "./math.js";
```

Ab doosri file:

```javascript id="c6q3va"
import { add } from "./index.js";
```

Directly `math.js` se import karne ki zaroorat nahi.

---

# 35. Re-export Multiple Values

```javascript id="h7m4px"
export {
    add,
    subtract
} from "./math.js";
```

---

# 36. Re-export Everything

```javascript id="p9x2kc"
export * from "./math.js";
```

Isse module ke named exports re-export ho sakte hain.

---

# 37. Default Export Re-export

Default export ko re-export karne ka syntax different hota hai.

```javascript id="v5n8qa"
export { default } from "./greet.js";
```

---

# 38. Rename During Re-export

```javascript id="m3q7xp"
export {
    add as sum
} from "./math.js";
```

Ab import:

```javascript id="k8v2nd"
import { sum } from "./index.js";
```

---

# 39. Practical Folder Structure

```text id="d5r9mc"
JavaScript-Modules
│
├── math.js
├── user.js
├── app.js
└── index.html
```

`math.js`:

```javascript id="a7q3vx"
export function add(a, b) {

    return a + b;

}

export function multiply(a, b) {

    return a * b;

}
```

`app.js`:

```javascript id="p4m8zk"
import {
    add,
    multiply
} from "./math.js";

console.log(add(10, 20));
console.log(multiply(10, 20));
```

---

# 40. Modules and Encapsulation

Suppose:

```javascript id="x9c5va"
const secret = "12345";

export const name = "Rohit";
```

Agar `secret` export nahi kiya:

```text id="m2q7kn"
Other modules
      ↓
cannot directly import secret
```

Only exported values module ke public interface ka part hote hain.

---

# 41. Public vs Private Concept

Example:

```javascript id="j6v3xp"
const secretKey = "ABC123";

export function login() {

    console.log("Login");

}
```

Other module:

```javascript id="r8k2md"
import { login } from "./auth.js";
```

`login` available hai.

But:

```javascript id="y4p9qc"
import { secretKey } from "./auth.js";
```

valid nahi hoga because `secretKey` export nahi hua.

---

# 42. Modules Have Their Own Scope

Normal script ke comparison mein modules ka top-level scope module-specific hota hai.

Example:

`file1.js`

```javascript id="c8m5qa"
const name = "Rohit";
```

`file2.js`

```javascript id="v3x7kp"
console.log(name);
```

`file2.js` automatically `file1.js` ka `name` access nahi kar sakta.

Export/import required hai.

---

# 43. Module Scope

```text id="q2n8mc"
file1.js
   │
   │ export
   ↓
file2.js
   │
   │ import
   ↓
use value
```

This keeps code organized.

---

# 44. HTML and JavaScript Modules

Browser mein module use karne ke liye:

```html id="r7k3vx"
<script type="module" src="app.js"></script>
```

`type="module"` important hai.

---

# 45. Basic Browser Example

`index.html`:

```html id="w5p9qa"
<!DOCTYPE html>
<html>

<head>
    <title>Modules</title>
</head>

<body>

    <script type="module" src="./app.js"></script>

</body>

</html>
```

`math.js`:

```javascript id="m2x8kc"
export function add(a, b) {

    return a + b;

}
```

`app.js`:

```javascript id="q4v7pn"
import { add } from "./math.js";

console.log(add(10, 20));
```

---

# 46. Why `type="module"`?

Browser ko batana hota hai ki:

```text id="f8m3yd"
This JavaScript file is a module.
```

Then browser `import` and `export` syntax ko process kar sakta hai.

---

# 47. Module Strict Mode

JavaScript modules automatically strict mode mein execute hote hain.

Isliye manually:

```javascript id="p7k2vx"
"use strict";
```

likhna generally required nahi hota.

---

# 48. Modules Are Deferred

Classic script:

```html id="h4m9qa"
<script src="app.js"></script>
```

Module:

```html id="n8x3kp"
<script type="module" src="app.js"></script>
```

Modules browser mein deferred behavior ke saath load hote hain.

Generally HTML parsing ko unnecessarily block nahi karte.

---

# 49. Import Before Declaration

Modules statically analyzed hote hain.

Example:

```javascript id="z5q8mc"
import { add } from "./math.js";

console.log(add(10, 20));
```

Import statement normally top-level par hota hai.

---

# 50. Static Import

Normal import:

```javascript id="y3v7kp"
import { add } from "./math.js";
```

Static import hai.

Ye module dependency ko code structure ka part banata hai.

---

# 51. Import Statement Must Be Top-Level

Static imports ko generally module ke top-level par likha jata hai.

Correct:

```javascript id="c6m2qa"
import { add } from "./math.js";

function calculate() {

    return add(10, 20);

}
```

---

# 52. Dynamic Import

JavaScript dynamically module load bhi kar sakta hai:

```javascript id="k8x4pn"
const module = await import("./math.js");
```

Dynamic import next topic mein detail mein cover kiya ja sakta hai.

---

# 53. Import Aliasing

Agar do modules mein same export name ho:

```javascript id="m5q9vc"
import { add as mathAdd } from "./math.js";
import { add as calculatorAdd } from "./calculator.js";
```

Now:

```javascript id="r7x2kp"
mathAdd();
calculatorAdd();
```

Name conflict avoid ho gaya.

---

# 54. Import Only What You Need

Good practice:

```javascript id="n4c8xm"
import {
    add,
    multiply
} from "./math.js";
```

Instead of unnecessarily importing everything.

Namespace import bhi useful hai jab multiple exports ko grouped access chahiye:

```javascript id="q6v3pa"
import * as math from "./math.js";
```

---

# 55. Common Error

Wrong:

```javascript id="j8m4qx"
import add from "./math.js";
```

Agar `math.js` mein:

```javascript id="w2p7kc"
export function add(a, b) {

    return a + b;

}
```

hai, to ye default import nahi hai.

Correct:

```javascript id="x5n9va"
import { add } from "./math.js";
```

---

# 56. Another Common Error

Wrong:

```javascript id="r3k8pm"
import { add } from "./math.js";
```

If `math.js` has:

```javascript id="c7q2xn"
export default function add(a, b) {

    return a + b;

}
```

Correct:

```javascript id="v9m4ka"
import add from "./math.js";
```

---

# 57. Named Export Rule

Named export ka exact exported name match karna hota hai unless alias use karo.

Export:

```javascript id="h6x2qp"
export const username = "Rohit";
```

Correct:

```javascript id="m8v4kc"
import { username } from "./user.js";
```

Or:

```javascript id="q3p7na"
import { username as name } from "./user.js";
```

---

# 58. Default Export Rule

Default import ka local name change kar sakte ho.

Export:

```javascript id="d5k9xm"
export default function greet() {}
```

Both valid:

```javascript id="p7q2va"
import greet from "./greet.js";
```

and:

```javascript id="x4m8kc"
import hello from "./greet.js";
```

---

# 59. Practical Example

### `math.js`

```javascript id="j2v6qa"
export const PI = 3.14;

export function square(n) {

    return n * n;

}

export function cube(n) {

    return n * n * n;

}
```

### `app.js`

```javascript id="m9x4kp"
import {
    PI,
    square,
    cube
} from "./math.js";

console.log(PI);
console.log(square(5));
console.log(cube(3));
```

Output:

```text id="r7c3vn"
3.14
25
27
```

---

# 60. Practical User Module

### `user.js`

```javascript id="k5q8xm"
export const user = {

    name: "Rohit",
    course: "MCA"

};

export function greetUser() {

    console.log(`Hello ${user.name}`);

}
```

### `app.js`

```javascript id="v3m7pa"
import {
    user,
    greetUser
} from "./user.js";

console.log(user.course);

greetUser();
```

Output:

```text id="f8x2kc"
MCA
Hello Rohit
```

---

# 61. Practical Class Module

### `Student.js`

```javascript id="q6n4vm"
export class Student {

    constructor(name, course) {

        this.name = name;
        this.course = course;

    }

    showDetails() {

        console.log(
            `${this.name} - ${this.course}`
        );

    }

}
```

### `app.js`

```javascript id="p2k8xa"
import { Student } from "./Student.js";

const student = new Student(
    "Rohit",
    "MCA"
);

student.showDetails();
```

Output:

```text id="m7v3qc"
Rohit - MCA
```

---

# 62. Module Dependency

Agar:

```text id="w4n9kp"
app.js
 ↓
math.js
```

to `app.js` depends on `math.js`.

Example:

```javascript id="c8q2va"
import { add } from "./math.js";
```

This creates a dependency relationship.

---

# 63. Module Graph

Large project:

```text id="x5m7kc"
             app.js
            /     \
           ↓       ↓
       math.js   user.js
          ↓
      helper.js
```

JavaScript modules milkar ek **module graph** create kar sakte hain.

---

# 64. Why Modules Matter in Large Projects

Without modules:

```text id="r8q3vn"
One huge JavaScript file
        ↓
Hard to maintain
        ↓
Name conflicts
        ↓
Difficult debugging
```

With modules:

```text id="j6m9xp"
Small files
   ↓
Clear responsibilities
   ↓
Reusable code
   ↓
Easier maintenance
```

---

# 65. Quick Revision

### Export

```javascript id="k3v7qa"
export const name = "Rohit";
```

### Import

```javascript id="x8m2pc"
import { name } from "./user.js";
```

### Multiple exports

```javascript id="v4q9nk"
export {
    name,
    age,
    greet
};
```

### Import all

```javascript id="m7c3xa"
import * as user from "./user.js";
```

### Rename

```javascript id="p5k8vq"
import { add as sum } from "./math.js";
```

### Default export

```javascript id="j2n6mc"
export default function greet() {}
```

### Default import

```javascript id="r9x4ka"
import greet from "./greet.js";
```

### Re-export

```javascript id="c6v8pn"
export { add } from "./math.js";
```

---

# 66. Interview Questions

### Q1. What is a JavaScript module?

A module is a JavaScript file with its own scope that can explicitly share functionality using `export` and consume functionality using `import`.

### Q2. What is the difference between named and default export?

```text id="f3q7xm"
Named:
export { add }

Import:
import { add } from "./math.js"


Default:
export default add

Import:
import add from "./math.js"
```

### Q3. Can a module have multiple named exports?

Yes.

```javascript id="n8k4vc"
export const a = 1;
export const b = 2;
export const c = 3;
```

### Q4. How many default exports can a module have?

One default export per module.

### Q5. What does `import * as math` do?

It imports named exports into a namespace object.

```javascript id="q2m9xa"
import * as math from "./math.js";

math.add();
math.subtract();
```

### Q6. What does `type="module"` do?

Browser ko batata hai ki referenced JavaScript file ES module hai, allowing module syntax such as `import` and `export`.

---

# 67. Final Mental Model

```text id="v5k8mc"
                 JavaScript Modules
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
           EXPORT                 IMPORT
              │                     │
       Share functionality     Use functionality
              │                     │
              └──────────┬──────────┘
                         ↓
                  Module System
                         │
                         ↓
                  Organized Code
```

## One-Line Definition

> **JavaScript modules allow code to be split into separate files and shared explicitly using `export` and `import`.**