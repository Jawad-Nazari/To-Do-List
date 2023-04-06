import displayTask from './modules/displayTask.js';
import './style.css';

const taskListContainer = document.getElementById('mytasklist');

const tasks = [
  { description: 'Second Task', completed: false, index: 2 },
  { description: 'Third Task', completed: true, index: 3 },
  { description: 'First Task', completed: false, index: 1 },
];

const taskSortedByIndex = tasks.sort((a, b) => a.index - b.index);

displayTask(taskSortedByIndex, taskListContainer);