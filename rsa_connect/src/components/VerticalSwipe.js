
import React, { useState } from 'react';
import Card from './Card';
import NewModal from './modal';

function VerticalSwipe({ data, updateDescription, updateTitle, updateName, selectOffre, isDesktopView }) {
  const [startY, setStartY] = useState(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTabletModal, setShowTabletModal] = useState(false);
  const [tabletModalData, setTabletModalData] = useState(null);

  const handleSwipeStart = (event) => {
    setStartY(event.clientY);
    setIsSwiping(true);
  };

  const handleOpenTabletModal = (offre) => {
    if (offre) {
      selectOffre(offre.id);
      setTabletModalData(offre);
      setShowTabletModal(true);
    }
  };

  const handleSwipeMove = (event) => {
    if (!isSwiping) return;

    const deltaY = event.clientY - startY;
    const direction = deltaY > 0 ? 'down' : 'up';
    const distance = Math.abs(deltaY);
    const dampingFactor = 0.01;
    const minDistanceThreshold = 5;

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
    <div>
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
                onOpenTabletModal={() => handleOpenTabletModal(item)}  
                isDesktopView={isDesktopView}
              />
            </div>
          ))}
        </div>
      </div>

      {showTabletModal && (
      <NewModal
        isOpen={showTabletModal}
        offre={tabletModalData}
        onClose={() => setShowTabletModal(false)}
      />
    )}
    </div>
  );
}

export default VerticalSwipe;
