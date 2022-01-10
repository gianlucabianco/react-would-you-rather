import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PollButton.css';

import { NavLink } from 'react-router-dom';

class PollButton extends Component {

    onSubmitAnswer = () => {
        // TODO: remove log after test
        console.log({propsButton: this.props})
        this.props.onSubmitAnswer();
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
                        ? <div
                            className="poll-button-cta"
                            onClick={this.onSubmitAnswer}
                        >
                            <span>Answer</span>
                        </div>
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
    isAnswerPage: PropTypes.bool,
    percentages: PropTypes.arrayOf( PropTypes.number ),
    questionId: PropTypes.string.isRequired,
};

export default PollButton;