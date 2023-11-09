import React from 'react';

function SuccessPopup({ message, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white rounded p-4 shadow-md">
        <p>{message}</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Fermer</button>
      </div>
    </div>
  );
}

export default SuccessPopup;
