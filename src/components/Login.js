import React from 'react';
import { UserSelect } from './UserSelect';

import './Login.scss';

class Login extends React.Component {

    state = {
        userId: 'test-id',
    };

    render() {

        const { userId } = this.state;
        const btnClasses = `login__button ${! userId ? 'disabled' : ''}`;

        console.log({btnClasses, userId});

        return (
            <div className="login">
                <div className="login__header">
                    <h1>Welcome to the Would you rather login page</h1>
                    <p>Please sign in to continue</p>
                </div>
                <UserSelect />
                <button className={ btnClasses }>Login</button>
            </div>
        );
    }

};

export { Login };