import React from 'react';
import PropTypes from 'prop-types';

import './PollCard.css';

import Option from './Option.js';
import Avatar from './Avatar.js';
import PollButton from './PollButton.js';
import CardLabel from './CardLabel.js';

class PollCard extends React.Component {

    state = {
        selectedOption: '', // TODO: 'optionOne' or 'optionTwo'
    };

    onOptionClick = option => {
        this.setState({
            selectedOption: option,
        });
    };

    onSubmitAnswer = () => {
        console.log({parentProps: this.props, parentState: this.state});
        // dispatch the question
        // redirect to home page
    };

    render() {

        const {
            color,
            url,
            name,
            questionId,
            isAnswered,
            percentages,
            options,
            isAnswerPage,
            userId,
        } = this.props;

        const [
            firstOption,
            secondOption,
        ] = options;

        // TODO: handle this.state.selectedOption
        const { selectedOption } = this.state; 
        // TODO: handle isAnswered
        // TODO: handle userId

        return (
            <div
                className="poll-card"
                style={
                    {
                        backgroundColor: color
                    }    
                }
            >
                <div
                    className={'poll-card-left'}
                >
                    <Avatar
                        url={ url }
                    />
                    <p>
                        <span>Asked by:</span>
                        <span>{name}</span>
                    </p>
                </div>
                <div
                    className={'poll-card-right'}
                >
                    <span>Would you rather!</span>
                    <div
                        className={'options'}
                    >
                        <Option
                            content={ firstOption }
                            color={ '#5ab2d2' }
                            isAnswerPage={ isAnswerPage }
                            isSelected={ selectedOption === 'optionOne' }
                            key={ firstOption }
                            onOptionClick={() => this.onOptionClick('optionOne')}
                        />
                        <p>OR</p>
                        <Option
                            content={ secondOption }
                            color={ '#ff9a9e' }
                            isAnswerPage={ isAnswerPage }
                            isSelected={ selectedOption === 'optionTwo' }
                            key={ secondOption }
                            onOptionClick={() => this.onOptionClick('optionTwo')}
                        />
                    </div>
                    <div
                        className={'poll-button-wrapper'}
                    >
                    {/* TODO: handle answer sumission && UI */}
                        <PollButton
                            isAnswered={ isAnswered }
                            percentages={ percentages }
                            questionId={ questionId }
                            isAnswerPage={ isAnswerPage }
                            onSubmitAnswer={ this.onSubmitAnswer }
                        />
                    </div>
                </div>
                <CardLabel isAnswered={ isAnswered } />
            </div>
        );

    };

};

PollCard.propTypes = {
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isAnswered: PropTypes.bool.isRequired,
    percentages: PropTypes.arrayOf( PropTypes.number ),
    options: PropTypes.arrayOf( PropTypes.string ),
};

export default PollCard;