import React from "react";

import { ReactComponent as MarioIcon } from "../assets/images/supermario.svg";
import { ReactComponent as LuigiIcon } from "../assets/images/luigi.svg";
import { ReactComponent as WaluigiIcon } from "../assets/images/waluigi.svg";
import { ReactComponent as Mushrooms } from "../assets/images/mushrooms.svg";

const CardSuit: React.FC<{ suit: string }> = ({ suit }) => {
  const suitMap = {
    hearts: <MarioIcon height="30px" />,
    diamonds: <LuigiIcon height="30px" />,
    clubs: <WaluigiIcon height="30px" />,
  };

  return suitMap[suit] || <Mushrooms height="30px" />;
};

export default CardSuit;