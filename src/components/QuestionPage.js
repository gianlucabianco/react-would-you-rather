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

        const userAnswers = Object.keys(
            this.props.users[this.props.authUser].answers
        );

        return !! userAnswers.find(
            answer => answer === questionID
        );

    }
    
    getPercentages = (
        optionOneVotes,
        optionTwoVotes,
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

        return (
            <PollCard
                color={color}
                url={avatarURL}
                name={name}
                isAnswered={isAnswered}
                percentages={percentages}
                options={options}
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