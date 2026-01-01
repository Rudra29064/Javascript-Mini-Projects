const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if (height < 0 ||isNaN(height)) {
        result.innerHTML = "Provide a valid Height!"
        return
    }
    
    if (weight < 0 || isNaN(weight)) {
        result.innerHTML = "Provide a valid Weight!"
        return
    }
    
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    let category = ""

    if (bmi < 18.5) {
        category = "Underweight"
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight"
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight"
    } else if (bmi >= 30) {
        category = "Obesity"
    }

    result.innerHTML = `Your BMI is ${bmi} and you are ${category}`
})