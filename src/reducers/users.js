import {
  GET_USERS,
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  ADD_NEW_USER,
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
    case ADD_QUESTION_TO_USER:
      const {
        id,
        author,
      } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: [
            ...state[author].questions,
            id,
          ]
        }
      };
    case ADD_NEW_USER:
      {
        const {
          id,
          name,
          avatarURL,
        } = action;
  
        return {
          ...state,
          [id]: {
            id,
            name,
            avatarURL,
            answers: {},
            questions: [],
          }
        };
      }
    default:
      return state;
  }
}