import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { handleInitializationData } from '../actions/initialization.js';

/* TODO: temporary mock data, remove after redux is fully implemented */
import questions from '../questions.js';
import users from '../users.js';

import { PollCard } from './PollCard.js';
import { NavBar } from './NavBar.js';
import Login from './Login';

// TODO: this is a mockup, remove after data refactor
const user = {
  name: 'John Doe',
  avatar: 'https://picsum.photos/id/103/200/300',
  isLoggedIn: false,
  // id: '',
}

class App extends Component {

  componentDidMount() {
    this.props.handleInitializationData();
  };

  state = {
    questions,
    users,
    user,
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

    const { authUser } = this.props;
    
    const {
      questions,
      // user, // TODO: remove after data refactor
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
        <NavBar />
        <div
          className="poll-card-container"
        >
          {
            ! authUser
              ? <Login />
              : cardsData.map(
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
      </div>
    );
  }
}

const mapStateToProps = (
  {
    authUser,
    users,
  }
) => {
  return {
    authUser,
    users,
  };
}

export default connect(
  mapStateToProps,
  {
    handleInitializationData,
  },
)(App);
