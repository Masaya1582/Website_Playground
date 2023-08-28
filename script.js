const calculateButton = document.getElementById('calculate-button');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters

  if (isNaN(weight) || isNaN(height) || height === 0) {
    resultElement.textContent = 'Please enter valid values for weight and height.';
    return;
  }

  const bmi = weight / (height * height);
  const bmiCategory = getBMICategory(bmi);

  resultElement.textContent = `Your BMI: ${bmi.toFixed(2)} (${bmiCategory})`;
});

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 24.9) {
    return 'Normal weight';
  } else if (bmi < 29.9) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
