import React from "react";
import { render, screen } from "@testing-library/react";
import Kanban from "./Kanban";
import Cards from "../KanbanContext";

test("renders a kanban board with 2 columns", () => {
  let mockContext = [
    {
      column: 1,
      title: "Card 1",
      position: 1,
    },
    {
      column: 1,
      title: "Card 2",
      position: 2,
    },
    {
      column: 1,
      title: "Card 3",
      position: 3,
    },
    {
      column: 2,
      title: "Card 4",
      position: 1,
    },
    {
      column: 4,
      title: "Card 5",
      position: 1,
    },
  ];

  render(
    <Cards.Provider value={mockContext}>
      <Kanban />
    </Cards.Provider>
  );
  expect(screen.getByText("Left"));
  expect(screen.getByText("Right"));
});
