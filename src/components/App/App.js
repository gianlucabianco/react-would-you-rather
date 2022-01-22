import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

import './App.css';
import { handleInitializationData } from '../../actions/initialization.js';
import { setAuthUser } from '../../actions/authUser.js';

import NavBar from '../NavBar/NavBar.js';
import Home from '../Home/Home.js';
import AuthWrapper from '../AuthWrapper/AuthWrapper';
import Leaderboard from '../Leaderboard/Leaderboard';
import AddQuestion from '../AddQuestion/AddQuestion';
import QuestionPage from '../QuestionPage/QuestionPage';
import ErrorPage from '../ErrorPage/ErrorPage';

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
            className={`layout-container ${authUser ? 'is-user-logged-in' : ''}`}
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
                <Route path="/add" component={AddQuestion} />
                <Route path="/questions/:question_id" component={QuestionPage} />
                <Route component={ErrorPage} />
              </Switch>
            }
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  authUser: PropTypes.string,
  handleInitializationData: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  setAuthUser: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

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
