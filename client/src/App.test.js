import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapper;

describe("update cards", () => {
  beforeEach(() => {
    const initial = [
      {
        id: 11,
        column: 1,
        title: "Card 1",
        position: 1,
      },
      {
        id: 12,
        column: 1,
        title: "Card 2",
        position: 2,
      },
      {
        id: 13,
        column: 1,
        title: "Card 3",
        position: 3,
      },
      {
        id: 14,
        column: 1,
        title: "Card 4",
        position: 4,
      },
      {
        id: 21,
        column: 2,
        title: "Card 5",
        position: 1,
      },
    ];

    wrapper = shallow(<App></App>);
    wrapper.setState({ cards: initial });
  });

  test("same column, middle to one card upper", () => {
    const expected = [
      {
        id: 11,
        column: 1,
        title: "Card 1",
        position: 1,
      },
      {
        id: 12,
        column: 1,
        title: "Card 2",
        position: 3,
      },
      {
        id: 13,
        column: 1,
        title: "Card 3",
        position: 2,
      },
      {
        id: 14,
        column: 1,
        title: "Card 4",
        position: 4,
      },
      {
        id: 21,
        column: 2,
        title: "Card 5",
        position: 1,
      },
    ];
    wrapper.instance().updateCards(13, 1, 2);
    expect(wrapper.state("cards")).toEqual(expected);
  });

  test("Same column, middle to top", () => {
    const expected = [
      {
        id: 11,
        column: 1,
        title: "Card 1",
        position: 2,
      },
      {
        id: 12,
        column: 1,
        title: "Card 2",
        position: 3,
      },
      {
        id: 13,
        column: 1,
        title: "Card 3",
        position: 1,
      },
      {
        id: 14,
        column: 1,
        title: "Card 4",
        position: 4,
      },
      {
        id: 21,
        column: 2,
        title: "Card 5",
        position: 1,
      },
    ];
    wrapper.instance().updateCards(13, 1, 1);
    expect(wrapper.state("cards")).toEqual(expected);
  });

  test("Same column, middle to one card lower", () => {
    const expected = [
      {
        id: 11,
        column: 1,
        title: "Card 1",
        position: 1,
      },
      {
        id: 12,
        column: 1,
        title: "Card 2",
        position: 3,
      },
      {
        id: 13,
        column: 1,
        title: "Card 3",
        position: 2,
      },
      {
        id: 14,
        column: 1,
        title: "Card 4",
        position: 4,
      },
      {
        id: 21,
        column: 2,
        title: "Card 5",
        position: 1,
      },
    ];
    wrapper.instance().updateCards(12, 1, 4);
    expect(wrapper.state("cards")).toEqual(expected);
  });

  test("Same column, middle to bottom", () => {
    const expected = [
      {
        id: 11,
        column: 1,
        title: "Card 1",
        position: 1,
      },
      {
        id: 12,
        column: 1,
        title: "Card 2",
        position: 4,
      },
      {
        id: 13,
        column: 1,
        title: "Card 3",
        position: 2,
      },
      {
        id: 14,
        column: 1,
        title: "Card 4",
        position: 3,
      },
      {
        id: 21,
        column: 2,
        title: "Card 5",
        position: 1,
      },
    ];
    wrapper.instance().updateCards(12, 1, 5);
    expect(wrapper.state("cards")).toEqual(expected);
  });
});
