import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import { handleInitializationData } from '../actions/initialization.js';
import { setAuthUser } from '../actions/authUser.js';

import PollCard from './PollCard.js';
import NavBar from './NavBar.js';
import AuthWrapper from './AuthWrapper';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import ErrorPage from './ErrorPage';

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
      <Router>
        <div className="App">
          <NavBar
            user={users[authUser]}
            onLogout={() => this.handleLogout()}
          />
          <div
            className="poll-card-container"
          >
            {
              ! authUser
              ? <Switch>
                <Route path="/signin" component={AuthWrapper} />
                <Route path="/signup" component={AuthWrapper} />
                <Route path="/reset-password" component={AuthWrapper} />
                <Route>
                  <Redirect to="/signin"/>
                </Route>
              </Switch>
              : <Switch>
                <Route exact path="/">
                  {
                    cardsData.map(
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
                </Route>
                <Route path="/signin" component={AuthWrapper} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/add-question" component={NewQuestion} />
                <Route component={ErrorPage} />
              </Switch>
            }
          </div>
        </div>
      </Router>
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
