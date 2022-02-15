import loadTasksListsThunk from "../../redux/thunk/loadTasksListThunk";
import { useSelector, useDispatch } from "react-redux";
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
        <li key={task.id} className={task.done === true ? "done" : "false"}>
          Task: {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
