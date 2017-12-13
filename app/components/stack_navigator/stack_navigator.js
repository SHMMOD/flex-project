import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Note from '../note/note_show';

//iterate through projects, create a button for each one that will
const ProjectsScreen = ({ navigation }) => (
  <View >

    <Button
      onPress={() => navigation.navigate('Project')}
      title="Go to project"
      style={{color:'red'}}
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
