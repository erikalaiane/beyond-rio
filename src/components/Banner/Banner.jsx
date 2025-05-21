import React from 'react';
import TravelImg from "../../assets/travel.png";
import { MdCarRental, MdOutlineLocalHotel } from 'react-icons/md';
import { IoIosWifi } from 'react-icons/io';
import { IoFastFoodSharp } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className="bg-blue-950/5 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Seção de Imagem */}
          <div>
            <img
              data-aos="flip-up"
              src={TravelImg}
              alt="Imagem de Viagem"
              className="max-w-[450px] h-[450px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.5)] object-cover rounded-xl transition-transform duration-1000 ease-out hover:scale-105 hover:-translate-y-2"
            />
          </div>

          {/* Seção de Texto e Ícones */}
          <div className="px-4 sm:px-0">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold text-blue-950 mb-4"
            >
              Explore todos os cantos do Rio conosco
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-sm leading-7 tracking-wide mb-6"
            >
              A viagem dos seus sonhos começa aqui! Transporte confortável, hospedagem incrível e experiências inesquecíveis esperando por você.
            </p>

            {/* Ícones de Benefícios */}
            <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
                <MdCarRental className="text-3xl text-blue-800" />
                <p className="text-sm font-medium text-gray-700">Transporte</p>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
                <MdOutlineLocalHotel className="text-3xl text-pink-600" />
                <p className="text-sm font-medium text-gray-700">Hotel</p>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
                <IoIosWifi className="text-3xl text-green-600" />
                <p className="text-sm font-medium text-gray-700">Wi-Fi</p>
              </div>

              <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
                <IoFastFoodSharp className="text-3xl text-yellow-600" />
                <p className="text-sm font-medium text-gray-700">Alimentação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
