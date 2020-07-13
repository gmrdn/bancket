import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import Cards from "../KanbanContext";

const StyledCard = styled.div`
  height: 100px;
  margin-top: 13px;
  display: flex;
  position: relative;
  &.dragged {
    opacity: 0.4;
    background: grey;
  }
  height: ${(props) => (props.open ? "200px" : "100px")};
  transition: height 0.1s ease-out;
  background: #fff;
  outline: 3px dashed #e0e0e0;
  outline-offset: -5px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: solid 1px #e0e0e0;
  background: white;
  box-shadow: 2px 2px 4px 0px #e0e0e0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  alignself: "stretch";
  height: 100px;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledPlaceholder = styled.div`
  width: 100%;
  margin-top: 13px;
  height: ${(props) => (props.open ? "100px" : "0px")};
  background: pink;
  //border: ${(props) => (props.open ? "0px dashed #e0e0e0" : "0px")};
  border-radius: 5px;
  transition: height 2s ease-in-out;
  //transform: scale(1.1);
`;

export default function Card(props) {
  const { cards, updateCards } = useContext(Cards);
  const [open, setOpen] = useState(false);
  const [draggedCard, setDraggedCard] = useState({});

  useEffect(() => {
    console.log("USE EFFECT");
    if (props.openPlaceHolder == false) {
      setOpen(false);
    }

    // setOpen(false);
  });

  function onDrag(ev, card) {
    console.log(`onDrag : dragged card id: ${draggedCard.id}`);
    ev.dataTransfer.setData("id", ev.target.id);
    setDraggedCard(card);
    ev.target.classList.add("dragged");
  }

  function onDrop(ev, card) {
    console.log(`onDrop : dragged card id: ${draggedCard.id}`);
    setOpen(false);
    ev.target.classList.remove("dragged");
    updateCards(draggedCard, card.column);
    setDraggedCard({});
  }

  function onDragOver(ev, card) {
    // setOpen(true);

    if (draggedCard.id == card.id) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  function onDragEnter(ev, card) {
    console.log(`card id: ${card.id}`);
    // console.log(`datatransfer id: ${ev.dataTransfer.getData("id")}`);
    console.log(`onDragEnter: dragged card id: ${draggedCard.id}`);
    if (draggedCard.id == card.id) {
      setOpen(false);
    } else {
      open ? setOpen(false) : setOpen(true);
    }
  }
  function onDragLeave(ev, card) {
    console.log(`onDragLeave: dragged card id: ${draggedCard.id}`);
    setOpen(false);
  }

  function onDragExit(ev, card) {
    console.log(`onDragExit: dragged card id: ${draggedCard.id}`);
    setOpen(false);
  }

  function onDragEnd(ev, card) {
    console.log(`onDragEnd: dragged card id: ${draggedCard.id}`);
    setOpen(false);
    ev.target.classList.remove("dragged");
    updateCards(draggedCard, card.column);
  }

  return (
    <>
      {/* <StyledPlaceholder
        open={open}
        onDragLeave={(event) => onDragLeave(event, props.card)}
        onDragExit={(event) => onDragExit(event, props.card)}
      ></StyledPlaceholder> */}
      <StyledCard
        id={props.card.id}
        draggable="true"
        open={open}
        onDragStart={(event) => onDrag(event, props.card)}
        onDrop={(event) => onDrop(event, props.card)}
        onDragEnd={(event) => onDragEnd(event, props.card)}
        onDragLeave={(event) => onDragLeave(event, props.card)}
        onDragOver={(event) => onDragOver(event, props.card)}
        onDragExit={(event) => onDragExit(event, props.card)}
      >
        <StyledButton onDragOver={(event) => onDragOver(event, props.card)}>
          <span>{props.card.title}</span>
        </StyledButton>
      </StyledCard>
    </>
  );
}
