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
    id: 58813679,
    column: 1,
    title: "Bob",
    position: 4,
  },
  {
    id: 81637911,
    column: 1,
    title: "John",
    position: 5,
  },
  {
    id: 20981715,
    column: 1,
    title: "Paul",
    position: 6,
  },
  {
    id: 57698320,
    column: 1,
    title: "Yoko",
    position: 7,
  },
  {
    id: 56476789,
    column: 1,
    title: "Geoges",
    position: 8,
  },
  {
    id: 89098765,
    column: 1,
    title: "Ringo",
    position: 9,
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
