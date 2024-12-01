function convertToF() {
    const celsius = parseFloat(document.getElementById("celsius").value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9) / 5 + 32;
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    } else {
        alert("Please enter a valid number for Celsius.");
    }
}

function convertToC() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    if (!isNaN(fahrenheit)) {
        const celsius = ((fahrenheit - 32) * 5) / 9;
        document.getElementById("celsius").value = celsius.toFixed(2);
    } else {
        alert("Please enter a valid number for Fahrenheit.");
    }
}
