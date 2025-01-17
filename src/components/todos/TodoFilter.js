import React from 'react';

const TodoFilter = ({ onFilterChange, filter }) => {
    return (
        <div>
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => onFilterChange('all')}
            >
                All
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => onFilterChange('completed')}
            >
                Completed
            </button>
            <button
                className={filter === 'incomplete' ? 'active' : ''}
                onClick={() => onFilterChange('incomplete')}
            >
                Incomplete
            </button>
        </div>
    );
};

export default TodoFilter;
