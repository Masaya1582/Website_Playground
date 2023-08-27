const setAlarmButton = document.getElementById('set-alarm-btn');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmsList = document.querySelector('.alarms-list');

setAlarmButton.addEventListener('click', () => {
    const alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        createAlarm(alarmTime);
        alarmTimeInput.value = '';
    }
});

function createAlarm(time) {
    const alarmItem = document.createElement('div');
    alarmItem.classList.add('alarm-item');
    alarmItem.innerHTML = `<p>${time}</p><button class="delete-btn">Delete</button>`;
    
    const deleteButton = alarmItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        alarmsList.removeChild(alarmItem);
    });
    
    alarmsList.appendChild(alarmItem);
}

function checkAlarms() {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const alarmItems = document.querySelectorAll('.alarm-item');
    
    alarmItems.forEach(item => {
        const alarmTime = item.querySelector('p').textContent;
        if (alarmTime === currentTime) {
            alert('Alarm! Time to wake up!');
            item.style.backgroundColor = '#ffcccc';
        }
    });
}

setInterval(checkAlarms, 1000); // Check alarms every second
