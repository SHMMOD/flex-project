import { connect } from 'react-redux';
import { authenticate } from '../../actions/session_actions';

import Session from './session';

const mapStateToProps = state => ({
  // errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  authenticate: () => dispatch(authenticate())
  // login: formUser => dispatch(login(formUser)),
  // clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
