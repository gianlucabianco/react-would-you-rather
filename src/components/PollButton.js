import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PollButton.css';

import { NavLink } from 'react-router-dom';

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
            questionId,
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
                    { isAnswered ? `${leftPerc}%` : '' }
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
                    { isAnswered ? `${rightPerc}%` : '' }
                </div>
                {
                    ! isAnswered && (
                        <NavLink className="poll-button-cta" to={`/questions/${questionId}`}>
                            <span>Answer question</span>
                        </NavLink>
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