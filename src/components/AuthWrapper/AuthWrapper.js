import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthUser } from '../../actions/authUser';

import { credentials } from '../../DB/credentials';

import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import ResetPassword from '../ResetPassword/ResetPassword';

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
        
        this.handleRouting();
    };

    handleOnResetPassword = () => {
        this.handleRouting();
    };

    handleRouting = () => {
        if (this.props.history.action !== 'POP')
            this.props.history.goBack();
        else
            this.props.history.push('/');
    };

    render() {

        const {
            userNameError,
            passwordError,
        } = this.state;

        const { users } = this.props;

        const pathName = this.props.location.pathname;

        const shouldRenderSignin = [
            '/signin',
            '/',
            '/leaderboard',
            '/add',
        ].includes(pathName)
        || pathName.includes('/questions/');

        const shouldRenderSignup = pathName === '/signup';

        const shouldRenderResetPassword = pathName === '/reset-password';

        return (
            <div className="auth-wrapper">
                <div className="auth-wrapper-header">
                    {
                        shouldRenderSignin
                        && (
                            <>
                                <h1>Welcome to the Would you rather signin page</h1>
                                <p>Please sign in to continue</p>
                            </>
                        )
                    }
                    {
                        shouldRenderSignup
                        && (
                            <>
                                <h1>Welcome to the Would you rather signup page</h1>
                                <p>Please sign up to continue</p>
                            </>
                        )
                    }
                    {
                        shouldRenderResetPassword
                        && (
                            <>
                                <h1>Welcome to the Would you rather reset password page</h1>
                                <p>Please reset your password to continue</p>
                            </>
                        )
                    }
                </div>
                {
                    shouldRenderSignin
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
                    shouldRenderSignup
                    && <Signup
                        handleOnSignup={this.handleOnSignup}
                    />
                }
                {
                    shouldRenderResetPassword
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