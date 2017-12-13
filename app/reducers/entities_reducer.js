import React from 'react';
import {combineReducers} from 'redux';
import projectReducer from './project_reducer';



export default combineReducers({
  projects: projectReducer
});
