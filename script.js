// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = createTaskElement(taskText);
    document.getElementById('pendingTasks').appendChild(taskItem);
    taskInput.value = ''; // Clear the input field
}

// Function to create a task element
function createTaskElement(taskText) {
    const taskItem = document.createElement('li');

    // Create text node for the task
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function () {
        markTaskComplete(taskItem);
    };
    taskItem.appendChild(completeButton);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteTask(taskItem);
    };
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to mark a task as complete
function markTaskComplete(taskItem) {
    const completedTasks = document.getElementById('completedTasks');
    completedTasks.appendChild(taskItem);

    // Change the task text color to indicate completion
    taskItem.querySelector('span').style.textDecoration = 'line-through';
    taskItem.querySelector('button').style.display = 'none'; // Hide 'Complete' button
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}
