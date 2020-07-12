import React from "react";
import styled from "styled-components";
import Column from "./Column";

const StyledKanban = styled.div`
  background: #eeeeee;
  display: flex;
  flex-flow: center;
  height: 600px;
`;

const columns = [
  {
    position: 1,
    title: "Left",
  },
  {
    position: 2,
    title: "Middle",
  },
  {
    position: 3,
    title: "Right",
  },
];

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
  {
    column: 2,
    title: "Card 4",
    position: 1,
  },
  {
    column: 3,
    title: "Card 5",
    position: 1,
  },
];

const Kanban = () => {
  return (
    <>
      <h2>Kanban</h2>
      <StyledKanban>
        {columns.map((column) => {
          return (
            <Column
              key={column.position}
              position={column.position}
              title={column.title}
              cards={cards.filter((card) => card.column == column.position)}
            ></Column>
          );
        })}
      </StyledKanban>
    </>
  );
};

export default Kanban;
