import React from 'react';
import { connect } from 'react-redux';
// import './Leaderboard.css'; // TODO: rules

import LeaderboardCard from './LeaderboardCard';

class Leaderboard extends React.Component {
    render() {

        const {
            users,
        } = this.props;

        const usersScoring = Object.values(users).map(
            user => {
                const scoreAnsered = Object.keys(user.answers).length;
                const scoreAsked = user.questions.length;
                return {
                    name: user.name,
                    id: user.id,
                    avatarURL: user.avatarURL,
                    scoreAnsered,
                    scoreAsked,
                    totalScore: scoreAnsered + scoreAsked, 
                }
            }
        ).sort(
            (x, y) => y.totalScore - x.totalScore
        );

        return (
            <div className="leaderboard">
                {/* TODO: spacing / rules */}
                <h1>Leaderboard</h1>
                {
                    usersScoring.map(
                        (user, index) => <LeaderboardCard
                            name={user.name}
                            avatarURL={user.avatarURL}
                            scoreAnsered={user.scoreAnsered}
                            scoreAsked={user.scoreAsked}
                            totalScore={user.totalScore}
                            key={user.id}
                            placing={index + 1}
                        />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (
    {
      users,
    }
  ) => {
    return {
      users,
    };
  }
  
  export default connect(
    mapStateToProps,
  )(Leaderboard);