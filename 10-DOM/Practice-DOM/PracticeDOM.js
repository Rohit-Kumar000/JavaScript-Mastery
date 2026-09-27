/* Project 1 - Change Text

let text = document.getElementById("title")
let button = document.getElementById("btn")

button.addEventListener("click", function() {
    text.textContent = "Hello JavaScript";
});
*/

/* Project 2 - Change Color

let text = document.getElementById("title")
let button = document.getElementById("btn")

button.addEventListener("click", function() {
    text.style.color = "red";
});
*/

/* Project 3 - Show / Hide Element

let paragraph = document.getElementById("message")
let button = document.getElementById("btn")

button.addEventListener("click", function() {
    paragraph.classList.toggle("hidden")
});
*/

/* Project 4 - Simple Counter

let count1 = 0;

let count = document.getElementById("count")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")

increase.addEventListener("click", function() {
    count1++;
    count.textContent = count1;
});
decrease.addEventListener("click", function() {
    count1 --;
    count.textContent = count1;
});
*/

/* Project 5 - Add List Items

let input = document.getElementById("itemInput")
let button = document.getElementById("addBtn")
let ul = document.getElementById("list")

button.addEventListener("click", function() {
    let li = document.createElement("li")
    li.textContent = input.value;
    ul.append(li);
    input.value = "";
});
*/


/* Project 6 - Remove List Item

let rem = document.getElementById("list")
let list = document.querySelectorAll("li")

list.forEach(function(element) {
    element.addEventListener("click", function() {
        element.remove()
    })
});
*/


/* Project 7 - Dark Mode

let button = document.getElementById("btn")
let box = document.getElementById("box")
button.addEventListener("click", function() {
    box.classList.toggle("white")
    
});
*/

/* Project 8 - Change Image

let image = document.getElementById("photo")
let button = document.getElementById("btn")

button.addEventListener("click", function() {
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86kczML_kdfQjmwvRHp1IZCPFbH-HGah5_aV20HwoBw&s=10")
});
*/

/* Project 9 - Input Greeting

let input = document.getElementById("nameInput")
let button = document.getElementById("btn")
let heading = document.getElementById("result")

button.addEventListener("click", function() {
    heading.textContent = input.value;
});
*/

/* Project 10 - Character Counter

let text = document.getElementById("text")
let count = document.getElementById("count")

text.addEventListener("input", function() {
    count.textContent = text.value.length;
});
*/

/* Project 11 - Simple Calculator

let input1 = document.getElementById("num1")
let input2 = document.getElementById("num2")
let button = document.getElementById("add")
let result = document.getElementById("result")

button.addEventListener("click", function() {
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)

    result.textContent = num1 + num2;
});
*/

/* Project 12 - Background Color Changer

let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green");

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"
});

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"
});

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"
});
*/

/* Project 13 - Random Color

let button = document.getElementById("btn")

button.addEventListener("click", function() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color
});
*/

/* Project 14 - Add and Remove Class

let div = document.getElementById("box")
let add = document.getElementById("add")
let remove = document.getElementById("remove")

add.addEventListener("click", function() {
    div.classList.toggle("active")
});

remove.addEventListener("click", function() {
    div.classList.toggle("active")
});
*/

/* Project 15 - Simple Form Validation

let form = document.getElementById("form")
let input = document.getElementById("name")
let message = document.getElementById("message")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    let name = input.value.trim()
    if (name === "") {
        message.textContent = "Please Enter your name";
        return;
    }
    message.textContent = "Submitted"
});
*/