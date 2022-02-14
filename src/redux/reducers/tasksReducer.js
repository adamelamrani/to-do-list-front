import actionTypes from "../actions/actionTypes/actionTypes";

const tasksReducer = (currentTasks = [], action = {}) => {
  let newTasks;
  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = [...action.loadTasks];
      break;
    case actionTypes.addTasks:
      newTasks = currentTasks.filter((task) => action.id !== task.id);
      break;
    default:
      newTasks = [...currentTasks];
  }
  return newTasks;
};

export default tasksReducer;
