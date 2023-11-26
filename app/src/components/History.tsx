import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  limit,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { capitalize, timestampToStringDate } from "../utils/stringUtils";
import Loading from "./Loading";

interface IGame {
  id: string;
  winner: string;
  currentDate: number;
}

const History = () => {
  const { currentUser } = useAuth();
  const [games, setGames] = useState<IGame[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const gamesRef = collection(db, "games");
    const q = query(
      gamesRef,
      where("user", "==", currentUser.uid),
      orderBy("currentDate", "desc"),
      limit(5)
    );

    try {
      const querySnapshot = await getDocs(q);
      const games = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        currentDate: doc.data().currentDate,
      })) as IGame[];

      setGames(games);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData().finally(() => setLoading(false));
  }, []);
  
  return (
    <div>
      <p>Last 5 Games:</p>
      {loading ? (
        <Loading />
      ) : (
        games.map((game) => (
          <p key={game.id}>{capitalize(game.winner)} - {timestampToStringDate(game.currentDate)}</p>
        ))
      )}
    </div>
  );
};

export default History;