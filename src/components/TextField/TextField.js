import React from "react";
import { View, Text, TextInput } from "react-native";

import tw from "src/lib/tailwind";

export const TextField = ({
  containerStyle,
  label,
  labelStyle,
  textInputContainerStyle,
  ...TextInputProps
}) => {
  return (
    <View style={[tw`flex`, containerStyle]}>
      <Text style={[tw`text-subheadline mb-[8px]`, labelStyle]}>{label}:</Text>
      <TextInput
        style={[
          tw`bg-[#76768012] text-subheadline font-semibold px-[8px] py-[14px] rounded-[14px]`,
          textInputContainerStyle,
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        {...TextInputProps}
      />
    </View>
  );
};
