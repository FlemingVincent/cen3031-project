import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

const Router = () => {
  const isSignedIn = false;

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {isSignedIn ? <AppNavigator /> : <AuthNavigator />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Router;
