document.addEventListener("DOMContentLoaded", () => {
    const inputDistance = document.getElementById("input-distance");
    const selectFrom = document.getElementById("select-from");
    const selectTo = document.getElementById("select-to");
    const resultDistance = document.getElementById("result-distance");
    const convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", () => {
        const distance = parseFloat(inputDistance.value);
        const fromUnit = selectFrom.value;
        const toUnit = selectTo.value;

        if (!isNaN(distance)) {
            const convertedDistance = convertDistance(distance, fromUnit, toUnit);
            resultDistance.textContent = `${distance} ${fromUnit} is ${convertedDistance.toFixed(2)} ${toUnit}`;
        } else {
            resultDistance.textContent = "Invalid input";
        }
    });

    function convertDistance(distance, fromUnit, toUnit) {
        const unitFactors = {
            meters: 1,
            kilometers: 0.001,
            miles: 0.000621371,
        };

        const distanceInMeters = distance * unitFactors[fromUnit];
        const convertedDistance = distanceInMeters / unitFactors[toUnit];
        return convertedDistance;
    }
});
