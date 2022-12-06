import React, { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import MagnifyingGlassSVG from "src/assets/magnifying-glass.svg";
import SearchUser from "src/components/SearchUser/SearchUser";
import { getAllUsers } from "src/api/getAllUsers";

export const Explore = () => {
  const [users, setUsers] = useState(null);
  const renderItem = ({ item }) => <SearchUser data={item} />;

  const getUsers = async () => {
    const users = await getAllUsers();
    if (users.error) {
      console.log(users.error);
    } else {
      setUsers(users);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <Text
        style={tw`text-largeTitle text-primary font-bold px-[16px] mt-[16px]`}
      >
        Explore
      </Text>
      <View
        style={tw`flex flex-row mx-[16px] bg-[#76768012] rounded-[10px] px-[8px] py-[7px] mt-[8px] items-center`}
      >
        <MagnifyingGlassSVG />
        <TextInput style={tw`flex-1 pl-[6px] text-body`} placeholder="Search" />
      </View>
      <View style={tw`flex-1 px-[16px] py-[16px]`}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};
