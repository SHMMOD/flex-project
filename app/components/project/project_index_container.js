import React from 'react';
import { connect } from 'react-redux';
import {values} from 'lodash';
import { fetchProjects, fetchProject } from '../../actions/project_actions';
import ProjectIndex from './project_index';

const mapStateToProps = state => {
  projects: Object.values(state.entities.projects);
};


const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
