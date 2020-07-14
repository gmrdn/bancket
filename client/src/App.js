import React from "react";
import Kanban from "./components/Kanban";
import Cards, { cards } from "./KanbanContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateCards = (card_id, new_col, new_position) => {
      console.log(
        `update cards with card id ${card_id}, new col : ${new_col}, new position ${new_position}`
      );
      let newCards = this.state.cards.map((card) => {
        if (card.id == card_id) {
          console.log("maj carte deplacée");
          return { ...card, column: new_col, position: new_position };
        } else {
          if (card.column == new_col) {
            console.log("maj cartes de la même colonne");
            if (card.position >= new_position) {
              console.log("maj cartes position sup ou egale");
              return { ...card, position: card.position + 1 };
            }
          }
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
