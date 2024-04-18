import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    reEnterNewPassword: ''
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
    // Here you can handle form submission, e.g., send data to the server
    console.log(formData);
  };

  const handleBackToLogin = () => {
    // Handle the back-to-login action (e.g., navigate to the login page)
    console.log("Back to Log In");
  };

  return (
    <div className="container">
      <h2 className="heading">Forgot Password</h2>
      <input
        className="input"
        type="password"
        placeholder="Enter New Password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
      />
      <input
        className="input"
        type="password"
        placeholder="Re-enter New Password"
        name="reEnterNewPassword"
        value={formData.reEnterNewPassword}
        onChange={handleChange}
      />
      <button
        className="button confirm"
        type="submit"
        onClick={handleSubmit}
      >
        Confirm
      </button>
      <p className="back-to-login" onClick={handleBackToLogin}>
        Back to Log In
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
