import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
    render() {
        return (
            <div className="filter-bar">
                <span>Active filters:</span>
                <button className="filter-button not-answered">not answered</button>
                <button className="filter-button answered off">answered</button>
            </div>
        )
    }
}

export default FilterBar;