import React, { useState } from 'react';
import Card from './Card';

function VerticalSwipe({ data, updateDescription, updateTitle, updateName, selectOffre, isDesktopView }) {
  const [startY, setStartY] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeStart = (event) => {
    setStartY(event.clientY);
    setIsSwiping(true);
  };

  const handleSwipeMove = (event) => {
    if (!isSwiping) return;
  
    const deltaY = event.clientY - startY;
    const direction = deltaY > 0 ? 'down' : 'up';
    const distance = Math.abs(deltaY);
    const dampingFactor = 0.02; 
    const minDistanceThreshold = 5; // Adjust this threshold according to your preference
  
    if (distance < minDistanceThreshold) return;
  
    const nextIndex =
      direction === 'up'
        ? currentIndex + Math.floor(distance * dampingFactor)
        : currentIndex - Math.floor(distance * dampingFactor);
  
    setCurrentIndex(Math.max(0, Math.min(nextIndex, data.length - 1)));
    setStartY(event.clientY);
  };
  
  
  

  const handleSwipeEnd = () => {
    setIsSwiping(false);
  };

  return (
    <div
      className="relative h-screen overflow-hidden mt-8"
      onMouseMove={(event) => {
        handleSwipeStart(event);
        handleSwipeMove(event);
      }}
      
      onMouseUp={handleSwipeEnd}
      onMouseLeave={handleSwipeEnd}
    >
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
    </div>
  );
}

export default VerticalSwipe;
