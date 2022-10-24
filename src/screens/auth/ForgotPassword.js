import React from "react";
import { KeyboardAvoidingView, View, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { TextField } from "src/components/TextField/TextField";
import { Button } from "src/components/Button/Button";

export const ForgotPassword = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <KeyboardAvoidingView style={tw`flex-1`} behavior="padding">
        <Text
          style={tw`text-title1 text-primary font-bold mt-[64px] mx-[16px]`}
        >
          Forgot Password?
        </Text>
        <Text style={tw`text-body text-lightGray mx-[16px]`}>
          Please the email associated with your account below.
        </Text>
        <View style={tw`mx-[16px] mt-[40px]`}>
          <TextField label="Email" containerStyle={tw`mb-[16px]`} />
        </View>
        <View style={tw`flex-1 justify-end`}>
          <Button containerStyle={tw`mb-[24px]`} label="Reset Password" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
