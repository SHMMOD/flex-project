import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
import ProjectsNavigator from './stack_navigator';

const ProjectsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ProjectsNavigator/>
  </View>
);

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
  Projects: {
    screen: ProjectsScreen,
    navigationOptions: {
      tabBarLabel: 'Projects',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Files: {
    screen: FilesScreen,
    navigationOptions: {
      tabBarLabel: 'Files',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-leaf' : 'ios-leaf-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
});

export default RootTabs;
