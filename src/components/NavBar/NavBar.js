import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import SignOutButton from '../SignOutButton/SignOutButton';

import './NavBar.css';

class NavBar extends React.Component {

    onLogout = () => {
        this.props.onLogout();
        this.props.history.push('/');
    };

    render() {

        const {
            user
        } = this.props;
        
        const isLoggedIn = !!(user
            && Object.keys(user).length);

        const name = (user && user.name) || '';
        const avatarURL = (user && user.avatarURL) || '';

        return (
            <div
                className="navbar"
            >
                <ul>
                    <NavLink name="home" to="/" exact>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    {
                        ! isLoggedIn
                            ? <NavLink name="signup" to="/signup">
                                <li>
                                    Signup
                                </li>
                            </NavLink>
                            : <NavLink name="add-question" to="/add">
                                <li>
                                    Add question
                                </li>
                            </NavLink>
                    }
                    {
                        ! isLoggedIn
                            ? <NavLink name="reset-password" to="/reset-password">
                                <li>
                                    Reset password
                                </li>
                            </NavLink>
                            : <NavLink name="leaderboard" to="/leaderboard">
                                <li>
                                    Leaderboard
                                </li>
                            </NavLink>
                    }
                    {
                        ! isLoggedIn
                            ? <NavLink name="signin" to="/signin">
                                <li>
                                    Sign in
                                </li>
                            </NavLink>
                            : <a href='/'>
                                <li onClick={ this.onLogout } >
                                    <SignOutButton
                                        isLoggedIn={ isLoggedIn }
                                        userName={ name }
                                        userUrl={ avatarURL }
                                    />
                                </li>
                            </a>
                    }
                </ul>
            </div>
        );

    };

};

NavBar.propTypes = {
    onLogout: PropTypes.func.isRequired,
    user: PropTypes.object,
};

export default withRouter(NavBar)