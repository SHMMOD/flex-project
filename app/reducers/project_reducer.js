import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({},action.projects);
    case RECEIVE_PROJECT:
      return merge({}, oldState,{[action.project.id]:action.project});
    case REMOVE_PROJECT:
      let newState = merge({},oldState);
      delete newState[action.project.id];
      return newState;
    default:
      return oldState;
  }
};
