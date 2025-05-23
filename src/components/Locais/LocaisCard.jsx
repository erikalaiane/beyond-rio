import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const LocaisCard = ({ img, title, type, price, location, description, handleOrderPopup, }) => {
  return (
    <div className="rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden bg-white" onClick={handleOrderPopup}>
      <img
        src={img}
        alt={title}
        className="h-[300px] w-full object-cover transition duration-700 hover:scale-110"
      />

      <div className="space-y-2 p-4">
        <h1 className="text-xl font-semibold text-gray-800 line-clamp-1">{title}</h1>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <IoLocationSharp className="text-amber-500" />
          <span>{location}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between border-t pt-3 mt-4">
          <p className="text-sm text-gray-500">{type}</p>
          <p className="text-lg font-bold text-amber-600">R${price}</p>
        </div>
      </div>
    </div>
  );
};

export default LocaisCard;
