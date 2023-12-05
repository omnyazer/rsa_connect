import React, { useEffect } from 'react';

const DesktopModal = ({ offre }) => {
  const modalStyle = {
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  };

  const titleStyle = {
    borderColor: '#ddd',
    color: '#000091',
    borderWidth: '1px',
    borderStyle: 'solid',
    marginBottom: '8px',
    padding: '8px',
    wordWrap: 'break-word', // Ajoutez cette ligne pour le retour à la ligne
  };
  

  const descriptionStyle = {
    borderColor: '#000091',
    color: '#000000',
    boxShadow: '0 0px 7px rgba(0, 0, 0, 0.2)',
    height: '480px',
    marginTop: '36px',
    overflowY: 'auto',
    whiteSpace: 'pre-wrap',  // ou 'pre-line' selon votre préférence
    textAlign: 'left',
    wordWrap: 'break-word', // Ajoutez cette ligne pour le retour à la ligne
  };
  

  const applyButtonStyle = {
    backgroundColor: '#000091',
    color: '#ffffff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '16px',
  };

  useEffect(() => {
    console.log(`offre:${JSON.stringify(offre)}`);
  }, [offre]);

  const handleApplyClick = () => {
    console.log('Postuler à cette offre');
  };

  return (
    <div className="fixed top-0 right-0 w-2/5 h-5/6 mt-32 mr-8 p-8 overflow-auto border text-center shadow-2xl mb-8">
      <div className="-ml-8 border-blue-900"></div>
      <div style={modalStyle}></div>
      <div style={titleStyle} className="bg-white p-2.5 mx-auto w-6/6">
        <h2 className="text-xl mt-0">{offre.titre}</h2>
      </div>
      <div style={descriptionStyle} className="bg-white p-4 mx-auto w-5/5">
        <p className="text-lg mt-0">{offre.description}</p>
      </div>
      <button style={applyButtonStyle} onClick={handleApplyClick}>
        Postuler à cette offre
      </button>
    </div>
  );
};

export default DesktopModal;
