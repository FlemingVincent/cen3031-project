import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";

import { useLogOut } from "src/hooks/useLogOut";

export const Profile = () => {
  const { logout } = useLogOut();

  handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={tw`flex-1 justify-center bg-[#fafafa]`}>
      <Button label="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};
