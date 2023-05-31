// DOM selectors for input
const conversionDiv = document.querySelector('#conversion');
const numInput = document.querySelector('#numInput');

// DOM selectors for displaying unit conversion results
const resultsDiv = document.querySelector('#results');
const lengthEl = document.querySelector('#length');
const volumeEl = document.querySelector('#volume');
const massEl = document.querySelector('#mass');

// Values representing different units in comparison to each other
const meterToFeet = 3.28084;
const feetToMeter = 0.3048;
const literToGal = 0.264172;
const galToLiter = 3.78541;
const kiloToPound = 2.20462;
const poundToKilo = 0.453592;

// Perform conversion and display results through DOM
function convertUnits(conversion) {
    const meters = (feetToMeter * conversion).toFixed(3);
    const feet = (meterToFeet * conversion).toFixed(3);

    const liters = (galToLiter * conversion).toFixed(3);
    const gallons = (literToGal * conversion).toFixed(3);

    const kilos = (poundToKilo * conversion).toFixed(3);
    const pounds = (kiloToPound * conversion).toFixed(3);
    
    lengthEl.textContent = `${conversion} meters = ${feet} feet | ${conversion} feet = ${meters} meters`;
    volumeEl.textContent = `${conversion} liters = ${gallons} gallons | ${conversion} gallons = ${liters} liters`;
    massEl.textContent = `${conversion} kilograms = ${pounds} pounds | ${conversion} pounds = ${kilos} kilograms`;
}

conversionDiv.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        convertUnits(numInput.value);
    }
});