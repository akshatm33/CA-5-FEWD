import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../App.css" // Import useNavigate for React Router v6

const Navbar = ({ setSearchTerm }) => {
  const navigate = useNavigate(); // Access the navigate function

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKalviumClick = () => {
    // Redirect to BookList page when Kalvium is clicked
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="brand" onClick={handleKalviumClick}>
        <span>BOOK STORE</span>
      </div>

      <div >
        <input
          className="search-bar"
          type="text"
          placeholder="Search books..."
          onChange={handleSearch}
        />
      </div>


      <div className="register-button">
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
