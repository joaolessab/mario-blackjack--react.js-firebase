import React from "react";

import styled from "styled-components";

interface ColoredTextProps {
  handleHit: () => void;
  handleStand: () => void;
  handleRestart: () => void;
  isGameOver: boolean;
}

const Actions: React.FC<ColoredTextProps> = ({ handleHit, handleStand, handleRestart, isGameOver }) => {
  return (
    <ActionsContainer>
      <ActionButtons onClick={handleHit} disabled={isGameOver}>
        <h2>HIT</h2>
      </ActionButtons>

      <ActionButtons onClick={handleStand} disabled={isGameOver}>
        <h2>STAND</h2>
      </ActionButtons>

      <ActionButtons onClick={handleRestart}>
        <h2>RESTART</h2>
      </ActionButtons>
    </ActionsContainer>
  );
};

export default Actions;

const ActionsContainer = styled.div`
  margin: 30px 0 30px;
  display: flex;
  gap: 20px;
`;

const ActionButtons = styled.button`
  border-radius: 8px;
  height: 40px;
  border: 2px solid black;
  width: 150px;
  background-color: transparent;
  transition: all 150ms;

  h2 {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid #ffd315;

    h2 {
      color: #ffd315;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    border: 2px solid black;

    h2 {
      color: black;
    }
  }
`;