import React from 'react';
import users from '../users';
import { Avatar } from './Avatar.js';

import './UserSelect.css';

class UserSelect extends React.Component {

    state = {
        users,
        userId: '',
        userName: '',
        userUrl: '',
        isSelectOpen: false,
    };

    toggleDropdown = isOpen => {
        this.setState(
            {
                isSelectOpen: isOpen,
            }
        );
    };

    blurUserSelect = () => {
        this.state.isSelectOpen
            && this.setState(
                {
                    isSelectOpen: false,
                }
            );
    };

    handleDropdownClick = () => {
        this.toggleDropdown(
            ! this.state.isSelectOpen
        );
    };

    render() {

        const avatarSpacing = {
            margin: '8px 24px 8px 12px',
        };

        const {
            users,
            userId,
            userName,
            userUrl,
            isSelectOpen,
        } = this.state;

        return (
            <div
                className="user-select"
                tabIndex="0"
                onBlur={ this.blurUserSelect }
            >
                <div
                    className="dropdown"
                    onClick={ this.handleDropdownClick }
                >
                    {
                        (! isSelectOpen && ! userId) || isSelectOpen
                            ? <span>Please select a User</span>
                            : <>
                                <Avatar
                                    url={userUrl}
                                    size={'80px'}
                                    spacing={ { ...avatarSpacing } }
                                />
                                <span>{userName}</span>
                            </>
                    }
                    {/* TODO: SELECT-BTN SHOULD BE A COMPONENT */}
                    {
                        ! isSelectOpen
                            ? <span className="select-button" >
                                &#9660;
                            </span>
                            : <span className="select-button" >
                                &#x25B2;
                            </span>
                    }
                </div>
                <div className="optionWrapper">
                    {
                        isSelectOpen
                        && users.map(
                            user => (
                                <div
                                    className="userOption"
                                    key={user.id}
                                    onClick={
                                        () => {
                                            this.setState(
                                                {
                                                    userId: user.id,
                                                    userName: user.name,
                                                    userUrl: user.avatarUrl,
                                                    isSelectOpen: false,
                                                }
                                            );
                                        }
                                    }
                                >
                                    <Avatar
                                        url={user.avatarUrl}
                                        size={'80px'}
                                        spacing={ { ...avatarSpacing } }
                                    />
                                    <span>{user.name}</span>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }

};

export { UserSelect };