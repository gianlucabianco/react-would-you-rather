import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SignOutButton.css';
import Avatar from './Avatar';

class SignOutButton extends Component {

    render() {

        const {
            userUrl,
            userName,
        } = this.props;

        return (
            <div className="signout-button">
                <div className="avatar-wrapper" >
                    <Avatar
                        url={ userUrl }
                        size={'40px'}
                    />
                    <span className="user-name">
                        { userName }
                    </span>
                </div>
                <span className="signout-cta">
                    Sign out
                </span>
            </div>
        );

    };

};

SignOutButton.propTypes = {
    userUrl: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
};

export default SignOutButton;