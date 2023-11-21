import React from 'react';
import TextDescriptionInput from './TextDescriptionInput';

function DescriptionOffre({ onDescriptionChange, onClick, offreId }) {
  return (
    <div className="bg-white p-10 rounded-md shadow-md my-4 text-center min-h-[50vh] md:min-h-[20vh]" onClick={onClick}>
      <TextDescriptionInput
        name={null}
        onDescriptionChange={(newDescription) => onDescriptionChange(offreId, newDescription)}
        placeholder="Description de l'offre"
      />
    </div>
  );
}

export default DescriptionOffre;
