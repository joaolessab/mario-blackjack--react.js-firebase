import React from "react";
import Card from "./Card";
import { capitalize } from "../utils/stringUtils";

interface IHand {
  hand: { value: string; suit: string }[];
  type: string;
  score: string | number;
  isGameOver?: boolean;
}

const Hand: React.FC<IHand> = ({
  hand,
  type,
  score,
  isGameOver,
}) => (
  <div className="dealer-hand">
    <h2>{capitalize(`${type} hand`)}</h2>

    <div className="hand">
      {hand.map((card, index) => (
        <React.Fragment key={index}>
          {type === "player" ? (
            <Card {...card} show />
          ) : (
            // Show the first card face up, and others face down
            // Show all dealer's cards if the game is over
            <Card {...card} show={index === 0 || isGameOver} />
          )}
        </React.Fragment>
      ))}
    </div>

    <p>{score}</p>
  </div>
);

export default Hand;
