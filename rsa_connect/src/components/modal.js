import React, { useEffect, useRef } from 'react';

function Modal({ isOpen, offre, onClose }) {
  const modalRef = useRef(null);

  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);

  const handlePostulerClick = () => {
    // Vous pouvez gérer l'action de "Postuler" ici
    // Par exemple, rediriger l'utilisateur vers une page de candidature
  };

  return (
    <div>
      <div
        className={`fixed inset-0 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 invisible'}`}
        style={{ transition: 'opacity 0.3s' }}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-50" onClick={closeModal}></div>
        <div
          ref={modalRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md rounded-lg max-w-screen-sm flex flex-col justify-between transition-transform"
          style={{
            maxHeight: '80vh', 
            overflowY: 'auto', 
          }}
        >
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#000091' }}>
            {offre.titre}
          </h2>
          <div className="description text-lg mb-6">
            {offre.description}
          </div>
          <button
            onClick={handlePostulerClick}
            className="bg-blue-dark text-white px-6 py-3 rounded-md self-center"
            style={{ backgroundColor: '#000091' }}
          >
            Postuler
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-200 text-black mt-2 px-6 py-3 rounded-md self-center"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
