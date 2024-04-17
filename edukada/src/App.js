import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);

    
  };

  return (
    <div className="App">
      <h2 className="title">EduKada</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="form-group">
          
          <input
            placeholder='Email Address'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          
          <input
          placeholder='Password'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <div className='RememberMe'>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href=''>Forgot Password</a>
        </div>
        
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>

  );
}

export default App;
