import React, { useContext, useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import Cards from "../KanbanContext";

const StyledColumn = styled.div`
  order: ${(props) => props.position};
  margin: 13px;
  padding: 13px;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #fafafa;
  flex-grow: 1;
  flex-direction: column;
  font: 1.2em "Fira Sans", sans-serif;
  box-shadow: 2px 2px 4px 0px #e0e0e0;
  // &.over {
  //   background: #fff;
  //   outline: 3px dashed #e0e0e0;
  //   outline-offset: -5px;
  // }
`;

const Column = (props) => {
  const { cards, updateCards } = useContext(Cards);
  const [openPlaceHolder, setOpenPlaceHolder] = useState(true);

  function onDragOver(ev, card) {
    ev.preventDefault();
    // console.log("col onDragOver");
    // ev.target.classList.add("over");
  }

  function onDragEnter(ev, card) {
    ev.preventDefault();
    console.log("col onDragEnter");
    setOpenPlaceHolder(true);

    // ev.target.classList.add("over");
  }
  function onDragExit(ev, card) {
    console.log(`col onDragExit`);
  }

  function onDragLeave(ev, card) {
    ev.preventDefault();
    console.log("col onDragLeave");
    // ev.target.classList.remove("over");
  }

  function onDrop(ev, col) {
    // ev.target.classList.remove("over");
    ev.preventDefault();
    console.log("col onDop");
    var data = ev.dataTransfer.getData("id");
    updateCards(data, col);
    setOpenPlaceHolder(false);
    // ev.dataTransfer.clearData();
  }

  return (
    <StyledColumn
      position={props.position}
      onDragOver={(event) => onDragOver(event, props.column)}
      onDragEnter={(event) => onDragEnter(event, props.column)}
      onDragLeave={(event) => onDragLeave(event, props.column)}
      onDrop={(event) => onDrop(event, props.column)}
    >
      {props.column.title}

      {props.cards.map((card) => (
        <>
          <Card
            key={card.id}
            card={card}
            openPlaceHolder={openPlaceHolder}
          ></Card>
        </>
      ))}
    </StyledColumn>
  );
};

export default Column;
