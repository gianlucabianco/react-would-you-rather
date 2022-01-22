import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthUser } from '../../actions/authUser.js';

import { credentials } from '../../DB/credentials';

import Signin from '../Signin/Signin.js';
import Signup from '../Signup/Signup.js';
import ResetPassword from '../ResetPassword/ResetPassword.js';

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

    handleOnSignup = userId => {
        this.props.setAuthUser(
            userId
        );
        this.props.history.push('/');
    };

    handleOnResetPassword = () => {
        this.props.history.push('/');
    };

    render() {

        const {
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
                {
                    pathName === '/signup'
                    && <Signup
                        handleOnSignup={this.handleOnSignup}
                    />
                }
                {
                    pathName === '/reset-password'
                    && <ResetPassword
                        handleOnResetPassword={this.handleOnResetPassword}
                    />
                }
            </div>
        );
    }

};

AuthWrapper.propTypes = {
    authUser: PropTypes.string,
    setAuthUser: PropTypes.func.isRequired,
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