import React from "react";
import styled from "styled-components";

import { ReactComponent as GithubIcon } from "../assets/images/github.svg";

const MadeByJoao: React.FC = () => {
  const redirectToGit = () => { 
    window.open("https://github.com/joaolessab", "_blank");
  };

  return (
    <MadeContainer onClick={redirectToGit}>
      <GithubIcon height={40}/>
      <div>
        <Subtext>made by</Subtext>
        <Text>João Vitor Lessa</Text>
      </div>
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
  top: 50px;
  right: 0;
  padding: 10px 10px 10px 5px;
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  background-color: #373737;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  color: white;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
`;

const Subtext = styled.p`
  color: white;
  font-size: 12px;
  margin: 0;
`;