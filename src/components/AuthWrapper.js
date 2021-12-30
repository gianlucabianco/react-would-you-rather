import React from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser.js';

import { credentials } from '../DB/credentials';

import Signin from './Signin.js';
import Signup from './Signup.js';
import ResetPassword from './ResetPassword.js';

import './AuthWrapper.css';

class AuthWrapper extends React.Component {

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
        this.setState(
            {
                userNameError: false,
            }
        );
    };

    onPasswordErrorReset = () => {
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
        
        const pathName = this.props.location.pathname;

        return (
            <div className="auth-wrapper">
                <div className="auth-wrapper-header">
                    {
                        pathName === '/signin'
                        && (
                            <>
                                <h1>Welcome to the Would you rather signin page</h1>
                                <p>Please sign in to continue</p>
                            </>
                        )
                    }
                    {
                        pathName === '/signup'
                        && (
                            <>
                                <h1>Welcome to the Would you rather signup page</h1>
                                <p>Please sign up to continue</p>
                            </>
                        )
                    }
                    {
                        pathName === '/reset-password'
                        && (
                            <>
                                <h1>Welcome to the Would you rather reset password page</h1>
                                <p>Please reset your password to continue</p>
                            </>
                        )
                    }
                </div>
                {
                    pathName === '/signin'
                    && <Signin
                        users={users}
                        onUserChange={this.onUserChange}
                        userNameError={userNameError}
                        passwordError={passwordError}
                        onUserNameErrorReset={this.onUserNameErrorReset}
                        onPasswordErrorReset={this.onPasswordErrorReset}
                    />
                }
                {/* TODO: props for signup */}
                {
                    pathName === '/signup'
                    && <Signup/>
                }
                {/* TODO: props for reset password */}
                {
                    pathName === '/reset-password'
                    && <ResetPassword/>
                }
            </div>
        );
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


export default connect(
    loginMapStateToProps,
    { setAuthUser }
)(AuthWrapper);