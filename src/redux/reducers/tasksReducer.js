import actionTypes from "../actions/actionTypes/actionTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.tasks];
      break;
    case actionTypes.addTasks:
      newTasks = [...currentTasks, ...action.tasks];
      break;
    case actionTypes.deleteTasks:
      newTasks = currentTasks.filter((task) => action.id !== task.id);
      break;
    default:
      newTasks = [...currentTasks];
  }
  return newTasks;
};

export default tasksReducer;
