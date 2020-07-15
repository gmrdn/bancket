import React from "react";
import Kanban from "./components/Kanban";
import Cards, { cards } from "./KanbanContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateCards = (card_id, new_col, new_position) => {
      const card_moving = this.state.cards.find((card) => card_id == card.id);

      let newCards = this.state.cards.map((card) => {
        if (card.id == card_id) {
          if (new_position == "$") {
            const highest_position = this.highestPosition(new_col);
            return { ...card, column: new_col, position: highest_position + 1 };
          }
          if (
            card_moving.position < new_position &&
            card_moving.column == new_col
          ) {
            return { ...card, column: new_col, position: new_position - 1 };
          } else {
            return { ...card, column: new_col, position: new_position };
          }
        } else {
          if (this.card_in_origin_and_dest_column(card, card_moving, new_col)) {
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
          } else {
            // not in dest column but in origin column
            if (this.card_in_origin_column(card, card_moving)) {
              if (card.position < card_moving.position) {
                return card;
              } else {
                return { ...card, position: card.position - 1 };
              }
            }
            if (this.card_in_destination_col(card, new_col)) {
              if (card.position >= new_position) {
                return { ...card, position: card.position + 1 };
              }
            }

            // not in dest column and not in origin column (not concerned)
            return card;
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

  highestPosition(new_col) {
    return Math.max(
      ...this.state.cards.map((o) => (o.column == new_col ? o.position : 0)),
      0
    );
  }

  card_in_origin_and_dest_column(card, card_moving, new_col) {
    return (
      this.card_in_origin_column(card, card_moving) &&
      this.card_in_destination_col(card, new_col)
    );
  }

  card_in_origin_column(card, card_moving) {
    return card.column == card_moving.column;
  }

  is_moving(card, card_moving) {
    return card.id == card_moving.id;
  }

  card_in_destination_col(card, new_col) {
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
