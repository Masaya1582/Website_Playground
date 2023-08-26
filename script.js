// script.js
const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Display a confirmation alert
  const isConfirmed = confirm('Are you sure you want to submit the form?');

  if (isConfirmed) {
    contactForm.submit(); // Submit the form if confirmed
  }
});
