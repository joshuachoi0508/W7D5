import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

export const sessionReducer = (oldState = {id: null}, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {id: Object.keys(action.currentUser)[0]};
    case LOGOUT_CURRENT_USER:
    return {id: null};
    default:
      return oldState;
  }
};

export default sessionReducer;
