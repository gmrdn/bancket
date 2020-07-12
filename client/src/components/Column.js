import React from "react";
import styled from "styled-components";

const StyledColumn = styled.div`
  border: solid 1px blue;
  order: ${(props) => props.position};
  flex-grow: 1;
  flex-direction: column;
`;

const Column = (props) => {
  return <StyledColumn position={props.position}>{props.title}</StyledColumn>;
};

export default Column;
