const taskInput = document.querySelector(".js--form__input");
const addTaskButton = document.querySelector(".form__btn");
const taskList = document.querySelector(".js--todos-wrapper");

document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

addTaskButton.addEventListener("click", function (event) {
  event.preventDefault();
  const inputValue = taskInput.value;
  if (inputValue !== "") {
    createNewTask(inputValue);
    saveTaskToLocalStorage(inputValue);
    taskInput.value = "";
  }
});

function createNewTask(taskName, isCompleted = false) {
  const newTask = document.createElement("li");
  newTask.classList.add("todo-item");

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("taskCheckbox");
  taskCheckbox.checked = isCompleted;

  const taskSpan = document.createElement("span");
  taskSpan.classList.add("todo-item__description");
  taskSpan.style.paddingLeft = "20px";
  if (isCompleted) {
    taskSpan.classList.add("strikethrough");
  }
  taskSpan.textContent = taskName;

  const removeButton = createRemoveButton(newTask, taskName);

  newTask.appendChild(taskCheckbox);
  newTask.appendChild(taskSpan);
  newTask.appendChild(removeButton);
  taskList.appendChild(newTask);

  taskCheckbox.addEventListener("change", function () {
    taskSpan.classList.toggle("strikethrough");
    updateTaskInLocalStorage(taskName, taskCheckbox.checked);
  });
}

function createRemoveButton(taskElement, taskName) {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Delete task";
  removeButton.classList.add("todo-item__delete");
  removeButton.addEventListener("click", function () {
    taskList.removeChild(taskElement);
    removeTaskFromLocalStorage(taskName);
  });
  return removeButton;
}

function saveTaskToLocalStorage(taskName) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ name: taskName, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    createNewTask(task.name, task.completed);
  });
}

function updateTaskInLocalStorage(taskName, isCompleted) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map((task) =>
    task.name === taskName ? { ...task, completed: isCompleted } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskName) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.name !== taskName);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
