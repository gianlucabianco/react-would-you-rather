import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

class Avatar extends React.Component {

    render() {

        const {
            url,
            size,
            spacing,
        } = this.props;

        return (
            <div
                className="avatar"
                style={
                    {
                        width: size || '150px',
                        height: size || '150px',
                        ...spacing,
                    }
                }
            >
                <figure
                    className="profile-img"
                    style={
                        {
                            backgroundImage: `url("${ url }")`,
                        }
                    }
                />
            </div>
        );

    };

};

Avatar.propTypes = {
    url: PropTypes.string.isRequired,
    size: PropTypes.string,
    spacing: PropTypes.object,
};

export default Avatar;