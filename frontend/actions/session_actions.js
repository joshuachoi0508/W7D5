import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERROS = 'RECEIVE_SESSION_ERROS';

//receive current users


//object
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
//thunk
export const signUp = user => dispatch => (
  APIUtil.signup(user)
    .then(receivedUser => dispatch(receiveCurrentUser(receivedUser)),
          err => (dispatch(receiveErrors(err.responseJSON)))
));

export const login = currentUser => dispatch => (
  APIUtil.login(currentUser)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

//logout current users


//object
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

//thunk
export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

//receive errors

//object
export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERROS,
  errors
});

//thunk
