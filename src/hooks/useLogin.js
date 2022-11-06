import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { BASE_URL } from "@env";
import jwt_decode from "jwt-decode";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);

    const response = await fetch(`http://${BASE_URL}:4000/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      // Decode jwt
      const token = json.token;
      const userId = jwt_decode(token);
      json.userId = userId._id;
      // Update AuthContext
      dispatch({ type: "LOGIN", payload: json });
    }
  };

  return { login, error };
};
