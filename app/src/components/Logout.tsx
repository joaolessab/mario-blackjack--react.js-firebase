import React from "react";
import styled from "styled-components";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { ReactComponent as LogoutIcon } from "../assets/images/logout.svg";

const Logout = () => {
  return (
    <LogoutButton onClick={() => signOut(auth)}>
      <LogoutIcon />
    </LogoutButton>
  );
};

export default Logout;

const LogoutButton = styled.button`
  position: absolute;
  right: 10%;
  top: 75px;
  border-radius: 8px;
  border: 0px;
  height: 40px;
  width: 40px;
  transition: all 150ms;
  border: 2px solid black;

  svg {
    width: 25px;
    height: 25px;
    margin-top: 2px;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid #d74b30;

    svg {
      fill: #d74b30;
    }
  }
`;