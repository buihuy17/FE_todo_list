import React, { useState, useEffect } from 'react';
import TodoList from '../todos/TodoList';
import TodoForm from '../todos/TodoForm';
import TodoFilter from '../todos/TodoFilter';
import './welcome.css';

const Welcome = ({ onLogout }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');  // all, completed, incomplete

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = [
        { id: 1, title: 'Complete homework', completed: false },
        { id: 2, title: 'Buy groceries', completed: true },
        { id: 3, title: 'Call mom', completed: false },
      ];
      setTodos(fetchedTodos);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { id: todos.length + 1, ...newTodo }]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="welcome-container">
      <h2 className="welcome-title">Welcome, you are logged in!</h2>
      <button className="logout-button" onClick={onLogout}>Logout</button>

      <TodoFilter onFilterChange={handleFilterChange} />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={filteredTodos}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default Welcome;
