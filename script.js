const datetimeElement = document.getElementById('datetime');

function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDateTime = now.toLocaleDateString('en-US', options);
  datetimeElement.textContent = formattedDateTime;
}

// Update the datetime immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
