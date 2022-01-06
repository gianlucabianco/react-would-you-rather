import React from 'react';
import PropTypes from 'prop-types';

import './PollCard.css';

import Option from './Option.js';
import Avatar from './Avatar.js';
import PollButton from './PollButton.js';
import CardLabel from './CardLabel.js';

class PollCard extends React.Component {

    render() {

        const {
            color,
            url,
            name,
            questionId,
            isAnswered,
            percentages,
            options,
        } = this.props;

        const [
            firstOption,
            secondOption,
        ] = options;

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
                            key={firstOption}
                        />
                        <p>OR</p>
                        <Option
                            content={ secondOption }
                            color={ '#ff9a9e' }
                            key={secondOption}
                        />
                    </div>
                    <div
                        className={'poll-button-wrapper'}
                    >
                        <PollButton
                            isAnswered={ isAnswered }
                            percentages={ percentages }
                            questionId={ questionId }
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