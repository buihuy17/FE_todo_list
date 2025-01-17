import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './components/users/LoginForm';
import SignupForm from './components/users/SignupForm';
import Welcome from './components/users/Welcome';
import './AuthApp.css';
import { useNavigate } from 'react-router-dom';

const AuthApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { username, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users/register', { username, password });
            if (response.status === 201 || 200 || 204) {
                alert('Signup successful!');
                setFormData({ username: '', password: '', confirmPassword: '' });
                setShowSignup(false);
            } else {
                alert('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert(error.response?.data?.message || 'Signup failed. Please try again.');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, password } = formData;

        try {
            const response = await axios.post('http://localhost:3001/users/login', { username, password });
            if (response.status === 200) {
                alert('Login successful!');
                localStorage.setItem('authToken', response.data.token);
                setIsLoggedIn(true);
                setFormData({ username: '', password: '', confirmPassword: '' });
                navigate('/todos');
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        alert('Logged out successfully!');
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">Bui Van Huy</h1>

            {isLoggedIn ? (
                <Welcome onLogout={handleLogout} />
            ) : (
                <div className="auth-card">
                    {showSignup ? (
                        <SignupForm
                            formData={formData}
                            onChange={handleInputChange}
                            onSignup={handleSignup}
                            onToggle={() => setShowSignup(false)}
                        />
                    ) : (
                        <LoginForm
                            formData={formData}
                            onChange={handleInputChange}
                            onLogin={handleLogin}
                            onToggle={() => setShowSignup(true)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default AuthApp;
