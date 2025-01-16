import React, { useState } from 'react';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <ProtectedRoute token={token} />
      )}
    </div>
  );
};

export default App;
