import React from "react";
import { render, screen } from "@testing-library/react";
import Column from "./Column";

test("renders a column with cards in it", () => {
  const cards = [
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
  ];
  render(<Column cards={cards} />);
  expect(screen.getByText("Card 1"));
  expect(screen.getByText("Card 3"));
});
