const inputBox = document.getElementById("input-box");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const sumbitButton = document.getElementById("sumbitButton");
const result = document.getElementById("result");

sumbitButton.onclick = function () {
    if(toFahrenheit.checked === false && toCelcius.checked === false){
        result.textContent = "Please select the conversion"
    }
    else if(toFahrenheit.checked === true && toCelcius.checked === false){
        let temp = Number(inputBox.value)
        temp = temp*9/5+32;
        result.textContent = temp.toFixed(1)+ "°F"; 
    } else if(toFahrenheit.checked === false && toCelcius.checked === true) {
        let temp = Number(inputBox.value)
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1)+ "°C"; 
    }
}


