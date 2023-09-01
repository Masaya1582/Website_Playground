document.addEventListener('DOMContentLoaded', () => {
  const jobEntryForm = document.getElementById('jobEntryForm');
  const jobList = document.getElementById('jobList');

  jobEntryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;

    const jobEntry = document.createElement('div');
    jobEntry.classList.add('job-entry');
    jobEntry.innerHTML = `
      <h2>${jobTitle}</h2>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Location:</strong> ${location}</p>
    `;

    jobList.appendChild(jobEntry);

    // Clear form inputs
    jobEntryForm.reset();
  });
});
