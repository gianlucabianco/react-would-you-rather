import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import './LeaderboardCard.css';

class LeaderboardCard extends React.Component {

    render() {

        const {
            name,
            avatarURL,
            scoreAnsered,
            scoreAsked,
            totalScore,
            placing,
        } = this.props;

        const placingClasses = `
            leaderboard-tag
            ${placing === 1 ? 'first-place' : ''}
            ${placing === 2 ? 'second-place' : ''}
            ${placing === 3 ? 'third-place' : ''}
        `;

        return (
            <div className="leaderboard-card">
                <div className="leaderboard-left">
                    <Avatar
                        url={avatarURL}
                    />
                    <span>
                        {name}
                    </span>
                </div>
                <div className="leaderboard-right">
                    <div className="leaderboard-right-top">
                        {
                            placing < 4 && (
                                <div className={placingClasses}>
                                    <span>{placing}</span> place
                                </div>
                            )
                        }
                    </div>
                    <div className="leaderboard-right-content">
                        <span>
                            Number of answer: {scoreAnsered}
                        </span>
                        <span>
                            Number of questions: {scoreAsked}
                        </span>
                    </div>
                    <div className="leaderboard-right-bottom">
                        <span>
                            Total score: {totalScore}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

LeaderboardCard.propTypes = {
    avatarURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placing: PropTypes.number.isRequired,
    scoreAnsered: PropTypes.number.isRequired,
    scoreAsked: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired,
};

export default LeaderboardCard;