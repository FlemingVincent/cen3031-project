import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";
import { TextField } from "src/components/TextField/TextField";

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <Text style={tw`text-title1 text-primary font-bold mt-[64px] mx-[16px]`}>
        Let's get started!
      </Text>
      <Text style={tw`text-body text-lightGray mx-[16px]`}>
        Enter your information below.
      </Text>
      <View style={tw`mx-[16px] mt-[40px]`}>
        <TextField
          label="Email"
          containerStyle={tw`mb-[16px]`}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextField label="Full Name" containerStyle={tw`mb-[16px]`} />
        <TextField
          label="Password"
          containerStyle={tw`mb-[16px]`}
          secureTextEntry
          // value={password}
          // onChangeText={(text) => setPassword(text)}
        />
        <TextField
          label="Confirm Password"
          containerStyle={tw`mb-[16px]`}
          secureTextEntry
        />
      </View>
      <View style={tw`flex-1 justify-end`}>
        <Button
          containerStyle={tw`mb-[24px]`}
          label="Sign Up"
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};
