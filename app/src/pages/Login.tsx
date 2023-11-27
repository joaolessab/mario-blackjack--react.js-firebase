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
      <ColoredText text="MARIO" size={100} />
      <ColoredText text="BLACKJACK" size={100} />

      <LoginButton onClick={loginWithGoogle}>Login with Google</LoginButton>
      
      <MadeByJoao />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  margin: -20px;
`;

const LoginButton = styled.button`
  border-radius: 8px;
  padding: 20px;
  font-size: 14px;
`;