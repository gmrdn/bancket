import React from "react";
import Card from "./Card";
import styled from "styled-components";

const StyledColumn = styled.div`
  order: ${(props) => props.position};
  margin: 13px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background: #fafafa;
  flex-grow: 1;
  flex-direction: column;
  font: 1.2em "Fira Sans", sans-serif;
  box-shadow: 2px 2px 4px 0px #e0e0e0;
`;

const Column = (props) => {
  return (
    <StyledColumn position={props.position}>
      {props.title}
      {props.cards.map((card) => (
        <Card key={card.position} card={card}></Card>
      ))}
    </StyledColumn>
  );
};

export default Column;
