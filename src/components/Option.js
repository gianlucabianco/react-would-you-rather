import React from 'react';
import PropTypes from 'prop-types';

import './Option.css';

class Option extends React.Component {

    render() {

        const {
            content,
            color,
        } = this.props;

        return (
            <div
                className="option"
                style={
                    {
                        backgroundColor: color
                    }    
                }
            >
                <p>
                    {content}
                </p>
                <div
                    className={'option-overlay'}
                />
            </div>
        );

    };

};

Option.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export { Option };