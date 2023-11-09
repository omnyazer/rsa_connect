// VerticalSwipe.js

import React, { useState } from 'react';
import Card from './Card';

function VerticalSwipe({ data, updateDescription, updateTitle, updateName, selectOffre, isDesktopView }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    const nextIndex = direction === 'up' ? currentIndex + 1 : currentIndex - 1;
    setCurrentIndex(Math.max(0, Math.min(nextIndex, data.length - 1)));
  };

  return (
    <div className="relative h-screen overflow-hidden mt-8">
      {/* Ajoutez la classe "mt-8" pour une marge en haut */}
      <div className="flex flex-col h-full transition-transform duration-300 ease-in-out transform" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-center h-screen mb-">
            <Card
              offre={item}
              onDescriptionChange={(newDescription) => updateDescription(item.id, newDescription)}
              onTitleChange={(newTitle) => updateTitle(item.id, newTitle)}
              onNameChange={(newName) => updateName(item.id, newName)}
              onOpenDesktopModal={() => selectOffre(index)}
              isDesktopView={isDesktopView}
            />
          </div>
        ))}
      </div>

      {/* Add buttons for vertical swipe */}
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer"
        onClick={() => handleSwipe('up')}
        disabled={currentIndex === data.length - 1}
      >
        Swipe Up
      </button>
      <button
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer"
        onClick={() => handleSwipe('down')}
        disabled={currentIndex === 0}
      >
        Swipe Down
      </button>
    </div>
  );
}

export default VerticalSwipe;
