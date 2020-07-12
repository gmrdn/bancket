import React from "react";
import Column from "./Column";

const style = {
  border: "solid 1px red",
};

const Kanban = () => {
  return (
    <>
      <div style={style}>Kanban</div>
      <Column position="1" title="Left"></Column>
      <Column position="2" title="Right"></Column>
    </>
  );
};

export default Kanban;
