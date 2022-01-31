import { combineReducers } from 'redux';
import authUser from './authUser';
import questions from './questions';
import users from './users';
import {
  isNotAnswerFilter,
  isAnswerFilter,
} from './filters';

export default combineReducers({
  authUser,
  questions,
  users,
  isNotAnswerFilter,
  isAnswerFilter,
});