import React from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { List, ListItem } from 'react-native-elements';

export default class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this._onPressItem = this._onPressItem.bind(this);
  }

  _onPressItem(id) {
    const key = `Project${id}`;
    return () => this.props.navigation.navigate(key);
  }

  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
        {
          this.props.data.map((l, i) => (
            <ListItem
              key={i}
              title={l.title}
              onPress={this._onPressItem(l.id)}
            />
          ))
        }
      </List>
    );
  }
}
