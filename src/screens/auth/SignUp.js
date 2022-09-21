import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";
import { TextField } from "src/components/TextField/TextField";

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={tw`flex-1`}>
      <KeyboardAvoidingView style={tw`flex-1`} behavior="padding">
        <Text style={tw`text-title1 font-bold text-center mt-[24px]`}>
          Sign Up
        </Text>
        <View style={tw`flex-1 justify-end mx-[16px]`}>
          <TextField
            label="Email"
            containerStyle={tw`mb-[16px]`}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextField
            label="Password"
            containerStyle={tw`mb-[16px]`}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={tw`flex-1 justify-end`}>
          <Button
            containerStyle={tw`mb-[24px]`}
            label="Sign Up"
            onPress={() => {
              console.log(email, password);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
