const InputTask = () => {
  return (
    <>
      <label htmlFor="task">Introduce a new task:</label>
      <input type="text" name="task" placeholder="To do..." required></input>
      <button type="submit" className="input-button">
        Submit
      </button>
    </>
  );
};

export default InputTask;
