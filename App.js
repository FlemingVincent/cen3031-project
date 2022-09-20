import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import tw from 'src/lib/tailwind';

export default function App() {
  return (
    <View style={tw`flex-1 bg-[#fff] items-center justify-center`}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// This is how React Native styles screens, think of the stylesheet as a .css file.
// Instead we are going to use Tailwind, look at the View above to see how I am styling the same way.

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
