const initialTasks = ["Buy groceries", "Complete homework", "Read a book"];

// Function to initialize tasks
function initializeTasks() {
    const taskList = document.getElementById("task-list");

    initialTasks.forEach(task => {
        const listItem = createTaskElement(task);
        taskList.appendChild(listItem);
    });
}

// Function to create a task element
function createTaskElement(taskText) {
    const listItem = document.createElement("li");
    listItem.className = "task";

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(listItem));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTask(listItem));

    taskActions.appendChild(editButton);
    taskActions.appendChild(deleteButton);

    listItem.appendChild(taskTextElement);
    listItem.appendChild(taskActions);

    return listItem;
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    const taskText = newTaskInput.value.trim();
    if (taskText === "") return;

    const listItem = createTaskElement(taskText);
    taskList.appendChild(listItem);

    newTaskInput.value = ""; // Clear input field
}

// Function to edit a task
function editTask(listItem) {
    const taskTextElement = listItem.querySelector("span");
    const newTaskText = prompt("Edit task:", taskTextElement.textContent);

    if (newTaskText !== null) {
        taskTextElement.textContent = newTaskText;
    }
}

// Function to delete a task
function deleteTask(listItem) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(listItem);
}

// Initialize tasks on page load
//