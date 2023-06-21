function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var convertFrom = document.getElementById("convertFrom").value;
    var convertTo = document.getElementById("convertTo").value;

    var convertedTemperature = convertTemperatureValue(temperature, convertFrom, convertTo);

    alert("El resultado de la conversión es: " + convertedTemperature.toFixed(2));
}

function convertTemperatureValue(temperature, convertFrom, convertTo) {
    var convertedTemp;
    if (convertFrom === "Celsius") {
        if (convertTo === "Fahrenheit") {
            convertedTemp = (temperature * 9 / 5) + 32;
        } else if (convertTo === "Kelvin") {
            convertedTemp = temperature + 273.15;
        } else {
            convertedTemp = temperature;
        }
    } else if (convertFrom === "Fahrenheit") {
        if (convertTo === "Celsius") {
            convertedTemp = (temperature - 32) * 5 / 9;
        } else if (convertTo === "Kelvin") {
            convertedTemp = (temperature + 459.67) * 5 / 9;
        } else {
            convertedTemp = temperature;
        }
    } else if (convertFrom === "Kelvin") {
        if (convertTo === "Celsius") {
            convertedTemp = temperature - 273.15;
        } else if (convertTo === "Fahrenheit") {
            convertedTemp = (temperature * 9 / 5) - 459.67;
        } else {
            convertedTemp = temperature;
        }
    } else {
        convertedTemp = temperature;
    }

    return convertedTemp;
}