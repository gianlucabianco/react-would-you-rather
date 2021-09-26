import React from 'react';
import { UserSelect } from './UserSelect';

import './Login.scss';

class Login extends React.Component {

    state = {
        userId: '',
    };

    render() {

        const { userId } = this.state;
        const btnClasses = `login__button ${! userId ? 'disabled' : ''}`;

        console.log({btnClasses, userId});

        return (
            <div className="login">
                <h1>Welcome to the Would you rather login page</h1>
                <p>Please sign in to continue</p>
                <UserSelect />
                <button className={ btnClasses }>Login</button>
            </div>
        );
    }

};

export { Login };