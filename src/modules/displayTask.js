let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const mytaskList = document.getElementById('myTasksList');

const displayTask = () => {
  mytaskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList = 'content';
    taskContainer.index = `${task.index}`;
    taskContainer.innerHTML = `<div class="taskInput" id='${task.index}'>
                          <input type="checkbox"></input>
                            <input id="info" class="${task.completed === true ? 'taskCmpleted' : 'edit'}"
                              type="text" value="${task.description}">
                            </input>
                          </div>
                          <i class="fa-solid fa-trash-can deleteTask" id="removeTask"></i>`;
    const info = document.getElementById('info');
    if (task.completed === true) {
      info.classList.add('taskCompleted');
    }
    mytaskList.appendChild(taskContainer);
  });
};

const newTask = document.getElementById('input');
const addTask = (e) => {
  if (e.key === 'Enter' || e === 'clicked') {
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

export {
  displayTask, addTask, editTask, deleteTask,
};