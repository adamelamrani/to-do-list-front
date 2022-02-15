import styled from "styled-components";

const TaskList = ({ todoList, onClickAction }) => {
  const StyledLi = styled.li`
    .done {
      text-decoration: line-through;
    }
  `;
  return (
    <ul>
      {todoList.map((task) => (
        <StyledLi key={task.id}>
          <p className={task.done === true ? "done" : "false"}>
            Task: {task.task}{" "}
          </p>
          <button
            type="button"
            className="delete-button"
            key={task.id}
            onClick={onClickAction}
          >
            Remove
          </button>
        </StyledLi>
      ))}
    </ul>
  );
};

export default TaskList;
