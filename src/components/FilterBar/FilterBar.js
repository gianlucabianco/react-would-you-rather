import React from 'react';
import PropTypes from 'prop-types';
import './FilterBar.css';

class FilterBar extends React.Component {
    
    onToggleAnswered = () => {
        this.props.onToggleAnswered();
    }

    onToggleNotAnswered = () => {
        this.props.onToggleNotAnswered();
    }

    render() {

        const {
            isNotAnsweredToggled,
            isAnsweredToggled,
        } = this.props;

        const notAnsweredClasses = `filter-button not-answered ${! isNotAnsweredToggled ? 'off' : ''}`;

        const answeredClasses = `filter-button answered ${! isAnsweredToggled ? 'off' : ''}`;

        return (
            <div className="filter-bar">
                <span>Active filters:</span>
                <button
                    className={notAnsweredClasses}
                    onClick={() => this.props.onToggleNotAnswered()}
                >
                    not answered
                </button>
                <button
                    className={answeredClasses}
                    onClick={() => this.props.onToggleAnswered()}
                >
                    answered
                </button>
            </div>
        )
    }
}

FilterBar.propTypes = {
    isAnsweredToggled: PropTypes.bool.isRequired,
    isNotAnsweredToggled: PropTypes.bool.isRequired,
    onToggleAnswered: PropTypes.func.isRequired,
    onToggleNotAnswered: PropTypes.func.isRequired,
};

export default FilterBar;