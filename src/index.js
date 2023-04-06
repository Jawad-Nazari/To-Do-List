import './style.css';
import {
  displayTask, addTask, editTask, deleteTask,
} from './modules/displayTask.js';

const tasksList = document.getElementById('myTasksList');
const newTask = document.getElementById('input');
const submit = document.getElementById('submit');

newTask.addEventListener('keypress', (e) => {
  addTask(e);
});

submit.addEventListener('click', () => {
  addTask('clicked');
});

tasksList.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'deleteTask') {
    deleteTask(li.index);
    event.target.parentElement.remove();
  }
});

tasksList.addEventListener('keypress', (event) => {
  const taskToEdit = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  const index = li.id;
  if (taskToEdit === 'edit') {
    editTask(index, event);
  }
});

document.addEventListener('DOMContentLoaded', displayTask());