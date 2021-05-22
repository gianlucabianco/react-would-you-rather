import React from 'react';
import PropTypes from 'prop-types';

import './PollCard.scss';

import { Option } from './Option.js';
import { Avatar } from './Avatar.js';
import { PollButton } from './PollButton.js';

class PollCard extends React.Component {

    render() {

        const {
            color,
            url,
            name,
            isRevealed,
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
                    className={'poll-card__left'}
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
                    className={'poll-card__right'}
                >
                    <span>Would you rather!</span>
                    <div
                        className={'options'}
                    >
                        <Option
                            content={ firstOption }
                            color={ '#6FDCBF' }
                            key={firstOption}
                        />
                        <p>OR</p>
                        <Option
                            content={ secondOption }
                            color={ '#AE8FDB' }
                            key={secondOption}
                        />
                    </div>
                    <div
                        className={'poll-button-wrapper'}
                    >
                        <PollButton
                            isRevealed={ isRevealed }
                            percentages={ percentages }
                        />
                    </div>
                </div>
            </div>
        );

    };

};

PollCard.propTypes = {
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isRevealed: PropTypes.bool.isRequired,
    percentages: PropTypes.arrayOf( PropTypes.string ),
    options: PropTypes.arrayOf( PropTypes.string ),
};

export { PollCard };