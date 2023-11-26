import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Logout = () => {
  return (
    <button onClick={() => signOut(auth)}>SAIR</button>
  );
};

export default Logout;