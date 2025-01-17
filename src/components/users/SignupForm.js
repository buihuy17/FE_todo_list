import React from 'react';

const SignupForm = ({ formData, onChange, onSignup, onToggle }) => (
  <form onSubmit={onSignup}>
    <h2>Signup</h2>
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
    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={onChange}
      required
    />
    <br />
    <button type="submit">Signup</button>
    <button type="button" onClick={onToggle}>
      Back to Login
    </button>
  </form>
);

export default SignupForm;
