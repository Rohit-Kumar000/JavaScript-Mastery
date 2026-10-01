const count = document.getElementById("count")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")

let number = 0;

increase.addEventListener("click", function() {
    number++;
    count.textContent = number;
});

decrease.addEventListener("click", function() {
    if(number > 0) {
        number--;
    }
    count.textContent = number;
});

reset.addEventListener("click", function() {
    number = 0;
    count.textContent = number;
})