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
      const card_moving = this.state.cards.find((card) => card_id == card.id);

      // remove card moving (all cards below card moving position go up)

      // insert card moving (all cards below new position go down)

      let newCards = this.state.cards.map((card) => {
        let newCard = {};

        if (card.id == card_id) {
          if (card_moving.position < new_position) {
            return { ...card, column: new_col, position: new_position - 1 };
          } else {
            return { ...card, column: new_col, position: new_position };
          }
        } else {
          if (this.same_col(card, new_col)) {
            if (
              card.position > card_moving.position &&
              card.position > new_position
            ) {
              return card;
            }

            // si en dessous de depart mais au dessus darrivee, remonte de 1

            if (
              card.position > card_moving.position &&
              card.position < new_position
            ) {
              return { ...card, position: card.position - 1 };
            }

            // si au dessus de depart et darrivee rien ne change
            if (
              card.position < card_moving.position &&
              card.position < new_position
            ) {
              return card;
            }

            // si au dessus de depart mais en dessous darrivee, on descend de 1
            if (
              card.position < card_moving.position &&
              card.position >= new_position
            ) {
              return { ...card, position: card.position + 1 };
            }
          }
        }

        // ni meme carte ni meme colonne
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

  is_moving(card, card_moving) {
    return card.id == card_moving.id;
  }

  same_col(card, new_col) {
    return card.column == new_col;
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
