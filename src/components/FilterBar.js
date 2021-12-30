import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {

    render() {

        const {
            isNotAnsweredToggled,
            isAnsweredToggled,
        } = this.props;

        return (
            <div className="filter-bar">
                <span>Active filters:</span>
                <button className={`filter-button not-answered ${! isNotAnsweredToggled ? 'off' : ''}`}>not answered</button>
                <button className={`filter-button not-answered ${! isAnsweredToggled ? 'off' : ''}`}>answered</button>
            </div>
        )
    }
}

export default FilterBar;