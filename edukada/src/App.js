import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpeg';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt='edukadalogo' className="logo"/>
      </div>
      <h2 className="heading">EduKada</h2>
      <input
        className="input"
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="input"
        type="email"
        placeholder="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        className="input"
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button
        className="button register"
        type="submit"
        onClick={handleSubmit}
      >
        Register
      </button>
      
      <p className="account-text">Already have an account?</p>

      <button className="login">Log In</button>

    </div>
  );
};

export default RegistrationForm;
