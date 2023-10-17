import React, { useState } from 'react';
import FavoriteIcon from './FavoriteIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import TitreOffre from './TitreOffre';
import DescriptionOffre from './DescriptionOffre';
import EntrepriseOffre from './EntrepriseOffre';
import Modal from './modal'; // Assurez-vous d'importer correctement le composant Modal

function Card({ offre }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative card p-4 border border-gray-300 rounded mb-6 shadow-lg max-w-xs mx-auto h-[41rem]" onClick={openModal}>
      <img
        src={FavoriteIcon}
        alt="Favorite Icon"
        className="absolute top-2 right-2 w-6 h-6 text-red-500"
      />
      <FontAwesomeIcon
        icon={faShare}
        className="absolute bottom-2 right-2 w-6 h-6 text-gray-500 cursor-pointer"
      />
      <div className="mt-6">
        <TitreOffre titre={offre.titre} />
      </div>
      <DescriptionOffre description={offre.description} />
      <EntrepriseOffre entreprise={offre.entreprise} />
      <Modal isOpen={isModalOpen} onClose={closeModal} offre={offre} />
    </div>
  );
}

export default Card;