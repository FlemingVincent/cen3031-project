import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
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
