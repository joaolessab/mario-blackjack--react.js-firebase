import React, { useState } from "react";

import { db } from "../firebase/firebaseConfig";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
  limit,
} from "firebase/firestore";

import { useAuth } from "../context/AuthContext";
import { capitalize, timestampToStringDate } from "../utils/stringUtils";

interface IGame {
  id: string;
  winner: string;
  currentDate: number;
}

const History = () => {
  const { currentUser } = useAuth();
  const [games, setGames] = useState<IGame[]>([]);

  const gamesRef = collection(db, "games");
  const q = query(gamesRef, where("user", "==", currentUser.uid),orderBy("currentDate", "desc"), limit(5));

  onSnapshot(q, (querySnapshot: any) => {
    const games = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      currentDate: doc.data().currentDate,
    })) as IGame[];
    console.log(games);
    setGames(games);
  });
  
  return (
    <div>
      <p>Last 5 Games:</p>
      {games.map((game, index) => {
        return (
          <p key={index}>{capitalize(game.winner)} - {timestampToStringDate(game.currentDate)}</p>
        );
      })}
    </div>
  );
};

export default History;