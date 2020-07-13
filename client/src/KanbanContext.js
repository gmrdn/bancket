import React from "react";

export const cards = [
  {
    id: 58764320,
    column: 1,
    title: "Card 1",
    position: 1,
  },
  {
    id: 54329611,
    column: 1,
    title: "Card 2",
    position: 2,
  },
  {
    id: 54928715,
    column: 1,
    title: "Card 3",
    position: 3,
  },
  {
    id: 53928750,
    column: 2,
    title: "Card 4",
    position: 1,
  },
  {
    id: 59238778,
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
