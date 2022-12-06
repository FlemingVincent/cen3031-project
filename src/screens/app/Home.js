import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
} from "react-native";

import tw from "src/lib/tailwind";

import Post from "src/components/Post/Post";

import LogoSVG from "src/assets/logo.svg";
import PlusSquareSVG from "src/assets/plus-square.svg";

import { useAuthContext } from "src/hooks/useAuthContext";
import { fetchPosts } from "src/api/fetchPosts";

export const Home = ({ navigation }) => {
  const { user } = useAuthContext();
  const [feed, setFeed] = useState(null);
  const [error, setError] = useState("");

  const fetchFeed = async () => {
    const data = await fetchPosts(user.userId);
    if (data.error) {
      setError(data.error);
    } else {
      setFeed(data);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const renderItem = ({ item }) => <Post post={item} />;

  return (
    <View style={tw`flex-1 bg-[#fafafa] pt-[63px]`}>
      <View
        style={tw`flex-row items-center justify-between px-[16px] py-[16px]`}
      >
        <LogoSVG />
        <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
          <PlusSquareSVG />
        </TouchableOpacity>
      </View>
      <FlatList
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};
