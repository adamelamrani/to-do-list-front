import tasks from "../../resources/tasks";

const TaskList = () => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          Task: {task.task}, Done by: {task.name}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
