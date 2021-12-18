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

    onSignup = e => {
        e.preventDefault();
        console.log({msg: 'sign in!'});
    };

    render() {

        const {
            userName,
            password,
            confirmPassword,
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
                {/* TODO: add eye icon */}
                <input
                    className="signup-input"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => this.onPasswordChange(e)}
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={e => this.onPasswordChange(e)}
                />
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