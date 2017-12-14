import React from 'react';
import { connect } from 'react-redux';
import {values} from 'lodash';
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import ProjectsIndex from './projects_index';

const mapStateToProps = state => ({
  projects: Object.values(state.entities.projects)
});


const mapDispatchToProps = dispatch => ({
  fetchProjects: (userId) => dispatch(fetchProjects(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);
