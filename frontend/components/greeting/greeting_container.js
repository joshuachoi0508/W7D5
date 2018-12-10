import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];

  return({
    currentUser: currentUser
  });
}

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
