import React from 'react';
import { UserSelect } from './UserSelect';

import './Login.scss';

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <h1>Welcome to the Would you rather login page</h1>
                <p>Please sign in to continue</p>
                <UserSelect />
            </div>
        );
    }

};

export { Login };