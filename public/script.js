document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display sprints and user stories from the server
    fetch('/api/sprints')
        .then(response => response.json())
        .then(data => {
            const sprintList = document.getElementById('sprint-list');
            data.forEach(sprint => {
                const li = document.createElement('li');
                li.textContent = sprint.name;
                sprintList.appendChild(li);
            });
        });
});