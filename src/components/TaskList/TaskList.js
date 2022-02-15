import loadTasksListsThunk from "../../redux/thunk/loadTasksListThunk";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const TaskList = () => {
  const todoList = useSelector((state) => state.tasksList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksListsThunk);
  }, [dispatch]);
  return (
    <ul>
      {todoList.map((task) => (
        <li key={task.id}>
          Task: {task.task}, Done by: {task.name}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
