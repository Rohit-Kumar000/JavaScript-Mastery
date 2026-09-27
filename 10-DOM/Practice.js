/* Q1. Create an HTML element with an id and use JavaScript to select it and print its text in the console.

let id = document.getElementById("id1")
console.log(id.textContent);
*/


/*Q2. Create an HTML element with a class and use JavaScript to select it using its class name. Print the 
selected element in the console.

let element = document.getElementsByClassName("class1")
console.log(element[0].textContent);
*/


/*Q3. Create a heading and use JavaScript to change its text content.

let heading = document.querySelector("#id1")
heading.textContent = "This is JavaScript Mastery";
console.log(heading);
*/


/*Q4. Create a paragraph and use JavaScript to change its text color.

let paragraph = document.querySelector("p")
paragraph.style.color = "red";
*/


/*Q5. Create a button and use JavaScript to change its background color and text color.

let button = document.querySelector("button")
button.style.backgroundColor = "orange";
button.style.color = "black";
*/


/*Q6. Create an HTML element with some text and use JavaScript to change its innerHTML.

let element = document.querySelector("#id1")
element.innerHTML = "<p>Rohit</p>"
console.log(element);
*/


/*Q7. Create an image element and use JavaScript to change its src attribute.

let image = document.querySelector("img")
image.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj0r68jZH4eo3fYSF4w2kuacrnLWu69OP644HsnhNkw&s=10")
console.log(image);
*/


/*Q8. Create three <p> elements and use JavaScript to select all of them. Change the text of each paragraph.

let element = document.querySelectorAll("p")
element[0].innerText = "Rishi";
element[1].innerText = "Mohan";
element[2].innerText = "Sushmita";
console.log(element);
*/


/*Q9. Create a <div> containing a heading and a paragraph. Use JavaScript to select the <div> and change its 
background color and text.

let div = document.querySelector("#mydiv")
div.style.backgroundColor = "red";
div.innerHTML = "<h1>My New Heading</h1><p>My New Paragraph</p>";
*/


/*Q10. Create a simple HTML page containing:
- A heading
- A paragraph
- A button
Use JavaScript to select these elements and, when your code runs:
- Change the heading text
- Change the paragraph text
- Change the button text
- Change the background color of the page

// let div = document.querySelector("#mydiv")
// div.innerHTML = "<h1>My new Heading</h1><p>My new paragraph</p><button>Clicked!</button>";
// document.body.style.backgroundColor = "white";

let heading = document.querySelector("h1");
let paragraph = document.querySelector("p");
let button = document.querySelector("button");

heading.textContent = "New Heading";
paragraph.textContent = "New Paragraph";
button.textContent = "Click Me";

document.body.style.backgroundColor = "white";
*/


/* Q11. Create a heading, paragraph, and button. Select each element using a different DOM selection method 
and print them in the console.


let heading = document.getElementById("heading1")
let paragraph = document.getElementsByTagName("p")
let button = document.querySelector("button")

console.log(heading);
console.log(paragraph[0]);
console.log(button);
*/


/* Q12. Create two headings with the same class. Select both headings and change their text to different values.

let headings = document.getElementsByClassName("head")
headings[0].textContent = "My new First Heading";
headings[1].textContent = "My new Second Heading"
*/


/* Q13. Create a paragraph with an id. Change its text using textContent, then change it again using innerText. 
Observe the difference.

let paragraph = document.getElementsByTagName("p")
paragraph[0].textContent = "Hello";
paragraph[0].innerText = "Rohit";       // both are equal
*/


/* Q14. Create a <div> containing a heading and paragraph. Replace the entire content of the <div> using innerHTML.

let div = document.querySelector("#div1")
div.innerHTML = "<h4>My name is Rohit</h4><p>Hello kese h aap log</p>";
*/


/* Q15. Create an image with an initial src and alt attribute. Use JavaScript to change both attributes.

let image = document.querySelector("img")
image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb26HBU9J3LOKzN8BywaTqJeRtaTVgKKOq4FaMaH8zw&s=10");
image.setAttribute("alt", "altattribute");
*/


/* Q16. Create a link (<a>) with an initial href. Use JavaScript to change its URL and text.

let link = document.querySelector("a")
link.href = "https://lms.cuonlineedu.in/dashboard"
link.innerText = "Click";
*/


/* Q17. Create a button and use JavaScript to add the following attributes:
- id
- title
- class
Then print the button in the console.

let button = document.querySelector("button")
button.setAttribute("id", "id1");
button.setAttribute("title", "title1");
button.setAttribute("class", "class1");

console.log(button);
*/


/* Q18. Create a paragraph and change its:
- Text color
- Background color
- Font size
- Font weight
- Padding
using JavaScript.

let paragraph = document.querySelectorAll("p")
paragraph[1].style.cssText = `
    color: white;
    background-color: black;
    font-size: 12px;
    font-weight: bolder;
    padding: 20px;
`;
*/


/* Q19. Create a <div> containing a heading and paragraph. Use JavaScript to change the <div>'s background color, 
width, height, padding, and border.

let div = document.querySelector("div")
div.style.backgroundColor = "grey";
div.style.width = "80%";
div.style.height = "100px";
div.style.padding = "10px";
div.style.border = "10px solid black";
*/


/* Q20. Create a simple Profile Card using HTML and JavaScript.
The card should contain:
- Profile image
- Name
- Age
- City
- A button
Using JavaScript:
1. Change the profile image.
2. Change the name.
3. Change the city.
4. Change the button text.
5. Change the card background color.
6. Change the image src and alt attributes.
7. Change the font size of the name.
8. Print the final card element in the console.


let image = document.querySelector("img");
image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvRPlWzR86Xg8pC8XAz_FTllGOta5N0-nDOMsPp96btw&s=10");
image.setAttribute("alt", "myatr");

let nameElement = document.querySelector("h5");
nameElement.textContent = "Aman";
nameElement.style.fontSize = "30px";

let city = document.querySelector("p");
city.textContent = "Tundla";

let button = document.querySelector("button");
*/