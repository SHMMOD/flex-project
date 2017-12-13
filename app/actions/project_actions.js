import * as ProjectUtil from '../utils/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

//need to add thunk action creators
