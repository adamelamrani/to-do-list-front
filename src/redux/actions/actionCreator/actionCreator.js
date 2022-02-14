import actionTypes from "../actionTypes/actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const addTasksAction = (tasks) => ({
  type: actionTypes.addTasks,
  tasks,
});

export const updateTasksAction = (tasks) => ({
  type: actionTypes.updateTasks,
  tasks,
});

export const deleteTasksAction = (tasks) => ({
  type: actionTypes.deleteTasks,
  tasks,
});
