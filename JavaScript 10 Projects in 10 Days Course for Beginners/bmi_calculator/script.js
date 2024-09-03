document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const age = parseInt(document.querySelector("#age").value);
    const gender = document.querySelector("#gender").value;
    const ft = parseInt(document.querySelector("#ft").value);
    const inches = parseInt(document.querySelector("#in").value);
    const heightInMeters = ft / 3.28084 + 0.0254 * inches;
    const weight = parseFloat(document.querySelector("#weight").value);

    if (age && gender && ft && inches && weight) {
        const bmi = weight / heightInMeters ** 2;

        let category = "";

        if (bmi < 18.5)                     category = "Underweight";
        else if (bmi >= 18.5 && bmi < 25)   category = "Healthy";
        else if (bmi >= 25 && bmi < 30)     category = "Overweight";
        else if (bmi > 30)                  category = "Obese";
        else                                category = "There's an error. Please try again."; 

        document.querySelector("#category").textContent = "Category: " + category;
        document.querySelector("#result").textContent = "BMI: " + bmi.toFixed(2);
    } else {
        alert("Please fill out all input");
    }
});
