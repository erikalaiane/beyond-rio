import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-2xl border-2 border-amber-400 w-[90%] max-w-md relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg sm:text-xl font-semibold text-blue-950 border-l-8 border-amber-400 pl-3">
                Vamos planejar sua próxima viagem?
              </h1>
              <IoCloseOutline
                className="text-3xl text-blue-950 cursor-pointer hover:text-red-500 transition"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Body */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
              <input
                type="text"
                placeholder="Destino"
                className="w-full rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            {/* Botão */}
            <div className="flex justify-center mt-6">
              <button className="bg-blue-950 text-white py-2 px-6 rounded-full font-medium transition hover:bg-amber-400 hover:text-blue-950 hover:scale-105">
                Agendar Agora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
