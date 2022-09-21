import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "src/screens/auth/Welcome";
import { SignUp } from "src/screens/auth/SignUp";
import { SignIn } from "src/screens/auth/SignIn";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
