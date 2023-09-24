document.addEventListener('DOMContentLoaded', () => {
    const arrayInput = document.getElementById('arrayInput');
    const manipulateButton = document.getElementById('manipulateButton');
    const resultOutput = document.getElementById('resultOutput');

    manipulateButton.addEventListener('click', () => {
        const inputArray = JSON.parse(arrayInput.value);

        const mappedArray = inputArray.map(item => item * 2);
        const filteredArray = inputArray.filter(item => item % 2 === 0);
        const reducedValue = inputArray.reduce((acc, curr) => acc + curr, 0);

        resultOutput.innerHTML = `
            <p>Original Array: ${JSON.stringify(inputArray)}</p>
            <p>Mapped Array (Doubled): ${JSON.stringify(mappedArray)}</p>
            <p>Filtered Array (Even Numbers): ${JSON.stringify(filteredArray)}</p>
            <p>Reduced Value (Sum): ${reducedValue}</p>
        `;
    });
});
