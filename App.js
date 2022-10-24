import React from "react";
import { StatusBar } from "expo-status-bar";

import Router from "src/routes/Router";
import { AuthContextProvider } from "src/contexts/AuthContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
      <StatusBar style="dark" />
    </>
  );
}
