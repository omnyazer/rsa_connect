import React, { useState } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LogoSVG from '../assets/Logo.svg';
import Profil from './Profil.svg';
import Search from './Search.svg';
import notification from './notification.svg';
import Localisation from './localisation.svg';
import Chat from './chat.svg';

function Header() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [citySelected, setCitySelected] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSearchClick = () => {
    setSearchExpanded(!searchExpanded);
    setCitySelected(false);
  };

  const handleCitySelect = () => {
    setCitySelected(!citySelected);
  };

  const cityOptions = [
    { value: 'paris', label: 'Paris' },
    { value: 'lyon', label: 'Lyon' },
    { value: 'nice', label: 'Nice' },
  ];

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
      <div className="w-full flex md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={LogoSVG} alt="Logo" className="w-20 h-12 rounded-md" />
        </div>
        <div
          className={`bg-blue-dark rounded-md p-2 w-full flex flex-col md:flex-row items-center justify-between ${
            (searchExpanded || citySelected) ? 'mr-0 transition-margin-right duration-500' : 'mr-2'
          }`}
        >
          <div className="flex items-center space-x-2 w-full md:space-x-2">
            <div className="relative w-full transition-width duration-300">
              {searchExpanded && (
               <span
               className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-8 transition-width duration-500 ${
                 citySelected ? 'w-full' : 'w-8'
               }`}
               onClick={handleCitySelect}
               style={{ backgroundColor: 'red' }}
             >
               <img
                 src={Localisation}
                 alt="Localisation"
                 className={`w-8 h-8 text-blue-800 ${citySelected ? 'hidden' : ''}`}
               />
               {citySelected && (
                 <div className="select-container">
                   <Select
                     options={cityOptions}
                     value={selectedCity}
                     onChange={(selectedOption) => setSelectedCity(selectedOption)}
                     className={`rounded-md border border-gray-300 bg-white focus:outline-none z-10 w-full ${
                       citySelected ? 'transition-width duration-500' : ''
                     }`}
                     placeholder="ville"
                     menuPortalTarget={document.body}
                   />
                 </div>
               )}
             </span>
             
              )}
              <input
                type="text"
                placeholder="Rechercher..."
                className={`w-full p-2 pr-12 rounded-md border border-gray-300 bg-white focus:outline-none
                  ${searchExpanded ? 'transition-all duration-500 pl-12' : 'transition-all duration-500 pl-2'} ${
                  searchExpanded ? 'mr-0' : 'mr-2'
                }`}
                onClick={handleSearchClick}
                onKeyDown={handleKeyPress}
              />
              <span className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${searchExpanded ? 'hidden' : ''}`}>
                <img
                  src={Search}
                  alt="Search"
                  className={`w-6 h-6 text-blue-800 ${searchExpanded ? 'hidden' : ''} ${
                    searchExpanded ? 'mr-0' : 'mr-1'
                  }`}
                />
              </span>
            </div>
            {searchExpanded ? (
              <div className="flex space-x-0">
                <button onClick={handleSearchClose}>
                  <FontAwesomeIcon icon={faTimes} size="lg" className="text-white" />
                </button>
              </div>
            ) : (
              <div className={`flex space-x-2 ml-2 ${searchExpanded ? 'w-full' : (citySelected ? 'w-1/10' : 'w-3/4 md:w-1/3')}`}>
                {!citySelected && (
                  <>
                    <img src={Chat} alt="chat" className="w-8 h-8 text-white md:text-lg" />
                    <img src={notification} alt="Notification" className="w-8 h-8 text-white md:text-lg" />
                    <img src={Profil} alt="Profil" className="w-8 h-8 text-white md:text-lg" />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
