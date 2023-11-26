import React, { useState } from "react";
import Hand from "../components/Hand";

import {
  generateDeck,
  shuffleDeck,
  calculateScore,
  dealInitialHands,
} from "../utils/gameUtils";


export interface IGameState {
  deck: { value: string; suit: string }[];
  playerHand: { value: string; suit: string }[];
  dealerHand: { value: string; suit: string }[];
  result: string;
}

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<IGameState>(() => {
    const deck = shuffleDeck(generateDeck());

    return dealInitialHands(deck);
  });

  const handleHit = () => {
    const newCard = gameState.deck.pop();

    if (newCard) {
      const playerHand = [...gameState.playerHand, newCard];
      const playerScore = calculateScore(playerHand);

      setGameState((prevGameState) => ({
        ...prevGameState,
        deck: gameState.deck,
        playerHand,
        result: playerScore > 21 ? "Player Busts! Dealer Wins!" : playerScore === 21 ? "Player Wins!" : "",
      }));
    }
  };

  const handleStand = () => {
    let dealerHand = gameState.dealerHand;

    while (calculateScore(dealerHand) < 17) {
      const newCard = gameState.deck.pop();
      if (newCard) {
        dealerHand = [...dealerHand, newCard];
      }
    }

    const dealerScore = calculateScore(dealerHand);
    const playerScore = calculateScore(gameState.playerHand);

    let result = "";

    if (dealerScore > 21 || playerScore > dealerScore) {
      result = "Player Wins!";
    } else if (dealerScore > playerScore) {
      result = "Dealer Wins!";
    } else {
      result = "It's a Tie!";
    }

    setGameState((prevGameState) => ({
      ...prevGameState,
      deck: gameState.deck,
      dealerHand,
      result,
    }));
  };
    
  const handleRestart = () => {
    const deck = shuffleDeck(generateDeck());
    setGameState(dealInitialHands(deck));
  };
    
  const isGameOver = gameState.result !== "";

  return (
    <div className="game">
      <h1>Blackjack</h1>

      <Hand
        hand={gameState.playerHand}
        type="player"
        score={`Score: ${calculateScore(gameState.playerHand)}`}
      />
      
      <div className="actions">
        <button onClick={handleHit} disabled={isGameOver}>Hit</button>
        <button onClick={handleStand} disabled={isGameOver}>Stand</button>
        <button onClick={handleRestart}>Restart</button>
      </div>

      <Hand
        hand={gameState.dealerHand}
        type="dealer"
        score={`Score: ${isGameOver ? calculateScore(gameState.dealerHand) : "?"}`}
        isGameOver={isGameOver}
      />

      <div className="result">{gameState.result}</div>
    </div>
  );
};

export default Game;
