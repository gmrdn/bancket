import React from "react";
import { render, screen } from "@testing-library/react";
import Kanban from "./Kanban";

test("renders a kanban board with 2 columns", () => {
  render(<Kanban />);
  expect(screen.getByText("Left"));
  expect(screen.getByText("Right"));
});
