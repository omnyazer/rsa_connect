import React, { useState } from 'react';

function TextDescriptionInput({ description, onDescriptionChange, title, onTitleChange, name, onNameChange, placeholder }) {
  const [text, setText] = useState(description || title || name);

  const handleInputChange = (e) => {
    const newText = e.target.value;

    if (onDescriptionChange) {
      onDescriptionChange(newText);
    }
    if (onTitleChange) {
      onTitleChange(newText);
    }
    if (onNameChange) {
      onNameChange(newText);
    }

    e.target.style.height = e.target.scrollHeight + 'px';
    e.target.style.overflow = 'hidden';

    setText(newText);
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <textarea
        className="w-full resize-none h-8 max-h-[263px] border-transparent rounded-md "
        value={text}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{textAlign: 'center'}}
      />
    </div>
  );
}

export default TextDescriptionInput;
