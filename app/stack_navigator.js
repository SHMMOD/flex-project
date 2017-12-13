import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

const ProjectsScreen = ({ navigation }) => (
  <View >

    <Button
      onPress={() => navigation.navigate('Project')}
      title="Go to project"
    />
  </View>
);

const ProjectScreen = () => (
  <View>
    <Text>Project Details Screen</Text>
  </View>
);

const ProjectsNavigator = StackNavigator({
  Projects: {
    screen: ProjectsScreen,
    navigationOptions: {
      headerTitle: 'Projects',
    },
  },
  Project: {
    screen: ProjectScreen,
    navigationOptions: {
      headerTitle: 'Project',
    },
  },
});

export default ProjectsNavigator;
