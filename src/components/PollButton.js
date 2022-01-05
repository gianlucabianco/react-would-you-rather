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
            isAnswered,
            percentages,
        } = this.props;

        const [
            leftPerc,
            rightPerc,
        ] = percentages;

        return (
            <div className="poll-button">
                <div
                    className="poll-button-left"
                    style={
                        {
                            width: `${ leftPerc }%`,
                            backgroundColor: isAnswered ? '#adcdd8' : '',
                        }
                    }
                >
                    {
                        isAnswered ? `${leftPerc}%` : ''
                    }
                </div>
                <div
                    className="poll-button-right"
                    style={
                        {
                            width: `${ rightPerc }%`,
                            backgroundColor: isAnswered ? '#ffcfd1' : '',
                        }
                    }
                >
                    {
                        isAnswered ? `${rightPerc}%` : ''
                    }
                </div>
                {
                    ! isAnswered && (
                        <div
                            className="poll-button-cta"
                            onClick={
                                () => {
                                    this.mockMethod(
                                        {
                                            msg: 'TODO: handle answer question',
                                            isAnswered,
                                            percentages,
                                        }
                                    )
                                }
                            }
                        >
                            <span>Answer question</span>
                        </div>
                    )
                }
            </div>
        );

    };

};

PollButton.propTypes = {
    isAnswered: PropTypes.bool.isRequired,
    percentages: PropTypes.arrayOf( PropTypes.number ),
};

export default PollButton;