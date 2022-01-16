import {
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
  _addUser,
  generateUID,
} from '../_DATA';


export function initializeData() {
  return Promise.all(
    [
      _getUsers(),
      _getQuestions(),
    ]
  ).then(
    (
      [
        users,
        questions,
      ]
    ) => (
      {
        users,
        questions,
      }
    )
  ).catch(
    error => {
      console.error(
        {
          error,
          msg: 'something went wrong while initializing the data, please try again later',
        }
      )
    }
  );
}

export function saveQuestion( question ) {
  return _saveQuestion( question );
}

export function saveQuestionAnswer(
  authedUser,
  qid,
  answer,
) {
  return _saveQuestionAnswer(
    {
      authedUser,
      qid,
      answer,
    }
  );
}

export function addUser(
  user,
) {
  return _addUser(
    user,
  );
}

export function getRandomUID() {
  return generateUID();
}