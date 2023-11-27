import React from "react";
import Card from "./Card";
import styled from "styled-components";

interface IDeck {
  cards: { value: string; suit: string }[];
}

const Deck: React.FC<IDeck> = ({ cards }) => (
  <DeckContainer>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </DeckContainer>
);

export default Deck;

const DeckContainer = styled.div`
  display: flex;
`;
