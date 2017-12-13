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
  </View>
);

const ProjectScreen = () => (
  <Note/>
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
