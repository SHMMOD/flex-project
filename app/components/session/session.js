import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Button } from 'react-native';

export default class Session extends Component {
  constructor(props) {
    super(props);
    this.handleAuthenticate = this.handleAuthenticate.bind(this);
  }

  handleAuthenticate() {
    this.props.authenticate();
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <Button onPress={this.handleAuthenticate} title="Auth" />
      </View>
    );
  }
}
