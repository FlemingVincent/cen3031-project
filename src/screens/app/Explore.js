import React from "react";
import { Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

export const Explore = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <Text>Explore</Text>
    </SafeAreaView>
  );
};
