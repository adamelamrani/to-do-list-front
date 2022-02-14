import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a 'To-dos list' title", () => {
      render(<App />);
      const title = /To-dos list/i;

      const expectedOutput = screen.getByRole("heading", {
        name: title,
      });

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
