import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { addUserToUsers } from '../../actions/users';
import { getRandomUID } from '../../API/api';

import './Signup.css';

class Signup extends React.Component {

    getRegisteredUsers = (users) => Object.values(
        users
    ).map(
        user => user.name
    );

    state = {
        userName: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        userNameError: false,
        passwordError: false,
    };

    handleUserInput = e => {
        e.preventDefault();
        const registeredUsers = this.getRegisteredUsers(this.props.users);
        const userName = e.target.value;
        const isUserNameAlreadyTaken = registeredUsers.includes(userName);

        this.setState(
            {
                userName: e.target.value,
                userNameError: isUserNameAlreadyTaken,
            }
        );
    };

    onPasswordChange = e => {
        e.preventDefault();
        const password = e.target.value;
        const { confirmPassword } = this.state;

        this.setState(
            {
                password,
                passwordError: password
                    && confirmPassword
                    && password !== confirmPassword
            }
        );
    };

    onPasswordConfirmChange = e => {
        e.preventDefault();
        const confirmPassword = e.target.value;
        const { password } = this.state;

        this.setState(
            {
                confirmPassword,
                passwordError: password
                    && confirmPassword
                    && password !== confirmPassword
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

    onSignup = e => {
        e.preventDefault();
        
        const id = getRandomUID();

        this.props.addUserToUsers(
            id,
            this.state.userName,
        );

        this.props.handleOnSignup( id );

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

        const isSumbitDisabled = !userName
            || ! password
            || ! confirmPassword
            || passwordError
            || userNameError;

        return (
            <div className="signup-form">
                <input
                    className="signup-input"
                    type="text"
                    placeholder="username"
                    value={userName}
                    onChange={e => this.handleUserInput( e )}
                />
                {
                    userNameError
                        ? <div className="input-error">
                            <span>Sorry, this username is already taken</span>
                        </div>
                        : <div className="input-spacing" />
                }
                <input
                    className="signup-input"
                    style={ { marginBottom: '16px' } }
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    value={password}
                    onChange={e => this.onPasswordChange( e )}
                />
                <input
                    className="signup-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={e => this.onPasswordConfirmChange( e )}
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
                    onClick={e => !isSumbitDisabled && this.onSignup( e )}
                >
                    Sign up
                </button>
                <div className="signup-actions">
                    Already have an account?
                    <NavLink to="/signin">
                        Signin
                    </NavLink>
                </div>
            </div>
        );
    };
}

Signup.propTypes = {
    addUserToUsers: PropTypes.func.isRequired,
    handleOnSignup: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
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
    { addUserToUsers }
)(Signup);