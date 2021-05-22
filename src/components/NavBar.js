import React from 'react';

import './NavBar.scss';

class NavBar extends React.Component {

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
                    <li
                        onClick={ () => this.mockMethod( 'login' ) }
                    >
                        login
                    </li>
                </ul>
            </div>
        );

    };

};

export { NavBar };