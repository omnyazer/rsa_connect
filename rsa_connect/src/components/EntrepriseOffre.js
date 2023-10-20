// EntrepriseOffre.js
import React from 'react';
import TextDescriptionInput from './TextDescriptionInput';

function EntrepriseOffre({ onNameChange }) {
  return (
    <div className="bg-white rounded-md shadow-md my-4 text-center shadow-[#780101] max-h-[263px]">
      <TextDescriptionInput
        description={null}
        onDescriptionChange={onNameChange}
        placeholder="Nom entreprise"

      />
    </div>
  );
}

export default EntrepriseOffre;
