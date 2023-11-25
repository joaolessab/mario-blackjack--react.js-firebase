import React from "react";

interface ICard {
  value: string;
  suit: string;
  show?: boolean;
}

const Card: React.FC<ICard> = ({ value, suit, show = true }) => (
  <div className={`card ${suit.toLowerCase()} ${show ? "show" : "hide"}`}>
    {show ? (
      <>
        <span className="card-value">{value}</span>
        <span className="card-suit">{suit}</span>
      </>
    ) : (
      <div className="card-back"></div>
    )}
  </div>
);

export default Card;
