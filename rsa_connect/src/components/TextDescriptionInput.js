import React, { useState, useEffect } from 'react';

function TextDescriptionInput({ description, onDescriptionChange, placeholder, maxHeight }) {
  const [text, setText] = useState(description);
  const [isFocused, setIsFocused] = useState(false);

 const handleInputChange = (e) => {
  const newText = e.target.value;

  if (onDescriptionChange) {
    onDescriptionChange(newText);
  }
  

  if (e.target) {
    e.target.style.height = e.target.scrollHeight + 'px';
    e.target.style.overflow = 'hidden';
  }

  setText(newText);
};


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isTablet = window.innerWidth <= 1024; // Define isTablet here

  useEffect(() => {
    const textarea = document.querySelector('.resizable-textarea');
    if (textarea && isTablet) {
      textarea.style.fontSize = '18px'; // Adjust font size for tablet
    }
  }, [isTablet]);

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
      <textarea
        className={`w-full resize-none h-8 max-h-[263px] rounded-md resizable-textarea ${isFocused ? 'focus:border-none focus:outline-none' : ''}`}
        value={text}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          textAlign: 'left', 
          backgroundColor: 'transparent',
          width: '100%',
          border: '1px solid transparent', 
       
        }}
      />
    </div>
  );
}

export default TextDescriptionInput;