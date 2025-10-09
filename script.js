function updateContent() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateContent, 1000);
updateContent