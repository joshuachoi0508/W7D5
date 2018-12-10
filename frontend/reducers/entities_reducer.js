import { combineReducers } from 'redux';
import userReducers from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;
