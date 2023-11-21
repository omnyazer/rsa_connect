import React from 'react';

const DesktopModal = ({ offre }) => {
  const modalStyle = {
    borderRadius: '20px', 
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', 
  };

  const titleStyle = {
    borderColor: '#000091',
    color: '#000091',
    boxShadow: '0 8px 16px rgba(0, 0, 145, 0.4)',
    marginBottom: '8px',
  };

  const descriptionStyle = {
    borderColor: '#000091',
    color: '#000000',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    height: '450px',
    marginTop: '36px',
  };

  const applyButtonStyle = {
    backgroundColor: '#000091',
    color: '#ffffff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '25px',
    cursor: 'pointer',
    marginTop: '16px',
  };

  const handleApplyClick = () => {
    console.log('Postuler à cette offre');
  };

  return (
    <div className="fixed top-0 right-0 w-2/5 h-5/6 mt-32 mr-8 p-8 overflow-auto border text-center rounded-md shadow-2xl mb-8">
    <div className="-ml-8 border-blue-900"></div> 
    <div style={modalStyle}>
        </div>     
      <div style={titleStyle} className="bg-white p-4 rounded-md mx-auto w-5/6">
        <h2 className="text-xl mt-0">{offre.titre}</h2>
      </div>
      <div style={descriptionStyle} className="bg-white p-4 rounded-md mx-auto w-5/6">
        <p className="text-lg mt-0">{offre.description}</p>
      </div>
      <button style={applyButtonStyle} onClick={handleApplyClick}>
        Postuler à cette offre
      </button>
    </div>
  );
};

export default DesktopModal;
