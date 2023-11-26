import React from "react";
import { AuthProvider } from "./context/AuthContext";

import Game from "./pages/Game";

const App: React.FC = () => (
  <AuthProvider>
    <Game />
  </AuthProvider>
);

export default App;
