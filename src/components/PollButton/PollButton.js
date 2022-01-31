import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PollButton.css';

import { NavLink } from 'react-router-dom';

class PollButton extends Component {

    onSubmitAnswer = () => {
        this.props.onSubmitAnswer();
    }

    render() {

        const {
            isAnswered,
            percentages,
            questionId,
            isAnswerPage,
            isDisabled,
        } = this.props;

        const [
            leftPerc,
            rightPerc,
        ] = percentages;

        const shouldRenderPercentages = isAnswerPage && isAnswered;

        const pollButtonLeftStyle = {
            width: `${ leftPerc }%`,
            backgroundColor: shouldRenderPercentages ? '#adcdd8' : '',
        };

        const pollButtonRightStyle = {
            width: `${ rightPerc }%`,
            backgroundColor: shouldRenderPercentages ? '#ffcfd1' : '',
        };
        
        const pollButtonLeftCta = shouldRenderPercentages
            ? `${leftPerc}%`
            : '';

        const pollButtonRightCta = shouldRenderPercentages
            ? `${rightPerc}%`
            : '';

        const pollButtonClasses = `poll-button-cta ${isDisabled ? 'poll-button-cta-disabled' : ''}`;

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
                    (
                        isAnswerPage
                            ? <div
                                className={pollButtonClasses}
                                onClick={this.onSubmitAnswer}
                            >
                                <span>Answer {isDisabled}</span>
                            </div>
                            : <NavLink
                                className="poll-button-cta"
                                to={`/questions/${questionId}`}
                            >
                                {
                                    isAnswered
                                        ? <span>View poll</span>
                                        : <span>Answer poll</span>
                                }
                            </NavLink>
                    )
                }
            </div>
        );

    };

};

PollButton.propTypes = {
    isAnswered: PropTypes.bool.isRequired,
    isAnswerPage: PropTypes.bool,
    percentages: PropTypes.arrayOf( PropTypes.number ),
    questionId: PropTypes.string.isRequired,
    onSubmitAnswer: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
};

export default PollButton;