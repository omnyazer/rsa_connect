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

    setText(newText);
  };

  return (
    <div>
      <textarea
        className="w-full resize-none h-8 max-h-[263px] border border-transparent rounded-md p-2"
        value={text}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{textAlign: 'center'}}
      />
    </div>
  );
}

export default TextDescriptionInput;
