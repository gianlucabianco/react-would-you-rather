import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LoginButton.css';
import { Avatar } from './Avatar';

class LoginButton extends Component {

    render() {

        const {
            userUrl,
            userName,
            isLoggedIn,
        } = this.props;

        return (
            <>
                {
                    ! isLoggedIn
                        ? 'Login'
                        : <div className="login-button">
                            <div className="avatar-wrapper" >
                                <Avatar
                                    url={ userUrl }
                                    size={'40px'}
                                />
                                <span className="user-name">
                                    { userName }
                                </span>
                            </div>
                            <span className="logout-button">
                                Logout
                            </span>
                        </div>
                }
            </>
        );

    };

};

LoginButton.propTypes = {
    userUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export { LoginButton };