import React from "react";
import Card from "./Card";

interface IDeck {
  cards: { value: string; suit: string }[];
}

const Deck: React.FC<IDeck> = ({ cards }) => (
  <div className="deck">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default Deck;
