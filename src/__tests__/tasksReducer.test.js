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
});
