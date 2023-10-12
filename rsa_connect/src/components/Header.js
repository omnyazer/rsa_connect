import React from 'react';
import { FaBell, FaUser, FaComment } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="bg-white p-2 md:p-1 rounded-md flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5 flex md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-12 rounded-md" style={{ marginRight: '20px' }}>
            <img src="/logo.png" alt="Logo" className="w-full h-full" />
          </div>
        </div>
        <div className="bg-blue-dark rounded-md p-2 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 w-full md:w-auto md:space-x-4">
            <div className="relative w-full md:w-36">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full p-2 pr-12 rounded-md border border-gray-300 bg-white focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-md bg-white">
                <FontAwesomeIcon icon={faSearch} size="lg" className="text-blue-800" />
              </button>
            </div>
            <FaBell size={24} className="text-white md:text-lg" />
            <FaUser size={24} className="text-white md:text-lg" />
            <FaComment size={24} className="text-white md:text-lg" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
