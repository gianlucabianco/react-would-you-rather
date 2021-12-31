import React from 'react';
import { connect } from 'react-redux';

import FilterBar from './FilterBar.js';
import PollCard from './PollCard.js';

class Home extends React.Component {

  state = {
    isNotAnsweredToggled: true,
    isAnsweredToggled: false,
  };

  getPercentages = (
      optionOneVotes,
      optionTwoVotes
  ) => {

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

    const userAnswers = Object.keys(
      this.props.users[this.props.authUser].answers
    );

    return !! userAnswers.find(answer => answer === questionID);

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

    render() {

        const { users } = this.props;

        const questions = Object.values(this.props.questions);

        const cardsData = ! questions.length
        ? []
        : questions.map(
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
    
            return {
              color: '#ffffff',
              avatarURL,
              name,
              isAnswered: this.getIsAnswered(question.id),
              percentages: this.getPercentages(
                question.optionOne.votes.length,
                question.optionTwo.votes.length,
              ),
              options: [
                question.optionOne.text,
                question.optionTwo.text,
              ],
            }
          }
        ).filter(
            card => card
        );

        return (
            <div className="home">
              <FilterBar
                isNotAnsweredToggled={this.state.isNotAnsweredToggled}
                isAnsweredToggled={this.state.isAnsweredToggled}
                onToggleAnswered={this.onToggleAnswered}
                onToggleNotAnswered={this.onToggleNotAnswered}
              />
              {/* TODO: filter cardsData based on the answered and not answered state */}
              {
                  cardsData.map(
                    (card, index) => <PollCard
                      color={card.color}
                      url={card.avatarURL}
                      name={card.name}
                      isAnswered={card.isAnswered}
                      percentages={card.percentages}
                      options={card.options}
                      key={card.name + index}
                    />
                  )
              }
            </div>
        );
    }
}

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