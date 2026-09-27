/* 1. Button Click Project

let button = document.getElementById("btn")
let message = document.getElementById("message")

button.addEventListener("click", function() {
    message.textContent = "Hello Rohit"
});
*/

/* 2. Color Change Project

let color = document.getElementById("btn")

color.addEventListener("click", function() {
    document.body.style.backgroundColor = "Grey"
});
*/

/* 3. Live Text Preview

let input = document.getElementById("name")
let result = document.getElementById("output")

input.addEventListener("input", function() {
    result.textContent = input.value;
});
*/

/* 4. Character Counter

let text = document.getElementById("text")
let num = document.getElementById("count")

text.addEventListener("input", function() {
    num.textContent = text.value.length;
});
*/

/* 5. Simple Form Validation

let form = document.getElementById("form")
let input = document.getElementById("name")
let message = document.getElementById("message")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let value = input.value.trim();
    if (value === "") {
        message.textContent = "Please Enter Messages"
        return;
    }
    message.textContent = "Submitted"
});
*/

/* 6. Show / Hide Password

let password = document.getElementById("password")
let show = document.getElementById("toggle")

show.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text"
        show.textContent = "Hide" 
    } else {
        password.type = "password"
        show.textContent = "Show"
    }
});
*/