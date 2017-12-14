import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { List, ListItem } from 'react-native-elements';

export default class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
  }

  //hard code userId for now
  componentDidMount(){
    this.props.fetchProjects("5a30b30f22350f0b8531ad94");
    // fetch(`https://facebook.github.io/react-native/movies.json`)
    //   .then(resp => console.log(resp));
  }

  _onPressItem(id) {
    const key = `Project${id}`;
    return () => this.props.navigation.navigate(key);
  }

  render() {
    console.log(this.props.projects)
    if(!this.props.projects.length) return null;
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          this.props.projects.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              onPress={this._onPressItem(l.id)}
            />
          ))
        }
      </List>
    );
  }
}
