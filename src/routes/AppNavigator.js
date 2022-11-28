import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeFocusedSVG from "src/assets/home-focused.svg";
import HomeUnfocusedSVG from "src/assets/home-unfocused.svg";
import ExploreFocusedSVG from "src/assets/explore-focused.svg";
import ExploreUnfocusedSVG from "src/assets/explore-unfocused.svg";
import ActivityFocusedSVG from "src/assets/activity-focused.svg";
import ActivityUnfocusedSVG from "src/assets/activity-unfocused.svg";
import ProfileFocusedSVG from "src/assets/profile-focused.svg";
import ProfileUnfocusedSVG from "src/assets/profile-unfocused.svg";

import { Home } from "src/screens/app/Home";
import { Explore } from "src/screens/app/Explore";
import { Activity } from "src/screens/app/Activity";
import { Profile } from "src/screens/app/Profile";
import { Settings } from "src/screens/app/profile/Settings";
import { EditSettings } from "src/screens/app/profile/EditSettings";
import NewPost from "src/screens/app/home/NewPost";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditSettings" component={EditSettings} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { color: "#000" },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeFocusedSVG /> : <HomeUnfocusedSVG />,
        }}
      />
      <Tabs.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ExploreFocusedSVG /> : <ExploreUnfocusedSVG />,
        }}
      />
      <Tabs.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ActivityFocusedSVG /> : <ActivityUnfocusedSVG />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileFocusedSVG /> : <ProfileUnfocusedSVG />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
