import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PollButton.css';

class PollButton extends Component {
    

    mockMethod = args => {
        console.log(
            {
                ...args,
            }
        )
    }

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
                            backgroundColor: isRevealed ? '#adcdd8' : '',
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
                            backgroundColor: isRevealed ? '#ffcfd1' : '',
                        }
                    }
                >
                    {
                        isRevealed ? `${rightPerc}%` : ''
                    }
                </div>
                {
                    ! isRevealed && (
                        <div
                            className="poll-button__cta"
                            onClick={
                                () => {
                                    this.mockMethod(
                                        {
                                            msg: 'ciao',
                                            isRevealed,
                                            percentages,
                                        }
                                    )
                                }
                            }
                        >
                            <span>View poll</span>
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