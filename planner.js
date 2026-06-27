document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Array tracking task objects structure
    let tasksArray = [];

    // Render task interface dynamically
    function renderTasks() {
        taskList.innerHTML = '';
        tasksArray.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <span>${task.text}</span>
                <div class="task-actions">
                    <button class="btn" style="background:#4caf50; padding:0.2rem 0.5rem;" onclick="toggleTask(${index})">✓</button>
                    <button class="btn" style="background:#f44336; padding:0.2rem 0.5rem;" onclick="deleteTask(${index})">✗</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Add function
    addTaskBtn.addEventListener('click', () => {
        const textValue = taskInput.value.trim();
        if(textValue !== '') {
            tasksArray.push({ text: textValue, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    });

    // Toggle Complete function state global exposure
    window.toggleTask = (index) => {
        tasksArray[index].completed = !tasksArray[index].completed;
        renderTasks();
    };

    // Delete item array manipulation element function
    window.deleteTask = (index) => {
        tasksArray.splice(index, 1);
        renderTasks();
    };
});