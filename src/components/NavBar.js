import React from 'react';
import { LoginButton } from './LoginButton';

import './NavBar.css';

class NavBar extends React.Component {

    state = {
        isLoggedIn: true,
        // users,
        userId: '1',
        userName: 'Jean-Paul Sartre',
        userUrl: 'https://picsum.photos/id/104/200/300',
    }

    mockMethod = item => {
        console.log(
            {
                item,
            },
        );
    }

    render() {

        const {
            isLoggedIn,
            userName,
            userUrl,
        } = this.state;

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
                    <li onClick={ () => this.mockMethod( 'login' ) } >
                        <LoginButton
                            isLoggedIn={ isLoggedIn }
                            userName={ userName }
                            userUrl={ userUrl }
                        />
                    </li>
                </ul>
            </div>
        );

    };

};

export { NavBar };