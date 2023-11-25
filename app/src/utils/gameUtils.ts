import { IGameState } from "../components/Game";

export const generateDeck = (): { value: string; suit: string }[] => {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const suits = ["hearts", "diamonds", "clubs", "spades"];

  const deck: { value: string; suit: string }[] = [];

  // Generating all possible cards
  for (const suit of suits) {
    for (const value of values) {
      deck.push({ value, suit });
    }
  }

  return deck;
};

export const shuffleDeck = (deck: { value: string; suit: string }[]): { value: string; suit: string }[] => {
  let currentIndex = deck.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--; // Decreasing index until it matches 0 (initial state)

    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }

  return deck;
};

export const calculateScore = (hand: { value: string; suit: string }[]): number => {
  let score = 0;
  let aceCount = 0;

  for (const card of hand) {
    // Special validation for A's
    if (card.value === "A") {
      aceCount++;
      score += 11;
    }
    // Special validations for K, Q, J
    else if (["K", "Q", "J"].includes(card.value)) {
      score += 10;
    } else {
      score += parseInt(card.value, 10);
    }
  }

  while (aceCount > 0 && score > 21) {
    // If both conditions are true, it means the total score is too high.
    // And there's at least one Ace in the hand.

    // In this case, I adjust the score by subtracting 10 points.
    // This is because I assumed the Ace to be worth 11 points initially,
    // and I need to reduce its value to 1 point to avoid busting.
    score -= 10;

    // Decreasing here the count of Aces, since I have adjusted the value of one Ace.
    aceCount--;
  }

  return score;
};

export const dealInitialHands = (shuffledDeck: { value: string; suit: string }[]): IGameState => {
  const playerHand = [shuffledDeck.pop()!, shuffledDeck.pop()!];
  const dealerHand = [shuffledDeck.pop()!, shuffledDeck.pop()!];

  return {
    deck: shuffledDeck,
    playerHand,
    dealerHand,
    result: "",
  };
};
