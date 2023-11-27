import React from "react";
import styled from "styled-components";

interface ICard {
  value: string;
  suit: string;
  show?: boolean;
}

const Card: React.FC<ICard> = ({ value, suit, show = true }) => (
  <CardContainer>
    {show ? (
      <>
        <CardValue>{value}</CardValue>
        <CardSuit>{suit}</CardSuit>
      </>
    ) : (
      <CardBack>Test</CardBack>
    )}
  </CardContainer>
);

export default Card;

const CardContainer = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  width: 60px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CardValue = styled.span`
  font-size: 16px;
`;

const CardSuit = styled.span`
  font-size: 20x;
`;

const CardBack = styled.span`
  background-color: red;
`;