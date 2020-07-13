import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: solid 1px #e0e0e0;
  height: 100px;
  margin-top: 13px;
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #e0e0e0;
  display: flex;
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

export default function Card(props) {
  function drag(ev, card) {
    console.log(`dragging card ${card.title}`);
    ev.dataTransfer.setData("id", ev.target.id);
  }

  function dragOver(ev, card) {
    // console.log(`over card ${card.title}`);
  }
  return (
    <StyledCard
      id={props.card.id}
      draggable="true"
      onDragStart={(event) => drag(event, props.card)}
      onDragOver={(event) => dragOver(event, props.card)}
    >
      <StyledButton>{props.card.title}</StyledButton>
    </StyledCard>
  );
}
