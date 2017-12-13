// todo: decide if this file is needed

import Auth0 from 'react-native-auth0';
const { auth0Config } = require('../config/config');
const auth0 = new Auth0(auth0Config);

export const login = () => (
  auth0.webAuth
  .authorize({
    scope: 'openid profile',
    audience: 'https://' + auth0Config.domain + '/userinfo'
  })
);

export const logout = () => (
  auth0.webAuth.clearSession({})
);

// export const getUserProfile = (accessToken) => (
//   auth0.auth.userInfo({'token': accessToken})
// );
//
// export const saveUserProfile = (currentUserProfile) => (
//   fetch('https://coffeewifi.herokuapp.com/users', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: currentUserProfile,
//    });
// );
