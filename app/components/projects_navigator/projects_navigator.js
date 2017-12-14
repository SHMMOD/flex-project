import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import ProjectsIndexContainer from '../projects/projects_index_container';

const data = [{id: 3, title: 'my first project'}, {id: 4, title: 'a second project'}];

const ProjectsScreen = ({ navigation }) => (
  <ProjectsIndexContainer navigation={navigation} data={data} />
);

const ProjectScreen = (project) => {
  return () => (
    <View>
      <Text>{project.title}</Text>
    </View>
  );
};

let navigatorOptions = {
  Projects: {
    screen: ProjectsScreen,
    navigationOptions: {
      headerTitle: 'Projects'
    }
  }
};

data.forEach(project => {
  const stack = {
    screen: ProjectScreen(project),
    navigationOptions: {
      headerTitle: 'Project'
    }
  };
  navigatorOptions[`Project${project.id}`] = stack;
});

const ProjectsNavigator = StackNavigator(navigatorOptions);

export default ProjectsNavigator;
