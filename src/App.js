import React, { Component } from 'react';
import './App.css';

import questions from './questions.js';
import users from './users.js';

import { PollCard } from './components/PollCard.js';

class App extends Component {

  state = {
    questions,
    users,
  };

  getPercentages = () => {

    const number = Math.floor(
      (
        Math.random() * 100
      ) + 1
    );

    const delta = 100 - number;

    return number % 2 === 0
      ? [
        number,
        delta,
      ]
      :[
        delta,
        number,
      ];

  }

  randomizeReveal = () => {

    return Math.floor(
      (
        Math.random() * 2
      ) + 1
    ) % 2 === 0;

  }

  render() {

    const {
      questions
    } = this.state;

    return (
      <div className="App">
        <PollCard
          color={'gold'}
          url={users[0].avatarUrl}
          name={users[0].name}
          isRevealed={this.randomizeReveal()}
          percentages={this.getPercentages()}
          options={questions[75]}
        />
      </div>
    );
  }
}

export default App;
