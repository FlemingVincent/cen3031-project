import React, { useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import { Button } from "src/components/Button/Button";

import { useLogOut } from "src/hooks/useLogOut";
import { deleteUser } from "src/api/deleteUser";

import DefaultProfilePictureSVG from "src/assets/default-profile-picture.svg";
import ChevronRightSVG from "src/assets/chevron-right.svg";

export const Settings = ({ navigation, route }) => {
  const { data } = route.params;
  const { logout } = useLogOut();

  const handleLogout = () => {
    logout();
  };

  const handleAccountDeletion = () =>
    Alert.alert(
      "Are you sure?",
      "Once your account has been deleted, you will not be able to access it again.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            deleteUser(data._id);
            logout();
          },
          style: "destructive",
        },
      ]
    );

  return (
    <SafeAreaView style={tw`flex-1 bg-[#fafafa]`}>
      <View
        style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
      >
        <Text
          style={tw`flex-1 text-subheadline font-semibold`}
          onPress={() => navigation.goBack()}
        >
          Back
        </Text>
        <Text style={tw`flex-1 text-subheadline text-center font-semibold`}>
          {`${data.firstname}`} {`${data.lastname}`}
        </Text>
        <Text
          style={tw`flex-1 text-subheadline text-primary text-right font-semibold`}
          onPress={handleLogout}
        >
          Logout
        </Text>
      </View>
      <View style={tw`items-center py-[16px] border-b border-b-lightGray6`}>
        {data.profilepicture ? (
          <Image
            style={tw`w-[64px] h-[64px] rounded-full`}
            source={{
              uri: `${data.profilepicture}`,
            }}
          />
        ) : (
          <DefaultProfilePictureSVG />
        )}
        <Text
          style={tw`text-footnote text-primary mt-[16px] font-semibold opacity-50`}
          // onPress={pickImage}
          onPress={() =>
            console.log(
              "Still need to work on this. Everything else is functional, just not refreshing. If you logout and log back in it shows changes."
            )
          }
        >
          Edit profile picture
        </Text>
      </View>
      <View style={tw`flex-1`}>
        <TouchableOpacity
          style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
          onPress={() =>
            navigation.navigate("EditSettings", {
              header: "email",
              userId: data._id,
              data: data.email,
            })
          }
        >
          <Text style={tw`flex-1 text-callout`}>Email</Text>
          <Text style={tw`flex-1 text-callout text-right`} numberOfLines={1}>
            {`${data.email}`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
          onPress={() =>
            navigation.navigate("EditSettings", {
              header: "role",
              userId: data._id,
              data: data.role,
            })
          }
        >
          <Text style={tw`flex-1 text-callout`}>Role</Text>
          {data.role && (
            <Text style={tw`flex-1 text-callout text-right`} numberOfLines={1}>
              {`${data.role}`}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
          onPress={() =>
            navigation.navigate("EditSettings", {
              header: "company",
              userId: data._id,
              data: data.company,
            })
          }
        >
          <Text style={tw`flex-1 text-callout`}>Company</Text>
          {data.company && (
            <Text style={tw`flex-1 text-callout text-right`} numberOfLines={1}>
              {`${data.company}`}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
          onPress={() =>
            navigation.navigate("EditSettings", {
              header: "location",
              userId: data._id,
              data: data.location,
            })
          }
        >
          <Text style={tw`flex-1 text-callout`}>Location</Text>
          {data.location && (
            <Text style={tw`flex-1 text-callout text-right`} numberOfLines={1}>
              {`${data.location}`}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6`}
          onPress={() =>
            navigation.navigate("EditSettings", {
              header: "bio",
              userId: data._id,
              data: data.bio,
            })
          }
        >
          <Text style={tw`flex-1 text-callout`}>Bio</Text>
          {data.bio && (
            <Text style={tw`flex-1 text-callout text-right`} numberOfLines={1}>
              {`${data.bio}`}
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row px-[16px] py-[16px] border-b border-b-lightGray6 opacity-50`}
          // onPress={() =>
          //   navigation.navigate("EditSettings", { header: "password" })
          // }
          onPress={() =>
            console.log(
              "Still need to work on this. Everything else is functional, just not refreshing. If you logout and log back in it shows changes."
            )
          }
        >
          <Text style={tw`flex-1 text-callout`}>Change Password</Text>
          <ChevronRightSVG />
        </TouchableOpacity>
      </View>
      <View>
        <Button
          containerStyle={tw`bg-lightRed mb-[48px]`}
          label="Delete Account"
          onPress={handleAccountDeletion}
        />
      </View>
    </SafeAreaView>
  );
};
