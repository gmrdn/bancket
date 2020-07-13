import React, { useContext } from "react";
import Card from "./Card";
import styled from "styled-components";
import Cards from "../KanbanContext";

const StyledColumn = styled.div`
  order: ${(props) => props.position};
  margin: 13px;
  padding: 13px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #fafafa;
  flex-grow: 1;
  flex-direction: column;
  font: 1.2em "Fira Sans", sans-serif;
  box-shadow: 2px 2px 4px 0px #e0e0e0;
`;

const Column = (props) => {
  const { cards, updateCards } = useContext(Cards);

  function onDragOver(ev, col) {
    ev.preventDefault();
    //    console.log(`au dessus colonne ${col.title}`)
  }

  function onDrop(ev, col) {
    console.log(`drop dans la colonne ${col.title}`);
    var data = ev.dataTransfer.getData("id");
    console.log(data);
    // ev.target.appendChild(document.getElementById(data));
    updateCards(data, col);
  }

  return (
    <StyledColumn
      position={props.position}
      onDragOver={(event) => onDragOver(event, props.column)}
      onDrop={(event) => onDrop(event, props.column)}
    >
      {props.column.title}
      {props.cards.map((card) => (
        <Card key={card.position} card={card}></Card>
      ))}
    </StyledColumn>
  );
};

export default Column;
