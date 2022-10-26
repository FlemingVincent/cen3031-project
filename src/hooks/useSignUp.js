import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "@env";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signUp = async (email, password, firstname, lastname) => {
    setError(null);

    const response = await fetch(`http://${BASE_URL}:4000/api/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstname, lastname, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      // Update AuthContext
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { signUp, error };
};
