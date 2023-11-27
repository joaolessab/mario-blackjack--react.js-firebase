import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ReactComponent as CoinIcon } from "../assets/images/coin.svg";

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

interface IHistory { 
  isGameOver: boolean;
}

interface IGame {
  id: string;
  winner: string;
  currentDate: number;
}

const History: React.FC<IHistory> = ({ isGameOver }) => {
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
  }, [isGameOver]);
  
  return (
    <HistoryContainer>
      <h2>Last 5 Games:</h2>
      {loading ? (
        <Loading />
      ) : (
        games.map((game) => (
          <div key={game.id}>
            <WinnerLine>
              <CoinIcon />
              <TextContainer>
                <WinnerText>{capitalize(game.winner)}</WinnerText>
                <DateText>{timestampToStringDate(game.currentDate)}</DateText>
              </TextContainer>
            </WinnerLine>
           
          </div>
        ))
      )}
    </HistoryContainer>
  );
};

export default History;

const HistoryContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 40px;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  z-index: 2;
  background-color: white;
`;

const WinnerLine = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  margin-left: -13px;
`;

const DateText = styled.p`
  font-size: 12px;
  margin-top: -10px;
`;

const WinnerText = styled.p`
  font-weight: 700;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;