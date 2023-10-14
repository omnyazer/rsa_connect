import React from 'react';

function EntrepriseOffre({ entreprise }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md my-4 text-center shadow-[#780101]">
      <p className="text-black font-semibold">{entreprise}</p>
    </div>
  );
}

export default EntrepriseOffre;
