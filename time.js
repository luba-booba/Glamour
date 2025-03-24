document.getElementById('date').addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const selectedDay = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const timeSelect = document.getElementById('time');
    
    // Clear existing options
    timeSelect.innerHTML = '<option value="" disabled selected>Select a Time</option>';

    // Available time options based on day
    let timeOptions = [];

    // Monday to Friday (10:30 AM - 8:00 PM)
    if (selectedDay >= 1 && selectedDay <= 5) {
        timeOptions = [
            "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
            "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
            "18:30", "19:00", "19:30", "20:00"
        ];
    }
    // Saturday (09:30 AM - 6:00 PM)
    else if (selectedDay === 6) {
        timeOptions = [
            "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
            "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00",
            "17:30", "18:00"
        ];
    }
    // Sunday (11:00 AM - 6:00 PM)
    else if (selectedDay === 0) {
        timeOptions = [
            "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
            "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
        ];
    }

    // Populate the time dropdown with the valid options
    timeOptions.forEach(function(time) {
        let option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
});
