import React from 'react';
import PropTypes from 'prop-types';

import './Option.css';

class Option extends React.Component {

    onOptionClick = () => {
        this.props.isAnswerPage
        && this.props.onOptionClick( this.props.option );
    };

    getOptionBackgroundColor = (
        isAnswered,
        isAnswerPage,
        answeredOption,
        color,
        isSelected,
    ) => {

        if ( ! isAnswerPage || isAnswerPage && isAnswered && answeredOption )
            return color;

        return isSelected || isAnswerPage && isAnswered
            ? color
            : '#11ffee00';
    };

    render() {

        const {
            content,
            color,
            isAnswerPage,
            isSelected,
            answeredOption,
            isAnswered,
        } = this.props;

        const optionStyle = {
            backgroundColor: this.getOptionBackgroundColor(
                isAnswered,
                isAnswerPage,
                answeredOption,
                color,
                isSelected,
            ),
            transition: 'background-color 0.5s ease',
            opacity: isAnswered && ! answeredOption
                ? 0.5
                : 1,
        };

        const overlayStyle = {
            backgroundColor: isAnswerPage || ! answeredOption
                ? color
                : 'white',
        };

        const overlayClasses = `option-overlay ${! isAnswerPage && answeredOption ? 'option-overlay-disabled' : ''}`;

        return (
            <div
                className="option"
                style={ optionStyle }
            >
                <p>{content}</p>
                <div
                    className={ overlayClasses }
                    style={ overlayStyle }
                    onClick={ this.onOptionClick }
                />
            </div>
        );

    };

};

Option.propTypes = {
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    answeredOption: PropTypes.bool.isRequired,
    isAnswered: PropTypes.bool,
    isAnswerPage: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    onOptionClick: PropTypes.func.isRequired,
};

export default Option;