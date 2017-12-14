import React from 'react';
import Auth0ViewContainer from './auth0/auth0_view_container';
import RootTabs from './tab_navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      currentUser: newProps.currentUser
    });
  }

  render() {
    // return this.state.currentUser ? <RootTabs /> : <Auth0ViewContainer />;
    return <RootTabs />; // switch this back to the above line to display login screen
  }
}
