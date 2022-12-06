import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import tw from "src/lib/tailwind";

import DefaultProfilePictureSVG from "src/assets/default-profile-picture.svg";

import { useAuthContext } from "src/hooks/useAuthContext";
import { followUser } from "src/api/followUser";

const SearchUser = ({ data }) => {
  const { user } = useAuthContext();
  const [following, setFollowing] = useState(true);

  const handleFollow = () => {
    setFollowing(!following);
    followUser(user.userId, data._id);
  };

  return (
    <View
      style={tw`flex flex-row items-center border-t border-t-[#3c3c4336] border-b border-b-[#3c3c4336] mb-[16px] py-[8px] px-[8px]`}
    >
      {data.profilepicture ? (
        <Image
          style={tw`w-[40px] h-[40px] rounded-full`}
          source={{
            uri: data.profilepicture,
          }}
          resizeMode="center"
        />
      ) : (
        <DefaultProfilePictureSVG width="40" height="40" />
      )}
      <View style={tw`flex-1 flex-row items-center justify-between`}>
        <View style={tw`ml-[12px]`}>
          <Text style={tw`text-caption1 font-medium capitalize`}>
            {data.firstname} {data.lastname}
          </Text>
          {data.role && (
            <Text style={tw`text-caption2 text-lightGray`}>
              {data.role} {data.company && <Text>at {data.company}</Text>}
            </Text>
          )}
        </View>
        <TouchableOpacity
          style={tw`bg-primary py-[8px] px-[16px] rounded-[8px]`}
          onPress={handleFollow}
        >
          {following ? (
            <Text style={tw`text-footnote font-semibold text-white`}>
              Follow
            </Text>
          ) : (
            <Text style={tw`text-footnote font-semibold text-white`}>
              Unfollow
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchUser;
