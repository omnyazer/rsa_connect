import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function TitreOffre({ onTitleChange }) {
  const [title, setTitle] = useState('');

  const isTablet = window.innerWidth <= 1024;
  const isMobile = window.innerWidth <= 768;

  const dropShadowStyle = {
    filter: 'drop-shadow(0px 0px 8px rgba(200, 200, 200, 0.8))',
  };

  const maxTitleLength = 59; // Définir la limite de texte ici
  const minRows = 0; // Ajuster la taille initiale ici

  return (
    <div
      className={`bg-${title.length > 10 ? 'blue-dark' : '[#000091]'} 
      shadow-md my-4 text-center flex 
      ${isMobile ? ' mx-auto items-center rounded-md text-lg' : (isTablet ? ' mx-auto items-center max-w-[540px] rounded-md h-[54px] text-xl' : 'text-base')}
      justify-center text-${isMobile || isTablet ? 'white' : 'white'}
      ${(!isTablet && !isMobile) ? 'items-center ' : ''} 
      max-w-[280px] ${!isMobile ? 'h-auto' : 'h-auto'} 
      ${isMobile || isTablet ? '' : 'shadow-[#000091]'} 
      ${isMobile ? 'max-w-[270px] mx-auto' : ''}`}
      style={dropShadowStyle}
    >
      <div className="flex flex-col h-full items-center w-full justify-center p-2">
        <TextareaAutosize
          placeholder="Titre de l'offre"
          value={title}
          onChange={(event) => {
            const newTitle = event.target.value;
            if (newTitle.length <= maxTitleLength) {
              setTitle(newTitle);
              onTitleChange(newTitle);
            }
          }}
          className="outline-none bg-transparent border-none text-white w-full text-center initial-center resize-none"
          maxLength={maxTitleLength}
          minRows={minRows}
        />
      </div>
    </div>
  );
}

export default TitreOffre;
