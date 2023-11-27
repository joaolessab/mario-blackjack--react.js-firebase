import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./GlobalStyles";
import Game from "./pages/Game";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <Game />
    </AuthProvider>
  </>
);

export default App;
