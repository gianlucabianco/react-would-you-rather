import React from 'react';
import { connect } from 'react-redux';
// import './Leaderboard.css'; // TODO: rules

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
                {/* TODO: implement leaderboard UI */}
                {
                    usersScoring.map(
                        user => <div
                            key={user.id}
                        >
                            <div>
                                <div>
                                    <img
                                        src={user.avatarURL}
                                        alt={user.name}
                                    />
                                </div>
                                <div>
                                    <div>
                                        Name: {user.name}
                                    </div>
                                    <div>
                                        Number of answer: {user.scoreAnsered}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        Number of questions: {user.scoreAsked}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div style={{fontWeight: '800'}}>
                                        Total score: {user.scoreAnsered + user.scoreAsked}
                                    </div>
                                </div>
                            </div>
                            <div style={{margin: '16px 0'}}>
                                ---
                            </div>
                        </div>
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