import React from 'react';
import TravelImg from "../../assets/travel.png";
import { MdCarRental, MdOutlineLocalHotel } from 'react-icons/md';
import { IoIosWifi } from 'react-icons/io';
import { IoFastFoodSharp } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className="min-h[450px] bg-gray-100">
        <div className="min-h-[450px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    {/*image section*/}
                    <div data>
                        <img
                        data-aos="flip-up"
                        src={TravelImg}
                        alt=""
                        className="max-w-[450px] h-[450px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover transition-transform duration-1000 ease-out hover:scale-105 hover:-translate-y-2"
                        />
                    </div>
                    {/*text content section*/}
                    <div className="px-4 sm:px-0">
                        <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">Explore todos os cantos do Rio conosco
                        </h1>
                        <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni suscipit architecto saepe? Corrupti quae voluptatibus, laboriosam vitae {" "}</p>
                        
                    <div data-aos="zoom-in" className="pt-3 grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                < MdCarRental className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-200 transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"/>
                                <p>Transporte</p>
                            </div>
                            <div className="flex items-center gap-4">
                                < MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-pink-200 transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"/>
                                <p>Hotel</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                < IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-200 transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"/>
                                <p>Wi-Fi</p>
                            </div>
                            <div className="flex items-center gap-4">
                                < IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-200 transition-transform duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"/>
                                <p>Alimentação</p>
                            </div>
                        </div>
                    </div>

                
  
                    </div>
                </div>
            </div>
        </div>  
    </div>
  );
};

export default Banner;