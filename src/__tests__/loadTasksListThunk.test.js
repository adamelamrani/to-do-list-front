import { loadTasksListThunk } from "../redux/thunk/loadTasksListThunk";

describe("Given a load tasks list thunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call a dispatch", async () => {
      const dispatch = jest.fn();

      await loadTasksListThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
