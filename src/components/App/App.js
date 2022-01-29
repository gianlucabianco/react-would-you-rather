import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';

import { handleInitializationData } from '../../actions/initialization';
import { setAuthUser } from '../../actions/authUser';

import { routes } from '../../API/routes';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
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

    const authedUser = users[authUser];
    const layoutContainerClassess = `layout-container ${authUser ? 'is-user-logged-in' : ''}`;
    const unauthedRoutes = [
      ...routes.unauthed.unguarded,
      ...routes.unauthed.guarded,
    ];

    return (
      <Router>
        <div className="App">
          <NavBar
            user={authedUser}
            onLogout={() => this.handleLogout()}
          />
          <div className={layoutContainerClassess}>
            {
              ! authUser
              ? <Switch>
                  <Route path={unauthedRoutes} component={AuthWrapper} />
                  <Route exact path="/" component={AuthWrapper} />
                  <Route component={ErrorPage} />
                </Switch>
                : <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path={routes.authed.guarded} component={Home} />
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
