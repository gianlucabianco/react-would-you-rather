import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import questions from '../questions.js';
import users from '../users.js';

import { PollCard } from './PollCard.js';
import { NavBar } from './NavBar.js';
import { Login } from './Login';
// FIXME: temp, remove after test
import { setAuthUser } from '../actions/user';

// TODO: add proptypes to all components
// FIXME: this is a mockup
const user = {
  name: 'John Doe',
  avatar: 'https://picsum.photos/id/103/200/300',
  isLoggedIn: false, // TODO: this should be handled by the store
  // id: '', // TODO: this should come from API
}

class App extends Component {
  componentDidMount() {
    //TODO: debug this
    console.log('componentDidMount', setAuthUser);
    setAuthUser('ciaoooooo') && console.log({props:this.props})
  }

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
    console.log({state: this.state});
    console.log({props: this.props, store: this.store});

    const {
      questions,
      user,
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
            // TODO: re enable this
            user.isLoggedIn
              ? cardsData.map(
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
              : <Login />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
}

export default connect(
  mapStateToProps,
  { user }
)(App);
