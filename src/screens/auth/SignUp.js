import React, { useState } from "react";
import { Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";
import { TextField } from "src/components/TextField/TextField";

import { useSignUp } from "src/hooks/useSignUp";

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const { signUp, error } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordConfirm === password) {
      await signUp(email, password, firstname, lastname);
    }
    if (passwordConfirm != password) {
      setPasswordsMatch(false);
    }
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
        <TextField
          label="First Name"
          containerStyle={tw`mb-[16px]`}
          value={firstname}
          onChangeText={(text) => setfirstname(text)}
        />
        <TextField
          label="Last Name"
          containerStyle={tw`mb-[16px]`}
          value={lastname}
          onChangeText={(text) => setlastname(text)}
        />
        <TextField
          label="Password"
          containerStyle={tw`mb-[16px]`}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextField
          label="Confirm Password"
          containerStyle={tw`mb-[16px]`}
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          secureTextEntry
        />
        {error && (
          <Text style={tw`text-caption1 text-lightRed text-center mt-[8px]`}>
            {error}
          </Text>
        )}
        {!error && !passwordsMatch && (
          <Text style={tw`text-caption1 text-lightRed text-center mt-[8px]`}>
            Passwords do not match.
          </Text>
        )}
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
