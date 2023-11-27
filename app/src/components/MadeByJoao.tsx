import React from "react";
import styled from "styled-components";

import { ReactComponent as GithubIcon } from "../assets/images/github.svg";

const MadeByJoao: React.FC = () => {
  const redirectToGit = () => { 
    window.open("https://github.com/joaolessab", "_blank");
  };

  return (
    <MadeContainer onClick={redirectToGit}>
      <GithubIcon></GithubIcon>
      <p>made by João Vitor Lessa</p>
    </MadeContainer>
  );
};

export default MadeByJoao;

const MadeContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  top: 30px;
  right: 0;
  padding: 10px;
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  background-color: #373737;

  &:hover {
    cursor: pointer;
  }

  p {
    color: white;
  }
`;