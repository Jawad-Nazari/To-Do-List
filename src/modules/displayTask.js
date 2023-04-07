/* eslint-disable import/no-mutable-exports */
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const mytaskList = document.getElementById('myTasksList');
const displayTask = () => {
  mytaskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'content';
    taskContainer.index = `${task.index}`;
    taskContainer.innerHTML = `<div class="taskInput" id='${task.index}'>
                               ${task.completed === true ? `
                               <input type="checkbox" id="checkbox" class="checked" checked></input>`
    : '<input type="checkbox" id="checkbox" class="unchecked"></input>'}
        <input class="${task.completed === true ? 'taskCompleted editTask' : 'editTask'}"
        type="text" value="${task.description}">
      </input>
    </div>
  <i class="fa-solid fa-trash-can removeTask" id="removeTask"></i>`;
    mytaskList.appendChild(taskContainer);
  });
};

const newTask = document.getElementById('input');
const addTask = (e) => {
  if (e.key === 'Enter' || e === 'clicked') {
    e.preventDefault();
    const taskItem = {
      description: newTask.value,
      completed: false,
      index: tasks.length + 1,
    };
    newTask.value = '';
    tasks = [...tasks, taskItem];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTask();
  }
};

const editTask = (index, event) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    tasks[index - 1].description = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

const deleteTask = (targetIndex) => {
  const listFiltered = tasks.filter((item) => +item.index !== +targetIndex);
  const newList = listFiltered.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index: index + 1,
  }));
  tasks = newList;
  localStorage.setItem('tasks', JSON.stringify(newList));
  displayTask();
};

const loadTasks = (data) => {
  tasks = data;
  displayTask();
};

export {
  displayTask, addTask, editTask, deleteTask, tasks, loadTasks,
};