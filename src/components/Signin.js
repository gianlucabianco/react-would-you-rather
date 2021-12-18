import React from 'react';
import './Signin.css';

class Signin extends React.Component {

    state = {
        // userId: '',
        userName: '',
        password: '',
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

    onSignin = e => {
        e.preventDefault();
        console.log({msg: 'sign in!'});
    };

    render() {

        const {
            userName,
            password,
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
                {/* TODO: add eye icon */}
                <input
                    className="signin-input"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => this.onPasswordChange(e)}
                />
                <button
                    className="signin-button"
                    onClick={e => this.onSignin(e)}
                >
                    Sign in
                </button>
                {/* TODO: actions! */}
                <div className="signin-actions">
                    <a href="/forgot">Forgot your password?</a>
                    <a href="/signup">Sign up</a>
                </div>
            </div>
        );
    };
}

export default Signin;