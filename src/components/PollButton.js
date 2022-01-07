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
            isAnswerPage,
        } = this.props;

        const [
            leftPerc,
            rightPerc,
        ] = percentages;

        const pollButtonLeftStyle = {
            width: `${ leftPerc }%`,
            backgroundColor: isAnswered ? '#adcdd8' : '',
        };

        const pollButtonRightStyle = {
            width: `${ rightPerc }%`,
            backgroundColor: isAnswered ? '#ffcfd1' : '',
        };
        
        const pollButtonLeftCta = isAnswered
            ? `${leftPerc}%`
            : '';

        const pollButtonRightCta = isAnswered
            ? `${rightPerc}%`
            : '';

        return (
            <div className="poll-button">
                <div
                    className="poll-button-left"
                    style={ pollButtonLeftStyle }
                >
                    { pollButtonLeftCta }
                </div>
                <div
                    className="poll-button-right"
                    style={ pollButtonRightStyle }
                >
                    { pollButtonRightCta }
                </div>
                {
                    ! isAnswered
                    && (
                        isAnswerPage
                        ? <NavLink
                            className="poll-button-cta"
                            // TODO: maybe the redirect should be handled by the parent component
                            to={'/'}
                            onClick={
                                () => {
                                    this.mockMethod(
                                        {
                                            msg: 'TODO: handle answer question',
                                            isAnswered,
                                            isAnswerPage,
                                            percentages,
                                        }
                                    )
                                }
                            }
                        >
                            <span>Answer</span>
                        </NavLink>
                        : <NavLink
                            className="poll-button-cta"
                            to={`/questions/${questionId}`}
                        >
                            <span>Answer</span>
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