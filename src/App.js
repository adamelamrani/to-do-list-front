import InputTask from "./components/InputTask/InputTask";
import TaskList from "./components/TaskList/TaskList";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import {
  deleteTaskThunk,
  loadTasksListThunk,
} from "./redux/thunk/loadTasksListThunk";

function App() {
  const todoList = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();
  const deleteDispatch = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  useEffect(() => {
    dispatch(loadTasksListThunk);
  }, [dispatch]);

  return (
    <>
      <main>
        <h1>To-Dos list</h1>
        <InputTask />
        <ul>
          <TaskList
            todoList={todoList}
            onClickAction={() => deleteDispatch(todoList[0].id)}
          />
        </ul>
      </main>
    </>
  );
}

export default App;
