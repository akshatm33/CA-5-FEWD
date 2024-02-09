import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      repeatPassword: ''
    });
  
    const navigate = useNavigate(); // Access the navigate function
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Check if any field is empty
      if (!formData.name || !formData.email || !formData.password || !formData.repeatPassword) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Validate form data
      // Save data or make API request if validation passes
  
      // Redirect to BookList page
      navigate('/');
    };
  
    return (
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" name="name" placeholder='Enter your name...' value={formData.name} onChange={handleChange} />
          </label>
          <label>Email:
            <input type="email" name="email" placeholder='Enter your email...' value={formData.email} onChange={handleChange} />
          </label>
          <label>Password:
            <input type="password" name="password" placeholder='Enter your password... ' value={formData.password} onChange={handleChange} />
          </label>
          <label>Repeat Password:
            <input type="password" name="repeatPassword" placeholder='Re-enter your passwrd...' value={formData.repeatPassword} onChange={handleChange} />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  };
  
  export default RegistrationForm;