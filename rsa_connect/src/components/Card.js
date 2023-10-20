import React, { useState, useRef } from 'react';
import FavoriteIcon from './FavoriteIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import TitreOffre from './TitreOffre';
import EntrepriseOffre from './EntrepriseOffre';
import NewModal from './modal'; // Assurez-vous d'utiliser le bon chemin d'importation
import DescriptionOffre from './DescriptionOffre';

function Card({ offre, onDescriptionChange, onTitleChange, onNameChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cardStyle = {
    maxHeight: 'auto',
  };

  const handleDescriptionChange = (newDescription) => {
    onDescriptionChange(newDescription);
  };

  const handleTitleChange = (newTitle) => {
    onTitleChange(newTitle);
  };

  const handleNameChange = (newName) => {
    onNameChange(newName);
  };

  return (
    <div className="relative card p-4 border border-gray-300 rounded mb-6 shadow-lg max-w-xs mx-auto" style={cardStyle}>
      <img
        src={FavoriteIcon}
        alt="Favorite Icon"
        className="absolute top-2 right-2 w-6 h-6 text-red-500"
      />
      <FontAwesomeIcon
        icon={faShare}
        className="absolute bottom-1 right-2 w-6 h-6 text-gray-500 cursor-pointer"
      />
      <div className="mt-6">
        <TitreOffre titre={offre.titre} onTitleChange={handleTitleChange} />
      </div>
      <DescriptionOffre description={offre.description} onDescriptionChange={handleDescriptionChange} onClick={openModal} />
      <EntrepriseOffre name={offre.name} onNameChange={handleNameChange} />
      <NewModal isOpen={isModalOpen} offre={offre} onClose={closeModal} />
    </div>
  );
}

export default Card;
