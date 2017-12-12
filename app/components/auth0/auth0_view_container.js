import { connect } from 'react-redux';
import { login, logout} from '../../actions/auth_actions';
import Auth0View from './auth0_view';


const mapStateToProps = (state) => {
  return {
    // currentUserProfile: state.session.currentUserProfile,
    // loggedIn: Boolean(state.session.currentUserProfile)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    // getUserProfile: (accessToken) => dispatch(getUserProfile(accessToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth0View);
