import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './PollCard.css';

import { getRandomUID } from '../../API/api';
import { handleSaveQuestionAnswer } from '../../actions/users';

import Option from '../Option/Option';
import Avatar from '../Avatar/Avatar';
import PollButton from '../PollButton/PollButton';
import CardLabel from '../CardLabel/CardLabel';

class PollCard extends React.Component {

    state = {
        selectedOption: '',
    };

    onOptionClick = option => {
        this.setState({
            selectedOption: option,
        });
    };

    onSubmitAnswer = () => {

        if( this.state.selectedOption ) {
            const {
                authUser,
                questionId,
                handleSaveQuestionAnswer,
            } = this.props;

            try {
                handleSaveQuestionAnswer(
                    authUser,
                    questionId,
                    this.state.selectedOption,
                );

                this.props.history.push('/');

            } catch ( error ) {
                console.error(
                    {
                        error,
                    }
                );
            }

        }

    };

    render() {

        const {
            color,
            url,
            name,
            questionId,
            isAnswered,
            percentages,
            options,
            isAnswerPage,
            optionOneVotes,
            optionTwoVotes,
        } = this.props;

        const [
            firstOption,
            secondOption,
        ] = options;

        const firstOptionKey = getRandomUID();
        const secondOptionKey = getRandomUID();

        const {
            selectedOption,
        } = this.state; 

        return (
            <div
                className="poll-card"
                style={
                    {
                        backgroundColor: color
                    }    
                }
            >
                <div
                    className={'poll-card-left'}
                >
                    <Avatar
                        url={ url }
                    />
                    <p>
                        <span>Asked by:</span>
                        <span>{name}</span>
                    </p>
                </div>
                <div
                    className={'poll-card-right'}
                >
                    <span>Would you rather!</span>
                    <div
                        className={'options'}
                    >
                        <Option
                            content={ firstOption }
                            color={ '#5ab2d2' }
                            isAnswerPage={ isAnswerPage }
                            answeredOption={ isAnswered === 'optionOne'  }
                            isSelected={ selectedOption === 'optionOne' }
                            key={ firstOptionKey }
                            onOptionClick={() => this.onOptionClick('optionOne')}
                        />
                        <p>OR</p>
                        <Option
                            content={ secondOption }
                            color={ '#ff9a9e' }
                            isAnswerPage={ isAnswerPage }
                            answeredOption={ isAnswered === 'optionTwo' }
                            isSelected={ selectedOption === 'optionTwo' }
                            key={ secondOptionKey }
                            onOptionClick={() => this.onOptionClick('optionTwo')}
                        />
                    </div>
                    <div className='poll-card-votes'>
                        {
                            isAnswerPage
                            && <>
                                <span>Option one votes: {optionOneVotes}</span>
                                <span>Option two votes: {optionTwoVotes}</span>
                            </>
                        }
                    </div>
                    <div
                        className={'poll-button-wrapper'}
                    >
                        <PollButton
                            isAnswered={ !! isAnswered }
                            percentages={ percentages }
                            questionId={ questionId }
                            isAnswerPage={ isAnswerPage }
                            onSubmitAnswer={ this.onSubmitAnswer }
                            isDisabled={ !!(isAnswerPage && ! selectedOption) }
                        />
                    </div>
                </div>
                <CardLabel isAnswered={ !! isAnswered } />
            </div>
        );

    };

};

PollCard.propTypes = {
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isAnswered: PropTypes.string.isRequired,
    percentages: PropTypes.arrayOf( PropTypes.number ),
    options: PropTypes.arrayOf( PropTypes.string ),
    authUser: PropTypes.string,
    handleSaveQuestionAnswer: PropTypes.func.isRequired,
    questionId: PropTypes.string.isRequired,
    optionOneVotes: PropTypes.number.isRequired,
    optionTwoVotes: PropTypes.number.isRequired,
};

function mapStateToProps(
    { authUser },
) {
    return {
        authUser
    };
}
  
export default withRouter(
    connect(
        mapStateToProps,
        { handleSaveQuestionAnswer },
    )(PollCard)
);