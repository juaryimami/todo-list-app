import { listTasks } from './initial.js';
// eslint-disable-next-line import/prefer-default-export

export const getDataLocalStorage = () => JSON.parse(localStorage.getItem('TaskData')) || listTasks;

export const setDataLocalStorage = (listTasks) => {
  localStorage.setItem('TaskData', JSON.stringify(listTasks));
};
