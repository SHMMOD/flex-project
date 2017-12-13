// todo: decide if this file is needed

import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/auth_actions';

const _nullUser = Object.freeze({ currentUser: null});

const authReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default authReducer;
