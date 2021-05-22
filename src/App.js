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

  getRandomUser = users => {

    return users[
      Math.floor(
        (
          Math.random() * users.length
        )
      )
    ];

  }

  render() {

    const {
      questions
    } = this.state;

    const cardsData = questions.map(
      question => {

        return {
          ...this.getRandomUser( users ),
          color: 'white',
          isRevealed: this.randomizeReveal(),
          percentages: this.getPercentages(),
          options: question,
        }

      }
    );

    return (
      <div className="App">
        {
          cardsData.map(
            (card, index) => <PollCard
              color={card.color}
              url={card.avatarUrl}
              name={card.name}
              isRevealed={card.isRevealed}
              percentages={card.percentages}
              options={card.options}
              key={card.name + index}
            />
            )
        }
      </div>
    );
  }
}

export default App;
