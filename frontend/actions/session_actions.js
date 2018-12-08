export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

//receive current users

//object
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
//thunk
export const signUp = user => (
  APIUtil.signup(user)
    .then(receivedUser => receiveCurrentUser(receivedUser))
)

//logout current users


//object

//thunk

//receive errors

//object

//thunk
