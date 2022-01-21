import React from 'react';
import PropTypes from 'prop-types';
import './AddQuestion.css';

import { connect } from 'react-redux';

import { handleSaveQuestion } from '../actions/questions';

class AddQuestion extends React.Component {

    state = {
        optionOne: '',
        optionTwo: '',
        optionOneLengthError: false,
        optionTwoLengthError: false,
        sameInputsError: false,
        isLoading: false,
    };

    handleOptionOneInput = e => {
        e.preventDefault();
        this.setState(
            {
                optionOne: e.target.value,
                optionOneLengthError: e.target.value.length > 60
                    ? true
                    : false,
                sameInputsError: e.target.value === this.state.optionTwo
            }
        );
    };

    handleOptionTwoInput = e => {
        e.preventDefault();
        this.setState(
            {
                optionTwo: e.target.value,
                optionTwoLengthError: e.target.value.length > 60
                    ? true
                    : false,
                sameInputsError: e.target.value === this.state.optionOne
            }
        );
    };

    onSubmit = e => {
        e.preventDefault();
        const {
            authUser,
            handleSaveQuestion,
            history,
        } = this.props;

        const {
            optionOne,
            optionTwo,
        } = this.state;

        this.setState(
            {
                isLoading: true,
            }
        );

        handleSaveQuestion(
            optionOne,
            optionTwo,
            authUser,
        ).then(
            () => history.push('/')
        ).catch(
            () => this.setState(
                {
                    isLoading: false,
                }
            )
        );

    };

    render() {

        const {
            optionOne,
            optionTwo,
            optionOneLengthError,
            optionTwoLengthError,
            sameInputsError,
            isLoading,
        } = this.state;

        const isSumbitDisabled = !optionOne
            || !optionTwo
            || optionOneLengthError
            || optionTwoLengthError
            || sameInputsError
            || isLoading;

        return (
            <div className="question-card">
                <h1>Add Question</h1>
                <h2>Would you rather...</h2>
                <input
                    className="question-card-input"
                    type="text"
                    placeholder="Type your question here"
                    value={optionOne}
                    onChange={e => this.handleOptionOneInput(e)}
                />
                {
                    optionOneLengthError
                    && <div className="input-error">
                        <span>Questions can't contain more thand 60 characters</span>
                    </div>
                }
                {
                    sameInputsError
                    && <div className="input-error">
                        <span>Questions must be different</span>
                    </div>
                }
                <div className="question-card-divider">
                    <div className='question-card-divider-line'/>
                    <span>OR</span>
                    <div className='question-card-divider-line'/>
                </div>
                <input
                    className="question-card-input"
                    type="text"
                    placeholder="Type your question here"
                    value={optionTwo}
                    onChange={e => this.handleOptionTwoInput(e)}
                />
                {
                    optionTwoLengthError
                    && <div className="input-error">
                        <span>Questions can't contain more thand 60 characters</span>
                    </div>
                }
                {
                    sameInputsError
                    && <div className="input-error">
                        <span>Questions must be different</span>
                    </div>
                }
                <button
                    className="question-card-button"
                    style={
                        isSumbitDisabled
                        ? {
                            backgroundColor: '#bdbdbd',
                            color: '#fffm',
                            border: '1px solid #bdbdbdm',
                            cursor: 'not-allowed',
                        }
                        : {}
                    }
                    onClick={e => !isSumbitDisabled && this.onSubmit(e)}
                >
                    {
                        ! isLoading
                            ? <span>Submit</span>
                            : <span className="loading">Loading</span>
                    }
                </button>
            </div>
        );
    }
}

AddQuestion.propTypes = {
    authUser: PropTypes.string.isRequired,
    handleSaveQuestion: PropTypes.func.isRequired,
};

function mapStateToProps(
    { authUser },
) {
    return {
        authUser
    };
}
  
export default connect(
    mapStateToProps,
    { handleSaveQuestion },
)(AddQuestion);