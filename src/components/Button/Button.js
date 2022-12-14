import React from "react";
import { Text, TouchableOpacity } from "react-native";

import tw from "src/lib/tailwind";

export const Button = ({
  containerStyle,
  label,
  labelStyle,
  ...TouchableOpacityProps
}) => {
  return (
    <TouchableOpacity
      style={[
        tw`bg-primary rounded-[8px] py-[14px] mx-[16px]`,
        containerStyle,
      ]}
      {...TouchableOpacityProps}
    >
      <Text
        style={[tw`text-body text-white text-center font-semibold`, labelStyle]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
