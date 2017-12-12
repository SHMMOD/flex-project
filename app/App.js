import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2



const IndexScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Projects Screen</Text>
  </View>
);

// const HomeScreen = () => (
//   const home = "Home Screen";
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//   </View>
// );

const FilesScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Files Screen</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Favorites Screen</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: IndexScreen,
    navigationOptions: {
      tabBarLabel: 'Projects'

    },
  },
  Profile: {
    screen: FilesScreen,
    navigationOptions: {
      tabBarLabel: 'All Files'

    },
  },
  Saturday: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites'

    },
  }
});

export default RootTabs;
