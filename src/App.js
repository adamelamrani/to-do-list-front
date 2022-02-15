import InputTask from "./components/InputTask/InputTask";
import TaskList from "./components/TaskList/TaskList";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import {
  deleteTaskThunk,
  loadTasksListThunk,
} from "./redux/thunk/loadTasksListThunk";
import styled from "styled-components";

function App() {
  const StyledMain = styled.main`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
  `;
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
      <StyledMain>
        <h1>To-Dos list</h1>
        <InputTask />
        <ul>
          <TaskList
            todoList={todoList}
            onClickAction={() => deleteDispatch(todoList[0].id)}
          />
        </ul>
      </StyledMain>
    </>
  );
}

export default App;
