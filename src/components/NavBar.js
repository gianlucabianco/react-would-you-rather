import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginButton } from './LoginButton';

import './NavBar.css';

class NavBar extends React.Component {

    onLogout = () => {
        this.props.onLogout();
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
                    <NavLink name="new-question" to="/new-question">
                        <li>
                            New question
                        </li>
                    </NavLink>
                    <NavLink name="leaderboard" to="/leaderboard">
                        <li>
                            Leaderboard
                        </li>
                    </NavLink>
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

export { NavBar };