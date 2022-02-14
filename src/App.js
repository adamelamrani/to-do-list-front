import InputTask from "./components/InputTask/InputTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <main>
        <h1>To-Dos list</h1>
        <InputTask />
        <ul>
          <TaskList />
        </ul>
      </main>
    </>
  );
}

export default App;
