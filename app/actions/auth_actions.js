import { AsyncStorage } from 'react-native';
import * as APIUtil from '../utils/auth_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
// export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
// export const RECEIVE_CURRENT_USER_PROFILE = 'RECEIVE_CURRENT_USER_PROFILE';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
//
// export const clearCurrentUser = currentUser => ({
//   type: CLEAR_CURRENT_USER,
//   currentUser : {}
// });
//
// export const receiveCurrentProfile = currentUserProfile => ({
//   type: RECEIVE_CURRENT_USER_PROFILE,
//   currentUserProfile
// });

export const login = () => dispatch => (
  APIUtil.login().then(user => {
    // console.log('logged in');
    // console.log(user);
    //
    //
    //       // If login was successful, set the token in local storage
    //       localStorage.setItem('id_token', user.id_token)
    //       localStorage.setItem('id_token', user.access_token)
    //       // Dispatch the success action
    //       dispatch(receiveLogin(user))
    //
    // dispatch(receiveCurrentUser(user));
  })
  .catch(error => console.log('oh no:', error))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    console.log('logged out')
  )

    // () => dispatch(clearCurrentUser()))
);

// export const getUserProfile = (accessToken) => dispatch => (
//   APIUtil.getUserProfile(accessToken).then(currentUserProfile => dispatch(receiveCurrentProfile(currentUserProfile)))
// );
