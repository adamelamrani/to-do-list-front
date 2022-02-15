const TaskList = ({ todoList, onClickAction }) => {
  return (
    <ul>
      {todoList.map((task) => (
        <li key={task.id} className={task.done === true ? "done" : "false"}>
          <p>Task: {task.task} </p>
          <button
            type="button"
            className="delete-button"
            onClick={onClickAction}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
