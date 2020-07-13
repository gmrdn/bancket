import React, { useState } from "react";
import styled from "styled-components";

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
`;

export default function Card(props) {
  const [open, setOpen] = useState(false);

  function onDrag(ev, card) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.target.classList.add("dragged");
  }

  function onDrop(ev) {
    ev.target.classList.remove("dragged");
    setOpen(false);
    console.log("position : " + ev.dataTransfer.getData("position"));
  }

  function onDragOver(ev, card) {
    // setOpen(true);
    // ev.dataTransfer.setData("position", card.position);
  }

  function onDragEnter(ev, card) {
    open ? setOpen(false) : setOpen(true);
  }
  function onDragLeave(ev, card) {
    setOpen(false);
  }

  function onDragExit(ev, card) {
    setOpen(false);
  }

  function onDragEnd(ev, card) {
    setOpen(false);
    ev.target.classList.remove("dragged");
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
        onDrop={(event) => onDrop(event)}
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
