import React from "react";
import styled from "styled-components";

import { ReactComponent as QuestionBlockIcon } from "../assets/images/questionblock.svg";

import CardSuit from "./CardSuit";

interface ICard {
  value: string;
  suit: string;
  show?: boolean;
}

interface ICardValue {
  value: string;
  suit: string;
  suitposition: string;
}

const CardValue = ({ value, suit, suitposition }: ICardValue) => {
  return (
    <CardValueContainer suitposition={suitposition}>
      <CardTextValue>{value}</CardTextValue>
      <CardSuit suit={suit} />
    </CardValueContainer>
  );
};

const Card: React.FC<ICard> = ({ value, suit, show = true }) => (
  <CardContainer show={show}>
    {show ? (
      <>
        <CardValue
          value={value}
          suit={suit}
          suitposition="left"
        />

        <CardValue
          value={value}
          suit={suit}
          suitposition="right"
        />
      </>
    ) : (
      <QuestionBlockIcon height="42px" />
    )}
  </CardContainer>
);

export default Card;

const CardContainer = styled.div<{
  show: boolean;
}>`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  width: 60px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ show }) => show ? "space-between" : "center"};
`;

const CardTextValue = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const CardValueContainer = styled.div<{
  suitposition?: string;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: ${({ suitposition }) => suitposition === "right" && "row-reverse"};
`;