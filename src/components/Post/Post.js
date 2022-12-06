import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import tw from "src/lib/tailwind";
import moment from "moment";

import DefaultProfilePictureSVG from "src/assets/default-profile-picture.svg";
import HeartLikedSVG from "src/assets/heart-liked.svg";
import HeartUnlikedSVG from "src/assets/heart-unliked.svg";
import CommentSVG from "src/assets/comment.svg";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState("false");

  const handleProfileNavigation = () => {
    console.log(
      "Functionality missing, but in theory this would navigate the user to the creator of this post's profile."
    );
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(
      "Functionality missing, however we decided to include the UI to show how we would implement this in theory."
    );
  };

  const handleComment = () => {
    console.log(
      "Functionality missing, but in theory this would navigate the user to a new screen displaying all of the comments for this specific posts, and allow the user to comment as well."
    );
  };

  const formattedTime = moment(post.createdAt).fromNow();

  return (
    <View
      style={tw`border-t border-t-[#3c3c4336] border-b border-b-[#3c3c4336] mb-[16px]`}
    >
      <View style={tw`flex-row py-[16px] px-[16px]`}>
        <TouchableOpacity onPress={handleProfileNavigation}>
          {post.user.profilepicture ? (
            <Image
              style={tw`w-[40px] h-[40px] rounded-full`}
              source={{
                uri: post.user.profilepicture,
              }}
              resizeMode="center"
            />
          ) : (
            <DefaultProfilePictureSVG width="40" height="40" />
          )}
        </TouchableOpacity>
        <View style={tw`flex-1 ml-[12px] justify-center`}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-caption1 font-medium capitalize`}>
              {post.user.firstname} {post.user.lastname}
            </Text>
            <Text style={tw`text-caption2 text-lightGray`}>
              {formattedTime}
            </Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            {post.user.role && (
              <Text style={tw`text-caption2 text-lightGray`}>
                {post.user.role}
                {post.user.company && <Text> at {post.user.company}</Text>}
              </Text>
            )}
          </View>
        </View>
      </View>
      {post.image && (
        <Image
          source={{ uri: post.image }}
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").width,
          }}
        />
      )}
      <View
        style={tw`py-[12px] px-[16px] border-t border-t-lightGray6 border-b border-b-lightGray6`}
      >
        <Text style={tw`text-caption2 text-lightGray`}>{post.caption}</Text>
      </View>
      <View style={tw`flex-row items-center pt-[12px] pb-[16px] px-[16px]`}>
        <TouchableOpacity onPress={handleLike}>
          {isLiked ? <HeartUnlikedSVG /> : <HeartLikedSVG />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment}>
          <CommentSVG style={tw`ml-[12px]`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
