import InputTask from "./components/InputTask/InputTask";
import TaskList from "./components/TaskList/TaskList";
import { useSelector, useDispatch } from "react-redux";
import loadTasksListThunk from "./redux/thunk/loadTasksListThunk";
import { useEffect } from "react";

function App() {
  const todoList = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksListThunk);
  }, [dispatch]);
  return (
    <>
      <main>
        <h1>To-Dos list</h1>
        <InputTask />
        <ul>
          <TaskList todoList={todoList} />
        </ul>
      </main>
    </>
  );
}

export default App;
