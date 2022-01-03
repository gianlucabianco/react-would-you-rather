import React from 'react';
import Avatar from './Avatar';
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
                                <div className={
                                    `
                                        leaderboard-tag
                                        ${placing === 1 ? 'first-place' : ''}
                                        ${placing === 2 ? 'second-place' : ''}
                                        ${placing === 3 ? 'third-place' : ''}
                                    `
                                }>
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

export default LeaderboardCard;