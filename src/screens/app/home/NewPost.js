import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "src/components/Button/Button";
import { TextField } from "src/components/TextField/TextField";

import tw from "src/lib/tailwind";

import { useAuthContext } from "src/hooks/useAuthContext";
import { createPost } from "src/api/createPost";

export const NewPost = ({ navigation }) => {
  const { user } = useAuthContext();
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    createPost(user.userId, body);
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
          create new post
        </Text>
        <Text
          style={tw`flex-1 text-subheadline text-primary text-right font-semibold`}
        ></Text>
      </View>
      <View style={tw`flex-1 px-[16px] mt-[8px]`}>
        <TextField
          label="Caption"
          value={body}
          onChangeText={(text) => setBody(text)}
        />
      </View>
      <Button
        label="Create Post"
        containerStyle={tw`mb-[48px]`}
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
};
