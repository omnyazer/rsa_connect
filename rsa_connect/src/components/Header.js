import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import LogoSVG from '../assets/Logo.svg';
import { performSearch } from '../API/api';  // Importez la fonction performSearch depuis le fichier api.js
import Profil from './Profil.svg';
import Search from './Search.svg';
import notification from './notification.svg';
import Localisation from './localisation.svg';
import Chat from './chat.svg';
import LogoMobileSVG from '../assets/logomobile.svg';  

function Header() {
  const [citySelected, setCitySelected] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [isLocationInputActive, setIsLocationInputActive] = useState(false);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

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
    handleSearch(); // Appelez la fonction de recherche ici
  };
  

  const handleSearch = async () => {
    try {
      const region = selectedCity?.value || searchQuery2; // Utilisez la ville sélectionnée ou la recherche par lieu
      const offres = await performSearch(searchQuery1, region);
      // Faites quelque chose avec les données de la recherche, par exemple, les enregistrer dans un état local.
      console.log(offres);
    } catch (error) {
      console.error('Erreur lors de la recherche d\'offres d\'emploi :', error.message);
    }
  };

  const cityOptions = [
    { value: 'paris', label: 'Paris' },
    { value: 'lyon', label: 'Lyon' },
    { value: 'nice', label: 'Nice' },
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <header className="bg-white p-4 md:p-2 rounded-md flex flex-col md:flex-row items-center">
      <div className="w-full flex md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="mr-4">
            <img
              src={isMobile ? LogoMobileSVG : LogoSVG}
              alt="Logo"
              className={`w-24 h-16 md:w-${isDesktop ? '26' : '24'} md:h-${isDesktop ? '26' : '16'} rounded-md`}
            />
          </div>
        </div>
        <div className={`bg-blue-dark rounded-md p-2.5 w-full md:w-11/12 md:flex md:flex-row items-center justify-between`}>
          <div className="flex items-center space-x-2 w-full md:space-x-2">
            <div className="relative w-full transition-width duration-300">
            <span
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-8 transition-width duration-500`}
              onClick={handleCitySelect}
              style={{ width: citySelected ? '77%' : '4rem' }}
            >
              {isMobile && (
                <img
                  src={Localisation}
                  alt="Localisation"
                  className={`w-9 h-6 text-blue-800 ${citySelected ? 'hidden' : ''}`}
                />
              )}
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
                placeholder={isMobile ? "\u00A0\u00A0\u00A0\u00A0\u00A0Rechercher..." : "Rechercher..."}
                className={`w-full p-2 pr-6 pl-${isMobile ? '8' : '2'}  border border-gray-300 bg-white focus:outline-none placeholder-pr-2`}
                value={searchQuery1}
                onChange={(e) => setSearchQuery1(e.target.value)}
              />
                              {isMobile && (
                            
              <button
                className="bg-blue-dark text-white rounded-md p-2 pl-4 pr-4 flex items-center"
                onClick={handleSearch}
              >
                  <FontAwesomeIcon icon={faSearch} />
                  </button>
                )}
                {isMobile || (
                  <div className="relative w-full">
                  <button
  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-dark text-white p-2 pl-2 pr-3 flex text-sm items-center z-20 rounded"
  onClick={handleSearchButtonClick}
  style={{ fontSize: '0.7rem' }}
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
      className={`w-full p-3 pr-6  border border-gray-300 bg-white  focus:outline-none`}
      value={searchQuery2}
      onChange={(e) => setSearchQuery2(e.target.value)}
      onClick={handleLocationInputClick}
      ref={locationInputRef}
    />
    <div className="absolute left-28 top-1/2 transform -translate-y-1/2 text-gray-400 ">
      <img src={Localisation} alt="Localisation" className="w-5 h-6" />
    </div>
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
