import React from 'react';

const TodoList = ({ todos, onDelete, onToggleComplete, onUpdate, selectedTodo }) => {
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
            <button onClick={() => onUpdate(todo._id)}>
              Update
            </button>
            <button className="delete-button" onClick={() => onDelete(todo._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
