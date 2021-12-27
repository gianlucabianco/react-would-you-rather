import React from 'react';
import './ResetPassword.css';

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

    handleUserInput = e => {
        e.preventDefault();
        this.setState(
            {
                userName: e.target.value,
                // TODO: handle userId && debounce
            }
        );
        console.log({userName: this.state.userName});
    };

    onNewPasswordChange = e => {
        e.preventDefault();
        this.setState(
            {
                newPassword: e.target.value,
            }
        );

        console.log({newPassword: this.state.newPassword});
    };

    onConfirmNewPassword = e => {
        e.preventDefault();
        this.setState(
            {
                confirmNewPassword: e.target.value,
            }
        );

        console.log({confirmNewPassword: this.state.confirmNewPassword});
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
                        <span>Sorry, this username does not exist. Please, <a href='/signup' >Signup</a></span>
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
                    onClick={e => this.onResetPassword(e)}
                >
                    Reset password
                </button>
            </div>
        );
    };
}

export default ResetPassword;