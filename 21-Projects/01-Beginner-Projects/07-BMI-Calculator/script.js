const heightInput = document.getElementById("height")
const weightInput = document.getElementById("weight")
const calculateBtn = document.getElementById("calculateBtn")
const resetBtn = document.getElementById("resetBtn")
const bmiValue = document.getElementById("bmiValue")
const category = document.getElementById("category")

calculateBtn.addEventListener("click", function() {
    const height = Number(heightInput.value)
    const weight = Number(weightInput.value)

    if(height <= 0 || weight <=0) {
        bmiValue.textContent = "--";
        category.textContent = "Please enter valid values"
        return;
    }
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter)
    bmiValue.textContent = bmi.toFixed(2);

    if(bmi < 18.5) {
        category.textContent = "Under Weight";
    } else if(bmi < 25) {
        category.textContent = "Normal Weight"
    } else if(bmi < 30) {
        category.textContent = "Over Weight"
    } else {
        category.textContent = "Obesity"
    }
});

resetBtn.addEventListener("click", function() {
    heightInput.value = "";
    weightInput.value = "";
    bmiValue.textContent = "--";
    category.textContent = "Enter your details";
});