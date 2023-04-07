import { tasks, loadTasks, displayTask } from './displayTask.js';

const checkedTask = ({ index, status }) => {
  tasks[index - 1].completed = status;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTask();
};

const completedTasks = () => {
  const uncompletedTodos = tasks.filter((element) => element.completed !== true);
  const newTask = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('tasks', JSON.stringify(newTask));
  loadTasks(newTask);
};

export { checkedTask, completedTasks };