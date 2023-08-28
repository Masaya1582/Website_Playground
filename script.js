const calculateButton = document.getElementById('calculate-button');
const billAmountInput = document.getElementById('bill-amount');
const tipPercentageInput = document.getElementById('tip-percentage');
const tipAmountElement = document.getElementById('tip-amount');

calculateButton.addEventListener('click', calculateTip);

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);

  if (isNaN(billAmount) || isNaN(tipPercentage)) {
    tipAmountElement.textContent = 'Please enter valid values for bill amount and tip percentage.';
    return;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  tipAmountElement.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
}
