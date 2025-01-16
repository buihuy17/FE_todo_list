import React, { useState } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ token }) => {
    const [message, setMessage] = useState('');

    const fetchProtectedData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/protected', {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            setMessage(response.data);
        } catch (err) {
            setMessage('Failed to fetch protected data');
        }
    };

    return (
        <div>
            <h2>Protected Data</h2>
            <button onClick={fetchProtectedData}>Get Protected Data</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ProtectedRoute;
