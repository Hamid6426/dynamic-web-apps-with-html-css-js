const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", convertToRoman);

function convertToRoman() {
    const number = parseInt(numberInput.value);

    // Check for empty input
    if (isNaN(number)) {
        output.textContent = 'Please enter a valid number.';
        return;
    }

    // Check for number less than 1
    if (number < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1.';
        return;
    }

    // Check for number greater than 3999
    if (number > 3999) {
        output.textContent = 'Please enter a number less than or equal to 3999.';
        return;
    }

    // If the number is valid, convert it to Roman numerals
    output.textContent = toRoman(number);
}

function toRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    
    let roman = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            roman += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    
    return roman;
}
