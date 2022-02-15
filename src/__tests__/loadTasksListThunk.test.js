import {
  deleteTaskThunk,
  loadTasksListThunk,
} from "../redux/thunk/loadTasksListThunk";

describe("Given a load tasks list thunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call the load dispatch", async () => {
      const dispatch = jest.fn();

      await loadTasksListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  test("Then it should call the delete dispatch", async () => {
    const dispatch = jest.fn();
    const task = { id: 1, task: "things" };

    const fakeDelete = deleteTaskThunk(task.id);
    await fakeDelete(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});
