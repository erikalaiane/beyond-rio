import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [priceValue, setPriceValue] = useState(40);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-y-visible bg-cover bg-center">


      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Conteúdo central */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col justify-center min-h-screen sm:py-0">

        <p 
          data-aos="fade-up" 
          className="text-amber-400 text-sm sm:text-lg tracking-widest uppercase mb-2 font-semibold text-center"
        >
          Nossos Pacotes
        </p>

        <h1 
          data-aos="fade-up" 
          data-aos-delay="300" 
          className="text-white text-4xl sm:text-6xl font-extrabold leading-tight mb-6 text-center"
        >
          Pesquise seu Destino
        </h1>

        <form
  data-aos="fade-up"
  data-aos-delay="600"
  className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto text-center sm:text-center"
  onSubmit={(e) => e.preventDefault()}
>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="destination" className="block text-gray-700 font-medium mb-1">
                Destino
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Cristo Redentor"
                className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
                Data
              </label>
              <input
                type="date"
                id="date"
                className="w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
                <div className="flex justify-between items-center mb-1">
                  <span>Preço Máximo</span>
                  <span className="font-semibold text-amber-600">${priceValue}</span>
                </div>
              </label>
              <input
                type="range"
                id="price"
                min="0"
                max="300"
                step="10"
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
                className="w-full h-2 rounded-full accent-amber-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full sm:w-auto sm:mx-auto bg-amber-500 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Pesquise Agora
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
