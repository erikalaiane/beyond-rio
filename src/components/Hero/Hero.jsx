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
    <section className="relative h-screen w-full overflow-hidden">

      {/* Overlay escuro para dar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Conteúdo da hero */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 max-w-5xl mx-auto text-center">
        <p 
          data-aos="fade-up" 
          className="text-amber-400 text-lg tracking-widest uppercase mb-2 font-semibold"
        >
          Nossos Pacotes
        </p>
        <h1 
          data-aos="fade-up" 
          data-aos-delay="300" 
          className="text-white text-5xl sm:text-6xl font-extrabold leading-tight mb-8"
        >
          Pesquise seu Destino
        </h1>

        <form
          data-aos="fade-up"
          data-aos-delay="600"
          className="w-full sm:w-auto bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg max-w-3xl"
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
            className="mt-8 w-full sm:w-auto bg-amber-500 hover:bg-blue-950 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Pesquise Agora
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
