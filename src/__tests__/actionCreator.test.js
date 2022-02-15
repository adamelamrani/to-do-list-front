import {
  addTasksAction,
  deleteTasksAction,
  loadTasksAction,
  updateTasksAction,
} from "../redux/actions/actionCreator/actionCreator";

describe("Given a loadTask function", () => {
  describe("When it receives a list of tasks", () => {
    test("Then it should return an object with the load-tasks type", () => {
      const tasks = [
        {
          id: 1,
          task: "Walk the dog",
          done: true,
        },
        {
          id: 2,
          task: "Prepare a meal",
          done: false,
        },
      ];
      const expectedOutput = loadTasksAction(tasks);
      const expectecAction = {
        type: "load-tasks",
        tasks: tasks,
      };
      expect(expectedOutput).toEqual(expectecAction);
    });
  });

  test("Then it should return an object with the add-tasks type", () => {
    const tasks = [
      {
        id: 1,
        task: "Walk the dog",
        done: true,
      },
      {
        id: 2,
        task: "Prepare a meal",
        done: false,
      },
    ];
    const expectedOutput = addTasksAction(tasks);
    const expectecAction = {
      type: "add-tasks",
      tasks: tasks,
    };
    expect(expectedOutput).toEqual(expectecAction);
  });

  test("Then it should return an object with the update-tasks type", () => {
    const tasks = [
      {
        id: 1,
        task: "Walk the dog",
        done: true,
      },
      {
        id: 2,
        task: "Prepare a meal",
        done: false,
      },
    ];
    const expectedOutput = updateTasksAction(tasks);
    const expectecAction = {
      type: "update-tasks",
      tasks: tasks,
    };
    expect(expectedOutput).toEqual(expectecAction);
  });

  test("Then it should return an object with the delete-tasks type", () => {
    const id = 1;
    const expectedOutput = deleteTasksAction(id);
    const expectecAction = {
      type: "delete-tasks",
      id: id,
    };
    expect(expectedOutput).toEqual(expectecAction);
  });
});
