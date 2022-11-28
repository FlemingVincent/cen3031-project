import React from "react";
import { View, Text, Image } from "react-native";

import tw from "src/lib/tailwind";

import DefaultProfilePictureSVG from "src/assets/default-profile-picture.svg";
import HeartLikedSVG from "src/assets/heart-liked.svg";
import HeartUnlikedSVG from "src/assets/heart-unliked.svg";
import CommentSVG from "src/assets/comment.svg";

const Post = ({
  profilepicture,
  firstname = "Test",
  lastname = "Post",
  role = "Testing",
  company = "University of Florida",
  image,
  caption = "This is a test post.",
  liked,
  likes = ["user1", "user2", "user3"],
}) => {
  return (
    <View
      style={tw`px-[16px] border-t border-t-[#3c3c4336] border-b border-b-[#3c3c4336] mb-[16px]`}
    >
      <View style={tw`flex-row py-[16px]`}>
        {profilepicture ? (
          <Image
            style={tw`w-[40px] h-[40px] rounded-full`}
            source={{
              uri: `${profilepicture}`,
            }}
            resizeMode="center"
          />
        ) : (
          <DefaultProfilePictureSVG width="40" height="40" />
        )}
        <View style={tw`flex-1 ml-[12px] justify-center`}>
          <Text
            style={tw`text-caption1 font-medium`}
          >{`${firstname} ${lastname}`}</Text>
          <View style={tw`flex-row justify-between`}>
            {role && (
              <Text style={tw`text-caption2 text-lightGray`}>
                {`${role}`}
                {company && <Text>{` at ${company}`}</Text>}
              </Text>
            )}
            <Text style={tw`text-caption2 text-lightGray`}>2 hours</Text>
          </View>
        </View>
      </View>
      <View
        style={tw`py-[12px] border-t border-t-lightGray6 border-b border-b-lightGray6`}
      >
        <Text style={tw`text-caption2 text-lightGray`}>{`${caption}`}</Text>
      </View>
      <View style={tw`flex-row items-center pt-[12px] pb-[16px] `}>
        {liked ? <HeartLikedSVG /> : <HeartUnlikedSVG />}
        <CommentSVG style={tw`ml-[12px]`} />
      </View>
    </View>
  );
};

export default Post;
