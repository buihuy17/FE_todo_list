import React, { useState } from 'react';

const TodoForm = ({ onAddTodo, onClose }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false); // Trạng thái mặc định là false

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert('Please enter a title');
      return;
    }

    const newTodo = { title, completed };
    onAddTodo(newTodo);  // Gửi todo mới lên component cha

    setTitle('');
    setCompleted(false);
    onClose();  // Đóng modal sau khi thêm todo thành công
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Completed:</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
