import { RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE } from '../actions/note_actions';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NOTES:
      return merge({},action.notes);
    case RECEIVE_NOTE:
      return merge({}, oldState,{[action.note.id]:action.note});
    case REMOVE_NOTE:
      let newState = merge({},oldState);
      delete newState[action.note.id];
      return newState;
    default:
      return oldState;
  }
};
