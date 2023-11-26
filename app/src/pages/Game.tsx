import React, { useState, useEffect } from "react";

import {
  generateDeck,
  shuffleDeck,
  calculateScore,
  dealInitialHands,
} from "../utils/gameUtils";
import { generateRandomString } from "../utils/stringUtils";

import Hand from "../components/Hand";
import Logout from "../components/Logout";
import History from "../components/History";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";

export interface IGameState {
  deck: { value: string; suit: string }[];
  playerHand: { value: string; suit: string }[];
  dealerHand: { value: string; suit: string }[];
  resultLabel: string;
  winner: string;
}

const Game: React.FC = () => {
  const { currentUser } = useAuth();

  const [gameState, setGameState] = useState<IGameState>(() => {
    const deck = shuffleDeck(generateDeck());

    return dealInitialHands(deck);
  });

  useEffect(() => {
    if (gameState.winner !== "") {
      saveResult();
    }
  }, [gameState]);

  const handleHit = () => {
    const newCard = gameState.deck.pop();

    if (newCard) {
      const playerHand = [...gameState.playerHand, newCard];
      const playerScore = calculateScore(playerHand);
      const dealerScore = calculateScore(gameState.dealerHand);

      let resultLabel = "";
      let winner = "";

      if (playerScore > 21) {
        resultLabel = "Player Busts! Dealer Wins!";
        winner = "dealer";
      } else if (playerScore === 21 && dealerScore !== 21) {
        resultLabel = "Player Wins!";
        winner = "player";
      } else {
        resultLabel = "";
        winner = "";
      }

      setGameState((prevGameState) => ({
        ...prevGameState,
        deck: gameState.deck,
        playerHand,
        resultLabel,
        winner,
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

    let resultLabel = "";
    let winner = "";

    if (dealerScore > 21 || playerScore > dealerScore) {
      resultLabel = "Player Wins!";
      winner = "player";
    } else if (dealerScore > playerScore) {
      resultLabel = "Dealer Wins!";
      winner = "dealer";
    } else {
      resultLabel = "It's a Tie!";
      winner = "tie";
    }

    setGameState((prevGameState) => ({
      ...prevGameState,
      deck: gameState.deck,
      dealerHand,
      resultLabel,
      winner,
    }));
  };
    
  const handleRestart = () => {
    const deck = shuffleDeck(generateDeck());
    setGameState(dealInitialHands(deck));
  };

  const saveResult = async () => {
    try {
      // Store game in DB
      const gameData = {
        user: currentUser.uid,
        playerHand: gameState.playerHand,
        dealerHand: gameState.dealerHand,
        winner: gameState.winner,
        currentDate: serverTimestamp(),
      };

      await setDoc(doc(db, "games", generateRandomString()), gameData);

      console.log("Successfully saved in");
    } catch (e) {
      console.log("Something went wrong");
    }
  };
    
  const isGameOver = gameState.winner !== "";

  return (
    <div className="game">
      <Logout />
      
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

      <div className="result">{gameState.resultLabel}</div>

      <History />
    </div>
  );
};

export default Game;
