import React, { useState, useEffect } from 'react';

const TodoForm = ({ todo, onAddTodo, onSave, onClose }) => {
  const [formData, setFormData] = useState({ title: '', completed: false });

  useEffect(() => {
    if (todo) {
      setFormData({ title: todo.title, completed: todo.completed });
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      onSave(formData);
    } else {
      onAddTodo(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task"
          required
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
        />
        Completed
      </label>
      <button type="submit">{todo ? 'Save' : 'Add'}</button>
      <button type="button" onClick={onClose}>Close</button>
    </form>
  );
};

export default TodoForm;
