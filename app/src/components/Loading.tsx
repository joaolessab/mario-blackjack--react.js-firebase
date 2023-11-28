import React from "react";
import styled from "styled-components";

import { ReactComponent as MarioIcon } from "../assets/images/mario.svg";
import ColoredText from "./ColoredText";

const Loading = () => {
  return (
    <LoadContainer>
      <MarioIcon height="200px" />
      <ColoredText text="Loading..." />
    </LoadContainer>
  );
};

export default Loading;

const LoadContainer = styled.div`
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;