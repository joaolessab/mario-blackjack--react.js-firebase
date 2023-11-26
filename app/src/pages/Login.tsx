import React from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

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
    <div>
      <button onClick={loginWithGoogle}>LOGIN</button>
    </div>
  );
};

export default Login;