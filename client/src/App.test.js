import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a App with the word Kanban displayed", () => {
  render(<App />);
  expect(screen.getByText("Kanban"));
});
