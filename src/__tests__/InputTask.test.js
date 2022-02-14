import { render, screen } from "@testing-library/react";
import InputTask from "../components/InputTask/InputTask.js";

describe("Given an InputTask component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the text Introduce a new task", () => {
      const text = /Introduce a new task/i;

      render(<InputTask />);

      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });

  test("Then it should render a button with accesible name 'Submit'", () => {
    const text = /Submit/i;

    render(<InputTask />);

    const expectedText = screen.getByRole("button", { name: text });

    expect(expectedText).toBeInTheDocument();
  });
});
