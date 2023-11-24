import React from 'react';
import TextDescriptionInput from './TextDescriptionInput';

function TitreOffre({ onTitleChange }) {
  const isTablet = window.innerWidth <= 1024; // Define isTablet here
  const isMobile = window.innerWidth <= 768; // Define isMobile here

  return (
    <div className={`bg-white rounded-md shadow-md my-4 text-center ${isTablet && !isMobile ? 'h-[60px]' : 'h-[30px]'} shadow-[#000091]`}>
      <TextDescriptionInput
        title={null}
        onTitleChange={onTitleChange}
        placeholder="Titre de l'offre"
        className="text-[#000091]" 
      />
    </div>
  );
}

export default TitreOffre;
