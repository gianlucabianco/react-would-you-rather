import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';

import PollCard from './PollCard';

class QuestionPage extends React.Component {

    shouldPollCardBeRender = cardData => {
        if(!cardData)
            return false;

        return Object.keys(cardData).length;
    };

    getIsAnswered = questionID => {

        const userAnswers = this.props.users[this.props.authUser].answers;

        const userAnswer = userAnswers[questionID];

        return userAnswer || '';

    }
    
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

    getCardData = pageId => {
        const {
            questions,
            authUser,
            users,
        } = this.props;

        const usersIds = users ? Object.keys(users) : [];
        
        const question = questions[pageId];

        if( ! authUser || ! usersIds.length || ! question )
            return {};

        const author = Object.values(users).find(
            author => author.id === question.author
        );
  
        if( ! author )
            return {};

        const {
            avatarURL,
            name,
        } = author;

        return {
            color: '#ffffff',
            avatarURL,
            name,
            isAnswered: this.getIsAnswered(pageId),
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

    render() {

        const pageId = this.props.match.params.question_id;

        const cardData = this.getCardData(pageId);

        if( ! this.shouldPollCardBeRender( cardData ) ) {
            return (
                <Redirect to="/error-page" />
            );
        }

        const {
            color,
            avatarURL,
            name,
            isAnswered,
            percentages,
            options,
        } = cardData;

        const isAnswerPage = this.props.location.pathname.includes('/questions/');

        return (
            <PollCard
                color={color}
                url={avatarURL}
                name={name}
                isAnswered={isAnswered}
                percentages={percentages}
                options={options}
                isAnswerPage={isAnswerPage}
                questionId={pageId}
                userId={this.props.authUser}
            />
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
  )(QuestionPage);