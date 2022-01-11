import { initializeData } from '../API/api.js';
import { getQuestions } from './questions.js';
import { getUsers } from './users.js';

export function handleInitializationData() {
  return dispatch => {
    return initializeData().then(
      (
          {
              users,
              questions,
          }
      ) => {
          dispatch( getQuestions( questions ) );
          dispatch( getUsers( users ) );
      }
    );
  };
}