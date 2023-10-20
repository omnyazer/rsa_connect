import React from 'react';
import TextDescriptionInput from './TextDescriptionInput';

function TitreOffre({ onTitleChange }) {
  return (
    <div className="bg-white rounded-md shadow-md my-4 text-center shadow-[#000091] ">
      <TextDescriptionInput
        title={null}
        onTitleChange={onTitleChange}
        placeholder="Titre de l'offre"
      />
    </div>
  );
}

export default TitreOffre;
