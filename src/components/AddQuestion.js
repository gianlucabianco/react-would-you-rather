import React from 'react';
import './AddQuestion.css';

class AddQuestion extends React.Component {

    state = {
        optionOne: '',
        optionTwo: '',
        optionOneError: false,
        optionTwoError: false,
    };

    handleOptionOneInput = e => {
        e.preventDefault();
        this.setState(
            {
                optionOne: e.target.value,
                optionOneError: e.target.value.length > 60
                    ? true
                    : false,
            }
        );
    };

    handleOptionTwoInput = e => {
        e.preventDefault();
        this.setState(
            {
                optionTwo: e.target.value,
                optionTwoError: e.target.value.length > 60
                    ? true
                    : false,
            }
        );
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(
            {
                TODO: 'handle onSubmit, take the right data to handle redux',
                optionOne: this.state.optionOne,
                optionTwo: this.state.optionTwo,
            }
        );
    };

    render() {

        const {
            optionOne,
            optionTwo,
            optionOneError,
            optionTwoError,
        } = this.state;

        const isSumbitDisabled = !optionOne || !optionTwo || optionOneError || optionTwoError;

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
                    optionOneError
                    && <div className="input-error">
                        <span>Questions can't contain more thand 60 characters</span>
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
                    optionTwoError
                    && <div className="input-error">
                        <span>Questions can't contain more thand 60 characters</span>
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
                    Submit
                </button>
            </div>
        );
    }
}

export default AddQuestion;