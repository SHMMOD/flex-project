import { RECEIVE_RECORDING, RECEIVE_RECORDINGS, REMOVE_RECORDING } from '../actions/recording_actions';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RECORDINGS:
      return merge({},action.recordings);
    case RECEIVE_RECORDING:
      return merge({}, oldState,{[action.recording.id]:action.recording});
    case REMOVE_RECORDING:
      let newState = merge({},oldState);
      delete newState[action.recording.id];
      return newState;
    default:
      return oldState;
  }
};
