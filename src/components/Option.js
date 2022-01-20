import React from 'react';
import PropTypes from 'prop-types';

import './Option.css';

class Option extends React.Component {

    onOptionClick = () => {
        this.props.isAnswerPage
        && this.props.onOptionClick( this.props.option );
    };

    getOptionBackgroundColor = (
        isAnswerPage,
        color,
        isSelected,
    ) => {

        if ( ! isAnswerPage )
            return color;

        return isSelected
            ? color :
            '#11ffee00';
    };

    render() {

        const {
            content,
            color,
            isAnswerPage,
            isSelected,
            answeredOption,
        } = this.props;

        const optionStyle = {
            backgroundColor: this.getOptionBackgroundColor(
                isAnswerPage,
                color,
                isSelected,
            ),
            transition: 'background-color 0.5s ease',
            opacity:  ! isAnswerPage && answeredOption
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
};

export default Option;