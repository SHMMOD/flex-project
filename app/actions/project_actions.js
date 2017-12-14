import { fetchUserProjects, fetchSingleProject } from '../utils/project_api_util';

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


export const fetchProjects = userId => dispatch => {
  return fetchUserProjects(userId).then(resp => {
    // console.log(JSON.parse(projects._bodyText))
    resp.json().then(obj => {
      console.log(obj);
      dispatch(receiveProjects(obj));
    });
  });
};


export const fetchProject = id => dispatch => {
  return fetchSingleProject(id).then(project => dispatch(receiveProject(project)))
}
//need to add thunk action creators
