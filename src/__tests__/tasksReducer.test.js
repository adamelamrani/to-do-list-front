import tasksReducer from "../redux/reducers/tasksReducer";

describe("Given a tasks reducer function", () => {
  describe("When it receives an action with action type load", () => {
    test("Then it should return a new tasks with updated state", () => {
      const currentTasks = [];
      const tasks = [
        {
          id: 1,
          name: "Adam",
          task: "Create a to-dos",
          done: false,
        },
        {
          id: 2,
          name: "Aida",
          task: "to-dos",
          done: true,
        },
      ];

      const action = {
        type: "load-tasks",
        tasks: tasks,
      };

      const expectedOutput = tasksReducer(currentTasks, action);
      expect(expectedOutput).toEqual(tasks);
    });
  });

  describe("When it receives an action with type add and id 100", () => {
    test("Then it should return the object with id 100 in it", () => {
      const tasks = [
        { id: 100, name: "Rulo", task: "Sleep and play", done: true },
      ];

      const action = {
        type: "add-tasks",
        tasks: tasks,
      };
      const currentTasks = [];
      const expectedOutput = [
        {
          id: 100,
          name: "Rulo",
          task: "Sleep and play",
          done: true,
        },
      ];

      const reducer = tasksReducer(currentTasks, action);
      expect(reducer).toEqual(expectedOutput);
    });
  });

  describe("When it doesn't receive any action nor state", () => {
    test("Then it should return an empty array", () => {
      const tasks = [];
      const action = {};

      const reducer = tasksReducer(tasks, action);

      expect(reducer).toEqual([]);
    });
  });
});
