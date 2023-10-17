import React from 'react';

function TextDescriptionInput({ description, onDescriptionChange }) {
  const handleDescriptionChange = (e) => {
    onDescriptionChange(e.target.value);
  };

  return (
    <div>
      <textarea
        style={{ width: '100%', height: '100%' }}
        value={description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
}

export default TextDescriptionInput;
