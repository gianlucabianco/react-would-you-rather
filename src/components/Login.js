import React from 'react';
import { connect } from 'react-redux';
import { UserSelect } from './UserSelect';
import { setAuthUser } from '../actions/authUser.js';

import { credentials } from '../DB/credentials';

import Signin from './Signin.js';
// import Signup from './Signup.js';
// import ResetPassword from './ResetPassword.js';

import './Login.css';
// TODO: login should be auth component
class Login extends React.Component {

    state = {
        userId: '',
        userNameError: false,
        passwordError: false,
    };

    onUserChange = (
        {
            userName,
            password,
        }
    ) => {
        const isUser = credentials.find(
            user => user.name === userName
        );

        if(
            !isUser
            || isUser.name !== userName
        ) {
            this.setState(
                {
                    userNameError: true,
                }
            );
        }

        if(
            !isUser
            || isUser.password !== password
        ) {
            this.setState(
                {
                    passwordError: true,
                }
            );
        }
        
        if(
            isUser
            && isUser.name === userName
            && isUser.password === password
        ) {
            this.props.setAuthUser(
                isUser.id
            );
            this.props.history.push('/');
        }
    };

    onUserNameErrorReset = () => {
        console.log({msg: 'reset userNameError in parent component'});
        this.setState(
            {
                userNameError: false,
            }
        );
    };

    onPasswordErrorReset = () => {
        console.log({msg: 'reset passwordError in parent component'});
        this.setState(
            {
                passwordError: false,
            }
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setAuthUser(this.state.userId);
    };

    render() {

        const {
            userId,
            userNameError,
            passwordError,
        } = this.state;
        const { users } = this.props;
        const btnClasses = `login__button ${! userId ? 'disabled' : ''}`;

        return (
            <div className="login">
                <div className="login__header">
                    <h1>Welcome to the Would you rather login page</h1>
                    <p>Please sign in to continue</p>
                </div>
                {/* <ConnectedUserSelect onUserChange={this.onUserChange}/> */}
                <Signin
                    users={users}
                    onUserChange={this.onUserChange}
                    userNameError={userNameError}
                    passwordError={passwordError}
                    onUserNameErrorReset={this.onUserNameErrorReset}
                    onPasswordErrorReset={this.onPasswordErrorReset}
                />
                {/* <Signup/> */}
                {/* <ResetPassword /> */}
                {/* <button
                    className={ btnClasses }
                    onClick={userId ? this.handleSubmit : null}
                >
                    Login
                </button> */}
            </div>
        );
    }

};

function userSelectMapStateToProps(
    {
        users,
    }
) {
    return {
        users: Object.values(users),
    }
};

function loginMapStateToProps(
    {
        authUser,
    }
) {
    return {
        authUser,
    }
};

const ConnectedUserSelect = connect(
    userSelectMapStateToProps,
)(UserSelect);

export default connect(
    loginMapStateToProps,
    { setAuthUser }
)(Login);