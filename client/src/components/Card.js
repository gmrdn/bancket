import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: solid 1px #e0e0e0;
  margin: 13px;
  height: 100px;
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
  padding: 0.25em 1em;
  cursor: pointer;
`;

export default function Card(props) {
  return (
    <StyledCard>
      <StyledButton>{props.card.title}</StyledButton>
    </StyledCard>
  );
}
