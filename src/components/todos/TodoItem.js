import React from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        onClick={() => onToggleComplete(todo.id)}
        className="todo-title"
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
