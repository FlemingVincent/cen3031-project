import React from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";

export const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 items-center justify-end`}>
        <Text style={tw`text-largeTitle font-bold`}>Welcome</Text>
      </View>
      <View style={tw`flex-1 justify-end`}>
        <Button
          containerStyle={tw`mb-[12px]`}
          label="Sign Up"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        />
        <Button
          containerStyle={tw`mb-[24px]`}
          label="Login"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
      </View>
    </SafeAreaView>
  );
};
