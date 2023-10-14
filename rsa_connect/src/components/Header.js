import React, { useState } from 'react';
import { FaBell, FaUser, FaComment } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarker, faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoSVG from '../assets/Logo.svg';

function Header() {
  const [searchExpanded, setSearchExpanded] = useState(false);

  const handleSearchClick = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleSearchClose = () => {
    setSearchExpanded(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <header className="bg-white p-2 md:p-1 rounded-md flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5 flex md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={LogoSVG} alt="Logo" className="w-20 h-12 rounded-md" />
        </div>
        <div className={`bg-blue-dark rounded-md p-2 w-full flex flex-col md:flex-row items-center justify-between ${searchExpanded ? 'mr-0 transition-margin-right duration-500' : 'mr-2'}`}>
          <div className="flex items-center space-x-6 w-full md:w-auto md:space-x-4">
            <div className={`relative w-full transition-width duration-300 ${searchExpanded ? 'w-full' : 'w-2/3'}`}>
              {searchExpanded && (
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon icon={faMapMarker} size="lg" className="text-blue-800" />
                </span>
              )}
              <input
                type="text"
                placeholder="Rechercher..."
                className={`w-full p-2 pr-12 rounded-md border border-gray-300 bg-white focus:outline-none
                transition-all duration-500 ${searchExpanded ? 'pl-12' : 'pl-2'} ${searchExpanded ? 'mr-0' : 'mr-2'}`}
                onClick={handleSearchClick}
                onKeyPress={handleKeyPress}
              />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon icon={faSearch} size="lg" className={`text-blue-800 ${searchExpanded ? 'transition-all duration-500' : ''} ${searchExpanded ? 'mr-0' : 'mr-1'}`} />
              </span>
            </div>
            {searchExpanded ? (
              <button onClick={handleSearchClose}>
                <FontAwesomeIcon icon={faTimes} size="lg" className="text-white" />
              </button>
            ) : (
              <div className="flex space-x-6">
                <FaBell size={24} className="text-white md:text-lg" />
                <FaComment size={24} className="text-white md:text-lg" />
                <FaUser size={24} className="text-white md:text-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
