import React, { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import tw from "src/lib/tailwind";

import MagnifyingGlassSVG from "src/assets/magnifying-glass.svg";
import SearchUser from "src/components/SearchUser/SearchUser";
import { getAllUsers } from "src/api/getAllUsers";

// const tabTitles = {
//   People: "People",
//   Threads: "Threads",
// };

const DATA = [
  {
    id: "63692955122fdaae4a33b983",
    firstname: "Kevin",
    lastname: "Ochoa",
    profilepicture: "",
    role: "Student",
    company: "UF",
  },
  {
    id: "6384cd0a2bff47b9ccee59e2",
    firstname: "Aaron",
    lastname: "Bermudez",
    profilepicture: "",
    role: "",
    company: "",
  },
];
// const dataX = Object.keys(tabTitles).map((i) => ({
//   key: i,
//   title: i,
//   tab: tabTitles[i],
// }));
// const Tab = ({ item }) => {
//   return (
//     <View>
//       <Text>{item.title}</Text>
//     </View>
//   );
// };

// const Tabs = ({ dataX, scrollX }) => {
//   return (
//     <View style={tw`flex items-center absolute: bottom-165`}>
//       <View style={tw`justify-evenly flex flex-row`}>
//         {dataX.map((item) => {
//           return <Tab key={item.key} item={item} />;
//         })}
//       </View>
//     </View>
//   );
// };

export const Explore = () => {
  const [users, setUsers] = useState(null);
  const renderItem = ({ item }) => <SearchUser data={item} />;
  // const scrollX = React.useRef(new Animated.Value(0)).current;

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
      {/* <Tabs scrollX={scrollX} dataX={dataX} /> */}
    </SafeAreaView>
  );
};
