import React from 'react';
import Avatar from './Avatar.js';

import './UserSelect.css';
class UserSelect extends React.Component {

    state = {
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

    onUserChange = newUserId => {
        this.props.onUserChange( newUserId );
    };

    handleUserInput = e => {
        e.preventDefault();
        this.setState(
            {
                userName: e.target.value,
            }
        );
    };

    render() {

        const avatarSpacing = {
            margin: '8px 24px 8px 12px',
        };

        const {
            userId,
            userName,
            userUrl,
            isSelectOpen,
        } = this.state;

        const { users } = this.props

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
                            ? <input
                                type="text"
                                placeholder='Please select a User'
                                value={userName}
                                onChange={e => this.handleUserInput(e)}
                                className='user-select-input'
                            /> 
                            : <>
                                <Avatar
                                    url={userUrl}
                                    size={'80px'}
                                    spacing={ { ...avatarSpacing } }
                                />
                                <span>{userName}</span>
                            </>
                    }
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
                                            this.onUserChange(
                                                user.id
                                            );
                                            this.setState(
                                                {
                                                    userId: user.id,
                                                    userName: user.name,
                                                    userUrl: user.avatarURL,
                                                    isSelectOpen: false,
                                                }
                                            );
                                        }
                                    }
                                >
                                    <Avatar
                                        url={user.avatarURL}
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