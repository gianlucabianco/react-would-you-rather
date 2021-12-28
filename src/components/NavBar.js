import React from 'react';
import { LoginButton } from './LoginButton';

import './NavBar.css';

class NavBar extends React.Component {

    // TODO: mock method, this should become ROUTING
    mockMethod = item => {
        console.log(
            {
                TODO: item,
            },
        );
    }

    onLogout = () => {
        this.props.onLogout();
    };

    render() {

        const {
            user
        } = this.props;
        
        const isLoggedIn = !!(user
            && Object.keys(user).length);

        const name = user && user.name || '';
        const avatarURL = user && user.avatarURL || '';

        return (
            <div
                className="navbar"
            >
                <ul>
                    <li onClick={ () => this.mockMethod( 'Home' ) }>
                        Home
                    </li>
                    <li onClick={ () => this.mockMethod( 'New question' ) }>
                        New question
                    </li>
                    <li onClick={ () => this.mockMethod( 'Ranking' ) }>
                        Ranking
                    </li>
                    <li onClick={ () => {isLoggedIn && this.onLogout()} } >
                        <LoginButton
                            isLoggedIn={ isLoggedIn }
                            userName={ name }
                            userUrl={ avatarURL }
                        />
                    </li>
                </ul>
            </div>
        );

    };

};

export { NavBar };