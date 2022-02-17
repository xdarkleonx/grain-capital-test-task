import { combineReducers } from 'redux';
import users from './reducers/usersReducer';

export default combineReducers({
  users: users,
})