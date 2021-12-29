import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { LoginButton } from './LoginButton';


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
                            : <NavLink name="new-question" to="/add-question">
                                <li>
                                    New question
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
                    <a>
                        <li onClick={ () => {isLoggedIn && this.onLogout()} } >
                            <LoginButton
                                isLoggedIn={ isLoggedIn }
                                userName={ name }
                                userUrl={ avatarURL }
                            />
                        </li>
                    </a>
                </ul>
            </div>
        );

    };

};

export default withRouter(NavBar)