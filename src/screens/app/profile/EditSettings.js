import React, { useState } from "react";
import { View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { TextField } from "src/components/TextField/TextField";

export const EditSettings = ({ navigation, route }) => {
  const { header, userId, data } = route.params;

  const [newData, setNewData] = useState("");

  const handleSubmit = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <View
        style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
      >
        <Text
          style={tw`flex-1 text-subheadline text-lightRed font-semibold`}
          onPress={() => navigation.goBack()}
        >
          Cancel
        </Text>
        <Text
          style={tw`flex-1 text-subheadline text-center font-semibold capitalize`}
        >
          {header}
        </Text>
        <Text
          style={tw`flex-1 text-subheadline text-primary text-right font-semibold`}
          onPress={handleSubmit}
        >
          Save
        </Text>
      </View>
      {header === "password" ? (
        <View style={tw`px-[16px] mt-[16px]`}>
          <TextField
            label="Current Password"
            containerStyle={tw`mb-[16px]`}
            secureTextEntry
          />
          <TextField
            label="New Password"
            containerStyle={tw`mb-[16px]`}
            secureTextEntry
          />
          <TextField label="Confirm New Password" secureTextEntry />
        </View>
      ) : (
        <TextField
          label={`${header}`}
          containerStyle={tw`mt-[16px] px-[16px]`}
          placeholder={data}
          value={newData}
          onChangeText={(text) => setNewData(text)}
        />
      )}
    </SafeAreaView>
  );
};
