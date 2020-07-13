import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Cards from "../KanbanContext";

const StyledCard = styled.div`
  border: solid 1px #e0e0e0;
  height: 100px;
  margin-top: 13px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #e0e0e0;
  display: flex;
  cursor: pointer;
  position: relative;
  &.dragged {
    opacity: 0.4;
    background: grey;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  alignself: "stretch";
  height: 100%;
  width: 100%;
  font-size: 1em;
  cursor: pointer;
`;

const StyledPlaceholder = styled.div`
  width: 100%;
  margin-top: 13px;
  height: ${(props) => (props.open ? "100px" : "0px")};
  background: none;
  border: ${(props) => (props.open ? "2px dashed #e0e0e0" : "0px")};
  border-radius: 5px;
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
    // ev.dataTransfer.setData("position", card.position);
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
      <StyledPlaceholder
        open={open}
        onDragLeave={(event) => onDragLeave(event, props.card)}
        onDragExit={(event) => onDragExit(event, props.card)}
      ></StyledPlaceholder>
      <StyledCard
        id={props.card.id}
        draggable="true"
        onDragStart={(event) => onDrag(event, props.card)}
        onDrop={(event) => onDrop(event, props.card)}
        onDragEnter={(event) => onDragEnter(event, props.card)}
        onDragEnd={(event) => onDragEnd(event, props.card)}
      >
        <StyledButton>
          <span>{props.card.title}</span>
        </StyledButton>
      </StyledCard>
    </>
  );
}
