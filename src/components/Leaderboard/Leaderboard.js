import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Leaderboard.css';

import LeaderboardCard from '../LeaderboardCard/LeaderboardCard';

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

Leaderboard.propTypes = {
  users: PropTypes.object.isRequired,
};

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