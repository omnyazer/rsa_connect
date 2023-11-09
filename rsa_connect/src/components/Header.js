import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import LogoSVG from '../assets/Logo.svg';
import Profil from './Profil.svg';
import Search from './Search.svg';
import notification from './notification.svg';
import Localisation from './localisation.svg';
import Chat from './chat.svg';

function Header() {
  const [citySelected, setCitySelected] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [isLocationInputActive, setIsLocationInputActive] = useState(false);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);

  const locationInputRef = useRef(null);

  const handleCitySelect = () => {
    setCitySelected(!citySelected);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleLocationInputClick = () => {
    setIsLocationInputActive(true);
  };

  const handleSelectClick = (e) => {
    e.stopPropagation();
  };

  const handleSearchButtonClick = () => {
    setIsSearchButtonClicked(true);
    // Gérez l'action de recherche ici
    // Exemple : effectuerLaRecherche(searchQuery2);
  };

  const cityOptions = [
    { value: 'paris', label: 'Paris' },
    { value: 'lyon', label: 'Lyon' },
    { value: 'nice', label: 'Nice' },
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <header className="bg-white p-2 md:p-1 rounded-md flex flex-col md:flex-row items-center">
      <div className="w-full flex md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={LogoSVG} alt="Logo" className="w-20 h-12 rounded-md" />
        </div>
        <div className={`bg-blue-dark rounded-md p-2 w-full flex flex-col md:flex-row items-center justify-between`}>
          <div className="flex items-center space-x-2 w-full md:space-x-2">
            <div className="relative w-full transition-width duration-300">
              <span
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-8 transition-width duration-500`}
                onClick={handleCitySelect}
                style={{ width: citySelected ? '100%' : '4rem' }}
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
                      onChange={handleCityChange}
                      onClick={handleSelectClick}
                      className={`rounded-md border border-gray-300 bg-white focus:outline-none z-10 w-full`}
                      placeholder="ville"
                      menuPosition={(state) => ({ ...state, top: locationInputRef.current.offsetHeight + 8, left: 0 })}
                    />
                  </div>
                )}
              </span>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className={`w-full p-2 pr-6 pl-8 rounded-md border border-gray-300 bg-white focus:outline-none placeholder-pr-2`}
                  value={searchQuery1}
                  onChange={(e) => setSearchQuery1(e.target.value)}
                />
                {isMobile && (
                  <button
                    className="bg-blue-dark text-white rounded-md p-2 pl-4 pr-4 flex items-center"
                    onClick={handleSearchButtonClick}
                  >
                  <FontAwesomeIcon icon={faSearch} />
                  </button>
                )}
                {isMobile || (
                  <div className="relative w-full">
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-dark text-white rounded-md p-2 pl-4 pr-4 flex items-center"
                      onClick={() => {
                        // Gérez l'action de recherche ici pour la version de bureau
                      }}
                    >
                      Recherchez&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSearch} />
                    </button>
                    <div className="relative w-full">
                      {isLocationInputActive ? (
                        <div className="select-container" style={{ position: 'absolute', top: '100%', width: '100%' }}>
                          <Select
                            options={cityOptions}
                            value={selectedCity}
                            onChange={handleCityChange}
                            onClick={handleSelectClick}
                            className={`rounded-md border border-gray-300 bg-white focus:outline-none z-10 w-full`}
                            placeholder="ville"
                            menuPosition={(state) => ({ ...state, top: locationInputRef.current.offsetHeight + 8, left: 0 })}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full">
                          <input
                            type="text"
                            placeholder="Saisir un lieu..."
                            className={`w-full p-2 pr-6 rounded-md border border-gray-300 bg-white focus:outline-none`}
                            value={searchQuery2}
                            onChange={(e) => setSearchQuery2(e.target.value)}
                            onClick={handleLocationInputClick}
                            ref={locationInputRef}
                          />
                          {/* Bouton Rechercher à l'intérieur de l'input */}
                          <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-dark text-white rounded-md p-2 pl-4 pr-4 flex items-center"
                            onClick={handleSearchButtonClick}
                          >
                            Rechercher&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={`flex space-x-2 ml-2`}>
              {!citySelected && (
                <>
                  {/* <img src={Chat} alt="chat" className="w-8 h-8 text-white md:text-lg" */}
                  {/* <img src={notification} alt="Notification" className="w-8 h-8 text-white md:text-lg" */}
                  {/* <img src={Profil} alt="Profil" className="w-8 h-8 text-white md:text-lg" */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
