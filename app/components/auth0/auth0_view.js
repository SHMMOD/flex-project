import React, { Component } from 'react';
import {
  AlertIOS,
  AppRegistry,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Auth0 from 'react-native-auth0';
import { auth0Config } from '../../config/config';

const auth0 = new Auth0({
  domain: auth0Config.domain,
  clientId: auth0Config.clientId
});

const ACCESS_TOKEN = 'accessToken';
const ID_TOKEN = 'idToken';

export default class Auth0View extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { currentUserProfile: null };
  }

  componentDidMount() {
  }

  async _onValueChange(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  handleLogin() {
    auth0.webAuth
    .authorize({
      scope: 'openid profile',
      audience: 'https://' + auth0Config.domain + '/userinfo'
    })
    .then(resp => {
      console.log('logged in');
      console.log(resp);
      this._onValueChange(ACCESS_TOKEN, resp[ACCESS_TOKEN]),
      this._onValueChange(ID_TOKEN, resp[ID_TOKEN]),
      AlertIOS.alert(
        "Logged in!"
      );
    })
    .then(async () => {
      try {
        const token = await AsyncStorage.getItem(ID_TOKEN);
        this.props.receiveCurrentUser(token);
        // auth0.auth.userInfo({token: token})
        //   .then(user => {
        //     console.log(user);
        //   });
      } catch(error) {
        console.log('AsyncStorage error: ' + error.message);
      }
    })
  }

  handleLogout() {
    auth0.webAuth.clearSession({})
  }

  renderSplash() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>FlexProject Login</Text>
        <Text>
          You are {'not '}logged in.
        </Text>
        <Button
          onPress={this.handleLogin}
          title={'Log In'}
        />
      </View>
    );
  }
  render() {
    return this.renderSplash();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
