import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "src/hooks/useAuthContext";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const Router = () => {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Router;
