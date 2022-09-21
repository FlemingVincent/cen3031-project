import { useContext } from "react";

import { AuthContext } from "src/contexts/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside of an AuthContextProvider");
  }

  return context;
};
