import React, { useEffect, useRef, useCallback } from 'react';

function DesktopModal({ isOpen, offre, onClose }) {
  const modalRef = useRef(null);

  const handleOverlayClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOverlayClick);
    } else {
      document.removeEventListener('mousedown', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [isOpen, handleOverlayClick]);

  const modalClass = isOpen ? 'fixed inset-0 z-50 opacity-100 ' : 'fixed inset-0 z-50 opacity-0 invisible';

  return (
    <div>
      <div
        className={modalClass}
        style={{ transition: 'opacity 0.3s' }}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-50" onClick={onClose}></div>
        <div
          ref={modalRef}
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-md rounded-lg max-w-screen-sm flex flex-col justify-between transition-transform sm:w-full w-full h-full `}
          style={{
            maxHeight: '95vh',
            overflowY: 'auto',
          }}
        >
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#000091' }}> 
            {offre.titre}
          </h2>
          <div className="description text-lg mb-6">
            {offre.description}
          </div>
          <div className="flex justify-between">
    
          <button
            onClick={onClose}
            className="bg-blue-dark text-white mt-2 px-6 py-3 rounded-md self-center"
          >
            Postuler
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-black mt-2 px-6 py-3 rounded-md self-center"
          >
            ouvrir
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopModal;
