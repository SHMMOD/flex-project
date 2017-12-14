import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Note from './note/note_show';

const ProjectsScreen = ({ navigation }) => (
  <View >

    <Button
      onPress={() => navigation.navigate('Project')}
      title="Go to project"
    />
    <Button
      onPress={() => navigation.navigate('AnotherScreen')}
      title="Go to Another screen"
    />

  </View>
);

const ProjectScreen = () => (
  <Note/>

);

const AnotherScreen = () => (
<Text>Hello</Text>
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
  AnotherScreen: {
    screen: AnotherScreen,
    navigationOptions: {
      headerTitle: 'Another Screen',
    },
  },
});

export default ProjectsNavigator;
