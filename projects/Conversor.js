const textbox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('Fahrenheit');
const toCelsius = document.getElementById('Celsius');
const result = document.getElementById('Result');
let temp;


function convert()
{
    if(toFahrenheit.checked)
    {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked)
    {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else
    {
        result.textContent = "Selecione uma unidade";
    }
}