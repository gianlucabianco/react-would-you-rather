import React from 'react';
import { Avatar } from './Avatar';

import './NavBar.scss';

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

        return (
            <div
                className="navbar"
            >
                <ul>
                    <li
                        onClick={ () => this.mockMethod( 'Home' ) }
                    >
                        Home
                    </li>
                    <li
                        onClick={ () => this.mockMethod( 'New question' ) }
                    >
                        New question
                    </li>
                    <li
                        onClick={ () => this.mockMethod( 'Ranking' ) }
                    >
                        Ranking
                    </li>
                    <li onClick={ () => this.mockMethod( 'login' ) } >
                        {/* TODO: this should be a component */}
                        {
                            ! this.state.isLoggedIn
                                ? 'Login'
                                : <div className="login-button">
                                    <div className="avatar-wrapper" >
                                        <Avatar
                                            url={ this.state.userUrl }
                                            size={'40px'}
                                        />
                                        <span className="user-name">
                                            { this.state.userName }
                                        </span>
                                    </div>
                                    <span className="logout-button">
                                        Logout
                                    </span>
                                </div>
                        }
                    </li>
                </ul>
            </div>
        );

    };

};

export { NavBar };