import { connect } from 'react-redux';
// import App from './AppRegistry';
import App from './app';

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // login: () => dispatch(login()),
    // logout: () => dispatch(logout()),
    // getUserProfile: (accessToken) => dispatch(getUserProfile(accessToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
