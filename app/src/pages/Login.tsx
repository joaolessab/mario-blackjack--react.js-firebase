import React from "react";
import styled from "styled-components";

import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import ColoredText from "components/ColoredText";
import MadeByJoao from "components/MadeByJoao";

const Login = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(function (result) {
      if (result.user) {
        console.log("Signed in as:", result.user.displayName);
        location.reload();

      }
      else {                
        console.log("User not found!");
      }
    }).catch(function (error) {
      console.error("Error signing in:", error);
    });
  };
  
  return (
    <LoginContainer>
      <TextContainer>
        <ColoredText text="MARIO" size={100} />
        <ColoredText text="BLACKJACK" size={100} />
      </TextContainer>

      <LoginButton onClick={loginWithGoogle}>
        <h2>Login with Google</h2>
      </LoginButton>
      
      <MadeByJoao />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 150ms;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const LoginButton = styled.button`
  border-radius: 8px;
  font-size: 14px;
  border: 2px solid black;
  padding: 0 20px 0 20px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid #ffd315;

    h2 {
      color: #ffd315;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;

  h1 {
    margin-top: 10px;
  }

  @media (max-width: 670px) {
    h1 {
      font-size: 70px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 60px;
    }
  }

  @media (max-width: 340px) {
    h1 {
      font-size: 50px;
    }
  }
`;