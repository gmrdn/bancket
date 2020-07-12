import React from "react";

const Column = (props) => {
  return <div className={`col${props.position}`}>{props.title}</div>;
};

export default Column;
