import React from 'react';

const GroupCard = ({ name, image }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <img src={image} alt={name} className="w-8 h-8 rounded-full" />
        <span>{name}</span>
      </div>
      <button className="bg-gray-200 px-3 py-1 rounded-full text-sm">Follow</button>
    </div>
  );
};

export default GroupCard;
