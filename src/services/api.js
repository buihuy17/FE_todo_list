import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';
export const getTodos = async (status = '') => {
    const response = await axios.get(`${API_URL}?status=${status}`);
    return response.data;
};

export const addTodo = async (title) => {
    const response = await axios.post(API_URL, { title, status: 'not completed' });
    return response.data;
};

export const updateTodo = async (id, updatedData) => {
    console.log('Updating todo with ID:', id);
    console.log('Updated data:', updatedData);

    const token = localStorage.getItem('authToken');
    if (!token) {
        console.error('No token found. Please log in again.');
        throw new Error('No token found');
    }
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log('Updated Todo:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error response from server:', error.response.data);
            throw new Error(error.response.data || 'Error updating todo');
        } else if (error.request) {
            console.error('No response from server:', error.request);
            throw new Error('No response from server');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
};

export const deleteTodo = async (id) => {
    try {
        const token = localStorage.getItem('authToken'); 
        if (!token) {
            throw new Error('No authentication token found');
        }

        console.log('Deleting Todo with ID:', id);

        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
};
