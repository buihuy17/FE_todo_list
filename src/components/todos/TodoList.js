import React from 'react';

const TodoList = ({ todos, onDelete, onToggleComplete, onUpdate }) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <div className="todo-content">
            <span className="todo-title" onClick={() => onToggleComplete(todo.id)}>
              {todo.title}
            </span>
          </div>

          <div className="todo-actions">
            <button className="update-button" onClick={() => onUpdate(todo.id)}>
              Update
            </button>
            <button className="delete-button" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
