import {
  GET_USERS,
  ADD_ANSWER_TO_USER,
} from '../actions/users.js';

export default function users(
    state = {},
    action,
) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER_TO_USER:
      const {
        authUser,
        qid,
        answer,
      } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}