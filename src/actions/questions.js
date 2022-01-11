import { saveQuestion } from '../API/api';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function getQuestions(
    questions,
) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addAnswerToQuestion(
  authUser,
  questionId,
  answer
) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid: questionId,
    answer
  };
}

function addQuestion(
  question,
) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleSaveQuestion(
  optionOneText,
  optionTwoText,
  author,
) {
  return dispatch => {
    return saveQuestion(
      {
        optionOneText,
        optionTwoText,
        author,
      }
    ).then(
      question => {
        dispatch(
          addQuestion(
            question
          )
        );
      }
    );
  };
}