import React from 'react';
import { connect } from 'react-redux';
import { UserSelect } from './UserSelect';
import { setAuthUser } from '../actions/authUser.js';

import './Login.css';

class Login extends React.Component {

    state = {
        userId: '',
    };

    onUserChange = (userId) => {
        this.setState({ userId });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.setAuthUser(this.state.userId);
    };

    render() {

        const { userId } = this.state;
        const btnClasses = `login__button ${! userId ? 'disabled' : ''}`;

        return (
            <div className="login">
                <div className="login__header">
                    <h1>Welcome to the Would you rather login page</h1>
                    <p>Please sign in to continue</p>
                </div>
                <ConnectedUserSelect onUserChange={this.onUserChange}/>
                <button
                    className={ btnClasses }
                    onClick={userId ? this.handleSubmit : null}
                >
                    Login
                </button>
            </div>
        );
    }

};

function userSelectMapStateToProps(
    {
        users,
    }
) {
    return {
        users: Object.values(users),
    }
};

function loginMapStateToProps(
    {
        authUser,
    }
) {
    return {
        authUser,
    }
};

const ConnectedUserSelect = connect(
    userSelectMapStateToProps,
)(UserSelect);

export default connect(
    loginMapStateToProps,
    { setAuthUser }
)(Login);