import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from '../todos/TodoList';
import TodoForm from '../todos/TodoForm';
import TodoFilter from '../todos/TodoFilter';
import './welcome.css';

const Welcome = ({ onLogout }) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');  // all, completed, incomplete
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getAuthToken = () => {
        return localStorage.getItem('authToken');
    };

    useEffect(() => {
        const fetchTodos = async () => {
            const token = getAuthToken();
            if (!token) {
                alert('Please log in first');
                return;
            }

            try {
                const response = await axios.get('http://localhost:3001/todos', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const handleAddTodo = async (newTodo) => {
        const token = getAuthToken();
        if (!token) {
            alert('Please log in first');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/todos', newTodo, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos([...todos, response.data]);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleUpdate = (id) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        if (todoToUpdate) {
            console.log('Edit Todo:', todoToUpdate);
        }
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

            <button onClick={() => setIsModalOpen(true)}>Add Todo</button>
            {isModalOpen && (
                <div className="modal">
                    <TodoForm onAddTodo={handleAddTodo} onClose={() => setIsModalOpen(false)} />
                </div>
            )}

            <TodoList
                todos={filteredTodos}
                onDelete={handleDelete}
                onToggleComplete={handleToggleComplete}
                onUpdate={handleUpdate}
            />
        </div>
    );
};

export default Welcome;
