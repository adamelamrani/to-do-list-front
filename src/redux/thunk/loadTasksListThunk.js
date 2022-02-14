import { loadTasksAction } from "../actions/actionCreator/actionCreator";

const loadTasksListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasksList = await response.json();

  dispatch(loadTasksAction(tasksList));
};

export default loadTasksListThunk;
