import React from 'react';
import './Signin.css';

class Signin extends React.Component {

    state = {
        // userId: '',
        userName: '',
        password: '',
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

    togglePasswordVisibility = () => {
        this.setState(
            {
                showPassword: ! this.state.showPassword,
            }
        );
    };

    onSignin = e => {
        e.preventDefault();
        console.log({msg: 'sign in!'});
    };

    render() {

        const {
            userName,
            password,
            showPassword,
            userNameError,
            passwordError,
        } = this.state;

        return (
            <div className="signin-form">
                <input
                    className="signin-input"
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
                    className="signin-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    value={password}
                    onChange={e => this.onPasswordChange(e)}
                />
                <div className="show-password">
                {
                    passwordError
                    ? <div className="input-error">
                        <span>Invalid password</span>
                    </div>
                    : null
                }
                    <button onClick={this.togglePasswordVisibility}>Show password</button>
                </div>
                <button
                    className="signin-button"
                    onClick={e => this.onSignin(e)}
                >
                    Sign in
                </button>
                {/* TODO: actions! redirect the user to the action route page */}
                <div className="signin-actions">
                    <a href="/forgot">Forgot your password?</a>
                    <a href="/signup">Sign up</a>
                </div>
            </div>
        );
    };
}

export default Signin;