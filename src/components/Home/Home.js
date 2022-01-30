import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRandomUID } from '../../API/api';

import FilterBar from '../FilterBar/FilterBar';
import PollCard from '../PollCard/PollCard';

class Home extends React.Component {

  state = {
    isNotAnsweredToggled: true,
    isAnsweredToggled: false,
  };

  getPercentages = (
    optionOneVotes,
    optionTwoVotes,
  ) => {

    if(
      ! optionOneVotes
      && ! optionTwoVotes
    ) {
      return [
        50,
        50,
      ];
    }

    const totalVotes = optionOneVotes + optionTwoVotes;

    const optionOnePercentage = Math.round(
      optionOneVotes / totalVotes * 100
    );

    const optionTwoPercentage = Math.round(
      optionTwoVotes / totalVotes * 100
    );

    return [
      optionOnePercentage,
      optionTwoPercentage,
    ]
  }

  getIsAnswered = questionID => {

    const userAnswers = this.props.users[this.props.authUser].answers;

    const userAnswer = userAnswers[questionID];

    return userAnswer || '';

  }

  onToggleAnswered = () => {
    this.setState(
      {
        isAnsweredToggled: ! this.state.isAnsweredToggled,
      }
    );
  }

  onToggleNotAnswered = () => {
    this.setState(
      {
        isNotAnsweredToggled: ! this.state.isNotAnsweredToggled,
      }
    );
  }

  handleAnswerFilters = card => {

    const isUndefined = ! card;

    if( isUndefined )
      return false;

    const areFilterTogglesOff = (
      ! this.state.isAnsweredToggled
      && ! this.state.isNotAnsweredToggled
    );

    if( areFilterTogglesOff )
      return false;

    const areFilterTogglesOn = (
      this.state.isAnsweredToggled
      && this.state.isNotAnsweredToggled
    );;

    if( areFilterTogglesOn )
      return true;

    const showJustNotAnswered = (
      this.state.isNotAnsweredToggled &&
      ! this.state.isAnsweredToggled
    );

    if( showJustNotAnswered )
      return ! card.isAnswered;
    
    const showJustAnswered = (
      this.state.isAnsweredToggled &&
      ! this.state.isNotAnsweredToggled
    );

    if( showJustAnswered )
      return card.isAnswered;
    
    return false;

  }

  getCardsData = (
    questions,
    users,
  ) => {
    return questions.map(
      question => {

        const user = Object.values(users).find(
          user => user.id === question.author
        );

        if(
          !user
        ) {
          return undefined;
        }

        const {
          avatarURL,
          name,
        } = user;

        const isAnswered = this.getIsAnswered(
          question.id
        );

        const optionOne = question.optionOne.text;
        const optionTwo = question.optionTwo.text;

        return {
          color: '#ffffff',
          avatarURL,
          name,
          questionId: question.id,
          isAnswered,
          percentages: this.getPercentages(
            question.optionOne.votes.length,
            question.optionTwo.votes.length,
          ),
          options: [
            isAnswered ? optionOne : `${optionOne.split(' ').shift()}...`,
            isAnswered ? optionTwo : `${optionTwo.split(' ').shift()}...`,
          ],
          timestamp: question.timestamp,
          optionOneVotes: question.optionOne.votes.length,
          optionTwoVotes: question.optionTwo.votes.length,
          key: getRandomUID(),
        }
      }
    ).filter(
      card => this.handleAnswerFilters(card)
    );
  }

  sortCardsData = questions => {

    const answered = questions.filter(
      question => question.isAnswered
    );

    const notAnswered = questions.filter(
      question => ! question.isAnswered
    );

    // The answer are sorted chronologically from newest to oldest.
    // notAnswered first are displayed first than answered.
    return [
      ...notAnswered.sort(
        (x, y) => y.timestamp - x.timestamp
      ),
      ...answered.sort(
        (x, y) => y.timestamp - x.timestamp
      ),
    ];

  }

  render() {

      const { users } = this.props;

      const questions = Object.values(this.props.questions);

      const cardsData = ! questions.length
        ? []
        : this.sortCardsData(
            this.getCardsData(
              questions,
              users,
            )
          );

      return (
          <div className="home">
            <FilterBar
              isNotAnsweredToggled={this.state.isNotAnsweredToggled}
              isAnsweredToggled={this.state.isAnsweredToggled}
              onToggleAnswered={this.onToggleAnswered}
              onToggleNotAnswered={this.onToggleNotAnswered}
            />
            {
              cardsData.map(
                card => <PollCard
                  color={card.color}
                  url={card.avatarURL}
                  name={card.name}
                  isAnswered={card.isAnswered}
                  percentages={card.percentages}
                  options={card.options}
                  questionId={card.questionId}
                  optionOneVotes={card.optionOneVotes}
                  optionTwoVotes={card.optionTwoVotes}
                  key={card.key}
                />
              )
            }
          </div>
      );
  }
}

Home.propTypes = {
  authUser: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (
    {
      authUser,
      users,
      questions,
    }
  ) => {
    return {
      authUser,
      users,
      questions,
    };
  }
  
  export default connect(
    mapStateToProps,
  )(Home);