import {
  deleteTasksAction,
  loadTasksAction,
} from "../actions/actionCreator/actionCreator";

export const loadTasksListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasksList = await response.json();

  dispatch(loadTasksAction(tasksList));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteTasksAction(id));
  }
};
