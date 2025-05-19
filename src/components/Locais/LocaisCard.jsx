import React from 'react'
import { IoLocationSharp } from 'react-icons/io5';

const LocaisCard = ({img,

}) => {
  return (
    <div className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer">
      <div >
        <img src={img} alt="" 
        className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"/>
      </div>
    </div>
  );
};

export default LocaisCard;