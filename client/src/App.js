import React from "react";
import Kanban from "./components/Kanban";
import Cards, { cards } from "./KanbanContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateCards = (card_id, new_col) => {
      let newCards = this.state.cards.map((card) => {
        if (card.id == card_id) {
          return { ...card, column: new_col.position };
        }
        return card;
      });

      this.setState({
        cards: newCards,
      });
    };
    this.state = {
      cards: cards,
      updateCards: this.updateCards,
    };
  }

  render() {
    return (
      <Cards.Provider value={this.state}>
        <Kanban></Kanban>
      </Cards.Provider>
    );
  }
}

export default App;
