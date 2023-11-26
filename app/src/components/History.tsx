import React, { useState } from "react";

import { db } from "../firebase/firebaseConfig";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { useAuth } from "../context/AuthContext";

interface IGame {
  id: string;
  winner: string;
  timestamp: number;
}

const History = () => {
  const { currentUser } = useAuth();
  const [games, setGames] = useState<IGame[]>([]);

  const gamesRef = collection(db, "games");
  const q = query(gamesRef, where("user", "==", currentUser.uid),orderBy("currentDate", "asc"));

  onSnapshot(q, (querySnapshot: any) => {
    const games = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      timestamp: doc.data().timestamp?.toDate().getTime(),
    })) as IGame[];

    // Limit to the last 5 games
    setGames(games.slice(-5));
  });
  
  return (
    <div>
      <p>Last 5 Games:</p>

      {games.map((game, index) => (
        <p key={index}>{game.winner}</p>
      ))}
    </div>
  );
};

export default History;