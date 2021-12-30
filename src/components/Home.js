import React from 'react';
import { connect } from 'react-redux';

import FilterBar from './FilterBar.js';
import PollCard from './PollCard.js';

class Home extends React.Component {

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

    // TODO: mock method, this should become getReveal()
    randomizeReveal = () => {

        return Math.floor(
        (
            Math.random() * 2
        ) + 1
        ) % 2 === 0;

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
              id,
            } = user;
    
            return {
              avatarURL,
              name,
              id,
              color: '#ffffff',
              isRevealed: this.randomizeReveal(), // TODO: true if the user answer this poll
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
              <FilterBar />
              {
                  cardsData.map(
                    (card, index) => <PollCard
                      color={card.color}
                      url={card.avatarURL}
                      name={card.name}
                      isRevealed={card.isRevealed}
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
      users,
      questions,
    }
  ) => {
    return {
      users,
      questions,
    };
  }
  
  export default connect(
    mapStateToProps,
  )(Home);