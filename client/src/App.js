import React from "react";
import Kanban from "./components/Kanban";
import Cards, { cards } from "./KanbanContext";

function App() {
  return (
    <Cards.Provider value={cards}>
      <Kanban></Kanban>
    </Cards.Provider>
  );
}

export default App;
