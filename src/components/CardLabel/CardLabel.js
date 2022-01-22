import React from 'react';
import PropTypes from 'prop-types';

import './CardLabel.css';

class CardLabel extends React.Component {

    render() {

        const {
            isAnswered,
        } = this.props;

        return (
            <div
                className={`card-label ${isAnswered ? 'answered' : 'not-answered'}`}
            >
                {
                    isAnswered ?
                    'answered'
                    : 'not answered'
                }
            </div>
        );

    };

};

CardLabel.propTypes = {
    isAnswered: PropTypes.bool.isRequired,
};

export default CardLabel;