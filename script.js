// JavaScript for the converter
const decimalInput = document.getElementById("decimalInput");
const convertButton = document.getElementById("convertButton");
const binaryResult = document.getElementById("binaryResult");

convertButton.addEventListener("click", () => {
    const decimalValue = Number(decimalInput.value);
    
    if (!isNaN(decimalValue)) {
        const binaryValue = decimalValue.toString(2);
        binaryResult.textContent = binaryValue;
    } else {
        binaryResult.textContent = "Invalid input";
    }
});
