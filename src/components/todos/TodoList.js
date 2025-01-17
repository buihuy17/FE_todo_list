import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <div>
      <h3>Your Todo List:</h3>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
