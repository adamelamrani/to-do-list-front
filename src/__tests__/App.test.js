import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux/store";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should display a 'To-dos list' title", () => {
      render(
        <Provider store={store}>
          <App />{" "}
        </Provider>
      );
      const title = /To-dos list/i;

      const expectedOutput = screen.getByRole("heading", {
        name: title,
      });

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
