import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import tasksReducer from "../reducers/tasksReducer";

const store = createStore(
  tasksReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
