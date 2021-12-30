import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import './App.css';
import { handleInitializationData } from '../actions/initialization.js';
import { setAuthUser } from '../actions/authUser.js';

import NavBar from './NavBar.js';
import Home from './Home.js';
import AuthWrapper from './AuthWrapper';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import ErrorPage from './ErrorPage';

class App extends Component {

  componentDidMount() {
    this.props.handleInitializationData();
  };

  handleLogout = () => {
    this.props.setAuthUser(null);
  }

  render() {

    const {
      authUser,
      users,
    } = this.props;

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
                <Route exact path="/" component={Home} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/add-question" component={NewQuestion} /> // TODO: from '/add-question' to '/add'
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
