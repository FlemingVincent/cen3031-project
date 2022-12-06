import React from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";

import BackgroundLogoSVG from "src/assets/background-logo.svg";
import LogoSVG from "src/assets/logo.svg";

export const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <BackgroundLogoSVG style={tw`absolute`} />
      <View style={tw`flex-1`}>
        <Text
          style={tw`text-largeTitle font-bold text-primary mt-[64px] mx-[16px] w-1/2`}
        >
          Welcome to Inven <LogoSVG />
        </Text>
        <Text style={tw`text-body font-bold mt-[36px] mx-[24px] w-1/2`}>
          A networking app to build a better future.
        </Text>
      </View>
      <View style={tw`flex-1 justify-end`}>
        <Button
          containerStyle={tw`mb-[24px]`}
          label="Continue"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
      </View>
    </SafeAreaView>
  );
};
