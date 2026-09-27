# JavaScript Optional Chaining

## 1. What is Optional Chaining?

Optional Chaining `?.` ka use tab hota hai jab hume kisi object ki property safely access karni ho.

Agar property exist nahi karti, JavaScript error dene ke bajay `undefined` return kar sakti hai.

Syntax:

```javascript
object?.property
```

---

# 2. Normal Property Access

```javascript
const user = {
    name: "Rohit",
    age: 23
};

console.log(user.name);
```

Output:

```text
Rohit
```

---

# 3. The Problem

Suppose:

```javascript
const user = {
    name: "Rohit"
};

console.log(user.address.city);
```

❌ Error

Because:

```text
user.address
→ undefined
```

and JavaScript `undefined.city` access nahi kar sakti.

---

# 4. Using Optional Chaining

```javascript
const user = {
    name: "Rohit"
};

console.log(user.address?.city);
```

Output:

```text
undefined
```

No error.

`?.` safely checks whether the value exists before accessing the next property.

---

# 5. Nested Objects

Example:

```javascript
const user = {
    name: "Rohit",

    address: {
        city: "Mohali",
        state: "Punjab"
    }
};
```

Normal:

```javascript
console.log(user.address.city);
```

Output:

```text
Mohali
```

Optional chaining:

```javascript
console.log(user.address?.city);
```

Output:

```text
Mohali
```

If `address` does not exist, it returns:

```text
undefined
```

instead of throwing an error.

---

# 6. Multiple Optional Chains

Nested data mein multiple `?.` use kar sakte hain.

```javascript
const user = {};

console.log(user.address?.location?.city);
```

Output:

```text
undefined
```

JavaScript safely checks each optional step.

---

# 7. Optional Chaining with Arrays

Optional chaining arrays ke saath bhi use ho sakti hai.

```javascript
const users = [
    {
        name: "Rohit"
    }
];

console.log(users[0]?.name);
```

Output:

```text
Rohit
```

If the index does not exist:

```javascript
console.log(users[5]?.name);
```

Output:

```text
undefined
```

---

# 8. Optional Chaining with Methods

`?.` methods ke saath bhi use ho sakta hai.

```javascript
const user = {
    sayHello() {
        console.log("Hello");
    }
};

user.sayHello?.();
```

Output:

```text
Hello
```

If the method does not exist:

```javascript
user.sayBye?.();
```

Nothing happens and no error is thrown.

---

# 9. Optional Chaining with Function Calls

Suppose:

```javascript
let greet;
```

Normally:

```javascript
greet();
```

❌ Error

Using optional chaining:

```javascript
greet?.();
```

No error.

It means:

> Call the function only if it exists.

---

# 10. Optional Chaining with API Data

API data often contains nested properties.

Example:

```javascript
const data = {
    user: {
        profile: {
            name: "Rohit"
        }
    }
};
```

We can write:

```javascript
console.log(data.user?.profile?.name);
```

Output:

```text
Rohit
```

If `profile` is missing:

```javascript
console.log(data.user?.profile?.name);
```

Output:

```text
undefined
```

This is one reason optional chaining is very useful when working with APIs.

---

# 11. `?.` vs `.`

Normal:

```javascript
user.address.city
```

If `address` is `undefined`, this can throw an error.

Optional:

```javascript
user.address?.city
```

If `address` is `undefined`:

```text
undefined
```

---

# 12. Optional Chaining Does Not Mean "Everything is Safe"

Example:

```javascript
const user = null;

console.log(user?.name);
```

This is safe.

But optional chaining only protects the part where `?.` is used.

Always understand which value might be `null` or `undefined`.

---

# 13. Optional Chaining with Null Values

```javascript
const user = null;

console.log(user?.name);
```

Output:

```text
undefined
```

Without `?.`:

```javascript
console.log(user.name);
```

❌ Error

---

# 14. Common Use Case

Instead of writing:

```javascript
if (user && user.address && user.address.city) {
    console.log(user.address.city);
}
```

you can often write:

```javascript
console.log(user?.address?.city);
```

This makes the code shorter and easier to read.

---

# 15. Optional Chaining + Nullish Coalescing

Optional chaining is often used together with `??`.

Example:

```javascript
const user = {};

const city = user.address?.city ?? "Unknown";

console.log(city);
```

Output:

```text
Unknown
```

Here:

```text
user.address?.city
        ↓
    undefined
        ↓
      ??
        ↓
   "Unknown"
```

---

# 16. Important Difference

Optional chaining:

```javascript
user?.name
```

means:

> Safely access the property.

Nullish coalescing:

```javascript
user?.name ?? "Guest"
```

means:

> If the result is `null` or `undefined`, use `"Guest"`.

We will cover `??` properly in the next file.

---

# Quick Revision

### Normal

```javascript
user.address.city
```

### Optional Chaining

```javascript
user.address?.city
```

### Nested

```javascript
user?.address?.city
```

### Method

```javascript
user.sayHello?.();
```

### Function

```javascript
callback?.();
```

---

# Remember

```text
?. → Safely access something

If value exists
→ Get the value

If value is null/undefined
→ Return undefined
```

Main use cases:

```text
✓ Nested objects
✓ API responses
✓ Optional properties
✓ Optional functions
✓ Arrays
```

---

## Next File

```text
12-Modern-JavaScript/05-Nullish-Coalescing.md
```

Next we will learn **Nullish Coalescing (`??`)** and how it is different from `||`.