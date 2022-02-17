import { combineReducers } from 'redux';
import users from './reducers/usersReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  users: users,
  form: formReducer
})