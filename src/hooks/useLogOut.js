import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
