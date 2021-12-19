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

    onResetPassword = e => {
        e.preventDefault();
        console.log({msg: 'reset password!'});
    };

    render() {

        const {
            userName,
            newPassword,
            confirmNewPassword,
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
                {/* TODO: add eye icon */}
                <input
                    className="reset-password-input"
                    type="password"
                    placeholder="new password"
                    value={newPassword}
                    onChange={e => this.onNewPasswordChange(e)}
                />
                <input
                    className="reset-password-input"
                    type="password"
                    placeholder="confirm password"
                    value={confirmNewPassword}
                    onChange={e => this.onConfirmNewPassword(e)}
                />
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