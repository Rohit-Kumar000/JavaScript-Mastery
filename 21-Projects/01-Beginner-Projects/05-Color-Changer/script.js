const changeColor = document.getElementById("changeColor")
const resetColor = document.getElementById("resetColor")
const colorCode = document.getElementById("colorCode")
const currentColor = document.getElementById("currentColor")
const swatches = document.querySelectorAll(".swatch")
const colorPreview = document.getElementById("colorPreview")

const defaultColor = "#F5F5F5";

const colors = [
    "#EF4444",
    "#3B82F6",
    "#22C55E",
    "#8B5CF6",
    "#F97316",
    "#EC4899",
    "#14B8A6",
    "#EAB308",
    "#6366F1",
    "#06B6D4"
];

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    colorPreview.style.backgroundColor = color;
    colorCode.textContent = color;
    currentColor.textContent = color;
}

changeColor.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex]
    changeBackgroundColor(randomColor)
});

resetColor.addEventListener("click", function() {
    changeBackgroundColor(defaultColor)
});

swatches.forEach(function (swatch) {
    swatch.addEventListener("click", function() {
        const selectedColor = swatch.dataset.color;
        changeBackgroundColor(selectedColor)
    })
});