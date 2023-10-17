import React, { useEffect, useRef, useState } from 'react';

function Modal({ isOpen, offre, onClose }) {
  const modalRef = useRef(null);
  const [modalHeight, setModalHeight] = useState(400);

  useEffect(() => {
    if (isOpen) {
      if (modalRef.current) {
        const descriptionHeight = modalRef.current.querySelector('.description').scrollHeight;
        const newHeight = descriptionHeight + 200;
        setModalHeight(newHeight < 400 ? 400 : newHeight);
      }
    }
  }, [isOpen, offre.description]);

  const handleApplyClick = () => {
  };

  const closeModal = () => {
    onClose(); // Appelez la fonction onClose pour fermer la modal
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal(); // Fermer la modal si le clic est en dehors de la modal
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed inset-0 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}
        style={{ transition: 'opacity 0.3s' }}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-50" onClick={closeModal}></div>
        <div
          ref={modalRef}
          style={{ height: modalHeight + 'px' }}
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md rounded-lg max-w-4xl flex flex-col justify-between transition-transform ${
            isOpen ? 'scale-100' : 'scale-0'
          }`}
         
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#000091' }}>
            {offre.titre}
          </h2>
          <div className="description text-lg mb-6 overflow-y-auto flex-grow">{offre.description}</div>
          <button
            onClick={handleApplyClick}
            className="bg-blue-dark text-white px-6 py-3 rounded-md self-center"
            style={{ backgroundColor: '#000091' }}
          >
            Postuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
