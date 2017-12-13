import * as ProjectUtil from '../utils/project_api_util';

export const RECEIVE_CURRENT_PROJECT = 'RECEIVE_CURRENT_PROJECT';
export const RECEIVE_CURRENT_PROJECTS = 'RECEIVE_CURRENT_PROEJCTS';


const receiveProject = (project) => ({
  type: RECEIVE_CURRENT_PROJECT,
  project
});

const receiveProjects = projects => ({
  type: RECEIVE_CURRENT_PROJECTS,
  projects
});

//need to add thunk action creators 
