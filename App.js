import React from "react";

import Router from "src/routes/Router";
import { AuthContextProvider } from "src/contexts/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}
