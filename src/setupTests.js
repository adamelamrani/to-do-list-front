import "@testing-library/jest-dom";

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { server } from "./mocks/server.js";
import store from "./redux/store";
import { Provider } from "react-redux";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
