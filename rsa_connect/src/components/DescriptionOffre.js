import React from 'react';

function DescriptionOffre({ description }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md my-4 text-center">
      <p className="text-gray-700 mb-2 h-[24rem]">{description}</p>
    </div>
  );
}

export default DescriptionOffre;
