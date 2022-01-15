import { saveQuestionAnswer } from '../API/api';
import { addAnswerToQuestion } from '../actions/questions';

export const GET_USERS = 'GET_USERS';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';

export function getUsers(
  users,
) {
  return {
    type: GET_USERS,
    users
  };
}

function addAnswerToUser(
  authUser,
  questionId,
  answer,
) {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid: questionId,
    answer
  };
}

export function handleSaveQuestionAnswer(
  authUser,
  questionId,
  answer,
) {

  return dispatch => {

    dispatch(
      addAnswerToUser(
        authUser,
        questionId,
        answer,
      )
    );
    dispatch(
      addAnswerToQuestion(
        authUser,
        questionId,
        answer,
      )
    );

    return saveQuestionAnswer(
        authUser,
        questionId,
        answer,
    ).catch(e => {
      console.error(
        {
          message: 'There is an error in handleSaveQuestionAnswer',
          error: e,
        }
      )
    });
  };
}

export function addQuestionToUser(
  {
    id,
    author,
  },
) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}