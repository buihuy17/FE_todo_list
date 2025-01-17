import React from 'react';

const LoginForm = ({ formData, onChange, onLogin, onToggle }) => (
    <form onSubmit={onLogin}>
        <h2>Login</h2>
        <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={onChange}
            required
        />
        <br />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
            required
        />
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={onToggle}>
            Signup
        </button>
    </form>
);

export default LoginForm;
