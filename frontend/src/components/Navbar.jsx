import React from 'react';
import headerImage from '../assets/headerImage.jpg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import SignupModal from './Signup';
const Navbar = ({onSignupClick}) => {
  return (
    
      <nav className="flex items-center justify-between px-4 py-3 bg-white bg-opacity-70 mx-50 my-2">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-6 md:h-6" />

        {/* Search Form */}
        <form className="flex-1 max-w-md mx-4">
          <input
            type="search"
            placeholder="Search for your favourite groups in ATG"
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
          />
        </form>

        {/* Button (if needed) */}
        <button onClick={onSignupClick}>
      Create Account. <span style={{ color: 'blue' }}>it's free!</span>
    </button>
      </nav>
      
  );
};

export default Navbar;
