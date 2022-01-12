import React from 'react';
import './AddQuestion.css';

class AddQuestion extends React.Component {

    state = {
        optionOne: '',
        optionTwo: '',
    };

    handleOptionOneInput = e => {
        e.preventDefault();
        this.setState(
            {
                optionOne: e.target.value,
            }
        );
        console.log({optionOne: this.state.optionOne});
    };

    handleOptionTwoInput = e => {
        e.preventDefault();
        this.setState(
            {
                optionTwo: e.target.value,
            }
        );
        console.log({optionTwo: this.state.optionTwo});
    };

    onSubmit = e => {
        e.preventDefault();
        console.log({TODO: 'onSubmit'});
    };

    render() {

        const {
            optionOne,
            optionTwo,
        } = this.state;

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
                <button
                    className="question-card-button"
                    onClick={e => this.onSubmit(e)}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default AddQuestion;