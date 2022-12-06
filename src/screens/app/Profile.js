import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";

import DefaultProfilePictureSVG from "src/assets/default-profile-picture.svg";

import { useAuthContext } from "src/hooks/useAuthContext";
import { getUser } from "src/api/getUser";
import { fetchProfilePosts } from "src/api/fetchProfilePosts";
import Post from "src/components/Post/Post";

export const Profile = ({ navigation }) => {
  const { user } = useAuthContext();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    const data = await getUser(user.userId);
    if (data.error) {
      setError(data.error);
    } else {
      setProfile(data);
    }
  };

  const fetchPosts = async () => {
    const postData = await fetchProfilePosts(user.userId);
    if (postData.error) {
      setError(postData.error);
    } else {
      setPosts(postData);
      // console.log(postData);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      fetchUser();
      fetchPosts();
    });
  }, []);

  const renderItem = ({ item }) => <Post post={item} />;

  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {profile ? (
          <>
            <View style={tw`mt-[16px] px-[16px]`}>
              <Text
                style={tw`text-subheadline text-center font-bold capitalize`}
              >{`${profile.firstname} ${profile.lastname}`}</Text>
              <View style={tw`flex-row justify-between items-center py-[16px]`}>
                {profile.profilepicture ? (
                  <Image
                    style={tw`w-[64px] h-[64px] rounded-full`}
                    source={{
                      uri: `${profile.profilepicture}`,
                    }}
                    resizeMode="cover"
                  />
                ) : (
                  <DefaultProfilePictureSVG />
                )}
                <View style={tw`flex-row`}>
                  <View style={tw`items-center mr-[16px]`}>
                    <Text style={tw`text-subheadline font-semibold`}>0</Text>
                    <Text style={tw`text-subheadline`}>Posts</Text>
                  </View>
                  <TouchableOpacity style={tw`items-center mr-[16px]`}>
                    <Text style={tw`text-subheadline font-semibold`}>
                      {profile.followers ? profile.followers.length : "0"}
                    </Text>
                    <Text style={tw`text-subheadline`}>Followers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={tw`items-center`}>
                    <Text style={tw`text-subheadline font-semibold`}>
                      {profile.following ? profile.following.length : "0"}
                    </Text>
                    <Text style={tw`text-subheadline`}>Following</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {profile.role && (
                <Text style={tw`text-footnote font-semibold`}>
                  {`${profile.role}`}
                  {profile.company && <Text>{` at ${profile.company}`}</Text>}
                </Text>
              )}
              {profile.location && (
                <Text
                  style={tw`text-footnote text-lightGray`}
                >{`${profile.location}`}</Text>
              )}
              {profile.bio && (
                <Text style={tw`text-footnote`}>{`${profile.bio}`}</Text>
              )}
            </View>
            <Button
              label="Settings"
              labelStyle={tw`text-subheadline font-semibold`}
              containerStyle={tw`py-[7px] rounded-[4px] mt-[8px] mb-[16px]`}
              onPress={() =>
                navigation.navigate("Settings", {
                  data: profile,
                })
              }
            />
          </>
        ) : (
          <ActivityIndicator />
        )}
        <View>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
