import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TaskList from "../components/TaskList/TaskList";
import store from "../redux/store";

describe("Given a TaskList compoent", () => {
  describe("When it's rendered", () => {
    test("Then it should return a list", () => {
      const todos = [
        { id: 1, name: "Adam", task: "to do list" },
        { id: 1, name: "Aida", task: "walk rulo" },
      ];

      render(
        <Provider store={store}>
          <TaskList todos={todos} />{" "}
        </Provider>
      );

      const expectedOutput = screen.getByRole("list");

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
