import { combineReducers } from 'redux';
import authUser from './authUser.js';
import questions from './questions.js';
import users from './users.js';

export default combineReducers({
  authUser,
  questions,
  users
});