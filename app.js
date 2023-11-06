const form = document.getElementById('appointmentForm');
const appointmentsContainer = document.getElementById('appointments');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const name = nameInput.value;
    const date = dateInput.value;
    const time = timeInput.value;

    if (!name || !date || !time) {
        alert('Please fill in all fields');
        return;
    }

    // Add the appointment to the database (using AJAX)

    const appointment = document.createElement('li');
    appointment.innerHTML = `<strong>${name}</strong> - Date: ${date}, Time: ${time}`;
    appointmentsContainer.appendChild(appointment);

    nameInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
});
