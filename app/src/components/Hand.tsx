import React from "react";
import Card from "./Card";
import styled from "styled-components";

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
  <HandContainer>
    <h2>{capitalize(`${type}s hand`)}</h2>

    <HandList>
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
    </HandList>

    <h2>{score}</h2>
  </HandContainer>
);

export default Hand;

const HandContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-top: 20px;
`;

const HandList = styled.div`
  display: flex;
`;
