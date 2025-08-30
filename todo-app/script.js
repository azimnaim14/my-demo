const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = "❌";
  delBtn.addEventListener('click', () => li.remove());

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
