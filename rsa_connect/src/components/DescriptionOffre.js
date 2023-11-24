import React from 'react';
import TextDescriptionInput from './TextDescriptionInput';

function DescriptionOffre({ onDescriptionChange, onClick, offreId }) {
  const isTablet = window.innerWidth <= 1024; 

  return (
    <div className={`bg-white p-10 rounded-md shadow-md my-4 text-center ${isTablet ? 'min-h-[50vh]' : 'min-h-[20vh] md:min-h-[20vh]'}`} onClick={onClick}>
      <TextDescriptionInput
        description={null}
        onDescriptionChange={onDescriptionChange}
        placeholder="Description de l'offre"
      />
    </div>
  );
}

export default DescriptionOffre;
