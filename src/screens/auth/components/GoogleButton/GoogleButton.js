import React from "react";
import { Text, TouchableOpacity } from "react-native";

import tw from "src/lib/tailwind";

import GoogleLogoSVG from "src/assets/GoogleLogo.svg"

export const GoogleButton = ({
  containerStyle,
  ...TouchableOpacityProps
}) => {
  return (
    <TouchableOpacity
      style={[
        tw`bg-[#fff] rounded-[8px] py-[14px] mx-[16px] flex-row justify-center items-center h-[50px]`,
        containerStyle,
      ]}
      {...TouchableOpacityProps}
    >
      <GoogleLogoSVG style={tw`mr-[10px]`}/>
      <Text
        style={tw`text-body text-[#80868b] text-center font-semibold`}
      >
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
};