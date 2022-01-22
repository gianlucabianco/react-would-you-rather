import { initializeData } from '../API/api';
import { getQuestions } from './questions';
import { getUsers } from './users';

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