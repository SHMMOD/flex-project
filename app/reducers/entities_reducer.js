import React from 'react';
import {combineReducers} from 'redux';
import projectReducer from './project_reducer';
import notesReducer from './notes_reducer';
import recordingsReducer from './recordings_reducer';

export default combineReducers({
  projects: projectReducer,
  notes: notesReducer,
  recordings:recordingsReducer
});
