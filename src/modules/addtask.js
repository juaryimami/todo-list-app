import Task from './task.js';

export const inputTask = document.querySelector('.input-task');
export const addTask = (tasks, input) => {
  const newTask = new Task(input.value, false, tasks.length);
  tasks.push(newTask);
};