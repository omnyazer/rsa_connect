import React from 'react';
import { FaBell, FaUser, FaComment } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-white p-2 md:p-1 rounded-md flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="w-24 h-16 rounded-md" />
      </div>
      <div className="bg-blue-dark rounded-md p-2 w-full md:w-3/5 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full md:w-36 p-2 pr-12 rounded-md border border-gray-300 bg-white focus:outline-none"
          />
          <button className="w-12 h-10 rounded-md bg-white">
            <FontAwesomeIcon icon={faSearch} size="lg" className="text-blue-800" />
          </button>
        </div>
        <div className="flex space-x-4">
          <FaBell size={24} className="text-white" />
          <FaUser size={24} className="text-white" />
          <FaComment size={24} className="text-white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
