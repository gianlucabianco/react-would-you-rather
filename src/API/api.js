// TODO: remove generateUID if not used
// import { generateUID } from './helpers.js';
import { formatQuestion } from './helpers.js';

import { users } from '../DB/users.js';
import { questions } from '../DB/questions.js';

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

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
      /* TODO: add routing to error page */
      console.error('Error: ', error)
    }
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(authUser, qid, answer) {
  return _saveQuestionAnswer({ authUser, qid, answer });
}