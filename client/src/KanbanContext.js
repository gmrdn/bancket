import React from "react";

export const cards = [
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

const Cards = React.createContext({
  cards: cards,
  updateCards: () => {},
});

export default Cards;
