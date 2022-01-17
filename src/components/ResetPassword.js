import React from 'react';
import { connect } from 'react-redux';
import './ResetPassword.css';

import { addCredentials } from '../API/api';

class ResetPassword extends React.Component {

    state = {
        // userId: '',
        userName: '',
        newPassword: '',
        confirmNewPassword: '',
        // userUrl: '',
        // isSelectOpen: false,
        showPassword: false,
        userNameError: false,
        passwordError: false,
    };

    getRegisteredUsers = (users) => Object.values(
        users
    );

    // TODO: make method or remove:
    // getRegisteredUsers = (users) => Object.values(
    //     users
    // ).map(
    //     user => user.name
    // );

    handleUserInput = e => {
        e.preventDefault();

        const existingNames = this.getRegisteredUsers(this.props.users).map( user => user.name );
        this.setState(
            {
                userName: e.target.value,
                userNameError: ! existingNames.includes(e.target.value)
                // TODO: handle userId && debounce
            }
        );
        // TODO: remove after test
        console.log(
            {
                usernameError: this.state.userNameError,
                userName: this.state.userName,
                existingNames,
                getRegisteredUsers: this.getRegisteredUsers(this.props.users),
                props: this.props,
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
        console.log({msg: 'reset password!'});

        // TODO: from hardcoded values to dynamic values
        addCredentials({id: 'sarahedo', name: 'Sarah Edo', password: this.state.newPassword})

        this.props.handleOnResetPassword();

    };

    render() {

        const {
            userName,
            newPassword,
            confirmNewPassword,
            showPassword,
            userNameError,
            passwordError,
        } = this.state;

        const isSumbitDisabled = !userName
            || ! newPassword
            || ! confirmNewPassword
            || passwordError
            || userNameError;

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
                    Reset password
                </button>
            </div>
        );
    };
}

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