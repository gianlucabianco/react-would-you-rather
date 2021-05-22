import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PollButton.scss';

class PollButton extends Component {

    render() {

        const {
            isRevealed,
            percentages,
        } = this.props;

        const [
            leftPerc,
            rightPerc,
        ] = percentages;

        return (
            <div className="poll-button">
                <div
                    className="poll-button__left"
                    style={
                        {
                            width: `${ leftPerc }%`,
                            backgroundColor: isRevealed ? '#1982c4' : '',
                        }
                    }
                >
                    {
                        isRevealed ? `${leftPerc}%` : ''
                    }
                </div>
                <div
                    className="poll-button__right"
                    style={
                        {
                            width: `${ rightPerc }%`,
                            backgroundColor: isRevealed ? '#ff595e' : '',
                        }
                    }
                >
                    {
                        isRevealed ? `${rightPerc}%` : ''
                    }
                </div>
                {
                    ! isRevealed && (
                        <div className="poll-button__cta">
                            <span
                                onClick={
                                    () => {
                                        console.log(
                                            {
                                                isRevealed,
                                                percentages,
                                            }
                                        )
                                    }
                                }
                            >
                                View poll
                            </span>
                            <div
                                className="cta-overlay"
                            />
                        </div>
                    )
                }
            </div>
        );

    };

};

PollButton.propTypes = {
    isRevealed: PropTypes.bool.isRequired,
    percentages: PropTypes.arrayOf( PropTypes.number ),
};

export { PollButton };