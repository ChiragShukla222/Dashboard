function updateClock() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date().toLocaleTimeString();
    timeElement.textContent = currentTime;
}

