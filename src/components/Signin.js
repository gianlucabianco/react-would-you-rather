import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signin.css';

class Signin extends React.Component {

    state = {
        userName: '',
        password: '',
        showPassword: false,
    };

    handleUserInput = e => {
        e.preventDefault();
        this.setState(
            {
                userName: e.target.value,
            }
        );
    };

    onPasswordChange = e => {
        e.preventDefault();
        this.setState(
            {
                password: e.target.value,
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

    onSignin = () => {
        this.props.onUserChange(
            {
                userName: this.state.userName,
                password: this.state.password,
            }
        );
    };

    handleUserNameErrorReset = () => {
        this.props.onUserNameErrorReset();
    };

    handlePasswordErrorReset = () => {
        this.props.onPasswordErrorReset();
    };

    render() {

        const {
            userName,
            password,
            showPassword,
        } = this.state;

        const {
            userNameError,
            passwordError,
        } = this.props;

        return (
            <div className="signin-form">
                <input
                    value={userName}
                    className="signin-input"
                    type="text"
                    placeholder="username"
                    onChange={e => this.handleUserInput(e)}
                    onClick={() => userNameError && this.handleUserNameErrorReset()}
                />
                {
                    userNameError
                    ? <div className="input-error">
                        <span>Invalid username</span>
                    </div>
                    : <div className="input-spacing" />
                }
                <input
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    className="signin-input"
                    placeholder="password"
                    onChange={e => this.onPasswordChange(e)}
                    onClick={() => passwordError && this.handlePasswordErrorReset()}
                />
                <div className="show-password">
                {
                    passwordError
                    ? <div className="input-error">
                        <span>Invalid password</span>
                    </div>
                    : null
                }
                    <button onClick={this.togglePasswordVisibility}>
                        {
                            ! showPassword
                            ? 'Show password'
                            : 'Hide password'
                        }
                    </button>
                </div>
                <button
                    className="signin-button"
                    style={
                        (!userName || !password)
                        ? {
                            backgroundColor: '#bdbdbd',
                            color: '#fffm',
                            border: '1px solid #bdbdbdm',
                            cursor: 'not-allowedm',
                        }
                        : {}
                    }
                    onClick={
                        () => {
                            userName
                            && password
                            && this.onSignin()
                        }
                    }
                >
                    Sign in
                </button>
                <div className="signin-actions">
                    <NavLink to="/reset-password">
                        Forgot your password?
                    </NavLink>
                    <NavLink to="/signup">
                        Signup
                    </NavLink>
                </div>
            </div>
        );
    };
}

export default Signin;