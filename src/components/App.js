import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { handleInitializationData } from '../actions/initialization.js';
import { setAuthUser } from '../actions/authUser.js';

import { PollCard } from './PollCard.js';
import { NavBar } from './NavBar.js';
import Login from './Login';

class App extends Component {

  componentDidMount() {
    this.props.handleInitializationData();
  };

  getPercentages = (
    optionOneVotes,
    optionTwoVotes
  ) => {

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = Math.round(
      optionOneVotes / totalVotes * 100
    );

    const optionTwoPercentage = Math.round(
      optionTwoVotes / totalVotes * 100
    );

    return [
      optionOnePercentage,
      optionTwoPercentage,
    ]
  }

  // TODO: mock method, this should become getReveal()
  randomizeReveal = () => {

    return Math.floor(
      (
        Math.random() * 2
      ) + 1
    ) % 2 === 0;

  }

  handleLogout = () => {
    this.props.setAuthUser(null);
  }

  render() {

    const {
      authUser,
      users,
    } = this.props;

    const questions = Object.values(this.props.questions);

    const cardsData = ! questions.length
    ? []
    : questions.map(
      question => {

        const user = Object.values(users).find(
          user => user.id === question.author
        );

        if(
          !user
        ) {
          return {};
        }

        const {
          avatarURL,
          name,
          id,
        } = user;

        return {
          avatarURL,
          name,
          id,
          color: '#ffffff',
          isRevealed: this.randomizeReveal(), // TODO: true if the user answer this poll
          percentages: this.getPercentages(
            question.optionOne.votes.length,
            question.optionTwo.votes.length,
          ),
          options: [
            question.optionOne.text,
            question.optionTwo.text,
          ],
        }
      }
    );

    return (
      <div className="App">
        <NavBar
          user={users[authUser]}
          onLogout={() => this.handleLogout()}
        />
        <div
          className="poll-card-container"
        >
          {
            //  TODO: routing
            ! authUser
              ? <Login users={users}/>
              : cardsData.map(
                (card, index) => <PollCard
                  color={card.color}
                  url={card.avatarURL}
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
    questions,
  }
) => {
  return {
    authUser,
    users,
    questions,
  };
}

export default connect(
  mapStateToProps,
  {
    handleInitializationData,
    setAuthUser,
  },
)(App);
