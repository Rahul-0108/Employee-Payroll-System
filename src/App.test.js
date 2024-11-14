// This is just a demonstration of Snapshot test and React test Library

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "./App";

describe("App.tsx Test", () => { // groups tests
  test("renders EmployeeUI Component", () => {
    jest.mock("./EmployeeUI", () => () => "EmployeeUI");
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.clearAllMocks();
  });
  test("Employee Money System is rendered from EmployeeUI Component", () => {
    render(<App />);
    expect(screen.queryByText("Employee Money System")).toBeInTheDocument();
  });
});
