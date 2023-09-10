// script.js
const submitButton = document.getElementById("submit-feedback");

submitButton.addEventListener("click", function () {
    const feedbackText = document.getElementById("feedback").value;
    alert(`Thank you for your feedback:\n${feedbackText}`);
});
