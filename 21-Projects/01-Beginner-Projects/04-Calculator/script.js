const previousValue = document.getElementById("previousValue")
const currentValue = document.getElementById("currentValue")
const clear = document.getElementById("clear")
const reset = document.getElementById("delete")
const operator = document.getElementsByClassName("btn operator")
const number = document.getElementsByClassName("btn number")
const equal = document.getElementById("equals")
const decimal = document.getElementById("decimal")

let firstNumber = ""
let selectedOperator = ""
let resultShown = false

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        const value = number[i].textContent

        if(resultShown) {
            currentValue.textContent = value
            resultShown = false
            return
        }

        if(currentValue.textContent === "0") {
            currentValue.textContent = value
        }

        else {
            currentValue.textContent += value
        }
    })
}

for (let i = 0; i < operator.length; i++) {

    operator[i].addEventListener("click", function () {

        const selected = operator[i].textContent
        if (selected === "%") {

            currentValue.textContent =
                Number(currentValue.textContent) / 100

            return
        }

        if (selectedOperator !== "") {
            return
        }


        firstNumber = currentValue.textContent
        selectedOperator = selected
        previousValue.textContent =
            firstNumber + " " + selectedOperator

        currentValue.textContent = "0"

    })

}

equal.addEventListener("click", function () {

    if (
        firstNumber === "" ||
        selectedOperator === ""
    ) {
        return
    }

    const secondNumber = currentValue.textContent

    let result
    if (selectedOperator === "+") {

        result =
            Number(firstNumber) + Number(secondNumber)

    }

    else if (selectedOperator === "−") {

        result =
            Number(firstNumber) - Number(secondNumber)

    }

    else if (selectedOperator === "×") {

        result =
            Number(firstNumber) * Number(secondNumber)

    }

    else if (selectedOperator === "÷") {
        if (Number(secondNumber) === 0) {

            currentValue.textContent = "Error"

            firstNumber = ""
            selectedOperator = ""

            return
        }

        result =
            Number(firstNumber) / Number(secondNumber)

    }

    previousValue.textContent =
        firstNumber + " " +
        selectedOperator + " " +
        secondNumber

    currentValue.textContent = result
    firstNumber = result
    selectedOperator = ""
    resultShown = true

})

clear.addEventListener("click", function () {

    currentValue.textContent = "0"

    previousValue.textContent = ""

    firstNumber = ""

    selectedOperator = ""

    resultShown = false

})

reset.addEventListener("click", function () {

    if (
        currentValue.textContent === "Error" ||
        currentValue.textContent.length === 1
    ) {

        currentValue.textContent = "0"

    }

    else {

        currentValue.textContent =
            currentValue.textContent.slice(0, -1)

    }

})


decimal.addEventListener("click", function () {

    if (resultShown) {

        currentValue.textContent = "0."

        resultShown = false

        return
    }


    if (
        !currentValue.textContent.includes(".")
    ) {

        currentValue.textContent += "."

    }

})