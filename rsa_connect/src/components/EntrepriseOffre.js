import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function EntrepriseOffre({ onNameChange }) {
  const isTablet = window.innerWidth <= 1024;
  const isMobile = window.innerWidth <= 768;
  const [entrepriseName, setEntrepriseName] = useState('');

  const handleNameChange = (event) => {
    let newName = event.target.value;

    // Limiter la longueur du nom de l'entreprise à 30 caractères
    if (newName.length > 30) {
      newName = newName.slice(0, 30);
    }

    setEntrepriseName(newName);
    onNameChange(newName);
  };

  const textareaStyle = {
    padding: isMobile || isTablet ? '12px' : '',
  };

  return (
    <div className={`bg-${isMobile || isTablet ? '[#000091]' : 'white'} mx-auto flex flex-col items-center justify-center my-6 text-center
     max-w-[200px] ${isMobile || isTablet ? 'rounded-md ' : ''} ${isMobile || isTablet ? 'h-[50px]' : 'h-[60px] '} ${isMobile || isTablet ? 'text-white' : 'text-gray-500'}`}>
      <div className="flex items-center ">
        <TextareaAutosize
          value={entrepriseName}
          onChange={handleNameChange}
          placeholder="Nom de l'entreprise"
          className={`outline-none bg-transparent border-none w-full resize-none max-h-[50px] overflow-hidden text-center ${isMobile || isTablet ? 'text-white' : 'text-gray-500'}`}
          style={textareaStyle}
        />
      </div>
    </div>
  );
}

export default EntrepriseOffre;
