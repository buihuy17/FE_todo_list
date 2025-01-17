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
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
