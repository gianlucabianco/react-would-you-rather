import React from 'react';
import './Signup.css';

class Signup extends React.Component {

    state = {
        // userId: '',
        userName: '',
        password: '',
        confirmPassword: '',
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

    onPasswordChange = e => {
        e.preventDefault();
        this.setState(
            {
                password: e.target.value,
            }
        );

        console.log({password: this.state.password});
    };

    onPasswordConfirmChange = e => {
        e.preventDefault();
        this.setState(
            {
                confirmPassword: e.target.value,
            }
        );

        console.log({confirmPassword: this.state.confirmPassword});
    };

    togglePasswordVisibility = () => {
        this.setState(
            {
                showPassword: ! this.state.showPassword,
            }
        );
    };

    onSignup = e => {
        e.preventDefault();
        console.log({msg: 'sign up!'});
    };

    render() {

        const {
            userName,
            password,
            confirmPassword,
            showPassword,
            userNameError,
            passwordError,
        } = this.state;

        return (
            <div className="signup-form">
                <input
                    className="signup-input"
                    type="text"
                    placeholder="username"
                    value={userName}
                    onChange={e => this.handleUserInput(e)}
                />
                {
                    userNameError
                    ? <div className="input-error">
                        <span>Invalid username</span>
                    </div>
                    : <div className="input-spacing" />
                }
                <input
                    className="signup-input"
                    style={ { marginBottom: '16px' } }
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    value={password}
                    onChange={e => this.onPasswordChange(e)}
                />
                <input
                    className="signup-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={e => this.onPasswordConfirmChange(e)}
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
                    className="signup-button"
                    onClick={e => this.onSignup(e)}
                >
                    Sign up
                </button>
                {/* TODO: actions! */}
                <div className="signup-actions">
                    Already have an account? <a href="/signin">Sign in</a>
                </div>
            </div>
        );
    };
}

export default Signup;