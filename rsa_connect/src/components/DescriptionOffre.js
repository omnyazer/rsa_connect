// DescriptionOffre.js
import React from 'react';
import TextDescriptionInput from './TextDescriptionInput';

function DescriptionOffre({ onDescriptionChange }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md my-4 text-center min-h-[263px]">
      <TextDescriptionInput
        name={null}
        onDescriptionChange={onDescriptionChange}
        placeholder="Description de l'offre"

      />
    </div>
  );
}

export default DescriptionOffre;
