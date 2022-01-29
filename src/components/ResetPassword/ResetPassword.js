import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ResetPassword.css';

import { addCredentials } from '../../API/api';

class ResetPassword extends React.Component {

    state = {
        userName: '',
        newPassword: '',
        confirmNewPassword: '',
        showPassword: false,
        userNameError: false,
        passwordError: false,
        isLoading: false,
    };

    getRegisteredUsers = (users) => Object.values(
        users
    );

    handleUserInput = e => {
        e.preventDefault();

        const existingNames = this.getRegisteredUsers(this.props.users).map( user => user.name );

        this.setState(
            {
                userName: e.target.value,
                userNameError: ! existingNames.includes(e.target.value)
            }
        );
    };

    onNewPasswordChange = e => {
        e.preventDefault();
        const newPassword = e.target.value;
        const { confirmNewPassword } = this.state;

        this.setState(
            {
                newPassword,
                passwordError: newPassword !== confirmNewPassword
            }
        );
    };

    onConfirmNewPassword = e => {
        e.preventDefault();
        const confirmNewPassword = e.target.value;
        const { newPassword } = this.state;

        this.setState(
            {
                confirmNewPassword,
                passwordError: newPassword !== confirmNewPassword
            }
        );
    };

    togglePasswordVisibility = () => {
        this.setState(
            {
                showPassword: ! this.state.showPassword,
            }
        );
    };

    onResetPassword = e => {
        e.preventDefault();
        
        const user = this.getRegisteredUsers(
            this.props.users
        ).find(
            user => user.name === this.state.userName
        );

        if( user ) {

            this.setState(
                {
                    isLoading: true,
                }
            );

            addCredentials(
                {
                    id: user.id,
                    name: user.name,
                    password: this.state.newPassword,
                }
            ).then(
                () => this.props.handleOnResetPassword()
            ).catch(
                () => this.setState(
                    {
                        isLoading: false,
                    }
                )
            );

        }

    };

    render() {

        const {
            userName,
            newPassword,
            confirmNewPassword,
            showPassword,
            userNameError,
            passwordError,
            isLoading,
        } = this.state;

        const isSumbitDisabled = !userName
            || ! newPassword
            || ! confirmNewPassword
            || passwordError
            || userNameError
            || isLoading;

        return (
            <div className="reset-password-form">
                <input
                    className="reset-password-input"
                    type="text"
                    placeholder="username"
                    value={userName}
                    onChange={e => this.handleUserInput(e)}
                />
                {
                    userNameError
                        ? <div className="input-error">
                            {
                                ! userName
                                    ? <span>Required field</span>
                                    : <span>Sorry, this username does not exist. Please, <a href='/signup' >Signup</a></span>
                            }
                        </div>
                        : <div className="input-spacing" />
                }
                <input
                    className="reset-password-input"
                    style={ { marginBottom: '16px' } }
                    type={showPassword ? 'text' : 'password'}
                    placeholder="new password"
                    value={newPassword}
                    onChange={e => this.onNewPasswordChange(e)}
                />
                <input
                    className="reset-password-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="confirm password"
                    value={confirmNewPassword}
                    onChange={e => this.onConfirmNewPassword(e)}
                />
                <div className="show-password">
                {
                    passwordError
                        ? <div className="input-error">
                            <span>Password and confirm password doesn't match</span>
                        </div>
                        : null
                }
                    <button onClick={this.togglePasswordVisibility}>Show password</button>
                </div>
                <button
                    className="reset-password-button"
                    style={
                        isSumbitDisabled
                            ? {
                                backgroundColor: '#bdbdbd',
                                color: '#fffm',
                                border: '1px solid #bdbdbdm',
                                cursor: 'not-allowed',
                            }
                            : {}
                    }
                    onClick={e => !isSumbitDisabled && this.onResetPassword(e)}
                >
                    {
                        ! isLoading
                            ? <span>Reset password</span>
                            : <span className="loading">Loading</span>
                    }
                </button>
            </div>
        );
    };
}

ResetPassword.propTypes = {
    users: PropTypes.object,
    handleOnResetPassword: PropTypes.func.isRequired,
};

function mapStateToProps(
    { users },
) {
    return {
        users
    };
}
  
export default connect(
    mapStateToProps,
)(ResetPassword);