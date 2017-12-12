import React from 'react';
import { StyleSheet, View } from 'react-native';
// import SessionContainer from './session/session_container';
import Auth0ViewContainer from './auth0/auth0_view_container';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Auth0ViewContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
