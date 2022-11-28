import React from "react";
import { ScrollView, View, TouchableOpacity, Text } from "react-native";

import tw from "src/lib/tailwind";

import Post from "src/components/Post/Post";

import LogoSVG from "src/assets/logo.svg";
import PlusSquareSVG from "src/assets/plus-square.svg";

export const Home = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-[#fafafa] pt-[63px]`}>
      <ScrollView>
        <View
          style={tw`flex-row items-center justify-between px-[16px] py-[16px]`}
        >
          <LogoSVG />
          <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
            <PlusSquareSVG />
          </TouchableOpacity>
        </View>
        <Post />
      </ScrollView>
    </View>
  );
};
