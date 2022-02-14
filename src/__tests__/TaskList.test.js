import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList/TaskList";

describe("Given a TaskList compoent", () => {
  describe("When it's rendered", () => {
    test("Then it should return a list", () => {
      const todos = [
        { id: 1, name: "Adam", task: "to do list" },
        { id: 1, name: "Aida", task: "walk rulo" },
      ];

      render(<TaskList todos={todos} />);

      const expectedOutput = screen.getByRole("list");

      expect(expectedOutput).toBeInTheDocument();
    });
  });

  test("Then it should render names Adam and Aida", () => {
    const todos = [
      { id: 1, name: /Adam/i, task: "to do list" },
      { id: 2, name: /Aida/i, task: "walk rulo" },
    ];

    render(<TaskList todos={todos} />);

    const expectedNameOne = screen.getByText(todos[0].name);
    const expectedNameTwo = screen.getByText(todos[1].name);
    expect(expectedNameOne).toBeInTheDocument();
    expect(expectedNameTwo).toBeInTheDocument();
  });
});
