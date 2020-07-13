import React, { useContext } from "react";
import styled from "styled-components";
import Column from "./Column";
import Cards from "../KanbanContext";

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
    title: "Empty",
  },
  {
    position: 4,
    title: "Right",
  },
];

const Kanban = () => {
  const cardsFromContext = useContext(Cards);

  return (
    <>
      <h2>Kanban</h2>
      <StyledKanban>
        {columns.map((column) => {
          return (
            <Column
              key={column.position}
              position={column.position}
              column={column}
              cards={cardsFromContext.filter(
                (card) => card.column == column.position
              )}
            ></Column>
          );
        })}
      </StyledKanban>
    </>
  );
};

export default Kanban;
