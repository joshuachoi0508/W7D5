import {
  RECEIVE_SESSION_ERROS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_SESSION_ERROS:
      return action.errors
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
