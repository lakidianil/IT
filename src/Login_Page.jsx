import React, { useState } from 'react';
import './Login_Page.css';
import logo from './lora-logo.png';

function Login({ onLogin, onSignUpClick }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !password.trim()) {
      const msg = 'Please enter both username and password.';
      setErrorMsg(msg);
      speak(msg);
      return;
    }

    const isSuccess = onLogin(name.trim(), password.trim());
    if (!isSuccess) {
      const msg = 'Invalid credentials. Please try again.';
      setErrorMsg(msg);
      speak(msg);
    } else {
      setErrorMsg('');
      speak(`Welcome ${name.trim()}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Company Logo" className="company-logo" />
        <h1 className="login-title">Employee Attendance Portal</h1>

        {errorMsg && <p className="error-message" role="alert">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">🔓 Login</button>
        </form>

        <div className="login-links">
          <button type="button" onClick={onSignUpClick} className="link-btn">
            📝 Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
