# JavaScript Closures

## 1. What is a Closure?

**Closure** JavaScript ka ek important advanced concept hai.

Simple words mein:

> Closure tab create hota hai jab ek function apne outer scope ke variables ko remember karta hai, even after outer function finish ho chuka ho.

Example:

```javascript
function outer() {

    let message = "Hello";

    function inner() {

        console.log(message);

    }

    return inner;

}

const greet = outer();

greet();
```

Output:

```text
Hello
```

Yahan `outer()` execute hone ke baad bhi `inner()` ke paas `message` ki access hai.

Ye closure hai.

---

# 2. Closure ka Basic Idea

Closure ko samajhne ke liye ye flow dekho:

```text
Outer Function
      ↓
Local Variable
      ↓
Inner Function
      ↓
Inner Function remembers outer variable
      ↓
Outer Function finishes
      ↓
Inner Function still has access
```

---

# 3. Simple Example

```javascript
function outer() {

    let name = "Rohit";

    function inner() {

        console.log(name);

    }

    inner();

}

outer();
```

Output:

```text
Rohit
```

Yahan `inner()` apne outer scope ke `name` ko access kar raha hai.

---

# 4. Real Closure Example

Ab important example:

```javascript
function outer() {

    let name = "Rohit";

    return function inner() {

        console.log(name);

    };

}

const result = outer();

result();
```

Output:

```text
Rohit
```

Important part:

```javascript
const result = outer();
```

`outer()` complete ho gaya.

Lekin:

```javascript
result();
```

par `name` ab bhi available hai.

---

# 5. Why Does This Happen?

Normally function complete hone ke baad uske local variables accessible nahi hote.

Lekin agar inner function un variables ko reference karta hai, JavaScript un bindings ko closure ke through preserve kar sakti hai.

```text
outer()
  │
  ├── name = "Rohit"
  │
  └── inner()
          │
          └── remembers name
```

---

# 6. Closure and Lexical Scope

Closure ka strong relation **lexical scope** se hai.

Example:

```javascript
let global = "Global";

function outer() {

    let outerValue = "Outer";

    function inner() {

        let innerValue = "Inner";

        console.log(global);
        console.log(outerValue);
        console.log(innerValue);

    }

    inner();

}

outer();
```

`inner()` access kar sakta hai:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

---

# 7. Closure After Function Returns

Example:

```javascript
function createGreeting() {

    let message = "Hello";

    return function() {

        console.log(message);

    };

}

const greet = createGreeting();

greet();
```

Output:

```text
Hello
```

Flow:

```text
createGreeting()
       ↓
message = "Hello"
       ↓
returns function
       ↓
createGreeting() finishes
       ↓
greet()
       ↓
message still accessible
```

---

# 8. Closure Creates Private-Like Data

Closures ka ek common use hai data ko outside access se hide karna.

Example:

```javascript
function createAccount() {

    let balance = 1000;

    return {

        getBalance() {

            return balance;

        }

    };

}

const account = createAccount();

console.log(account.getBalance());
```

Output:

```text
1000
```

Lekin:

```javascript
console.log(account.balance);
```

Output:

```text
undefined
```

`balance` directly accessible nahi hai.

---

# 9. Closure for Data Privacy

Example:

```javascript
function createCounter() {

    let count = 0;

    return function() {

        count++;

        return count;

    };

}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:

```text
1
2
3
```

Yahan `count` private-like state ki tarah behave kar raha hai.

---

# 10. Why Does Counter Remember?

`createCounter()` ek function return karta hai:

```javascript
return function() {

    count++;

    return count;

};
```

Returned function `count` ko reference karta hai.

Isliye:

```text
count = 0
   ↓
counter()
   ↓
count = 1
   ↓
counter()
   ↓
count = 2
```

---

# 11. Multiple Closures

Important:

```javascript
function createCounter() {

    let count = 0;

    return function() {

        count++;

        return count;

    };

}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
```

Output:

```text
1
2
1
2
```

`counter1` aur `counter2` ke paas separate closure state hai.

```text
counter1
   ↓
count = 0 → 1 → 2

counter2
   ↓
count = 0 → 1 → 2
```

---

# 12. Closure with Parameters

```javascript
function multiplier(x) {

    return function(y) {

        return x * y;

    };

}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));
```

Output:

```text
10
15
```

`double` remembers:

```text
x = 2
```

`triple` remembers:

```text
x = 3
```

---

# 13. Practical Example: Discount

```javascript
function createDiscount(discount) {

    return function(price) {

        return price - (price * discount / 100);

    };

}

const tenPercent = createDiscount(10);
const twentyPercent = createDiscount(20);

console.log(tenPercent(1000));
console.log(twentyPercent(1000));
```

Output:

```text
900
800
```

---

# 14. Closure with Function Factory

A function jo another function create/return karta hai usse function factory ki tarah use kar sakte hain.

Example:

```javascript
function createMultiplier(number) {

    return function(value) {

        return value * number;

    };

}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10));
console.log(triple(10));
```

Output:

```text
20
30
```

---

# 15. Closure with `setTimeout`

Closures asynchronous code mein bhi commonly appear karte hain.

```javascript
function greet() {

    let message = "Hello";

    setTimeout(() => {

        console.log(message);

    }, 1000);

}

greet();
```

Output after approximately 1 second:

```text
Hello
```

`setTimeout` callback `message` ko remember karta hai.

---

# 16. Closure with Event Listener

Browser example:

```javascript
function setupButton() {

    let count = 0;

    button.addEventListener("click", () => {

        count++;

        console.log(count);

    });

}

setupButton();
```

Har click par:

```text
1
2
3
4
...
```

`count` callback ke closure mein accessible rehta hai.

---

# 17. Closure and Loops

Loop + closure JavaScript ka famous example hai.

### `var` Example

```javascript
for (var i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000);

}
```

Output:

```text
4
4
4
```

Kyunki `var` function-scoped hai aur callbacks same `i` binding ko reference karte hain.

---

# 18. `let` with Closure

```javascript
for (let i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000);

}
```

Output:

```text
1
2
3
```

`let` loop iteration ke liye appropriate lexical binding provide karta hai.

---

# 19. Closure and Scope

Example:

```javascript
function outer() {

    let a = 10;

    function inner() {

        console.log(a);

    }

    return inner;

}
```

`inner()` ka lexical environment `outer()` ke environment se connected hai.

Conceptually:

```text
inner
  ↓
outer
  ↓
global
```

---

# 20. Closure and Garbage Collection

Closure ka matlab ye nahi hai ki har outer variable permanently memory mein rahega.

Agar returned/reference-held function ko outer variable ki zaroorat hai, relevant environment ko alive rehna pad sakta hai.

Example:

```javascript
function createCounter() {

    let count = 0;

    return () => count++;

}

const counter = createCounter();
```

Jab tak `counter` reachable hai, us closure ke required state ko preserve kiya ja sakta hai.

Agar function aur uska closure unreachable ho jaye, JavaScript garbage collector eventually memory reclaim kar sakta hai.

---

# 21. Closure with Object

```javascript
function createUser(name) {

    return {

        getName() {

            return name;

        },

        changeName(newName) {

            name = newName;

        }

    };

}

const user = createUser("Rohit");

console.log(user.getName());

user.changeName("Aman");

console.log(user.getName());
```

Output:

```text
Rohit
Aman
```

`name` directly public property nahi hai, but methods closure ke through usse access kar rahe hain.

---

# 22. Private State Example

```javascript
function createBankAccount(initialBalance) {

    let balance = initialBalance;

    return {

        deposit(amount) {

            balance += amount;

        },

        withdraw(amount) {

            balance -= amount;

        },

        getBalance() {

            return balance;

        }

    };

}

const account = createBankAccount(5000);

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
6000
```

Direct:

```javascript
console.log(account.balance);
```

Output:

```text
undefined
```

---

# 23. Closure with Multiple Variables

```javascript
function createUser(name, age) {

    return function() {

        console.log(name);
        console.log(age);

    };

}

const user = createUser("Rohit", 25);

user();
```

Output:

```text
Rohit
25
```

Closure multiple outer variables ko remember kar sakta hai.

---

# 24. Closure Chain

Closures nested scopes ke saath bhi work kar sakte hain.

```javascript
function levelOne() {

    let a = 10;

    return function levelTwo() {

        let b = 20;

        return function levelThree() {

            let c = 30;

            console.log(a);
            console.log(b);
            console.log(c);

        };

    };

}

const second = levelOne();
const third = second();

third();
```

Output:

```text
10
20
30
```

Scope chain:

```text
levelThree
    ↓
levelTwo
    ↓
levelOne
    ↓
global
```

---

# 25. Closure in JavaScript Modules

Closures aur modules together private state create karne mein useful ho sakte hain.

Example:

```javascript
const counterModule = (() => {

    let count = 0;

    return {

        increment() {

            count++;

        },

        getCount() {

            return count;

        }

    };

})();
```

Use:

```javascript
counterModule.increment();

console.log(counterModule.getCount());
```

Output:

```text
1
```

---

# 26. IIFE and Closure

IIFE:

```text
Immediately Invoked Function Expression
```

Example:

```javascript
const counter = (() => {

    let count = 0;

    return () => {

        count++;

        return count;

    };

})();
```

Now:

```javascript
console.log(counter());
console.log(counter());
```

Output:

```text
1
2
```

`count` private-like state ke roop mein maintain hota hai.

---

# 27. Closure with `this`

Closure aur `this` alag concepts hain.

Example:

```javascript
const user = {

    name: "Rohit",

    greet() {

        const inner = () => {

            console.log(this.name);

        };

        inner();

    }

};

user.greet();
```

Output:

```text
Rohit
```

Arrow function apna separate `this` create nahi karta; woh surrounding lexical `this` ko use karta hai.

---

# 28. Closure vs Scope

### Scope

Scope batata hai ki variable ko code ke kis area mein access kiya ja sakta hai.

### Closure

Closure ek function aur uske surrounding lexical environment ke relationship ko refer karta hai, jiske through function outer variables ko preserve/access kar sakta hai.

Example:

```javascript
function outer() {

    let x = 10;

    return function inner() {

        console.log(x);

    };

}
```

Yahan:

```text
Scope → x kaha accessible hai
Closure → inner() x ko remember/access karta hai
```

---

# 29. Closure vs Execution Context

Ye dono same nahi hain.

### Execution Context

Function ko execute karne ke liye runtime environment.

### Closure

Function ka apne lexical environment ko remember/access karna.

Example:

```javascript
function outer() {

    let x = 10;

    return function inner() {

        console.log(x);

    };

}
```

`outer()` ka execution context complete ho sakta hai, lekin returned `inner` function ke closure ki wajah se `x` accessible reh sakta hai.

---

# 30. Common Closure Interview Example

```javascript
function outer() {

    let count = 0;

    return function() {

        count++;

        console.log(count);

    };

}

const counter = outer();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

### Why?

Because returned function `count` ko remember karta hai.

---

# 31. Closure Interview Question

### Q. What is a Closure?

**Answer:**

A closure is a function together with access to variables from its surrounding lexical environment. It allows the function to access those outer variables even after the outer function has finished executing, as long as the closure remains reachable.

---

# 32. Interview Question

### Q. Why are Closures useful?

Closures can be useful for:

```text
✓ Data privacy
✓ Maintaining state
✓ Function factories
✓ Callbacks
✓ Event handlers
✓ Memoization
✓ Module patterns
```

---

# 33. Closure for State Management

```javascript
function createCounter() {

    let count = 0;

    return {

        increment() {

            count++;

        },

        decrement() {

            count--;

        },

        getValue() {

            return count;

        }

    };

}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getValue());

counter.decrement();

console.log(counter.getValue());
```

Output:

```text
2
1
```

---

# 34. Closure for Memoization

Closures can also store previously calculated values.

Example:

```javascript
function createMemo() {

    const cache = {};

    return function(number) {

        if (cache[number]) {

            return cache[number];

        }

        const result = number * number;

        cache[number] = result;

        return result;

    };

}

const square = createMemo();

console.log(square(5));
console.log(square(5));
```

First time:

```text
5 × 5 = 25
```

Second time cached result use kiya ja sakta hai.

---

# 35. Closure and Private Counter

```javascript
function createCounter() {

    let count = 0;

    return {

        increment() {

            count++;

        },

        reset() {

            count = 0;

        },

        value() {

            return count;

        }

    };

}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.value());

counter.reset();

console.log(counter.value());
```

Output:

```text
2
0
```

---

# 36. Practical Example: Login Attempts

```javascript
function createLoginSystem() {

    let attempts = 0;

    return function(loginSuccessful) {

        if (loginSuccessful) {

            attempts = 0;

            console.log("Login successful");

        } else {

            attempts++;

            console.log(`Failed attempts: ${attempts}`);

        }

    };

}

const login = createLoginSystem();

login(false);
login(false);
login(true);
```

Output:

```text
Failed attempts: 1
Failed attempts: 2
Login successful
```

`attempts` private state ki tarah closure mein maintained hai.

---

# 37. Closure Mental Model

```text
┌──────────────────────────┐
│      Outer Function      │
│                          │
│   let value = 10;        │
│                          │
│   ┌──────────────────┐   │
│   │ Inner Function   │   │
│   │                  │   │
│   │ console.log      │   │
│   │ (value)          │   │
│   └──────────────────┘   │
└─────────────┬────────────┘
              │
              ↓
       Inner function
       remembers value
```

---

# 38. Quick Revision

### Closure

```text
Function
+
Lexical Environment
```

### Basic Example

```javascript
function outer() {

    let x = 10;

    return function() {

        console.log(x);

    };

}

const fn = outer();

fn();
```

Output:

```text
10
```

### Main Uses

```text
Data Privacy
State
Callbacks
Event Handlers
Function Factories
Memoization
```

### Important Concept

```text
Outer Function
      ↓
Returns Inner Function
      ↓
Outer Function finishes
      ↓
Inner Function still accesses outer variables
```

---

# Final Mental Model

```text
                    Closure
                       │
             ┌─────────┴─────────┐
             ↓                   ↓
          Function        Lexical Environment
             │                   │
             └─────────┬─────────┘
                       ↓
              Outer variables
                       ↓
              Still accessible
```

## One-Line Definition

> **Closure is a function that retains access to variables from its surrounding lexical environment even after the outer function has finished executing.**

---

## Next File

```text
18-Advanced-JavaScript/05-Prototypes.md
```