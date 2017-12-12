import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
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

// export default class Auth0View extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { accessToken: null };
//   }
//
//   _onLogin = () => {
//     console.log('heyy');
//     auth0.webAuth
//       .authorize({
//         scope: 'openid profile',
//         audience: 'https://' + auth0Config.domain + '/userinfo'
//       })
//       .then(credentials => {
//         console.log('hello');
//         console.log(credentials);
//         Alert.alert(
//           'Success',
//           'AccessToken: ' + credentials.accessToken,
//           [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
//           { cancelable: false }
//         );
//         this.setState({ accessToken: credentials.accessToken });
//       })
//       .catch(error => console.log('oh no:', error));
//   };
//
//   _onLogout = () => {
//     if (Platform.OS === 'android') {
//       this.setState({ accessToken: null });
//     } else {
//       auth0.webAuth
//         .clearSession({})
//         .then(success => {
//           this.setState({ accessToken: null });
//         })
//         .catch(error => console.log(error));
//     }
//   };
//
//   render() {
//     let loggedIn = this.state.accessToken === null ? false : true;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.header}>Auth0 - Login</Text>
//         <Text>
//           You are {loggedIn ? '' : 'not '}logged in.
//         </Text>
//         <Button
//           onPress={loggedIn ? this._onLogout : this._onLogin}
//           title={loggedIn ? 'Log Out' : 'Log In'}
//         />
//       </View>
//     );
//   }
// }

export default class Auth0View extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { currentUserProfile: null };
  }

  componentDidMount() {
    //getting access token for user if it exists in keychain
    // SInfo.getItem('currentUser', {
    //   sharedPreferencesName: 'accessToken',
    //   keychainService: 'com.rootuser.coffeewifi'
    //   }).then(accessToken => {
    //     // debugger;
    //     console.log(accessToken);
    //       if (accessToken) {
    //         this.props.getUserProfile(accessToken)
    //         .then(currentUserProfile => {
    //           this.setState({ currentUserProfile: currentUserProfile.currentUserProfile });
    //           //SAVE currentUserProfile.currentUserProfile object
    //           SessionAPIUtil.saveUserProfile(currentUserProfile.currentUserProfile)
    //           }
    //         );
    //       }
    //   });
  }

  handleLogin() {
    this.props.login().then(action => {
      // this.setState({currentUser :  action.currentUser});
      console.log(action);
      // SInfo.setItem('currentUser', action.currentUser.accessToken, {
      //   sharedPreferencesName: 'accessToken',
      //   keychainService: 'com.rootuser.coffeewifi'
      // });
      // this.props.getUserProfile(action.currentUser.accessToken)
      // .then(currentUserProfile => {
      //   this.setState({ currentUserProfile: currentUserProfile.currentUserProfile });
      //   }
      // );
    });
  }

  handleLogout() {
    this.props.logout().then(currentUser => {}
    //   this.setState({currentUser: currentUser, currentUserProfile: null});
    // }).then(() =>
    //   SInfo.setItem('currentUser', null, {
    //     sharedPreferencesName: 'accessToken',
    //     keychainService: 'com.rootuser.coffeewifi'
    //   })
    );
  }

  renderSplash() {
    // let loggedIn = this.props.loggedIn;
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
    // let loggedIn = this.props.loggedIn;
    // if (loggedIn) {
    //   return <MapViewContainer />;
    // }
    // else  {
    // }
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

// AppRegistry.registerComponent('Auth0View', () => Auth0View);
