import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View, Dimensions } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";
import * as AppleAuthentication from "expo-apple-authentication";

import { Button } from "src/components/Button/Button";
import { TextField } from "src/components/TextField/TextField";
import { GoogleButton } from "./components/GoogleButton/GoogleButton";

export const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const screenWidth = Dimensions.get("screen").width;

  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <Text style={tw`text-title1 text-primary font-bold mt-[64px] mx-[16px]`}>
        Welcome Back!
      </Text>
      <Text style={tw`text-body text-lightGray mx-[16px]`}>
        Enter your information below.
      </Text>
      <View style={tw`flex-1 justify-center mx-[16px]`}>
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
      </View>
      <View style={tw`flex-1 justify-end mb-[48px]`}>
        <Button
          containerStyle={tw`mb-[16px]`}
          label="Continue"
          onPress={() => {
            console.log(email, password);
          }}
        />
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={
            AppleAuthentication.AppleAuthenticationButtonType.CONTINUE
          }
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={8}
          style={[{ height: 50 }, tw`mx-[16px]`]}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });
              // signed in
            } catch (e) {
              if (e.code === "ERR_CANCELED") {
                // handle that the user canceled the sign-in flow
              } else {
                // handle other errors
              }
            }
          }}
        />
        <GoogleButton containerStyle={tw`mt-[16px]`} />
        <Text
          style={tw`text-primary text-body text-center mt-[16px]`}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Don't have an account? <Text style={tw`font-semibold`}>Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};