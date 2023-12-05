import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import TitreOffre from './TitreOffre';
import EntrepriseOffre from './EntrepriseOffre';
import DescriptionOffre from './DescriptionOffre';

function Card({
  offre,
  onDescriptionChange,
  onTitleChange,
  onNameChange,
  onOpenDesktopModal,
  isDesktopView,
  onOpenTabletModal, 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  let NewModal;

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    NewModal = require('./modal').default;
  }


const handleOpenDesktopModal = () => {
  if (isDesktopView) {
    onOpenDesktopModal(offre);
  } else {
    onOpenTabletModal(offre);
  }
};

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const handleDescriptionChange = (newDescription) => {
    onDescriptionChange(newDescription, offre.id);
    console.log(offre.id, newDescription)
  };

  const handleTitleChange = (newTitle) => {
    onTitleChange(newTitle);
  };

  const handleNameChange = (newName) => {
    onNameChange(newName);
  };

  const handleShareClick = () => {
    copyToClipboard();
  };

  
  const copyToClipboard = async () => {
    try {
      const textToCopy = offre.lienDeLoffre;
      await navigator.clipboard.writeText(textToCopy);

      setShowCopyMessage(true);

      setTimeout(() => {
        setShowCopyMessage(false);
      }, 1000);

      setTimeout(() => {
        setShowCopyMessage(false);
      }, 2000);
    } catch (error) {
      console.error('Échec de la copie du texte : ', error);
    }
  };

  const isTablet = window.innerWidth <= 1024; // Define isTablet here
  
  const cardStyle = {
    maxHeight: 'auto',
    minHeight: isTablet ? '50vh' : isDesktopView ? '20vh' : undefined,
    width: isTablet ? '80%' : '80%',
    margin: '0 0 70px 0',
    maxWidth: '768px',
    borderRadius: '0px', 
    boxShadow: '2px 16px 16px rgba(0, 0, 0, 0.1)',
    position: isModalOpen ? 'fixed' : 'relative', // Fix position when modal is open
    zIndex: isModalOpen ? 1000 : 0, // Set highe
  };

  return (
    <div
    className={`min-h-[70vh] relative card border border-gray-300 rounded mb-6 shadow-sm mx-auto mb-28 ${isModalOpen ? 'modal-open' : ''}`}
    style={cardStyle}
  >
       {/* <img
        src={FavoriteIcon}
        alt="Favorite Icon"
        className="absolute top-2 right-2 w-6 h-6 text-red-500"
      /> */}
       <FontAwesomeIcon
      icon={faShare}
      className={`absolute bottom-2 right-2 w-6 h-6 text-gray-500 cursor-pointer ${
        showCopyMessage ? 'text-green-500' : ''
      }`}
      onClick={handleShareClick}
      style={{ zIndex: 1 }} // Ensure FontAwesomeIcon is above the message
    />
    <div className="mt-0">
      <TitreOffre titre={offre.titre} onTitleChange={handleTitleChange} />
    </div>
    <DescriptionOffre
      description={offre.description}
      onDescriptionChange={handleDescriptionChange}
      onClick={handleOpenDesktopModal}
    />
    <EntrepriseOffre name={offre.name} onNameChange={handleNameChange} />
    {NewModal && <NewModal isOpen={isModalOpen} offre={offre} onClose={closeModal} />}

    {showCopyMessage && (
      <div className="absolute top-1 right-2 bg-orange-pale text-white px-2 py-1 rounded shadow">
        Lien copié!
      </div>
    )}
  </div>
);
}

export default Card;
