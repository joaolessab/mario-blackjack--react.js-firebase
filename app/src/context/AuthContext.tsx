/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useContext, createContext, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";

import Loading from "../components/Loading";
import Login from "../pages/Login";

import {
  doc,
  serverTimestamp,
  setDoc
} from "firebase/firestore";

const AuthContext = createContext<any | undefined>(undefined);

interface User {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  lastLogin?: any;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        console.log("No user is logged");
        setCurrentUser(null);
        setLoading(false);
        return;
      }
      
      const userData = {
        displayName: user.displayName,
        email: user.email,
        lastLogin: serverTimestamp(),
        photoURL: user.photoURL
      };
      
      try {
        // This function is using native functions and modules from Firebase SDK
        // to save the new User into a new Collection
        // (if there's no User Collection created yet on the Database project)
        await setDoc(doc(db, "users", user.uid), userData);

        // SetUser into our App State and throws it to the AuthContext Provider
        setCurrentUser(user);
      }
      catch (error) {
        console.error("Error saving user data:", error);
        setCurrentUser(null);
      }

      setLoading(false);
    });
  }, []);

  if (loading) { 
    return <Loading />;
  }
  if (!currentUser) {
    return <Login />;
  }
  else {
    return (
      <AuthContext.Provider value={{ currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
};

export const useAuth = () => useContext(AuthContext);