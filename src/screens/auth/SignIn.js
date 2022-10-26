import React, { useState } from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";
import { TextField } from "src/components/TextField/TextField";

import { useLogin } from "src/hooks/useLogin";

export const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <Text style={tw`text-title1 text-primary font-bold mt-[64px] mx-[16px]`}>
        Welcome Back!
      </Text>
      <Text style={tw`text-body text-lightGray mx-[16px]`}>
        Enter your information below.
      </Text>
      <View style={tw`flex-1 mx-[16px] mt-[40px]`}>
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
        <Text
          style={tw`text-subheadline text-primary text-right font-semibold`}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password?
        </Text>
        {error && (
          <Text style={tw`text-caption1 text-lightRed text-center mt-[8px]`}>
            {error}
          </Text>
        )}
      </View>
      <View style={tw`flex-1 justify-end mb-[48px]`}>
        <Button
          containerStyle={tw`mb-[16px]`}
          label="Continue"
          onPress={handleSubmit}
        />
        <Text
          style={tw`text-primary text-body font-semibold text-center mt-[8px]`}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Don't have an account? Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};
