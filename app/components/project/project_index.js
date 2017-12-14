import React from 'react';
import { Link, Route } from 'react-router-dom';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.fetchProjects();
  }

  render(){
    

  }
}
